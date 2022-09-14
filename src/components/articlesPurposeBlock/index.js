import mental from "./articlesPurposeBlock.html"
import {ComponentArticlesMental} from "../articles/index";
import { ComponentArticlesFigure } from "../articles/index";



export default function ComponentArticlesPurpose() {
    const mentalArticles = document.getElementById("articles");
    mentalArticles.innerHTML = mental;
    
    const mentalLink = document.getElementById("mentalArticles");
    mentalLink.addEventListener("click", function(e) {
        e.preventDefault();
        ComponentArticlesMental();
    });

    const figureLink = document.getElementById("figureArticles");
    figureLink.addEventListener("click", function(e) {
        e.preventDefault();
        ComponentArticlesFigure()
    });
}