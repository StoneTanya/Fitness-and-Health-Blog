import _ from "lodash";
import "./style.scss";
import "bootstrap";

import template from "./template.html";
import ComponentTest from "./components/test"

import { startTest, Test, results } from "./test3";

document.body.innerHTML = template;

startTest();
console.log(results)
ComponentTest();
ComponentHeader();