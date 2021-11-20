function slider(slides, slidesWrapper, slidesFiled, slideIndicators, ActiveSelectorIndicator,SelectorIndicator) {
    let width = window.getComputedStyle(slidesWrapper).width,
        offset = 0,
        slideIndex = 0;

    window.addEventListener("resize", (e) => {
        width = window.getComputedStyle(slidesWrapper).width;
    });
    function OffsetTo() {
        offset = parseInt(width) * (slideIndex - 1);
        slidesFiled.style.transform = `translateX(-${offset}px)`;
    };
    slides.forEach(slide => {
        slide.style.width = width;
    })
    let timeSlider = setInterval(() => {
        if (slideIndex == slides.length) {
            slideIndex = 0;
        }
        slideIndex++;
        OffsetTo();
        document.querySelector(`.${ActiveSelectorIndicator}`).classList.remove(`${ActiveSelectorIndicator}`);
        slideIndicators[slideIndex - 1].classList.add(`${ActiveSelectorIndicator}`);
    }, 3000)// перелистывание слайдов

    document.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute("data-slide");
        slideIndex = slideTo;
        OffsetTo();
        if (e.target.id == `${SelectorIndicator}`) {
            document.querySelector(`.${ActiveSelectorIndicator}`).classList.remove(`${ActiveSelectorIndicator}`);
            e.target.classList.add(`${ActiveSelectorIndicator}`);
        }
    })//перелистывание на клик
}
export default slider;