import articlesDivMental from "./articlesMental.html";
import articlesDivFigure from "./articlesFigure.html";

export function ComponentArticlesMental() {
  const articlesBlockM = document.getElementById("articles_block");
  articlesBlockM.innerHTML = articlesDivMental;
  let readMoreBtns = document.getElementsByClassName("read_more"); 
  for(let btn of readMoreBtns) 
  btn.onclick=expandArticle;
}

export function ComponentArticlesFigure() {
  const articlesBlockF = document.getElementById("articles_block");
  articlesBlockF.innerHTML = articlesDivFigure;
  let readMoreBtns = document.getElementsByClassName("read_more"); 
  for(let btn of readMoreBtns) 
  btn.onclick=expandArticle;
}

function expandArticle(n){
  let e = n.target;     //кнопка
  e.toggleAttribute("data-collapsed");    // класс бутстрапа collapsed
  console.log(e);

  let t = e.getAttribute("data-collapsed")==="", 
  s = e.parentNode,   //родитель с классом summary
  o = s.parentNode;   // родитель родителя
  console.log(t);
  console.log(s);
  console.log(o);
//тернарный оператор - если есть указанный класс, кнопка развернуть - и скрол, если нет - кнопка свернуть
  o.classList.toggle("articles__content--open"), 
  t ? (e.innerHTML="+ Развернуть", window.scrollTo(0, o.offsetTop-150)):(e.innerHTML="- Свернуть")
}