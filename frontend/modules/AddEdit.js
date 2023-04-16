import validator from 'validator';

export default class AddEdit {
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
        const nomeInput = el.querySelector("input[name='nome']");
        const emailInput = el.querySelector("input[name='email']");
        const telefoneInput = el.querySelector("input[name='telefone']");
        let error = false;

        if(!nomeInput.value){
            this.sendError(nomeInput, 'Nome é um campo obrigatório.');
            error = true;
        }

        if(!validator.isEmail(emailInput.value)){
            this.sendError(emailInput, 'E-mail inválido.');
            error = true;
        }

        if(!emailInput.value.length > 0 && !telefoneInput.value.length > 0){
            this.sendError(telefoneInput, 'Pelo menos um desses contatos deve ser enviado: e-mail ou telefone.');
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