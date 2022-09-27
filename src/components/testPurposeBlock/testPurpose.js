import testDiv from "./testBlock_Purpose.html";
import quiz_2 from "../quiz_1_3/quiz-2.html";
import quiz_4 from "../quiz_1_3/quiz-4.html";
import testHobby from "../quiz_1_3/quiz_wrapper.html";
import signUpContent from "../quiz_1_3/signup.html";

import { startTest1 } from "../quiz_1_3/quiz-1";
import { startTest2 } from "../quiz_1_3/quiz-2";
import { startTest3 } from "../quiz_1_3/quiz-3";
import { startPopup } from "../popup/popup";

export default function ComponentTestPurpose() {
  const testPurposeDiv = document.getElementById("test__block");
  testPurposeDiv.innerHTML = testDiv;

  let buttonHobby = document.getElementById("button__hobby");
  let buttonStress = document.getElementById("button__stress");
  let buttonLook = document.getElementById("button__look");
  let buttonMedicine = document.getElementById("button__medicine");
  const quizDiv = document.getElementById("quiz__wrapper");

  buttonHobby.addEventListener("click", function (e) {
    e.preventDefault();
    testPurposeDiv.style.display = "none";
    quizDiv.innerHTML = testHobby;
    startTest1();
  });

  buttonStress.addEventListener("click", function (e) {
    e.preventDefault();
    testPurposeDiv.style.display = "none";
    quizDiv.innerHTML = quiz_2;
    startTest2();
  });

  buttonLook.addEventListener("click", function (e) {
    e.preventDefault();
    testPurposeDiv.style.display = "none";
    quizDiv.innerHTML = testHobby;
    startTest3();
  });

  buttonMedicine.addEventListener("click", function (e) {
    e.preventDefault();
    testPurposeDiv.style.display = "none";
    quizDiv.innerHTML = quiz_4;

    const signUpLink = document.querySelector(".sign_up");
    console.log(signUpLink);

    signUpLink.addEventListener("click", (event) => {
        event.preventDefault();
        startPopup(signUpContent);
      });
  });
}