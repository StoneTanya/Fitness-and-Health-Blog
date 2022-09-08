import html from "./template.html";



export default function ComponentTest() {
  const testDiv = document.getElementById("Test");
  testDiv.innerHTML = html;
}