let questions = [
  {
    title: "Вы хотели бы тренироваться в компании или самостоятельно?",
    left: "В компании",
    right: "Cамостоятельно",
  },
  {
    title:
      "Вы предпочитаете частые, но короткие тренировки, или редкие, но длительные?",
    left: "Частые, но короткие",
    right: "Редкие, но длительные",
  },
  {
    title:
      "Вам важно, чтобы тренировки отличались друг от друга, или вы готовы придерживаться системы?",
    left: "Хочу разнообразия",
    right: "Предпочитаю системность",
  },
];

let questionIndex = 0;
let finalMask = 0; //двоичный код результата

let checkListTrainers = '';
checkListTrainers +=
    `<div id="">
    <p>Вы можете <a href="#" id="open-popup">скачать чек-лист по выбору беговых кроссовок и разминка перед пробежкой</a></p>
</div>`;

let answer = new Map();
answer.set(
  7,
  "Попробуйте групповые тренировки онлайн, сейчас такую услугу предоставляют многие фитнес-клубы и отдельные тренеры. Отдайте предпочтение активным нагрузкам: согласно исследованиям, они помогают справляться со стрессом лучше других."
); //(111) = 7
answer.set(
  3,
  "Вы можете присоединиться к сообществу бегунов или велосипедистов в вашем городе. Так вы получите системные аэробные нагрузки — они лучше других помогают справиться с тревогой и стрессом. А еще найдете компанию единомышленников." + `${checkListTrainers}`
); //(011) = 3
answer.set(
  5,
  "Присоединяйтесь к групповым тренировкам по танцам, зумбе или кроссфиту. Активные нагрузки помогают справляться с тревогой, а разнообразие занятий не даст заскучать."
); //(101) = 5
answer.set(
  1,
  "Попробуйте групповые беговые тренировки, из часто организовывают самостоятельные тренеры по бегу. Активное движение хорошо снимает стресс, а приятная компания поднимет настроение." + `${checkListTrainers}`
); //(001) = 1
answer.set(
  6,
  "Попробуйте тренировки через приложения. Большая библиотека позволит составить разнообразную программу, при этом вы сможете заниматься когда и где угодно."
); //(110) = 6
answer.set(
  2,
  "Попробуйте начать бегать или освоить велосипед. Регулярная активность снижает уровень стресса и помогает бороться с тревогой."+ `${checkListTrainers}`
); //(010) = 2
answer.set(
  4,
  "Посмотрите в сторону персональных тренировок по танцам, кроссфиту или другим активным направлениям. И разнообразие, и антистресс."
); //(100) = 4
answer.set(
  0,
  "Возможно, вам понравится хайкинг, сноуборд или велосипед. Сезонные увлечения не приедаются и могут даже стать приятной традицией. Главное — выбирать активные направления."
); //(000) = 0

function updateQuestionTitle() {
  console.log("finalMask: " + finalMask);

  let title = document.getElementById("question");
  let leftButton = document.getElementById("question-left");
  let rightButton = document.getElementById("question-right");

  if (questionIndex < questions.length) {
    let question = questions[questionIndex];
    title.innerHTML = question.title; //выводим вопрос
    leftButton.value = question.left; // меняем текст вопроса слева
    rightButton.value = question.right; // меняем текст вопроса справа
  } else {
    title.innerHTML = ""; // не выводим вопрос
    leftButton.style.display = "none"; // убираем текст вопроса слева
    rightButton.style.display = "none"; // убираем текст вопроса справа
    let result = document.getElementById("result");
    result.innerHTML = answer.get(finalMask);

    let adviseField = document.getElementById('quiz__advise');
        let out = '';
            out +=
                `<div id="quiz__advise">
                <div id="quiz__advise__content">
                    <h3>Хотите уточнить результат?</h3>   
                    <p>Вы можете <a href="#" class="sign_up">Записаться на консультацию</a></p>
                    <h3>Хотите больше знать о тренировках для ментального здоровья?</h3>   
                    <p>Вот <a href="#" id="article_vew">несколько интересных статей об этом.</a></p>
                    </div>
            </div>`;
            adviseField.innerHTML = out;
  }
};

// document.addEventListener("DOMContentLoaded", updateQuestionTitle); // при загрузке страницы выводим вопрос 1 с индексом [0]

export function startTest2() {
  let leftButton = document.getElementById("question-left");
  let rightButton = document.getElementById("question-right");

  //переключение вопросов при нажатии на кнопку слева:
  leftButton.onclick = function () {
    if (questionIndex > questions.length) {
      return;
    }
    finalMask = finalMask | (1 << questionIndex); //получаем код результата; сдвиг в двоичном коде: (0|1=>1 1|10=>11 11| 100=>111)
    questionIndex++;
    updateQuestionTitle();
  };

  //переключение вопросов при нажатии на кнопку справа:
  rightButton.onclick = function () {
    if (questionIndex > questions.length) {
      return;
    }
    questionIndex++;
    updateQuestionTitle();
  };
  updateQuestionTitle();
};
