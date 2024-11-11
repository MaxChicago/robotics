


function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video')
  trailer.classList.toggle('active')
  video.currentTime = 0;


}

window.addEventListener('scroll', () => {   //измениение при скролле,
  if (window.scrollY > 100) {                                             
    $(".header-wrapper").css("background-color", "white")
    $(".header-wrapper").css("transition-duration", ".5s")
    $(".topmenu li a").css("color", "black")
    $(".header-wrapper img").css("filter", "invert(100%)")
    $(".topmenu li a").css("font-weight", "600")
    $(".close").css("filter", "invert(0%)")
    $(".timeline-wrapper").css("animation", "movedown 1s linear forwards)")
    $(".submenu li a").css("color", "black")

  } else {
    $(".header-wrapper").css("background-color", "rgba(240, 248, 255, 0)")
    $(".topmenu li a").css("color", "white")
    $(".header-wrapper img").css("filter", "invert(0%)")
    $(".close").css("filter", "invert(100%)")

    $(".submenu li a").css("color", "black")


  }
})

function anim() {     //анимации
  let anims = document.querySelectorAll(".animation");

  for (let i = 0; i < anims.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = anims[i].getBoundingClientRect().top;
    let elementBottom = anims[i].getBoundingClientRect().bottom;
    let elementVisible = 160;

    if ((elementTop < windowHeight - elementVisible) && elementBottom > 0) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}
anim()
window.addEventListener("scroll", anim);



let target = document.querySelector(".timeline");  //стрелка наверх

let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;


function callback(entries, observer) {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      scrollToTopBtn.classList.add("showBtn");
    } else {

      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);







let faqArr = document.querySelectorAll('.faq-item') //часто задаваемые вопросы
let faqBtn = document.querySelector('.back-btn')

function FAQ(el) {
  for (let i = 0; i < faqArr.length; i++) {
    faqArr[i].classList.add('ds-none')
  }
  el.classList.remove('ds-none')
  el.classList.add('faq-active')
  el.childNodes[1].childNodes[1].classList.add('rt-90')
  el.childNodes[3].childNodes[3].classList.remove('ds-none')
  el.childNodes[1].childNodes[3].classList.remove('ds-none')
  el.childNodes[1].childNodes[3].setAttribute('style', 'height: ' + (el.childNodes[3].childNodes[3].offsetHeight + 21) + 'px')
  faqBtn.classList.remove('ds-none')
}

for (let i = 0; i < faqArr.length; i++) {
  const el = faqArr[i];
  el.addEventListener('click', () => {
    FAQ(el)
  })
}

faqBtn.addEventListener('click', () => {
  for (let i = 0; i < faqArr.length; i++) {
    const el = faqArr[i];
    el.classList.remove('ds-none')
    el.classList.remove('faq-active')
    el.childNodes[1].childNodes[1].classList.remove('rt-90')
    el.childNodes[3].childNodes[3].classList.add('ds-none')
    el.childNodes[1].childNodes[3].classList.add('ds-none')
    el.childNodes[1].childNodes[3].setAttribute('style', 'height: 0px')
  }
  faqBtn.classList.add('ds-none')
})

let about = document.querySelector('#about-us')
let portfolio = document.querySelector('#portfolio')
let feedback = document.querySelector('#feedback')
let video = document.querySelector('.bg-video')
let iActive = 0

