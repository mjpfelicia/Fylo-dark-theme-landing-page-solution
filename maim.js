const submit = document.querySelector('.footer__get-btn');
const input = document.querySelector('#email');
const errorMsg = document.querySelector('.footer__get-error');

const emailValidation = (e) => {

    e.preventDefault();
    console.log({ errorMsg });
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value == "") {
        errorMsg.innerHTML = "Email address cannot be empty";
    } else if (!validEmail.test(input.value)) {
        errorMsg.innerHTML = "Please enter a valid email address";
    } else {
        errorMsg.innerHTML = "";
    }
};

submit.addEventListener('click', emailValidation);