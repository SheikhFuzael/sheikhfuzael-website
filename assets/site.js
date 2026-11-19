(function () {
  // Mobile menu
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('site-nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Copy buttons
  var toast = document.getElementById('toast');
  function say(msg) { if (!toast) return; toast.textContent = msg; toast.classList.add('show'); setTimeout(function () { toast.classList.remove('show'); }, 2200); }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      try {
        navigator.clipboard.writeText(text).then(function () { say('Email address copied'); }, function () { say(text); });
      } catch (e) { say(text); }
    });
  });

  // Video embeds. Add a YouTube video ID to data-youtube on any .media block to show the video.
  // The poster loads first. Clicking it plays the video on the page, or opens YouTube if embedding is blocked.
  var framed = false;
  try { framed = window.self !== window.top; } catch (e) { framed = true; }
  document.querySelectorAll('.media[data-youtube]').forEach(function (box) {
    var id = box.getAttribute('data-youtube');
    if (!id) return;
    var label = box.getAttribute('aria-label') || 'Video';
    var url = 'https://youtu.be/' + encodeURIComponent(id);
    var a = document.createElement('a');
    a.className = 'poster';
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Play ' + label);
    var poster = box.getAttribute('data-poster');
    if (poster) { var img = document.createElement('img'); img.src = poster; img.alt = ''; a.appendChild(img); }
    var p = document.createElement('span'); p.className = 'play'; p.setAttribute('aria-hidden', 'true'); a.appendChild(p);
    a.addEventListener('click', function (e) {
      if (framed) return;
      e.preventDefault();
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      f.title = label;
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(f);
    });
    box.innerHTML = '';
    box.classList.add('has-video');
    box.appendChild(a);
  });

  // Open a case study when linked directly
  function openFromHash() {
    var t = location.hash && document.getElementById(location.hash.slice(1));
    if (t && t.tagName === 'DETAILS') t.open = true;
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
