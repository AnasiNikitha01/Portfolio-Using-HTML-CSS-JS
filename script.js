let know_more = document.querySelector('#know-more');
let cancel = document.querySelector('#cancel');
let skills = document.querySelector('#skills');
let projects = document.querySelector('#projects');
let services = document.querySelector('#services');

know_more.addEventListener('click',()=>{
    skills.style.display = 'block'
    projects.style.display = 'block'
    services.style.display = 'block'
    know_more.style.display= 'none'
    cancel.style.display = 'block'
})

cancel.addEventListener('click',()=>{
    skills.style.display = 'none'
    projects.style.display = 'none'
    services.style.display = 'none'
    cancel.style.display= 'none'
    know_more.style.display = 'block'
})

let mypic = document.querySelector('#my-img');

let col_2 = document.querySelector('#col-2');

window.addEventListener('scroll',()=>{
    if(window.scrollY>='200'){
        mypic.classList.add('left');
        col_2.classList.add('right');
    }
    else{
        mypic.classList.remove('left');
        col_2.classList.remove('right');
    }
})

let row_2 = document.querySelector('#row-2')
let row_3 = document.querySelector('#row-3')
window.addEventListener('scroll',()=>{
   console.log(window.scrollY);
   if(window.scrollY>='123'){
       row_2.classList.add('transperent')
       row_3.classList.add('transperent')
    }
    else{
       row_2.classList.remove('transperent')
       row_3.classList.remove('transperent')

   }
})

window.addEventListener('scroll',()=>{
   console.log(window.scrollY);
   if(window.scrollY>='1245'){
       row_2.classList.add('transperent1')
       row_3.classList.add('transperent1')
    }
    else{
       row_2.classList.remove('transperent1')
       row_3.classList.remove('transperent1')

   }
})

let cont_3 = document.querySelector('#cont-3');
window.addEventListener('scroll',()=>{
   console.log(window.scrollY);
   if(window.scrollY>='807'){
       cont_3.classList.add('top')
    }
    else{
      cont_3.classList.remove('top');
   }
})

let row_7 = document.querySelector('#row-7');
let row_8 = document.querySelector('#row-8');

let conntect1 =document.getElementById('connect1')
let conntect2 =document.getElementById('connect2')

conntect1.addEventListener('click',()=>{
    row_7.style.display = 'none';
    row_8.style.display = 'block';
})
conntect2.addEventListener('click',()=>{
    row_7.style.display = 'block';
    row_8.style.display = 'none';
})


let nav_about = document.getElementById('nav-about')
let nav_contact = document.getElementById('nav-contact')

nav_about.addEventListener('click',function(){
    var section1= document.querySelector('#cont-7')
    section1.scrollIntoView({behavior: "smooth"});
})
nav_contact.addEventListener('click',function(){
    var section1= document.querySelector('#cont-6')
    section1.scrollIntoView({behavior: "smooth"});
})

let up = document.querySelector('#go-up')
let hire = document.querySelector('#hire')

up.addEventListener('click',function(){
    var section1= document.querySelector('.header')
    section1.scrollIntoView({behavior: "smooth"});
})
hire.addEventListener('click',function(){
    var section1= document.querySelector('#cont-6')
    section1.scrollIntoView({behavior: "smooth"});
})
skills.addEventListener('click',function(){
    var section1= document.querySelector('#cont-2')
    section1.scrollIntoView({behavior: "smooth"});
})
projects.addEventListener('click',function(){
    var section1= document.querySelector('#cont-3')
    section1.scrollIntoView({behavior: "smooth"});
})
services.addEventListener('click',function(){
    var section1= document.querySelector('#cont-4')
    section1.scrollIntoView({behavior: "smooth"});
})


let one = document.querySelectorAll('.links')

for (let i = 0; i < one.length; i++){
one[i].addEventListener('click',(event)=>{
    event.preventDefault();
    setTimeout(function() {
        window.open(one[i].href, '_blank');
    }, 1000); 
})
}