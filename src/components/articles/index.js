import articlesDivMental from "./articlesMental.html";
import articlesDivFigure from "./articlesFigure.html";

export function ComponentArticlesMental() {
  const articlesBlockM = document.getElementById("articles_block");
  articlesBlockM.innerHTML = articlesDivMental;
};

export function ComponentArticlesFigure() {
  const articlesBlockF = document.getElementById("articles_block");
  articlesBlockF.innerHTML = articlesDivFigure;
}