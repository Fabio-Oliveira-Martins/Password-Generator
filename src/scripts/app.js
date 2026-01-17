import { PasswordGenerator } from "./password_generator.js";
import { copied_alert } from "./components/copied_alert.js"


const passwordGenerator = document.querySelector('.password-generator');

passwordGenerator.addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains("password-generator__copy")) {
        const display = passwordGenerator.querySelector('.password-generator__display');
        
        if(display.value) {
            navigator.clipboard.writeText(display.value);
            copied_alert();
        }
    }

    if(el.classList.contains("password-generator__generate-password")) {
        const display = passwordGenerator.querySelector('.password-generator__display');

       const newPassword = new PasswordGenerator;
       display.value = newPassword.createPassword();
    }
});

