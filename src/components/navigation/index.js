import nav from "./index.html";
import {SertSlider} from "../gallery/index";
import {PopupSlider} from "../gallery/index";

export default function ComponentNav() {
    const navDiv = document.getElementById('navigation');
    navDiv.innerHTML = nav;
};

export function ComponentSliderPopup() {
    let openSlider = document.getElementById('open-popup');
    
    openSlider.addEventListener('click', function(e) {            
        e.preventDefault();                  
        PopupSlider();            // И для самого окна
    });
    SertSlider();
};