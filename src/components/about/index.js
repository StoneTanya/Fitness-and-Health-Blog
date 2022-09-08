import about from "./index.html";
import mainPhoto from "../../photo/IMG_4466.jpg";

export default function ComponentAbout() {
    const aboutDiv = document.getElementById('about');
    aboutDiv.innerHTML = about;
    
    const aboutPhoto = new Image();
    aboutPhoto.className = "col-6";
    aboutPhoto.src = mainPhoto;
    aboutDiv.appendChild(aboutPhoto);
}

