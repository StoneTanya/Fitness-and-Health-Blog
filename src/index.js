import _ from "lodash";
import "./style.scss";
import "bootstrap";
import template from "./template.html";
import ComponentTestPurpose from "./components/testPurposeBlock/testPurpose";
import ComponentNav from "./components/navigation";
import ComponentAbout from "./components/about";
import {startPopup} from "./components/popup/popup";
import {SertSlider} from "./components/gallery/index";

// import {ComponentPopup} from "./components/testPurposeBlock/testPurpose";
// import ComponentFooter from "./components/footer";
import ComponentStartTest from "./components/startTest";


document.innerHTML = template;
ComponentNav();
ComponentAbout();
ComponentTestPurpose();
ComponentStartTest();
startPopup();
SertSlider();
// ComponentPopup();
// ComponentFooter();


