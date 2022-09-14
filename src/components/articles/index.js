import articlesDiv from "./index.html";

export default function ComponentArticles() {
  const articlesBlock = document.getElementById("articles");
  articlesBlock.innerHTML = articlesDiv;
}
