import nav from "./index.html";

export default function ComponentNav() {
    const navDiv = document.getElementById('navigation');
    navDiv.innerHTML = nav;
};