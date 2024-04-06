  const wrapper = document.querySelector('.wrapper');
   const loginlink = document.querySelector('.login-link');
   const registerlink =document.querySelector('.register-link');
   const btnloginpopup = document.querySelector('.btnlogin-popup')
   const close1 = document.querySelector('.close')
   const menu = document.querySelector('#menu-icon');
   const navbar = document.querySelector('.navbar');

   menu.onclick = ()=>{
       menu.classList.toggle('bx-x');
       navbar.classList.toggle('active');
   };
   window.onscroll = ()=>{
      menu.classList.remove('bx-x');
      navbar.classList.remove('active')
   }
   registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
   })

   loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
   });
   btnloginpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
   });
    close1.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
   });


