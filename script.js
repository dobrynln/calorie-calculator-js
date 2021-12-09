const result = document.querySelector('.calculating__result');
let sex, height, weight, age, ratio;

function calcRes() {
    if(!sex || !height || !weight || !age || !ratio) {
        result.textContent = 'Не все поля заполнены.'
        return;
    }
    if(sex === 'female') {
        result.textContent = Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age));
    } else {
        result.textContent = Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age));
    }
}
calcRes();
function determineCalorie (parentSelector, activeClass) {
    const elements = document.querySelectorAll(parentSelector);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if(e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio')
                console.log(ratio)
            } else {
                sex = e.target.getAttribute('id')
                console.log(sex)
            }
            elements.forEach(elem => {
                elem.classList.remove(activeClass)
            })
            e.target.classList.add(activeClass)
            calcRes();
        })
    })
}
determineCalorie('#gender div', 'calculating__choose-item_active')
determineCalorie('.calculating__choose_big div', 'calculating__choose-item_active')