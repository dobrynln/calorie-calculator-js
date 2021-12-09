const result = document.querySelector('.calculating__result span');
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
function determineStaticInfo (parentSelector, activeClass) {
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
determineStaticInfo('#gender div', 'calculating__choose-item_active')
determineStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active')

function determineDynamicInput(selector) {
    const input = document.querySelector(selector)

    input.addEventListener('input', () => {
        if(input.value.match(/\D/g)) {
            input.style.border = "1px solid red";
        } else {
            input.style.border = "none";
        }
        switch(input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age': 
                age = +input.value;
                console.log(age)
                break;
        }
        calcRes();
    })
}
determineDynamicInput('#height')
determineDynamicInput('#weight')
determineDynamicInput('#age')