/* Filter for the articles index. Every whitespace-separated term must appear
   in the title, description or category. No dependencies, no network. */
(function () {
  var q = document.getElementById('sq'),
      out = document.getElementById('sr'),
      cnt = document.getElementById('sc'),
      all = window.DTD_ARTICLES || [];
  if (!q || !out) return;
  function esc(s) { return s.replace(/[&<>"]/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  q.addEventListener('input', function () {
    var v = q.value.trim().toLowerCase();
    if (v.length < 2) { out.hidden = true; cnt.hidden = true; return; }
    var terms = v.split(/\s+/);
    var hits = all.filter(function (a) {
      var hay = (a.t + ' ' + a.d + ' ' + a.c).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    });
    out.innerHTML = hits.map(function (a) {
      return '<li><a href="' + a.u + '"><h3>' + esc(a.t) + '</h3><p>' +
             esc(a.d) + '</p><span class="tag">' + esc(a.c) + '</span></a></li>';
    }).join('');
    cnt.textContent = hits.length === 1 ? '1 article' : hits.length + ' articles';
    out.hidden = !hits.length;
    cnt.hidden = false;
  });
})();
