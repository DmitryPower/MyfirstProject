function forms() {
    // форма загрузки файла
    let select_file = document.querySelector("#select_file");
    let cancel = document.querySelector(".cancel");

    select_file.addEventListener("change", function (e) {
        if (this.files && this.files.length >= 1) {
            document.querySelector(".file__status").textContent = `${this.files[0].name}`;
            document.querySelector(".input__wrapper__buttons").classList.add("cancel__active");
        }
        else {
            document.querySelector(".input__wrapper__buttons").classList.remove("cancel__active");
        }
    })
    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        select_file.value = "";
        document.querySelector(".input__wrapper__buttons").classList.remove("cancel__active");
    })
}

export default forms;