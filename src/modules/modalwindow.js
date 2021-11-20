function closeModal() {
    setTimeout(() => {
        document.querySelector(".modal").classList.remove("modal__active")
    }, 2000)
}
function modalWindow() {
    ///Обработчик на модальное окно
    document.querySelector(".submit").addEventListener("click", () => {
        let form = document.forms[0];
        if (form.name.value && form.email.value && form.project.value != '') {
            document.querySelector(".modal").classList.toggle("modal__active");
            document.querySelector(".modal__buttons").style.display = "none";
        }
    })
}
export default modalWindow;
export {closeModal};