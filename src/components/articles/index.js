import articlesDivMental from "./articlesMental.html";
import articlesDivFigure from "./articlesFigure.html";

export function ComponentArticlesMental() {
  const articlesBlockM = document.getElementById("articles_block");
  articlesBlockM.innerHTML = articlesDivMental;
  subscribeReadMoreClick();
}

export function ComponentArticlesFigure() {
  const articlesBlockF = document.getElementById("articles_block");
  articlesBlockF.innerHTML = articlesDivFigure;
  subscribeReadMoreClick();
}

function subscribeReadMoreClick() {
  let readMoreBtns = document.querySelectorAll(".read_more");
  const hiddenArticles = document.getElementsByClassName(
    ".article__text_hidden"
  );
  let i = 0;

  readMoreBtns.forEach(function (btn) {
    btn.addEventListener("click", () => {
      console.log("check:" + readMoreBtns);
      hiddenArticles.style.color = "red";
    });
  });
}
