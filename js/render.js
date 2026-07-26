/* CoreSplit Wiki — Render Engine + Language Manager */
(function () {
  'use strict';
  var STORAGE_KEY = 'coresplit_lang';
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'zh-CN';

  window.getLang = function () { return currentLang; };
  window.t = function (section, key) {
    var s = I18N[section];
    if (!s) return key;
    var l = s[currentLang];
    if (l && l[key] !== undefined) return l[key];
    if (s['en'] && s['en'][key] !== undefined) return s['en'][key];
    return key;
  };

  window.switchLang = function (lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    renderSidebar();
    if (window.renderPage) window.renderPage();
    updateLangSelector();
  };

  // ===================== SIDEBAR RENDERING =====================
  function renderSidebar() {
    var sidebars = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < sidebars.length; i++) {
      var el = sidebars[i];
      var key = el.getAttribute('data-i18n');
      var section = el.getAttribute('data-i18n-section') || 'nav';
      if (key) {
        var val = t(section, key);
        if (val !== undefined) el.textContent = val;
      }
    }
  }

  function updateLangSelector() {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    }
  }

  // ===================== SHARED COMPONENTS =====================
  function buildSidebarHTML() {
    return [
      '<aside class="sidebar" id="sidebar">',
      '<div class="sidebar-brand"><a href="index.html"><div class="sidebar-logo">CS</div><div><div class="sidebar-title" data-i18n="brand">CoreSplit</div><div class="sidebar-subtitle" data-i18n="subtitle">Parallel Engine</div></div></a></div>',
      '<div class="sidebar-lang">',
      '<span class="sidebar-lang-label" data-i18n="language" data-i18n-section="nav">Language</span>',
      '<div class="lang-switcher">',
      '<button class="lang-btn" data-lang="zh-CN" onclick="switchLang(\'zh-CN\')">简</button>',
      '<button class="lang-btn" data-lang="zh-TW" onclick="switchLang(\'zh-TW\')">繁</button>',
      '<button class="lang-btn" data-lang="en" onclick="switchLang(\'en\')">EN</button>',
      '</div></div>',
      '<nav class="sidebar-nav">',
      '<div class="sidebar-section"><div class="sidebar-section-title" data-i18n="docs" data-i18n-section="nav">Documentation</div>',
      navLink('index.html', '⌂', 'home'),
      navLink('installation.html', '↓', 'installation'),
      navLink('features.html', '◆', 'features'),
      navLink('configuration.html', '⚙', 'configuration'),
      '</div>',
      '<div class="sidebar-section"><div class="sidebar-section-title" data-i18n="reference" data-i18n-section="nav">Reference</div>',
      navLink('compatibility.html', '☰', 'compatibility'),
      navLink('faq.html', '?', 'faq'),
      '</div>',
      '<div class="sidebar-section"><div class="sidebar-section-title" data-i18n="links" data-i18n-section="nav">Links</div>',
      '<a href="https://github.com/DrKyusu/CoreSplit" class="sidebar-link" target="_blank" rel="noopener"><span class="sidebar-icon">⌥</span> <span data-i18n="github" data-i18n-section="nav">GitHub</span></a>',
      '<a href="https://github.com/DrKyusu/CoreSplit/issues" class="sidebar-link" target="_blank" rel="noopener"><span class="sidebar-icon">⚠</span> <span data-i18n="issues" data-i18n-section="nav">Issues</span></a>',
      '</div></nav>',
      '<div class="sidebar-footer"><div class="sidebar-version">v1.0.0</div><div style="margin-top:0.4rem" data-i18n="mcVersion" data-i18n-section="nav">Minecraft 26.2</div><div data-i18n="license" data-i18n-section="nav">Fabric · AGPL-3.0</div></div>',
      '</aside>'
    ].join('\n');
  }

  function getCurrentPage() {
    var path = window.location.pathname;
    var m = path.match(/\/([^/]+)\.html$/);
    return m ? m[1] : 'index';
  }

  var PAGE_MAP = { index: 'home', installation: 'installation', features: 'features', configuration: 'configuration', compatibility: 'compatibility', faq: 'faq' };

  function navLink(href, icon, key) {
    var pageName = href.replace('.html', '');
    var active = (PAGE_MAP[getCurrentPage()] === key);
    var cls = active ? 'sidebar-link active' : 'sidebar-link';
    return '<a href="' + href + '" class="' + cls + '"><span class="sidebar-icon">' + icon + '</span> <span data-i18n="' + key + '" data-i18n-section="nav"></span></a>';
  }

  function buildFooterHTML() {
    return [
      '<footer class="site-footer">',
      '<span><span data-i18n="text" data-i18n-section="footer">CoreSplit Wiki · </span><a href="https://github.com/DrKyusu/CoreSplit" target="_blank">DrKyusu/CoreSplit</a></span>',
      '<span><span data-i18n="licensed" data-i18n-section="footer">Licensed under </span><a href="https://github.com/DrKyusu/CoreSplit/blob/main/LICENSE" target="_blank">AGPL-3.0</a></span>',
      '</footer>'
    ].join('\n');
  }

  function buildMobileHeaderHTML() {
    return [
      '<header class="mobile-header">',
      '<a href="index.html" class="mobile-brand"><div class="mobile-brand-dot"></div> <span data-i18n="brand" data-i18n-section="nav">CoreSplit</span></a>',
      '<button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">☰</button>',
      '</header>'
    ].join('\n');
  }

  // ===================== INIT =====================
  function init() {
    // Insert sidebar
    var sb = document.getElementById('sidebar-root');
    if (sb) sb.innerHTML = buildSidebarHTML();

    // Insert mobile header
    var mh = document.getElementById('mobile-header-root');
    if (mh) mh.innerHTML = buildMobileHeaderHTML();

    // Insert footer
    var ft = document.getElementById('footer-root');
    if (ft) ft.innerHTML = buildFooterHTML();

    // Insert overlay
    var ov = document.getElementById('overlay-root');
    if (ov) ov.innerHTML = '<div class="sidebar-overlay" id="sidebarOverlay"></div>';

    // Render all i18n elements
    renderSidebar();
    updateLangSelector();

    // Call page-specific renderer to populate main content
    if (window.renderPage) window.renderPage();

    // Attach mobile menu handlers
    setTimeout(function () {
      var toggle = document.getElementById('menuToggle');
      var sidebar = document.getElementById('sidebar');
      var overlay = document.getElementById('sidebarOverlay');
      if (toggle && sidebar && overlay) {
        function open() { sidebar.classList.add('open'); overlay.classList.add('visible'); }
        function close() { sidebar.classList.remove('open'); overlay.classList.remove('visible'); }
        toggle.addEventListener('click', function () { sidebar.classList.contains('open') ? close() : open(); });
        overlay.addEventListener('click', close);
      }
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
