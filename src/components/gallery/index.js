import slider from "./index.html";

export function SertSlider() {
    const sliderDiv = document.getElementById('sert__slider');
    sliderDiv.innerHTML = slider;

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    const slide = document.querySelectorAll(".mySlides");
    let i = 0;
    next.addEventListener("click", () => {
        slide[i].style.display = 'none';
        i++;
        if (i >= slide.length) {
            i = 0;
        }
        slide[i].style.display = 'block';
    });

    prev.addEventListener('click', () => {
        slide[i].style.display = 'none';
        i = i - 1;
        if (i < 0) {
            i = slide.length - 1;
        }
        slide[i].style.display = 'block';
    });
};

export function PopupSlider() {
    let popupBack = document.querySelector(".popup__back");   //фон окна
    let popup = document.querySelector(".popup");             //само окно
    let closePopup = document.querySelector('.close-popup');

    popupBack.classList.add('active');          // Добавляем класс 'active' для фона
    popup.classList.add('active');              // И для самого окна

    closePopup.addEventListener('click',() => {         // Вешаем обработчик на крестик
        popupBack.classList.remove('active');                // Убираем активный класс с фона
        popup.classList.remove('active');                    // И с окна
    });

    document.addEventListener('click', (e) => {             // Вешаем обработчик на весь документ
        if(e.target === popupBack) {                         // Если цель клика - фон, то:
            popupBack.classList.remove('active');              // Убираем активный класс с фона
            popup.classList.remove('active');                // И с окна
        }
    });

};