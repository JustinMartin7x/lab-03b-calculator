import { sumClick, differenceClick, productClick, quotientClick} from './clickHandlers.js'


const button = document.getElementById ('button')
const subButton = document.getElementById ('subButton')
const multiplyButton = document.getElementById ('multiplyButton')
const divisionButton = document.getElementById ('divisionButton')




button.addEventListener('click', sumClick);

subButton.addEventListener('click', differenceClick)

multiplyButton.addEventListener('click', productClick)
  
divisionButton.addEventListener('click', quotientClick)