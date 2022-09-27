import { ComponentArticlesFigure } from "../articles/index";
import cheatListGymContent from "./cheatGym.html";
import { startPopup } from "../popup/popup";
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

let gymCheat = "";
gymCheat += `<div id="">
    <p>Вы можете <a href="#" id="openCheatGym">скачать шпаргалку по тренажерке</a></p>
    </div>`;

//Массив с результатами
const results = [
  new Result(
    "Вам подойдут персональные тренировки онлайн или заочное сопровождение в тренажерном зале. Так вы сможете заниматься из любой точки мира, не прерывая процесс." +
      `${gymCheat}`,
    "11"
  ),
  new Result(
    "Отдайте предпочтение онлайн персональным тренировкам: только вы и тренер в удобное время и в любом месте.",
    "10"
  ),
  new Result(
    "Идеальный вариант — очные занятия с тренером в тренажерном зале. И технику поставите, и над дисциплиной поработаете." +
      `${gymCheat}`,
    "01"
  ),
  new Result(
    "Вы можете попробовать заниматься очно или выбрать заочное сопровождение в тренажерном зале. Легче всего прогрессировать за счет увеличения рабочего веса. Дома вы быстро упретесь в «потолок»." +
      `${gymCheat}`,
    "00"
  ),
];

//Массив с вопросами
const questions = [
  new Question("Часто ли вы путешествуете и/или переезжаете?", [
    new Answer("Да, я часто в разъездах", "1"),
    new Answer("Нет, я веду оседлый образ жизни", "0"),
  ]),
  new Question("Комфортно ли вам тренироваться в присутствии других людей?", [
    new Answer("Да, мне безразлично присутствие других людей", "1"),
    new Answer("Нет, я стесняюсь в присутствии других людей", "0"),
  ]),
];

//Обновление теста
function createQuiz(test) {
  const headElem = document.getElementById("head__content");
  const buttonsElem = document.getElementById("quiz__buttons");

  //Проверяем, есть ли ещё вопросы
  if (test.current < test.questions.length) {
    headElem.innerHTML = test.questions[test.current].text; //Если есть, меняем вопрос в заголовке
    buttonsElem.innerHTML = ""; //Удаляем старые варианты ответов

    for (let i = 0; i < test.questions[test.current].answers.length; i++) {
      //Создаём кнопки для новых вариантов ответов
      let btn = document.createElement("button");
      btn.className = "quiz__button";
      btn.innerHTML = test.questions[test.current].answers[i].text;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        test.click(i);
        createQuiz(test);
      });
      buttonsElem.appendChild(btn);
    }
  } else {
    //Если это конец, то выводим результат
    buttonsElem.innerHTML = "";
    headElem.innerHTML = test.results[test.result].text;

    //блок с "советами" и ссылками на статьи и запись на консультацию
    let adviseField = document.getElementById("quiz__advise");

    let out = "";
    out += `<div id="quiz__advise">
                <div id="quiz__advise__content">
                    <h3>Хотите уточнить результат?</h3>   
                    <p>Вы можете <a href="#" class="sign_up">Записаться на консультацию</a></p>
                    <h3>Хотите больше знать о том, как тренировки влияют на фигуру?</h3>   
                    <p>Вот <a href="#articles_figure" id="openArticlesFigure">несколько интересных статей об этом</a></p>
                    </div>
            </div>`;
    adviseField.innerHTML = out;

    document
      .getElementById("openArticlesFigure")
      .addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollBy(0, 1100);
        ComponentArticlesFigure();
      });

    document.getElementById("openCheatGym").addEventListener("click", (e) => {
      e.preventDefault();
      startPopup(cheatListGymContent);
    });

    document.querySelector(".sign_up").addEventListener("click", (event) => {
      event.preventDefault();
      startPopup(signUpContent);
    });
  }
}

export function startTest3() {
  const test = new Test(questions, results); //Экземпляр теста
  createQuiz(test);
}
