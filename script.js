let $ = document
let buttonArea = $.querySelector('#buttonArea')
let body = $.querySelector('body')


let ranNum = Math.floor(Math.random()*20);

buttonArea.addEventListener('click' , ()=> {
    let userGuess = Number(document.querySelector('#userGuess').value);
    let showResult = document.querySelector('.test');

    if (userGuess , 1 <= userGuess <= 20){
        if (userGuess > ranNum){
            showResult.innerHTML = 'big'
            body.style.backgroundColor = "#cccccc"
        }else if (userGuess < ranNum){
            showResult.innerHTML = 'small'
            body.style.backgroundColor = "#cccccc"
        }else{
            showResult.innerHTML = 'you win';
            body.style.backgroundColor = 'green'
        }
    }
})