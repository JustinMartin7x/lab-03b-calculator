const firstNumber = document.getElementById ('firstNumber')
const secondNumber = document.getElementById ('secondNumber')
const button = document.getElementById ('button')
const answer = document.getElementById ('answer')


button.addEventListener('click', () => {

    const number1 = firstNumber.value;
    const number2 = secondNumber.value;

    console.log(number1, number2);
    
    const input1 = Number(number1);
    const input2 = Number(number2);

    console.log(typeof input1, typeof input2)
    

    const sum = input1 + input2;

    answer.textContent = sum;

})

