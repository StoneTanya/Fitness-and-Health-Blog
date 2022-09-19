import introContent from "./intro.html";

export default function ComponentIntro() {
    const introDiv = document.getElementById('intro');
    introDiv.innerHTML = introContent;
}