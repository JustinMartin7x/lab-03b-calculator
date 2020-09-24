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
    console.log(sum)
    answer.textContent = sum;

})

const subNum1 = document.getElementById ('subtractionNumber1')
const subNum2 = document.getElementById ('subtractionNumber2')
const subButton = document.getElementById ('subButton')
const subAnswer = document.getElementById ('subAnswer')

subButton.addEventListener('click', () => {

    const subtract1 = subNum1.value;
    const subtract2 = subNum2.value;
      console.log(subtract1, subtract2)
    
    const subinput1 = Number(subtract1)
    const subinput2 = Number(subtract2)
      console.log(typeof subinput1, typeof subinput2)

    const subtract = subinput1 - subinput2;
      console.log(subtract)
    subAnswer.textContent = subtract
})
const  multiplyNumber1 = document.getElementById ('multiplyNumber1')
const multiplyNumber2 = document.getElementById ('multiplyNumber2')
const multiplyButton = document.getElementById ('multiplyButton')
const multiplyAnswer = document.getElementById ('multiplyAnswer')

multiplyButton.addEventListener('click', () => {
  
    const multiply1 = multiplyNumber1.value;
    const multiply2 = multiplyNumber2.value;
        console.log(multiply1, multiply2) 
    const multiplyinput1 = Number(multiply1)
    const multiplyinput2 = Number(multiply2)
        console.log(typeof multiplyinput1, typeof multiplyinput2)
    const mult = multiplyinput1 * multiplyinput2;
        console.log(mult)
    multiplyAnswer.textContent = mult
    
})
const divisionNumber1 = document.getElementById ('divisionNumber1')
const divisionNumber2 = document.getElementById ('divisionNumber2')
const divisionButton = document.getElementById ('divisionButton')
const divisionAnswer = document.getElementById ('divisionAnswer')

divisionButton.addEventListener('click', () => {
  
    const div1 = divisionNumber1.value;
    const div2 = divisionNumber2.value;
        console.log(div1, div2) 
    const divInput1 = Number(div1)
    const divInput2 = Number(div2)
        console.log(typeof divInput1, typeof divInput2)
    const div = divInput1 / divInput2;
        console.log(div)
        divisionAnswer.textContent = div
})

