const PORT = '3000';
const HOST = 'http://44.201.57.226'; //use 'http://localhost' during development

const form = document.getElementById('user-form');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('err-msg');
const successMsg = document.getElementById('success-msg');

function resetPassword(e){
    e.preventDefault();
    const user = {
        password: passwordInput.value,
        link: window.location.href
    };
    axios.post(`${HOST}:${PORT}/password/reset-password`, user)
    .then((res) => {
        const msg = res.data.msg;
        showSuccessInDOM(msg);
        passwordInput.value = '';
    })
    .catch((err) => {
        const msg = err.response.data.msg ? err.response.data.msg : 'Something went wrong :(';
        showErrorInDOM(msg);
    });
}

function showSuccessInDOM(msg){
    successMsg.innerText = msg;
    setTimeout(() => successMsg.innerText = '', 3000);
}

function showErrorInDOM(msg){
    errorMsg.innerText = msg;
    setTimeout(() => errorMsg.innerText = '', 3000);
}

form.addEventListener('submit', resetPassword);