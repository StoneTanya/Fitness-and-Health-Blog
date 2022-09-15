import nav from "./navigation.html";
import { SertSlider } from "../gallery/index";


export default function ComponentNav() {
    const navDiv = document.getElementById('navigation');
    navDiv.innerHTML = nav;
    navDiv.querySelector(".open-popup").addEventListener("click", (event) => {
        event.preventDefault();
        SertSlider();
    })
};

// export function ComponentSliderPopup() {
//     let openPopup = document.querySelector('.open-popup');

//     openPopup.addEventListener('click', function(e) {            
//             e.preventDefault();                  
//             Popup();            // И для самого окна
//         })
// };