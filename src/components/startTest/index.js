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

    let result = document.getElementById("result");
    result.innerHTML = "";

    let advise = document.getElementById("quiz__advise");
    advise.innerHTML = "";
    console.log("advise " + advise);

    let question = document.getElementById("quiz__wrapper");
    question.innerHTML = "";
  });
}
