
import popupSlider from "../gallery/slider.html";
import footerDip from "../footer/footer.html";


// import popupQuiz1 from "../quiz_1_3/popUpCheckList.html";
// document.getElementById("check__list__popup").innerHTML = popupQuiz1;
document.getElementById("sert__slider").innerHTML = popupSlider;

export function startPopup() {
    let popupBack = document.querySelector(".popup__back");   //фон окна
    let popup = document.querySelector(".popup");             //само окно
    let closePopup = document.querySelector('.close-popup');
    let openPopup = document.querySelectorAll('.open-popup');
    console.log(openPopup)

    openPopup.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            popupBack.classList.add('active');
            popup.classList.add('active');
        })
    });
    closePopup.addEventListener('click', () => {         // Вешаем обработчик на крестик
        popupBack.classList.remove('active');                // Убираем активный класс с фона
        popup.classList.remove('active');                    // И с окна
    });

    document.addEventListener('click', (e) => {             // Вешаем обработчик на весь документ
        if (e.target === popupBack) {                         // Если цель клика - фон, то:
            popupBack.classList.remove('active');              // Убираем активный класс с фона
            popup.classList.remove('active');                // И с окна
        }
    });
}



