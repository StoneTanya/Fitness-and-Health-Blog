import popupTemplate from "./popup.html";

export function startPopup(content, additionalClass) {
  const popupEl = document.getElementById("popup");
  popupEl.innerHTML = popupTemplate;
  popupEl.querySelector(".popup").innerHTML = content;

  let popupBack = document.querySelector(".popup__back"); //фон окна
  let popup = document.querySelector(".popup"); //само окно
  let closePopup = document.querySelector(".close-popup");

  popup.classList.add("active");
  popupBack.classList.add("active");
  if (additionalClass) {
    popup.classList.add(additionalClass);
  }

  closePopup.addEventListener("click", (e) => {
    // Вешаем обработчик на крестик
    e.preventDefault();
    popupBack.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
  });

  document.addEventListener("click", (e) => {
    // Вешаем обработчик на весь документ
    if (e.target === popupBack) {
      // Если цель клика - фон, то:
      popupBack.classList.remove("active"); // Убираем активный класс с фона
      popup.classList.remove("active"); // И с окна
    }
  });
}
