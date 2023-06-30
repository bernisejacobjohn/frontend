document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#left-panel a');
    
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      
      if (link.href === location.href) {
        link.classList.add('active');
      }
    }
  });
  