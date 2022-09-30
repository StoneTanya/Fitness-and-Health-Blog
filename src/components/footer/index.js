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
    let pdf = document.querySelector(".pdf__block"); 
    pdf.classList.add('active');
    // let newWindow = open('', 'example', 'width=300,height=300')
    // newWindow.focus();
    
    // alert(newWindow.location.href); // (*) about:blank, загрузка ещё не началась
    // newWindow.onload = function() {
    //     let privacy = `<object class="pdf__block" data="../../image/materials/PrivacyPolicy.pdf" type="application/pdf" width="768" height="1024">
    //         <p>
    //             Ваш браузер не поддерживает PDF-файлы.
    //             <a href="../../image/materials/PrivacyPolicy.pdf" >Загрузить Политика конфиденциальности</a>.
    //         </p>
    //     </object>`;
    //     newWindow.document.getElementById("pdf__window").insertAdjacentHTML('afterbegin', privacy);
    // };


//     let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
//     width=600,height=300,left=100,top=100`;
//     let pdfWindow = window.open("", "Политика конфиденциальности", params);


};

