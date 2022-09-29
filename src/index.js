import "./style.scss";
import "bootstrap";
import template from "./template.html";
import ComponentTestPurpose from "./components/testPurposeBlock/testPurpose";
import ComponentNav from "./components/navigation";
import ComponentAbout from "./components/about";
import ComponentFooter from "./components/footer";
import ComponentStartTest from "./components/startTest";
import ComponentArticlesPurpose from "./components/articlesPurposeBlock/index";
import ComponentIntro from "./components/intro/intro";

document.innerHTML = template;
ComponentNav();
ComponentIntro();
ComponentAbout();
ComponentTestPurpose();
ComponentStartTest();
ComponentArticlesPurpose();
ComponentFooter();