import footer from "./footer.html";
import { SertSlider } from "../gallery/index";
import { startPopup } from "../popup/popup";
import privacy from "./privacyPolicy.html";

export default function ComponentFooter() {
  console.log("fooooooooooter");

  const footerDiv = document.getElementById("footer");
  footerDiv.innerHTML = footer;

  footerDiv.querySelector(".open-popup").addEventListener("click", (event) => {
    event.preventDefault();
    SertSlider();
  });

  document.getElementById("openPrivacy").addEventListener("click", (event) => {
    event.preventDefault();
    startPopup(privacy);
  });
}
