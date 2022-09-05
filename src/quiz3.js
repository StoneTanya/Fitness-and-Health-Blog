let questions = [
    {
      title: "Вы хотели бы тренироваться в компании или самостоятельно?",
      left: "В компании",
      right: "Cамостоятельно",
    },
    {
      title: "Вы предпочитаете частые, но короткие тренировки, или редкие, но длительные?",
      left: "Частые, но короткие",
      right: "Редкие, но длительные",
    },
    {
      title: "Вам важно, чтобы тренировки отличались друг от друга, или вы готовы придерживаться системы?",
      left: "Хочу разнообразия",
      right: "Предпочитаю системность",
    },
  ];
  
  let questionIndex = 0;
  let finalMask = 0; //двоичный код результата
  
  let title = document.getElementById("question");
  let leftButton = document.getElementById("question-left");
  let rightButton = document.getElementById("question-right");
  
  let result = new Map();
  result.set(7, "Вариант 1: Попробуйте групповые тренировки онлайн, сейчас такую услугу предоставляют многие фитнес-клубы и отдельные тренеры. Отдайте предпочтение активным нагрузкам: согласно исследованиям, они помогают справляться со стрессом лучше других." <br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(111) = 7
  result.set(3, "вариант 2: Вы можете присоединиться к сообществу бегунов или велосипедистов в вашем городе. Так вы получите системные аэробные нагрузки — они лучше других помогают справиться с тревогой и стрессом. А еще найдете компанию единомышленников." <br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(011) = 3
  result.set(5, "Вариант 3: Присоединяйтесь к групповым тренировкам по танцам, зумбе или кроссфиту. Активные нагрузки помогают справляться с тревогой, а разнообразие занятий не даст заскучать." <br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(101) = 5
  result.set(1, "Вариант 4: Попробуйте групповые беговые тренировки, из часто организовывают самостоятельные тренеры по бегу. Активное движение хорошо снимает стресс, а приятная компания поднимет настроение." <br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(001) = 1
  result.set(6, "Вариант 5: Попробуйте тренировки через приложения. Большая библиотека позволит составить разнообразную программу, при этом вы сможете заниматься когда и где угодно."<br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(110) = 6
  result.set(2, "Вариант 6: Попробуйте начать бегать или освоить велосипед. Регулярная активность снижает уровень стресса и помогает бороться с тревогой."<br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(010) = 2
  result.set(4, "Вариант 7: Посмотрите в сторону персональных тренировок по танцам, кроссфиту или другим активным направлениям. И разнообразие, и антистресс."<br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(100) = 4
  result.set(0, "Вариант 8: Возможно, вам понравится хайкинг, сноуборд или велосипед. Сезонные увлечения не приедаются и могут даже стать приятной традицией. Главное — выбирать активные направления."<br> "Хотите уточнить результат? Вы можете записаться на консультацию. Хотите больше знать о тренировках для ментального здоровья? Вот несколько интересных статей об этом."); //(000) = 0
  
  function updateQuestionTitle() {
    console.log(finalMask);
  
    if (questionIndex < questions.length) {
      let question = questions[questionIndex];
      title.innerHTML = question.title; //выводим вопрос
      leftButton.value = question.left; // меняем текст вопроса слева
      rightButton.value = question.right; // меняем текст вопроса справа
    } else {
      console.log("Ваш балл: " + result.get(finalMask));
    }
  }
  
  document.addEventListener("DOMContentLoaded", updateQuestionTitle); // при загрузке страницы выводим вопрос 1 с индексом [0]
  
  //переключение вопросов при нажатии на кнопку слева:
  document.getElementById("question-left").addEventListener("click", function () {
    if (questionIndex >= questions.length) {
      return;
    }
  
    finalMask = finalMask | (1 << questionIndex); //получаем код результата; сдвиг в двоичном коде: (0|1=>1 1|10=>11 11| 100=>111)
  
    questionIndex++;
    updateQuestionTitle();
  });
  
  //переключение вопросов при нажатии на кнопку справа:
  document
    .getElementById("question-right")
    .addEventListener("click", function () {
      if (questionIndex >= questions.length) {
        return;
      }
  
      questionIndex++;
      updateQuestionTitle();
    });