import navBar from "./navigation.html";
import { SertSlider } from "../gallery/index";


export default function ComponentNav() {
    const navDiv = document.getElementById('navigation');
    navDiv.innerHTML = navBar;

    document.querySelector(".open-popup").addEventListener("click", (event) => {
        event.preventDefault();
        SertSlider();
    });
};



