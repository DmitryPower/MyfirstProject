function navBtn() {
    let navBtn = document.querySelector(".nav_btn");//событие на кнопку
    navBtn.addEventListener('click', () => {
        let nav = document.querySelector("nav ul")
        if (window.getComputedStyle(nav).display == "none") {
            navBtn.classList.toggle('btn_active');
            if (document.querySelector('.nav__menu__wrapper').style.display == "block") {
                document.querySelector('.nav__menu__wrapper').style.display = "none";
            }
            else {
                document.querySelector('.nav__menu__wrapper').style.display = "block";
            }
        }
    })
    window.addEventListener('resize', () => {
        if (window.getComputedStyle(document.querySelector("nav ul")).display == "flex") {
            navBtn.classList.remove('btn_active');
            document.querySelector('.nav__menu__wrapper').style.display = "none";
        }
    })
}
export default navBtn;