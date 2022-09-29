import footer from "./footer.html";
import { SertSlider } from "../gallery/index";
import { startPopup } from "../popup/popup";
import privacy from "./privacyPolicy.html";
import contentSertificates from "../gallery/slider.html";

export default function ComponentFooter() {
    const footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = footer;
    
    footerDiv.querySelector(".open-popup").addEventListener("click", (event) => {
        event.preventDefault();
        SertSlider(startPopup(contentSertificates));
        console.log(contentSertificates); 
    });
    
    document.getElementById("openPrivacy").addEventListener("click", () => {
        pdfViewer();
    });
}

export function pdfViewer() {
    const pdfEl = document.getElementById("pdf__window");
    pdfEl.innerHTML = privacy;
    // let pdf = document.querySelector(".pdf__block");            
    // pdf.classList.add('active');
};

