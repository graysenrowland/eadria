document.addEventListener('DOMContentLoaded', function () {
  const entries = {
    'Eadria': 'EE-ay-dree-uh',
    'Orma’aiqua': 'or-mah-EYE-kwa'
  };

  document.querySelectorAll('.page-title').forEach(function (title) {
    Object.entries(entries).forEach(function (entry) {
      const name = entry[0];
      const pronunciation = entry[1];

      if (title.textContent.includes(name)) {
        title.innerHTML = title.innerHTML.replace(name, '<span class="pronounce" data-pronunciation="' + pronunciation + '">' + name + '</span>');
      }
    });
  });
});
