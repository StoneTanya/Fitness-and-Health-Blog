import nav from "./navigation.html";
// import {Popup} from "../popup/popup";

export default function ComponentNav() {
    const navDiv = document.getElementById('navigation');
    navDiv.innerHTML = nav;
};

// export function ComponentSliderPopup() {
//     let openPopup = document.querySelector('.open-popup');

//     openPopup.addEventListener('click', function(e) {            
//             e.preventDefault();                  
//             Popup();            // И для самого окна
//         })
// };