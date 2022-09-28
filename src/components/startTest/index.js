import startTest from "./index.html";
// import ComponentTestPurpose from "../testPurposeBlock/testPurpose";

export default function ComponentStartTest() {
  const testStart = document.getElementById("test_start");
  testStart.innerHTML = startTest;

  let buttonStartTest = document.getElementById("buttonStartTest");
  let testPurposeDiv = document.getElementById("test__block");
  testPurposeDiv.style.display = "none";

  buttonStartTest.addEventListener("click", function (e) {
    e.preventDefault();
    testPurposeDiv.style.display = "block";
    window.scrollBy(0, 400)
    let result = document.getElementById("result");
    if (result != null) {
      result.innerHTML = "";
    }

    let advise = document.getElementById("quiz__advise");
    advise.innerHTML = "";

    let question = document.getElementById("quiz__wrapper");
    question.innerHTML = "";

    let headContent = document.getElementById("head__content");
    if (headContent != null) {
      headContent.innerHTML = "";
    }

    let quizButtons = document.getElementById("quiz__buttons");
    if (quizButtons != null) {
      quizButtons.innerHTML = "";
    }
  });
}
