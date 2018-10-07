window.addEventListener('load', function() {
  document.querySelector('html').classList.remove('no-js');
  document.querySelector('html').classList.add('js');
  document.querySelector('body').classList.add('active');
  
  window.setTimeout(() => { console.log('loading...');
  
  document.querySelector('body').classList.remove('active');
  document.querySelector('body').className = 'inactive';
}, 1000);
  //window.setInterval(, 500);
});
