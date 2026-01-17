import { PasswordGenerator } from "./password_generator.js";
import { copied_alert } from "./components/copied_alert.js"

// ===== COMPONENTE ===== //
const passwordGenerator = document.querySelector('.password-generator');

// ===== PEGAR EVENTO DE CLICK DENTRO DO COMPONENTE ===== //
passwordGenerator.addEventListener('click', e => {
    const el = e.target;

    // ===== BOTÃO COPIAR ===== //
    if (el.classList.contains("password-generator__copy")) {
        const display = passwordGenerator.querySelector('.password-generator__display');
        
        // ----- COPIAR SE INPUT NÃO ESTIVER VAZIO ----- //
        if(display.value) {
            navigator.clipboard.writeText(display.value);
            copied_alert();
        }
    }

    // ===== BOTÃO GERAR NOVA SONHA ===== //
    if(el.classList.contains("password-generator__generate-password")) {
        const display = passwordGenerator.querySelector('.password-generator__display');

        // ----- PEGAR SENHA GERADA ----- //
        const newPassword = new PasswordGenerator;
        display.value = newPassword.createPassword();
    }
});

