(function () {
  var fallbackItems = [
    { label: 'Geography', href: '/geography.html' },
    { label: 'Peoples', href: '/peoples/index.html' },
    { label: 'Groups & Guilds', href: '/groups/index.html' },
    { label: 'Faiths & Beliefs', href: '/faiths/index.html' },
    { label: 'Timeline', href: '/timeline.html' }
  ];

  function renderNav(items) {
    document.querySelectorAll('.nav-links').forEach(function (nav) {
      nav.innerHTML = '';
      items.forEach(function (item) {
        var link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.label;
        nav.appendChild(link);
      });
    });
  }

  renderNav(fallbackItems);

  fetch('/data/nav.json?v=1791849600')
    .then(function (response) { return response.ok ? response.json() : Promise.reject(response); })
    .then(renderNav)
    .catch(function () {
      renderNav(fallbackItems);
    });
}());