let block = document.querySelector('.block');

block.addEventListener('click', ()=> {
    if(block.classList.contains('red')) {
        block.classList.add('green');
        block.classList.remove('red');
    } else {
        block.classList.add('red');
        block.classList.remove('green');
    }
});