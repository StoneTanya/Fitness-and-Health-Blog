import { startPopup } from "../popup/popup";
import checkListContent from "./checkList11Questions.html";
import signUpContent from "./signup.html";

class Test {
  constructor(questions, results) {
    this.questions = questions; //Массив с вопросами
    this.results = results; //массив с результатами
    this.score = ""; //Количество набранных очков
    this.result = 0; //Номер результата из массива
    this.current = 0; //Номер текущего вопроса
  }

  click(index) {
    //Добавляем баллы
    let value = this.questions[this.current].click(index);
    this.score += value;
    this.next();
  }

  //Переход к следующему вопросу
  next() {
    this.current++;
    if (this.current >= this.questions.length) {
      this.end();
    }
  }

  //Если вопросы кончились, проверка результата
  end() {
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].check(this.score)) {
        this.result = i;
      }
    }
  }
}

//Класс, представляющий вопрос
class Question {
  constructor(text, answers) {
    this.text = text;
    this.answers = answers;
  }
  click(index) {
    return this.answers[index].value;
  }
}

//Класс, представляющий ответ
class Answer {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

//Класс, представляющий результат
class Result {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }

  check(value) {
    if (this.value === value) {
      return true;
    } else {
      return false;
    }
  }
}

//Массив с результатами
const results = [
  new Result(
    "Вам подойдёт участие в любительских командах.  Поищите в вашем городе команды, например, по футболу, баскетболу, хоккею, американскому футболу, кроссфиту, танцам.",
    "111"
  ),
  new Result(
    "Вам подойдут практически любые групповые танцевальные тренировки. Если вы не готовы к танцам, можно попробовать зумбу.",
    "110"
  ),
  new Result(
    "Обратите внимание на групповые тренировки по бегу, единоборствам, тяжелой атлетике, кроссфиту. Здесь вы сможете и найти компанию единомышленников, и даже выступить на соревнованиях.",
    "101"
  ),
  new Result(
    "Вероятно, вам подойдут групповые занятия разными видами йоги. Например, хатха-йога для спокойных практик или yoga-flow, если вы любите активное движение.",
    "100"
  ),
  new Result(
    "Вам стоит попробовать скалолазание, сёрфинг, мотокросс или другие экстримальные виды спорта.",
    "011"
  ),
  new Result(
    "Вам подойдут индивидуальные практики yoga-flow, animal-flow, танцевальных направлений, а также экстремальные виды спорта на уровне хобби. ",
    "010"
  ),
  new Result(
    "Возможно, вам стоит обратить внимание на бег, велосипед, пауэрлифтинг, тяжелую атлетику и другие классические сольные направления.",
    "001"
  ),
  new Result(
    "Вам стоит попробовать йогу, но возможно вас заинтересуют и планомерные тренировки по бегу, тяжелой атлетике, пауэрлифтингу и другим сольным спортивным направлениям.",
    "000"
  ),
];

//Массив с вопросами
const questions = [
  new Question("Вы хотели бы тренироваться в компании или самостоятельно?", [
    new Answer("В компании", "1"),
    new Answer("Самостоятельно", "0"),
  ]),
  new Question(
    "Вам важно, чтобы тренировки отличались друг от друга, или вы готовы придерживаться системы?",
    [
      new Answer("Хочу разнообразия", "1"),
      new Answer("Предпочитаю системность", "0"),
    ]
  ),
  new Question("Хотели бы вы в дальнейшем выступать на соревнованиях?", [
    new Answer("Мне это интересно", "1"),
    new Answer("Мне это не интересно", "0"),
  ]),
];

//Обновление теста
function createQuiz(test) {
  const headElem = document.getElementById("head__content");
  const buttonsElem = document.getElementById("quiz__buttons");
  const answerElem = document.getElementById("quiz__result__content");
  //Проверяем, есть ли ещё вопросы
  if (test.current < test.questions.length) {
    headElem.innerHTML = test.questions[test.current].text; //Если есть, меняем вопрос в заголовке
    buttonsElem.innerHTML = ""; //Удаляем старые варианты ответов

    for (let i = 0; i < test.questions[test.current].answers.length; i++) {
      //Создаём кнопки для новых вариантов ответов
      let btn = document.createElement("button");
      btn.className = "quiz__button";
      btn.innerHTML = test.questions[test.current].answers[i].text;
      btn.addEventListener("click", () => {
        test.click(i);
        createQuiz(test);
      });
      buttonsElem.appendChild(btn);
    }
  } else {
    //Если это конец, то выводим результат
    buttonsElem.innerHTML = "";
    headElem.innerHTML = "";
    answerElem.classList.add("active");
    answerElem.innerHTML = test.results[test.result].text;

    let adviseField = document.getElementById("quiz__advise");
    let out = "";
    out += `<div class="pb-5 row d-flex justify-content-center">
            <div id="quiz__advise__content" class="col-8">
                <h3>Хотите уточнить результат?</h3>   
                <p>Вы можете <a class="link" href="#" id="openCheckList"> скачать чек-лист </a> «11 вопросов, которые нужно задать себе до тренировки»</p>
                <p><a href="#" class="link sign_up">Записаться на консультацию</a></p>
                </div>
        </div>`;
    adviseField.innerHTML = out;

    document
      .getElementById("openCheckList")
      .addEventListener("click", (event) => {
        event.preventDefault();
        startPopup(checkListContent);
      });
    document.querySelector(".sign_up").addEventListener("click", (event) => {
      event.preventDefault();
      startPopup(signUpContent);
    });
  }
}
export function startTest1() {
  const test = new Test(questions, results); //Экземпляр теста
  createQuiz(test);
}
