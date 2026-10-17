(function () {
  var SHEETS = "sheets.json";
  var GROUPS = "groups";
  var COUNT = "count";
  var Q = "q";
  var svg = '<svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path></svg>';

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function search(term) {
    var t = term.trim().toLowerCase();
    return t.length ? sheets.filter(function (s) {
      return [s.title, s.category, s.brand].some(function (v) { return (v || "").toLowerCase().indexOf(t) > -1; });
    }) : sheets;
  }

  function render(list) {
    var g = GROUPS, c = COUNT;
    g.innerHTML = "";
    c.textContent = list.length + (list.length === 1 ? " sheet" : " sheets");

    if (!list.length) {
      g.insertAdjacentHTML("beforeend", '<p class="hub-count">No sheets match your search.</p>');
      return;
    }

    var groups = {};
    list.forEach(function (s) {
      (groups[s.category] = groups[s.category] || []).push(s);
    });

    Object.keys(groups).sort().forEach(function (cat) {
      var brands = groups[cat];
      var brandGroups = {};
      brands.forEach(function (s) {
        (brandGroups[s.brand] = brandGroups[s.brand] || []).push(s);
      });

      var wrap = document.createElement("div");
      wrap.className = "group";
      wrap.innerHTML = '<div class="group-head"><h2>' + esc(cat) + '</h2><span class="count">in ' + Object.keys(brandGroups).length + ' brand' + (Object.keys(brandGroups).length === 1 ? "" : "s") + '</span></div>';

      Object.keys(brandGroups).sort().forEach(function (brand) {
        var bs = brandGroups[brand];
        var bwrap = document.createElement("div");
        bwrap.className = "brand";
        var bh = '<div class="brand-head"><span class="name">' + esc(brand) + '</span><span class="brand-tag">brand</span></div>';
        var cards = bs.map(function (s) {
          return '<div class="card">' +
            '<span class="chip cat">' + esc(s.category) + '</span>' +
            '<h3><a href="' + esc(s.url) + '">' + esc(s.title) + '</a></h3>' +
            '<p>Inspect before you pay. A mobile-first checklist saved on your device.</p>' +
            '<div class="card-meta"><span>Brand</span><span>' + esc(s.brand) + '</span><span>Date</span><span>' + esc(s.date || "") + '</span></div>' +
            '<a class="learn-more" href="' + esc(s.url) + '">Open the sheet →</a>' +
            '</div>';
        }).join("");
        bwrap.insertAdjacentHTML("beforeend", bh + cards);
        wrap.appendChild(bwrap);
      });

      g.appendChild(wrap);
    });
  }

  var sheets = [];
  fetch(SHEETS).then(function (r) {
    if (!r.ok) throw new Error("sheets.json: " + r.status);
    return r.json();
  }).then(function (data) {
    sheets = Array.isArray(data) ? data : data.sheets || [];
    render(search(document.getElementById(Q).value));
    document.getElementById(Q).addEventListener("input", function (e) {
      render(search(e.target.value));
    });
  }).catch(function (e) {
    GROUPS.insertAdjacentHTML("beforeend", '<p class="hub-count" style="color:var(--must)">Could not load ' + SHEETS + '.</p>');
    console.error(e);
  });
})();
