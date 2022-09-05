export function test1() {
class Test {
    constructor(questions, results) {
        this.questions = questions;     //Массив с вопросами
        this.results = results;  //массив с результатами       
        this.score = "";      //Количество набранных очков
        this.result = 0;     //Номер результата из массива
        this.current = 0;    //Номер текущего вопроса
    }

    Click(index) {
        //Добавляем очки
        let value = this.questions[this.current].Click(index);
        this.score += value;
        console.log(this.score);
        this.Next();
    }
    
    //Переход к следующему вопросу
    Next() {
        this.current++;
        if (this.current >= this.questions.length) {
            this.End();
        }
    }

    //Если вопросы кончились, проверка результата 
    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
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
    Click(index) {
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

    Check(value) {
        if (this.value === value) {
            return true;
        }
        else {
            return false;
        }
    }
}

//Массив с результатами
const results =
    [
        new Result("Вам подойдёт участие в любительских командах.  Поищите в вашем городе команды, например, по футболу, баскетболу, хоккею, американскому футболу, кроссфиту, танцам.", "111"),
        new Result("Вам подойдут практически любые групповые танцевальные тренировки. Если вы не готовы к танцам, можно попробовать зумбу.", "110"),
        new Result("Обратите внимание на групповые тренировки по бегу, единоборствам, тяжелой атлетике, кроссфиту. Здесь вы сможете и найти компанию единомышленников, и даже выступить на соревнованиях.", "101"),
        new Result("Вероятно, вам подойдут групповые занятия разными видами йоги. Например, хатха-йога для спокойных практик или yoga-flow, если вы любите активное движение.", "100"),
        new Result("Вам стоит попробовать скалолазание, сёрфинг, мотокросс или другие экстримальные виды спорта.", "011"),
        new Result("Вам подойдут индивидуальные практики yoga-flow, animal-flow, танцевальных направлений, а также экстремальные виды спорта на уровне хобби.", "010"),
        new Result("Возможно, вам стоит обратить внимание на бег, велосипед, пауэрлифтинг, тяжелую атлетику и другие классические сольные направления.", "001"),
        new Result("Вам стоит попробовать йогу, но возможно вас заинтересуют и планомерные тренировки по бегу, тяжелой атлетике, пауэрлифтингу и другим сольным спортивным направлениям.", "000"),
    ];

//Массив с вопросами
const questions =
    [
        new Question("Вы хотели бы тренироваться в компании или самостоятельно?",
            [
                new Answer("В компании", "1"),
                new Answer("Самостоятельно", "0")
            ]),
        new Question("Вам важно, чтобы тренировки отличались друг от друга, или вы готовы придерживаться системы?",
            [
                new Answer("Хочу разнообразия", "1"),
                new Answer("Предпочитаю системность", "0")
            ]),
            new Question("Хотели бы вы в дальнейшем выступать на соревнованиях?",
            [
                new Answer("Мне это интересно", "1"),
                new Answer("Мне это не интересно", "0")
            ]),
    ];

//Экземпляр теста
const test = new Test(questions, results);

Update();

//Обновление теста
function Update() {
    const headElem = document.getElementById('head');
    const buttonsElem = document.getElementById('buttons');
    const pagesElem = document.getElementById('pages');
    //Проверяем, есть ли ещё вопросы
    if (test.current < test.questions.length) {

        //Если есть, меняем вопрос в заголовке
        headElem.innerHTML = test.questions[test.current].text;

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";
        //Создаём кнопки для новых вариантов ответов
        for (let i = 0; i < test.questions[test.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";
            btn.innerHTML = test.questions[test.current].answers[i].text;
            btn.setAttribute("index", i);
            buttonsElem.appendChild(btn);
        }

        //Выводим номер текущего вопроса
        pagesElem.innerHTML = (test.current + 1) + " / " + test.questions.length;

        //Вызываем функцию, которая прикрепит события к новым кнопкам
        Init();
    }
    else {
        //Если это конец, то выводим результат
        buttonsElem.innerHTML = "";
        headElem.innerHTML = test.results[test.result].text;
        pagesElem.innerHTML = "Очки: " + test.score;
    }
}

function Init() {
    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {
        //Прикрепляем событие для каждой отдельной кнопки
        //При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) {
    //Получаем номер правильного ответа
    let correct = test.Click(index);

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}
}