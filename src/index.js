import _ from "lodash";
import "./style.scss";
import "bootstrap";
import template from "./template.html";
import ComponentTestPurpose from "./components/testPurposeBlock/testPurpose";
import ComponentNav from "./components/navigation";
import ComponentAbout from "./components/about";
import ComponentFooter from "./components/footer";
import ComponentStartTest from "./components/startTest";
import ComponentArticlesPurpose from "./components/articlesPurposeBlock/index";

document.innerHTML = template;
ComponentNav();
ComponentAbout();
ComponentTestPurpose();
ComponentStartTest();
ComponentArticlesPurpose();
ComponentFooter();
