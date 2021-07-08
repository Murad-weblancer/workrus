const strela = document.querySelector('.bashka');
const arrov = document.querySelectorAll('.arrov');
const arrovAcc = document.querySelectorAll('.arrov_acc');
const menu = document.querySelector('.wrapper__menu');
const grid = document.querySelectorAll('.grid');
const giz = document.querySelectorAll('.gizli');
strela.addEventListener('click', function () {
    for (let i = 0; i < grid.length; i++){
        grid[i].classList.toggle('active')
        
    }
    strela.classList.toggle('active');
})
strela.addEventListener('click', function () {
    for (let i = 0; i < giz.length; i++){
        giz[i].classList.toggle('active')
        
    }
    // strela.classList.toggle('active');
})
strela.addEventListener('click', function () {
    menu.classList.toggle('colmn');
})
// arrov.addEventListener('click', function () {
//     for (let i = 0; i < arrovAcc.length; i++){
//         arrovAcc[i].classList.toggle('active');
//     }
//     arrov.classList.toggle('active');

// })
for (let i = 0; i < arrov.length; i++){
    arrov[i].addEventListener('click', function () {
        for (let j = 0; j < arrovAcc.length; j++){
            arrov[j].classList.add('active')
            arrovAcc[j].classList.remove('active')
        }
        arrovAcc[i].classList.add('active')
        arrov[i].classList.remove('active')
    })
}