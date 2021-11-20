import {closeModal} from './modalwindow';
    
function bindPostData(form) {
        const postData = async (url, data) => {
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: data,
            });
            if (!result.ok) {
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);
            }
            return await result.json();
        }
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()))
            document.querySelector(".modal__content").textContent = "Loading...";
    
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    document.querySelector(".modal__content").textContent = "Thanks for your appeal!We will contact you!";
                    closeModal();
                    console.log(data);
    
                }).catch(() => {
                    document.querySelector(".modal__content").textContent = "Error!Try latter!";
    
    
                }).finally(() => {
                    form.reset();
                    closeModal();
                })
        })
    }
    let getData = async (url) => {
        let result = await fetch(url, {
            method: "GET",
        })
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }
        return await result.json();
    }
export {bindPostData};
export {getData}
    


    