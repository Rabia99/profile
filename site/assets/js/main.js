(function(){
  const navToggle=document.querySelector('.nav-toggle');
  const navLinks=document.querySelector('.nav-links');
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      const open=navLinks.style.display==='flex';
      navLinks.style.display=open?'none':'flex';
    });
  }

  const revealEls=[...document.querySelectorAll('[data-reveal], .section, .item')];
  const onScroll=()=>{
    const trigger=window.innerHeight*0.9;
    revealEls.forEach(el=>{
      const rect=el.getBoundingClientRect();
      if(rect.top<trigger){el.classList.add('visible');}
    });
  };
  document.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('load',onScroll);
  onScroll();

  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const fd=new FormData(form);
      const name=fd.get('name');
      const email=fd.get('email');
      const message=fd.get('message');
      if(!name||!email||!message){
        alert('Please complete all fields.');
        return;
      }
      const mailto=`mailto:rabiabembi@gmail.com?subject=${encodeURIComponent('Intro call request from '+name)}&body=${encodeURIComponent(message+'\n\nContact: '+email)}`;
      window.location.href=mailto;
    });
  }
})();

