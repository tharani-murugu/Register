const form = document.querySelector('#form');
const username = document.querySelector('#username');
const mailid = document.querySelector('#mailid');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameval = username.value.trim();
    const emailval = mailid.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    // Username validation
    if (usernameval === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // Email validation with regex
    if (emailval === '') {
        setError(mailid, 'Email is required');
    } else if (!isValidEmail(emailval)) {
        setError(mailid, 'Enter a valid email address');
    } else {
        setSuccess(mailid);
    }

    // Password validation
    if (passwordval === '') {
        setError(password, 'Password is required');
    } else if (passwordval.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    // Confirm password validation
    if (cpasswordval === '') {
        setError(cpassword, 'Confirm password is required');
    } else if (cpasswordval !== passwordval) {
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }
}

function isValidEmail(email) {
    // Simple email regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function setError(element, message) {
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
    errorElement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setSuccess(element) {
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
    errorElement.innerText = '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}
