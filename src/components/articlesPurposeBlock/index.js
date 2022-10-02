import mental from "./articlesPurposeBlock.html";
import { ComponentAtricles } from "../articles/index";

export default function ComponentArticlesPurpose() {
  const mentalArticles = document.getElementById("articles");
  mentalArticles.innerHTML = mental;
  ComponentAtricles();
}
