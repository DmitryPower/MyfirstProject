    class Blog {
        constructor(date, name, id) {
            this.date = date;
            this.name = name;
            this.id = id;
        }
        render() {
            let dates = document.querySelectorAll(".blog__date");
            let names = document.querySelectorAll(".blog__text h3");
            dates[this.id - 1].textContent = this.date;
            names[this.id - 1].textContent = this.name;
        }
    }


export default Blog;
