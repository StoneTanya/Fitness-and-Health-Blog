import navBar from "./navigation.html";
import { SertSlider } from "../gallery/index";
import { startPopup } from "../popup/popup";
import contentSertificates from "../gallery/slider.html";

export default function ComponentNav() {
    const navDiv = document.getElementById('navigation');
    navDiv.innerHTML = navBar;

    document.querySelector(".open-popup").addEventListener("click", (event) => {
        event.preventDefault();
        SertSlider(startPopup(contentSertificates));
    });
};



