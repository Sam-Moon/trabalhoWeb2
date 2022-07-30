/*=-=-=-=-=-=-=-=-VAR=-=-=-=-=-=-=-=-=-=-=-=-=*/
const btCadastro = document.getElementById('btCadastro');
const senha = document.getElementById('new_password');
const conf_senha = document.getElementById('conf_password');

/*=-=-=-=-=-=-=-=-VALIDAÇÃO INPUTS=-=-=-=-=-=-=-=-=-=-=-=-=*/
function validacao(event){
    if(senha.value !== conf_senha.value){
        alert('Verifique as senhas');
        conf_senha.focus();       
        
        event.preventDefault();
    }
}

btCadastro.addEventListener('click',validacao);
