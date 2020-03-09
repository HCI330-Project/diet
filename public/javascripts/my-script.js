const sitter = document.getElementById('sizeWeight');
const walker = document.getElementById('sizeDimensions');
const runner = document.getElementById('sizeDimension');
const gainMuscle = document.getElementById('gainMuscle');
const burnFat = document.getElementById('loseFat');

sitter.addEventListener('click', () => {
    document.getElementById('sitter-img').src = '/food-icons/sitter-white.svg';
    document.getElementById('walker-img').src = '/food-icons/walker.svg';
    document.getElementById('runner-img').src = '/food-icons/runner.svg';

});
walker.addEventListener('click', () => {
    document.getElementById('sitter-img').src = '/food-icons/sitter.svg';
    document.getElementById('walker-img').src = '/food-icons/walker-white.svg';
    document.getElementById('runner-img').src = '/food-icons/runner.svg';

});
runner.addEventListener('click', () => {
    document.getElementById('sitter-img').src = '/food-icons/sitter.svg';
    document.getElementById('walker-img').src = '/food-icons/walker.svg';
    document.getElementById('runner-img').src = '/food-icons/runner-white.svg';

});

gainMuscle.addEventListener('click', () => {
    document.querySelector('#gainMuscle').checked = true
    document.querySelector('#loseFat').checked = false
    setTimeout(() => {
        document.querySelectorAll('.step2')[0].classList.toggle('hide')
        document.querySelector('.step1').classList.toggle('hide')
        document.querySelectorAll('.step2')[1].classList.toggle('hide')
    }, 200)

})

burnFat.addEventListener('click', () => {
    document.querySelector('#loseFat').checked = true
    document.querySelector('#gainMuscle').checked = false
    setTimeout(() => {
        document.querySelectorAll('.step2')[0].classList.toggle('hide')
        document.querySelector('.step1').classList.toggle('hide')
        document.querySelectorAll('.step2')[1].classList.toggle('hide')
    }, 200)
})

const male = document.getElementById('male');
// // const female = document.getElementById('female');
male.addEventListener('click', () => {
    male.checked = true;
    //     //  document.getElementById('male').src = '/food-icons/male-white.svg';
    //     document.getElementById('male').checked = true;
    //     //  document.getElementById('female').src = '/food-icons/female.svg';
});
// female.addEventListener('click', () => {
//     document.getElementById('male').src = '/food-icons/male.svg';
//     document.getElementById('female').checked = true;
//     document.getElementById('female').src = '/food-icons/female-white.svg';
// });

function yeet() {
    document.getElementById('male').checked = true;
}