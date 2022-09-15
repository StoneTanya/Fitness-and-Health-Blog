import about from "./about.html";
import mainPhoto from "../../photo/IMG_9600.JPG";

export default function ComponentAbout() {
    const aboutDiv = document.getElementById('about');
    aboutDiv.innerHTML = about;
    
    const aboutPhoto = new Image();
    aboutPhoto.className = "col-md-6 col-12";
    aboutPhoto.src = mainPhoto;
    aboutDiv.appendChild(aboutPhoto);
}

