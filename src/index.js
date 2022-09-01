import _ from 'lodash';
import './style.scss';
import 'bootstrap';
import html from "./index.html";
console.log(html)

document.getElementById("content").innerHTML = html

let title = document.querySelector('h1')
console.log(title)
title.innerHTML = "Lol"

const results = {
  "01": "Text",
  "10": "Text",
  "00": "Text"
}
results[score]

const questions = [
  {"question": "Text", answers: [{"answer": "Yes", value: "1"}, {}]}
]
questions[0]

results = ["Text1", "Text2", "Text3"]
results[score]
results[4]