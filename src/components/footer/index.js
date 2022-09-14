import footer from "./footer.html"
export default function ComponentFooter() {
    const footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = footer;
}