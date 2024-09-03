const regForm = document.getElementById("udReg");
const errMessage = document.getElementById("regError");
const regPage = document.getElementById("welcome_user");


regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const { fullName, email, password } = regForm.elements

    errMessage.innerHTML = "";

    if (!fullName.value.trim()) {
        setTimeout(showErr("Username is required."), [2000])
        return ;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
        showErr("Please enter a valid email address.");
        return;
    }

    if (!password.value.trim() || !isStrongPassword(password.value)) {
        showErr(
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
        );
        return;
    }
    const successReg = "http://127.0.0.1:5500/udemy_reg/reg.html"
    alert(`Welcome ${fullName.value}, registration successful`);
    console.log(regPage)
    window.open(successReg)
    regForm.reset();
})

const showErr = (message) => {
    errMessage.innerHTML += `<div class="error">${message}</div>`;
}

// ==== Check Password
const isStrongPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
}
// ==== Check Email
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
