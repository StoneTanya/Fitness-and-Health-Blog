import _ from "lodash";
import "./style.scss";
import "bootstrap";
import template from "./template.html";
import ComponentTestPurpose from "./components/testPurposeBlock/testPurpose";

document.innerHTML = template;

ComponentTestPurpose();
