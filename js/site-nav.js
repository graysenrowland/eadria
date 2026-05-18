(function () {
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

  fetch('/data/nav.json')
    .then(function (response) { return response.ok ? response.json() : Promise.reject(response); })
    .then(renderNav)
    .catch(function () {
      // Existing hard-coded menu remains as a fallback if the JSON cannot be loaded.
    });
}());
