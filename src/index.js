import Blog from '../src/modules/blog_cards';
import forms from '../src/modules/form';
import modalWindow from '../src/modules/modalwindow';
import navBtn from '../src/modules/navbtn';
import slider from '../src/modules/slider';
import {bindPostData} from './modules/services';
import {getData} from './modules/services';
window.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll(".commentator__card"),
        slidesWrapper = document.querySelector(".commentator__card__wrapper"),
        slidesFiled = document.querySelector(".commentator__card-inner"),
        slideIndicators = document.querySelectorAll("#circle"),
        ActiveSelectorIndicator = 'selected',
        SelectorIndicator = 'circle';
    forms();
    modalWindow();
    navBtn();
    slider(slides, slidesWrapper, slidesFiled, slideIndicators, ActiveSelectorIndicator, SelectorIndicator);
    bindPostData(document.forms[0]);
    getData('http://localhost:3000/news')
        .then(data => data.forEach(obj => {
            new Blog(obj.date, obj.name, obj.id).render();
        }))
})
