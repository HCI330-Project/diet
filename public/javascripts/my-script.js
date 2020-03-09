const sitter = document.getElementById('sizeWeight');
const walker = document.getElementById('sizeDimensions');
const runner = document.getElementById('sizeDimension');
const gainMuscle = document.getElementById('gainMuscle');
const burnFat = document.getElementById('loseFat');
const male = document.getElementById('male');
// const goalGain = document.getElementById('gainMuscle1');
// const goalBurn = document.getElementById('loseFat1');

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

// goalGain.addEventListener('click', () => {
//     document.querySelector('#gainMuscle').checked = true
//     document.querySelector('#loseFat').checked = false
//     goalGain.style.color = white;
//     goalGain.style.backgroundColor = black;

// })

male.addEventListener('click', () => {
    male.checked = true;
});


const isInStandaloneMode = () =>
    (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');

if (isInStandaloneMode()) {
    document.querySelector('.footer').setAttribute("style", "bottom: 0px; border: 1px solid blue;");
}