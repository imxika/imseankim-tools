/* ============================================
   Shared Header — Auto-injected into all pages
   ============================================ */
(function() {
  const tools = [
    { cat: 'Design', items: [
      { slug: 'colors', name: 'Color Palette', icon: '🎨' },
      { slug: 'gradient', name: 'Gradient', icon: '🌈' },
      { slug: 'fonts', name: 'Font Pairing', icon: '🔤' },
      { slug: 'shadow', name: 'Box Shadow', icon: '🔲' },
      { slug: 'grid', name: 'CSS Grid', icon: '📐' },
      { slug: 'flexbox', name: 'Flexbox', icon: '📦' },
    ]},
    { cat: 'Developer', items: [
      { slug: 'json', name: 'JSON Formatter', icon: '{ }' },
      { slug: 'regex', name: 'Regex Tester', icon: '.*' },
      { slug: 'base64', name: 'Base64', icon: '🔑' },
      { slug: 'url-encode', name: 'URL Encode', icon: '🔗' },
      { slug: 'minify', name: 'Minifier', icon: '📦' },
      { slug: 'markdown', name: 'Markdown', icon: '📝' },
    ]},
    { cat: 'Productivity', items: [
      { slug: 'lorem', name: 'Lorem Ipsum', icon: '📄' },
      { slug: 'qr', name: 'QR Code', icon: '📱' },
      { slug: 'password', name: 'Password Gen', icon: '🔒' },
      { slug: 'units', name: 'Unit Converter', icon: '📏' },
    ]},
    { cat: 'Media', items: [
      { slug: 'image-resize', name: 'Image Resize', icon: '🖼️' },
      { slug: 'image-compress', name: 'Image Compress', icon: '🗜️' },
      { slug: 'svg-editor', name: 'SVG Editor', icon: '✏️' },
      { slug: 'favicon', name: 'Favicon Gen', icon: '⭐' },
    ]},
  ];

  const path = window.location.pathname;
  const currentSlug = path.split('/tools/')[1]?.replace(/\/.*/, '') || '';

  const navLinks = tools.flatMap(c => c.items).slice(0, 6).map(t =>
    `<a href="/tools/${t.slug}/" class="${currentSlug === t.slug ? 'active' : ''}">${t.name}</a>`
  ).join('');

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <a href="/designTools" class="logo"><span>Sean's</span> Tools</a>
    <nav id="mainNav">
      <a href="/designTools" class="${path.includes('designTools') && !path.includes('tools/') ? 'active' : ''}">All Tools</a>
      ${navLinks}
    </nav>
    <button class="hamburger" onclick="document.getElementById('mainNav').classList.toggle('open')" aria-label="Menu">☰</button>
  `;

  document.body.insertBefore(header, document.body.firstChild);

  // Ad banner below header
  const ad = document.createElement('div');
  ad.className = 'ad-banner';
  ad.innerHTML = '<div class="ad-placeholder">Advertisement</div>';
  header.after(ad);

  // Expose tools data for related tools section
  window.__TOOLS__ = tools;
})();
