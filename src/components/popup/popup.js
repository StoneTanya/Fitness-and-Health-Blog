import popupTemplate from './popup.html'

export function startPopup(content) {
    const popupEl = document.getElementById("popup")
    popupEl.innerHTML = popupTemplate
    popupEl.querySelector(".popup").innerHTML = content

    let popupBack = document.querySelector(".popup__back");   //фон окна
    let popup = document.querySelector(".popup");             //само окно
    let closePopup = document.querySelector('.close-popup');
    let openPopup = document.querySelectorAll('.open-popup');
    console.log(openPopup)
    popupBack.classList.add('active');
    
    closePopup.addEventListener('click', (e) => {   // Вешаем обработчик на крестик
        console.log("close popup")
        e.preventDefault();
        popupBack.classList.remove('active');                // Убираем активный класс с фона
        popup.classList.remove('active');                    // И с окна
    });

    document.addEventListener('click', (e) => {             // Вешаем обработчик на весь документ
        if (e.target === popupBack) {                         // Если цель клика - фон, то:
            popupBack.classList.remove('active');              // Убираем активный класс с фона
            popup.classList.remove('active');                // И с окна
        }
    });
};




