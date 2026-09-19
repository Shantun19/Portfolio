(function(){
  var toggle = document.getElementById('menuToggle');
  var sidebar = document.getElementById('sidebar');
  if(toggle && sidebar){
    toggle.addEventListener('click', function(){
      var open = sidebar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    sidebar.querySelectorAll('nav.jump a').forEach(function(a){
      a.addEventListener('click', function(){
        if(window.matchMedia('(max-width: 900px)').matches){
          sidebar.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.textContent = 'Menu';
        }
      });
    });
  }

  var links = document.querySelectorAll('nav.jump a');
  var sections = Array.prototype.map.call(links, function(a){
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  function onScroll(){
    var pos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function(sec){
      if(sec.offsetTop <= pos) current = sec;
    });
    links.forEach(function(a){
      a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
