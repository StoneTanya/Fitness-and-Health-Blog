import _ from 'lodash';
import './style.scss';
import 'bootstrap';
import template from "./template.html";
import {test3 } from './test3';
import { test1 } from './test1';
import testBlock from "./test_block.html";

document.body.innerHTML = template;
document.getElementById('test__block').innerHTML = testBlock;

let buttonHobby = document.getElementById('button__hobby');
buttonHobby.addEventListener('click', function() {
    document.getElementById('test__block').style.display = 'none';
    document.getElementById('test__wrapper').style.display = 'block';
    test1();
});

let buttonLook = document.getElementById('button__look');
buttonLook.addEventListener('click', function() {
    document.getElementById('test__block').style.display = 'none';
    document.getElementById('test__wrapper').style.display = 'block';
    test3();
});

