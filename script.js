/*=-=-=-=-=-=-=-=-VAR=-=-=-=-=-=-=-=-=-=-=-=-=*/
/*BOTÃO MOBILE*/
const btMobile = document.getElementById('bt_mobile');
const nav = document.getElementById('nav');
/*VALIDAÇÃO INPUTS ENVIAR RECEITA*/
const btEnviarReceita = document.getElementById('btEnviarReceita');
const nome_receita = document.getElementById('nome_receita');
const porcao = document.getElementById('porcao');
const minuto = document.getElementById('minuto');
const textarea_dica = document.getElementById('textarea_dica');
const textarea_prep = document.getElementById('textarea_prep');
const textarea_ingred = document.getElementById('textarea_ingred');
const erro_submit = document.getElementById('erro_submit');

/*=-=-=-=-=-=-=-=-BOTÃO MOBILE=-=-=-=-=-=-=-=-=-=-=-=-=*/
function toggleMenu(){
    nav.classList.toggle('ativar_menu');
}

btMobile.addEventListener('click',toggleMenu);

/*=-=-=-=-=-=-=-=-VALIDAÇÃO INPUTS ENVIAR RECEITA=-=-=-=-=-=-=-=-=-=-=-=-=*/
function notNegativos(value, input){
    if(value<=0){
        ativarErro(input);
    }
}

function ativarErro(input){
    erro_submit.style.display='block';
    input.style.border='1px solid red';
}

btEnviarReceita.addEventListener('click',function validar(event){

    if(nome_receita.value == ''){
        event.preventDefault();
        ativarErro(nome_receita);

        nome_receita.addEventListener('focus',function desativarErro(){
            nome_receita.style.border='1px solid black';
            erro_submit.style.display='none';
        });        
    }

    if(minuto.value == ''){
        event.preventDefault();
        ativarErro(minuto);

        minuto.addEventListener('focus',function desativarErro(){
            minuto.style.border='1px solid black';
            erro_submit.style.display='none';
        });
    }else{
        event.preventDefault();
        notNegativos(minuto.value,minuto);

        minuto.addEventListener('focus',function desativarErro(){
            minuto.style.border='1px solid black';
            erro_submit.style.display='none';
        });
    }

    if(porcao.value == ''){
        event.preventDefault();
        ativarErro(porcao);

        porcao.addEventListener('focus',function desativarErro(){
            porcao.style.border='1px solid black';
            erro_submit.style.display='none';
        });
    }else{
        event.preventDefault();
        notNegativos(porcao.value,porcao);

        porcao.addEventListener('focus',function desativarErro(){
            porcao.style.border='1px solid black';
            erro_submit.style.display='none';
        });
    }

    if(textarea_ingred.value == ''){
        event.preventDefault();
        console.log('4');
        ativarErro(textarea_ingred);

        textarea_ingred.addEventListener('focus',function desativarErro(){
            textarea_ingred.style.border='1px solid black';
            erro_submit.style.display='none';
        });
    }

    if(textarea_prep.value == ''){
        event.preventDefault();
        console.log('5');
        ativarErro(textarea_prep);

        textarea_prep.addEventListener('focus',function desativarErro(){
            textarea_prep.style.border='1px solid black';
            erro_submit.style.display='none';
        });
    }

    if(textarea_dica.value == ''){
        event.preventDefault();
        console.log('6');
        ativarErro(textarea_dica);

        textarea_dica.addEventListener('focus',function desativarErro(){
            textarea_dica.style.border='1px solid black';
            erro_submit.style.display='none';
        });
    }
});
