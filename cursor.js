
(function(){
  var cursor = document.getElementById('siri-cursor');
  if(!cursor) return;
  var mx=0, my=0, dxC=0, dyC=0;

  window.addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; });

  window.sswipyAttachHoverCursor = function(selector){
    document.querySelectorAll(selector || 'a, button, .card, .pile-card-wrap, .rating-card').forEach(function(el){
      el.addEventListener('mouseenter', function(){ document.body.classList.add('cursor-hover'); });
      el.addEventListener('mouseleave', function(){ document.body.classList.remove('cursor-hover'); });
    });
  };

  function tick(){
    dxC += (mx - dxC) * 0.2;
    dyC += (my - dyC) * 0.2;
    cursor.style.transform = 'translate(' + dxC + 'px,' + dyC + 'px)';
    requestAnimationFrame(tick);
  }
  tick();

  window.sswipyAttachHoverCursor();
})();
