document.addEventListener('DOMContentLoaded', function(){
    const botao = document.getElementById('btn');
    
    darkMode = false;

    const fundo = document.getElementById('bodyId');



    botao.addEventListener('click', function(e){
        e.preventDefault();


        if(!darkMode){
            fundo.style.setProperty('background-color', 'black');
            fundo.style.setProperty('color', 'white');
            
            botao.textContent = 'Light Mode'
            botao.style.setProperty('background-color', 'white');
            botao.style.setProperty('color', 'black');
            darkMode = true;
        }else{
            fundo.style.setProperty('background-color', 'white');
            fundo.style.setProperty('color', 'black');
            
            botao.textContent = 'Dark Mode'
            botao.style.setProperty('background-color', 'black');
            botao.style.setProperty('color', 'white');
            darkMode = false;
        }
    })
})