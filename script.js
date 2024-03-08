const tabs = [
    "task-1",
    "task-2",
]

const setActiveTab = (tab) => {
    tabs.forEach((tabname,index) => {
        if(tabname === tab) {
            document.getElementById('floater').style.transform = `translateY(${index * 100}%)`;
            document.getElementsByClassName('nav-item')[index].classList.add("active");
            document.getElementById('content').style.transform = `translateY(-${index * 50}%)`;
        }
        else {
            document.getElementsByClassName('nav-item')[index].classList.remove("active");
        }
    });
}



const validateForm1 = () => {
    const nameData = document.getElementById('name').value;
    const emailData = document.getElementById('useremail').value;
    const websiteData = document.getElementById('website').value;
    const messageData = document.getElementById('message').value;
    const nameMsg = document.getElementById('name-msg');
    const emailMsg = document.getElementById('email-msg');
    const websiteMsg = document.getElementById('website-msg');
    const messageMsg = document.getElementById('message-msg');
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const websiteRegex = /^(http|https):\/\/[^ "]+$/;

    if (!nameData) {
        nameMsg.innerHTML = 'Name is required';
        nameMsg.classList.add('error-msg');
    }
    else {
        nameMsg.classList.remove('error-msg');
    }

    if (!emailData) {
        emailMsg.innerHTML = 'Email is required';
        emailMsg.classList.add('error-msg');
    }
    else {
        emailMsg.classList.remove('error-msg');
    }

    if (!websiteData) {
        websiteMsg.innerHTML = 'Website is required';
        websiteMsg.classList.add('error-msg');
    }
    else {
        websiteMsg.classList.remove('error-msg');
    }

    if (!messageData) {
        messageMsg.innerHTML = 'Message is required';
        messageMsg.classList.add('error-msg');
    }
    else {
        messageMsg.classList.remove('error-msg');
    }

    if (!emailRegex.test(emailData)) {
        emailMsg.innerHTML = 'Please enter a valid email';
        emailMsg.classList.add('error-msg');
    }
    else {
        emailMsg.classList.remove('error-msg');
    }

    if (!websiteRegex.test(websiteData)) {
        websiteMsg.innerHTML = 'Please enter a valid website';
        websiteMsg.classList.add('error-msg');
    }
    else {
        websiteMsg.classList.remove('error-msg');
    }

    if (nameData && emailData && websiteData && messageData && emailRegex.test(emailData) && websiteRegex.test(websiteData)) {
        const generalMsg = document.getElementById('general-msg');
        generalMsg.style.display = 'block';
        generalMsg.classList.add('success-msg');
        generalMsg.innerHTML = 'Form submitted successfully!';
    }

}

const validateForm2 = () => {
    const emailData = document.getElementById('email').value;
    const passwordData = document.getElementById('password').value;
    const confirmPasswordData = document.getElementById('confirm-password').value;
    const emailMsg = document.getElementById('email-msg');
    const passwordMsg = document.getElementById('password-msg');
    const confirmPasswordMsg = document.getElementById('confirm-password-msg');
    const generalMsg = document.getElementById('general-msg');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(emailData)) {
        emailMsg.innerHTML = 'Please enter a valid email';
        emailMsg.classList.add('error-msg');
    } else {
        emailMsg.classList.remove('error-msg');
    }
    if (!emailData) {
        emailMsg.innerHTML = 'Email is required';
        emailMsg.classList.add('error-msg');
    } else {
        emailMsg.classList.remove('error-msg');
    }

    if (!passwordData) {
        passwordMsg.innerHTML = 'Password is required';
        passwordMsg.classList.add('error-msg');
    } else {
        passwordMsg.classList.remove('error-msg');
    }


    if (!confirmPasswordData) {
        confirmPasswordMsg.innerHTML = 'Password is required';
        confirmPasswordMsg.classList.add('error-msg');
        return;
    } else {
        confirmPasswordMsg.classList.remove('error-msg');
    }


    if (!passwordRegex.test(passwordData)) {
        passwordMsg.innerHTML = 'Password is Weak';
        passwordMsg.classList.add('error-msg');
    } else {
        passwordMsg.classList.remove('error-msg');
    }

    if (!passwordRegex.test(confirmPasswordData)) {
        confirmPasswordMsg.innerHTML = 'Password is Weak';
        confirmPasswordMsg.classList.add('error-msg');
        return;
    } else {
        confirmPasswordMsg.classList.remove('error-msg');
    }

    if (passwordData !== confirmPasswordData) {
        generalMsg.innerHTML = 'Passwords do not match';
        generalMsg.classList.add('error-msg');
        generalMsg.style.display = 'block';
        return
    } else {
        generalMsg.style.display = 'none';
    }

    if (emailRegex.test(emailData) && passwordRegex.test(passwordData) && passwordRegex.test(confirmPasswordData) && passwordData === confirmPasswordData) {
        generalMsg.style.display = 'block';
        generalMsg.classList.add('success-msg');
        generalMsg.innerHTML = 'Form submitted successfully!';

    }

}
