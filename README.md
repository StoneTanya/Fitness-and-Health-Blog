# Fitness-and-Health-Blog
Сайт для фитнес-тренера: адаптивная версия, для ПК и мобильных устройств. Приложение собрано с помощью бандлера Webpack без использования библиотек в команде из двух разработчиц.<br> На сайте реализован тест на JavaScript, выдающий пользователю рекомендацию по виду тренировки исходя из выбранных им вариантов ответа об его предпочтениях. Механика тестирования построена на двух способах: [(1) способ](https://github.com/StoneTanya/Fitness-and-Health-Blog/blob/61d119831f1f15d04de889f8caee2b2fd6db5513/src/components/quiz_1_3/quiz-1.js#L5), [(2) способ](https://github.com/StoneTanya/Fitness-and-Health-Blog/blob/61d119831f1f15d04de889f8caee2b2fd6db5513/src/components/quiz_1_3/quiz-2.js#L8).
Сайт также содержит блог о физическом и ментальном здоровье: свертывание и развертывание статей блога реализовано также через JavaScript: вызывается [функция](https://github.com/StoneTanya/Fitness-and-Health-Blog/blob/61d119831f1f15d04de889f8caee2b2fd6db5513/src/components/articles/index.js#L49), присваивающая элементу bootstrap-класс "data-collapsed", а правильное отображение элемента на экране обеспечивается [тернарным оператором](https://github.com/StoneTanya/Fitness-and-Health-Blog/blob/61d119831f1f15d04de889f8caee2b2fd6db5513/src/components/articles/index.js#L54).   

## Содержание
- [Технологии](#технологии)
- [Deployment](#deployment)
- [Источники](#источники)

## Технологии
- JavaScript
- HTML5
- [Webpack](https://webpack.js.org/guides/getting-started/#basic-setup)
- [Bootstrap]( https://getbootstrap.com/)

## Deployment
Опубликованная версия проекта доступна по ссылке: [margolen.github.io/](https://margolen.github.io/)

## Источники
Весь контент сайта (материалы для статей, фото, изображения) предоставлен заказчицей. Дизайн сайта основан на макете [figma](https://www.figma.com/file/lmupEsCh0AQrgb5yoB52qn/Mirro?type=design&node-id=2-2&mode=design)https://www.figma.com/file/lmupEsCh0AQrgb5yoB52qn/Mirro?type=design&node-id=2-2&mode=design).

