// Origem do visitante (utm_* + fbclid) — repassada pro app em todo link "Testar grátis".
// Também fica no cookie zo_utm em .zapobra.online por 90 dias, pra quem volta depois
// direto no app ainda ser atribuído ao anúncio. Os cookies _fbp/_fbc o próprio pixel
// já grava no domínio raiz, então chegam no app sem precisar repassar.
(function () {
  var APP_HOST = 'app.zapobra.online';
  var CHAVES = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'fbclid'];
  var origem = {};

  var params = new URLSearchParams(window.location.search);
  CHAVES.forEach(function (k) {
    var v = params.get(k);
    if (v) origem[k] = v.slice(0, 500);
  });

  var temUtm = CHAVES.some(function (k) { return k !== 'fbclid' && origem[k]; });
  if (temUtm) {
    var dominio = /(^|\.)zapobra\.online$/.test(location.hostname) ? '; domain=.zapobra.online' : '';
    var seguro = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = 'zo_utm=' + encodeURIComponent(JSON.stringify(origem)) +
      '; max-age=' + (60 * 60 * 24 * 90) + '; path=/; SameSite=Lax' + dominio + seguro;
  } else {
    var par = document.cookie.split('; ').filter(function (c) { return c.indexOf('zo_utm=') === 0; })[0];
    if (par) {
      try { origem = JSON.parse(decodeURIComponent(par.slice(7))) || {}; } catch (_) { origem = {}; }
    }
  }

  if (!Object.keys(origem).length) return;

  // Delegação: pega também os botões da seção de preços, que são criados depois.
  function decorar(e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var url;
    try { url = new URL(a.href); } catch (_) { return; }
    if (url.hostname !== APP_HOST) return;
    CHAVES.forEach(function (k) {
      if (typeof origem[k] === 'string' && origem[k] && !url.searchParams.has(k)) url.searchParams.set(k, origem[k]);
    });
    a.href = url.toString();
  }
  document.addEventListener('click', decorar, true);
  document.addEventListener('auxclick', decorar, true);
})();

// Reveal sutil ao rolar — só uma vez por elemento, respeita prefers-reduced-motion
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var targets = document.querySelectorAll('.problem-card, .feature-card, .testi-card, .step, .stat, .compare-col');
  targets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) { io.observe(el); });
})();

// Seção de preços — valores SEMPRE vindos do endpoint, nunca escritos no código.
// Regra: preço quebrado nunca aparece. Se a resposta falhar ou vier incompleta, a seção some.
(function () {
  var ENDPOINT = 'https://pydxtjvtnaddutevwtjw.supabase.co/functions/v1/planos-publicos';
  var TRIAL_URL = 'https://app.zapobra.online/?cadastro=1';
  var RECOMENDADO = 'profissional';
  var TIMEOUT_MS = 8000;
  var CICLOS = ['MONTHLY', 'QUARTERLY', 'YEARLY'];
  var PERIODO = { QUARTERLY: 'por trimestre', YEARLY: 'por ano' };
  var COBRANCA = { QUARTERLY: 'cobrado a cada 3 meses', YEARLY: 'cobrado anualmente' };
  var FUNCIONALIDADES = [
    'Lançamento de gastos por WhatsApp',
    'Leitura de nota fiscal por foto',
    'Diário de obra',
    'Dashboard financeiro',
    'Relatório em PDF com sua logo',
    'Avisos de prazo de obra e etapas'
  ];

  var section = document.getElementById('precos');
  if (!section) return;

  function esconder() {
    section.parentNode.removeChild(section);
    document.querySelectorAll('.js-pricing-link').forEach(function (a) { a.style.display = 'none'; });
  }

  function brl(n) {
    return 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function positivo(n) { return typeof n === 'number' && isFinite(n) && n > 0; }
  function naoNegativo(n) { return typeof n === 'number' && isFinite(n) && n >= 0; }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // Valida tudo antes de renderizar qualquer coisa: ou mostra tudo certo, ou não mostra nada.
  function validar(data) {
    if (!data || data.sucesso !== true || !Array.isArray(data.planos) || data.planos.length === 0) return null;
    var planos = data.planos.slice().sort(function (a, b) { return a.ordem - b.ordem; });
    for (var i = 0; i < planos.length; i++) {
      var p = planos[i];
      if (!p || typeof p.nome !== 'string' || !p.nome) return null;
      if (typeof p.obras_texto !== 'string' || typeof p.membros_texto !== 'string') return null;
      if (!Array.isArray(p.ciclos)) return null;
      var porCiclo = {};
      for (var j = 0; j < CICLOS.length; j++) {
        var c = p.ciclos.filter(function (x) { return x && x.ciclo === CICLOS[j]; })[0];
        if (!c || !positivo(c.valor_total) || !positivo(c.valor_mensal_equivalente) || !naoNegativo(c.economia)) return null;
        porCiclo[CICLOS[j]] = c;
      }
      p._ciclos = porCiclo;
    }
    var addons = Array.isArray(data.addons) ? data.addons.filter(function (a) { return a && positivo(a.valor_mensal); }) : [];
    var trial = positivo(data.trial_dias) && Math.floor(data.trial_dias) === data.trial_dias ? data.trial_dias : null;
    return { planos: planos, addons: addons, trial: trial };
  }

  function ctaBlock(texto, extraCls) {
    var wrap = el('div', 'plan-cta' + (extraCls ? ' ' + extraCls : ''));
    var a = el('a', 'btn btn-primary', texto);
    a.href = TRIAL_URL;
    wrap.appendChild(a);
    wrap.appendChild(el('span', 'cta-subnote', 'Sem cartão de crédito · Prorrogável pelo WhatsApp'));
    return wrap;
  }

  function render(d) {
    var ctaTexto = 'Começar teste grátis de ' + (d.trial || 7) + ' dias';
    var toggle = section.querySelector('.cycle-toggle');
    var grid = section.querySelector('.plans-grid');
    var rotulos = {};
    d.planos[0].ciclos.forEach(function (c) { if (typeof c.rotulo === 'string' && c.rotulo) rotulos[c.ciclo] = c.rotulo; });
    var fallbackRotulo = { MONTHLY: 'Mensal', QUARTERLY: 'Trimestral', YEARLY: 'Anual' };

    // Cards
    grid.innerHTML = '';
    var campos = [];
    d.planos.forEach(function (p) {
      var rec = p.nome.toLowerCase() === RECOMENDADO;
      var card = el('div', 'plan-card' + (rec ? ' is-recommended' : ''));
      if (rec) card.appendChild(el('span', 'plan-badge', 'Recomendado'));
      card.appendChild(el('h3', 'plan-name', p.nome));

      var price = el('div', 'plan-price');
      var valor = el('span', 'plan-price-value');
      price.appendChild(valor);
      price.appendChild(el('span', 'plan-price-unit', '/mês'));
      card.appendChild(price);

      var total = el('p', 'plan-total');
      var economia = el('p', 'plan-saving');
      card.appendChild(total);
      card.appendChild(economia);

      var limites = el('ul', 'plan-limits');
      limites.appendChild(el('li', null, p.obras_texto));
      limites.appendChild(el('li', null, p.membros_texto));
      card.appendChild(limites);
      card.appendChild(el('p', 'plan-all-features', 'Todas as funcionalidades incluídas'));

      card.appendChild(ctaBlock(ctaTexto));
      grid.appendChild(card);
      campos.push({ plano: p, valor: valor, total: total, economia: economia });
    });

    function aplicarCiclo(ciclo) {
      campos.forEach(function (f) {
        var c = f.plano._ciclos[ciclo];
        f.valor.textContent = brl(c.valor_mensal_equivalente);
        if (ciclo === 'MONTHLY') {
          f.total.hidden = true;
        } else {
          f.total.textContent = brl(c.valor_total) + ' ' + COBRANCA[ciclo];
          f.total.hidden = false;
        }
        if (c.economia > 0 && PERIODO[ciclo]) {
          f.economia.textContent = 'economize ' + brl(c.economia) + ' ' + PERIODO[ciclo];
          f.economia.hidden = false;
        } else {
          f.economia.hidden = true;
        }
      });
      toggle.querySelectorAll('button').forEach(function (b) {
        var ativo = b.getAttribute('data-ciclo') === ciclo;
        b.classList.toggle('is-active', ativo);
        b.setAttribute('aria-checked', ativo ? 'true' : 'false');
      });
    }

    // Seletor de ciclo
    toggle.innerHTML = '';
    CICLOS.forEach(function (ciclo) {
      var b = el('button', 'cycle-btn', rotulos[ciclo] || fallbackRotulo[ciclo]);
      b.type = 'button';
      b.setAttribute('role', 'radio');
      b.setAttribute('data-ciclo', ciclo);
      b.addEventListener('click', function () { aplicarCiclo(ciclo); });
      toggle.appendChild(b);
    });
    aplicarCiclo('MONTHLY');

    // Tabela comparativa
    var thead = section.querySelector('.compare-table thead');
    var tbody = section.querySelector('.compare-table tbody');
    var hr = el('tr');
    hr.appendChild(el('th', 'row-head', ''));
    d.planos.forEach(function (p) {
      var th = el('th', p.nome.toLowerCase() === RECOMENDADO ? 'is-recommended' : null, p.nome);
      th.scope = 'col';
      hr.appendChild(th);
    });
    thead.appendChild(hr);

    function linha(rotulo, valores, cls) {
      var tr = el('tr', cls || null);
      var th = el('th', 'row-head', rotulo);
      th.scope = 'row';
      tr.appendChild(th);
      valores.forEach(function (v) {
        var td = el('td');
        if (v === true) {
          td.appendChild(el('span', 'check', '✓'));
          td.setAttribute('aria-label', 'Incluído');
        } else {
          td.textContent = v;
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    }
    function limite(n) { return n === null ? 'Ilimitadas' : String(n); }
    linha('Obras ativas', d.planos.map(function (p) { return limite(p.obras_ativas); }), 'is-volume');
    linha('Pessoas na equipe', d.planos.map(function (p) { return limite(p.membros); }), 'is-volume');
    var sep = el('tr', 'is-divider');
    var sepCell = el('td', null, 'Funcionalidades — iguais em todos os planos');
    sepCell.colSpan = d.planos.length + 1;
    sep.appendChild(sepCell);
    tbody.appendChild(sep);
    FUNCIONALIDADES.forEach(function (f) {
      linha(f, d.planos.map(function () { return true; }));
    });

    // Nota do add-on de pessoa adicional
    var note = section.querySelector('.addon-note');
    var pessoa = d.addons.filter(function (a) { return /pessoa/i.test(a.nome || ''); })[0];
    if (pessoa) {
      note.textContent = 'Precisa de mais gente na equipe? Adicione pessoas por ' + brl(pessoa.valor_mensal).replace(',00', '') + '/mês cada.';
    } else {
      note.parentNode.removeChild(note);
    }

    section.querySelectorAll('.js-trial-cta').forEach(function (a) { a.textContent = ctaTexto; });
    section.classList.remove('is-loading');
    section.setAttribute('aria-busy', 'false');
  }

  var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, TIMEOUT_MS);

  fetch(ENDPOINT, ctrl ? { signal: ctrl.signal } : undefined)
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (data) {
      clearTimeout(timer);
      var d = validar(data);
      if (!d) throw new Error('resposta inválida');
      render(d);
    })
    .catch(function (err) {
      clearTimeout(timer);
      if (window.console) console.warn('[preços] seção oculta:', err && err.message);
      esconder();
    });
})();
