const tabs = [
    "task-1",
    "task-2",
]


const setActiveTab = (tab) => {
    tabs.forEach((tabname, index) => {
        if (tabname === tab) {
            document.getElementById('floater').style.transform = `translateY(${index * 100}%)`;
            document.getElementsByClassName('nav-item')[index].classList.add("active");
            document.getElementById('content').style.transform = `translateY(-${index * 50}%)`;
        }
        else {
            document.getElementsByClassName('nav-item')[index].classList.remove("active");
        }
    });
}

const setPassword = () => {
    const msg = document.getElementById('password-msg');
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(password)) {
        console.log('===  script.js [25] ===',);
        msg.innerHTML = 'Strong Password';
        msg.classList.remove('error-msg');
        msg.classList.add('success-msg');
    }
    else {
        msg.innerHTML = 'Weak Password';
        msg.classList.remove('success-msg');
        msg.classList.add('error-msg');
    }
}

const setConPassword = () => {
    const msg = document.getElementById('confirm-password-msg');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password === confirmPassword) {
        msg.innerHTML = 'Passwords match';
        msg.classList.remove('error-msg');
        msg.classList.add('success-msg');
    }
    else {
        msg.innerHTML = 'Passwords do not match';
        msg.classList.remove('success-msg');
        msg.classList.add('error-msg');
    }



}



const validateForm1 = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const website = document.getElementById('website');
    const message = document.getElementById('message');
    const nameMsg = document.getElementById('name-msg');
    const emailMsg = document.getElementById('email-msg');
    const websiteMsg = document.getElementById('website-msg');
    const messageMsg = document.getElementById('message-msg');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const websiteRegex = /^(http|https):\/\/[^ "]+$/;



    if (!name.value) {
        nameMsg.innerHTML = 'Name is required';
        name.style.border = '1px solid red';
        nameMsg.classList.add('error-msg');
    }
    else {
        nameMsg.classList.remove('error-msg');
        name.style.border = '1px solid #ccc';
    }

    if (!email.value) {
        emailMsg.innerHTML = 'Email is required';
        email.style.border = '1px solid red';
        emailMsg.classList.add('error-msg');
    }
    else {
        emailMsg.classList.remove('error-msg');
        email.style.border = '1px solid #ccc';
    }

    if (!website.value) {
        websiteMsg.innerHTML = 'Website is required';
        website.style.border = '1px solid red';
        websiteMsg.classList.add('error-msg');
    }
    else {
        websiteMsg.classList.remove('error-msg');
        website.style.border = '1px solid #ccc';
    }

    if (!message.value) {
        messageMsg.innerHTML = 'Message is required';
        message.style.border = '1px solid red';
        messageMsg.classList.add('error-msg');
    }
    else {
        messageMsg.classList.remove('error-msg');
        message.style.border = '1px solid #ccc';
    }

    if (!emailRegex.test(email.value)) {
        emailMsg.innerHTML = 'Please enter a valid email';
        email.style.border = '1px solid red';
        emailMsg.classList.add('error-msg');
    }
    else {
        emailMsg.classList.remove('error-msg');
        email.style.border = '1px solid #ccc';
    }

    if (!websiteRegex.test(website.value)) {
        websiteMsg.innerHTML = 'Please enter a valid website';
        website.style.border = '1px solid red';
        websiteMsg.classList.add('error-msg');
    }
    else {
        websiteMsg.classList.remove('error-msg');
        website.style.border = '1px solid #ccc';
    }

    if (name.value && email.value && website.value && message.value && emailRegex.test(email.value) && websiteRegex.test(website.value)) {
        const generalMsg = document.getElementById('general-msg-2');
        generalMsg.style.display = 'block';
        generalMsg.classList.add('success-msg');
        generalMsg.innerHTML = 'Form submitted successfully!';
    }

}

const validateForm2 = () => {
    
    const email = document.getElementById('useremail');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const emailMsg = document.getElementById('useremail-msg');
    const passwordMsg = document.getElementById('password-msg');
    const confirmPasswordMsg = document.getElementById('confirm-password-msg');
    const generalMsg = document.getElementById('general-msg-2');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(email.value)) {
        emailMsg.innerHTML = password.value==='' ? 'Email is required' : 'Please enter a valid email';
        email.style.border = '1px solid red';
        emailMsg.classList.add('error-msg');
    } else {
        emailMsg.classList.remove('error-msg');
        email.style.border = '1px solid #ccc';
    }

    if (!passwordRegex.test(password.value)) {
        passwordMsg.innerHTML = !password.value ? 'Password is required' : 'Password is Weak';
        password.style.border = '1px solid red';
        passwordMsg.classList.add('error-msg');
    } else {
        passwordMsg.classList.remove('error-msg');
        password.style.border = '1px solid #ccc';
    }
 
    if (!passwordRegex.test(confirmPassword.value)) {
        confirmPasswordMsg.innerHTML = !confirmPassword.value?'Password is Required':'Password is Weak';
        confirmPassword.style.border = '1px solid red';
        confirmPasswordMsg.classList.add('error-msg');
        return;
    } else {
        confirmPasswordMsg.classList.remove('error-msg');
        confirmPassword.style.border = '1px solid #ccc';
    }

    if (password.value !== confirmPassword.value) {
        generalMsg.innerHTML = 'Passwords do not match';
        generalMsg.classList.add('error-msg');
        password.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
        generalMsg.style.display = 'block';
        return
    } else {
        generalMsg.style.display = 'none';
        generalMsg.classList.remove('error-msg');
        password.style.border = '1px solid #ccc';
        confirmPassword.style.border = '1px solid #ccc';
    }

    if (emailRegex.test(email.value) && passwordRegex.test(password.value) && passwordRegex.test(confirmPassword.value) && password.value === confirmPassword.value) {
        generalMsg.style.display = 'block';
        generalMsg.classList.add('success-msg');
        generalMsg.innerHTML = 'Form submitted successfully!';
    }

}
