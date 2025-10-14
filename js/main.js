
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('header.site-header nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }
  // Smooth anchor scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
      }
    });
  });
});
