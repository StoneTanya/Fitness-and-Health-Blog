import about from "./about.html";
import mainPhoto from "../../photo/IMG_9600.JPG";

export default function ComponentAbout() {
    const aboutDiv = document.getElementById('about');
    aboutDiv.innerHTML = about;
    
    const aboutPhoto = new Image();
    aboutPhoto.className = "col-6";
    aboutPhoto.src = mainPhoto;
    aboutDiv.appendChild(aboutPhoto);
}

