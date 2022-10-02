import footer from "./footer.html";
import { SertSlider } from "../gallery/index";
import { startPopup } from "../popup/popup";
import privacy from "./privacyPolicy.html";
import contentSertificates from "../gallery/slider.html";

export default function ComponentFooter() {
  const footerDiv = document.getElementById("footer");
  footerDiv.innerHTML = footer;

  footerDiv.querySelector(".open-popup").addEventListener("click", (event) => {
    event.preventDefault();
    SertSlider(startPopup(contentSertificates));
    console.log(contentSertificates);
  });

  document.getElementById("openPrivacy").addEventListener("click", () => {
    startPopup(privacy, "long");
    let pdf = document.querySelector(".pdf__div");
    pdf.classList.add("pdf__active");
  });
}

// export function pdfViewer() {
//     let newWindow = window.open('', 'example', 'width=300,height=300')
//     newWindow.focus();
//     newWindow.onload = function() {
//         newWindow.body.insertAdjacentHTML('afterbegin', privacy);
//     };

// const pdfEl = document.getElementById("pdf__window");
// pdfEl.innerHTML = privacy;
// let pdf = document.querySelector(".pdf__block");
// pdf.classList.add('active');

// alert(newWindow.location.href); // (*) about:blank, загрузка ещё не началась

// };
