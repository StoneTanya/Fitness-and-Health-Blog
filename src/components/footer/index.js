import footer from "./footer.html";
import { startPopup } from "../popup/popup";


export default function ComponentFooter() {
    const footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = footer;
    document.addEventListener('DOMContentLoaded', (event) => {
        event.preventDefault();
        startPopup();
    });
}

