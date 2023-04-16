import validator from 'validator';

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        //Limpa erros enviados anteriormente
        const errorsSent = document.querySelectorAll('.errorMsg');
        errorsSent.forEach(error => {
          error.remove();
        });

        const el = e.target;
        const emailInput = el.querySelector("input[name='email']");
        const passwordInput = el.querySelector("input[name='password']");
        let error = false;

        if(!validator.isEmail(emailInput.value)){
            this.sendError(emailInput, 'E-mail inválido.');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            this.sendError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres.');
            error = true;
        }

        if(!error) el.submit();
    }

    sendError(input, errorMsg){
        //Envia erros
        const parag = document.createElement('p');
        const pText = document.createTextNode(errorMsg);
        parag.appendChild(pText);
        parag.classList.add('errorMsg');
        input.insertAdjacentElement('afterend', parag);
    }
}