import _ from "lodash";
import "./style.scss";
import "bootstrap";
import template from "./template.html";
import ComponentTestPurpose from "./components/testPurposeBlock/testPurpose";
import ComponentNav from "./components/navigation";
import ComponentAbout from "./components/about";
import ComponentSertSlider from "./components/gallery";
import ComponentFooter from "./components/footer";
import ComponentStartTest from "./components/startTest";
document.innerHTML = template;
ComponentNav();
ComponentAbout();
ComponentTestPurpose();
ComponentStartTest();
ComponentSertSlider();
ComponentFooter();


