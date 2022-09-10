import startTest from "./index.html";
import ComponentTestPurpose from "../testPurposeBlock/testPurpose";

export default function ComponentStartTest() {
  const testStart = document.getElementById("test_start");
  testStart.innerHTML = startTest;

  let buttonStartTest = document.getElementById("buttonStartTest");
  let testPurposeDiv = document.getElementById("test__block");
  testPurposeDiv.style.display = "none";

  buttonStartTest.addEventListener("click", function () {
    testPurposeDiv.style.display = "block";
  });
}
