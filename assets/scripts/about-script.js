let faqArr = document.querySelectorAll('.faq-item') // Выбор всех элементов с классом 'faq-item' и сохранение в переменной faqArr
let faqBtn = document.querySelector('.back-btn') // Выбор элемента с классом 'back-btn' и сохранение в переменной faqBtn


function FAQ(el) { // Функция для обработки клика по элементу 
  for (let i = 0; i < faqArr.length; i++) {
    faqArr[i].classList.add('ds-none')
  }
  el.classList.remove('ds-none')   // Показ выбранного элемента вопроса и применение стилей и классов для анимации
  el.classList.add('faq-active')
  el.childNodes[1].childNodes[1].classList.add('rt-90')
  el.childNodes[3].childNodes[3].classList.remove('ds-none')
  el.childNodes[1].childNodes[3].classList.remove('ds-none')
  el.childNodes[1].childNodes[3].setAttribute('style', 'height: ' + (el.childNodes[3].childNodes[3].offsetHeight + 21) + 'px')
  faqBtn.classList.remove('ds-none')
}

for (let i = 0; i < faqArr.length; i++) {  // Вызов функции FAQ при клике на элемент вопроса
  const el = faqArr[i];
  el.addEventListener('click', () => {
    FAQ(el)
  })
}

faqBtn.addEventListener('click', () => {   // Скрытие всех элементов вопросов и кнопки "назад"
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




function anim() { // анимации
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

  

  window.addEventListener('scroll', () => {  // изменение при скролле
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





  let target = document.querySelector(".container");  // Выбираем элемент с классом "container", к которому привяжется функционал кнопки "наверх"

  let scrollToTopBtn = document.querySelector(".scrollToTopBtn"); // Выбираем элемент кнопки "наверх" с классом "scrollToTopBtn".
  let rootElement = document.documentElement;
  
  
  function callback(entries, observer) {
  
    entries.forEach((entry) => { // Если нужный элемент в зоне видимости, добавляем класс "showBtn"
      if (entry.isIntersecting) {
  
        scrollToTopBtn.classList.add("showBtn");
      } else {
  
        scrollToTopBtn.classList.remove("showBtn");
      }
    });
  }
  
  function scrollToTop() { // Функция, которая прокручивает страницу вверх с плавным эффектом при вызове.
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);
  let observer = new IntersectionObserver(callback);
  observer.observe(target);


 
  $(document).ready(function() {
    $('#carouselOne').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        nav:true, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});