let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }
    else {
        currentNumber += number
    }
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll('.operator')

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const calculate = () => {
    let result= ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "%":
            result = (parseFloat(prevNumber) / 100) * parseFloat(currentNumber)
            break
        case "quad":
            result = parseFloat(prevNumber) ** 2
            break
        case "sqrt":
            result = Math.sqrt(parseFloat(prevNumber))
            break
        case "sin":
            result = Math.sin(parseFloat(prevNumber))
            break
        case "cos":
            result = Math.cos(parseFloat(prevNumber))
            break
        case "tan":
            result = Math.tan(parseFloat(prevNumber))
            break
        case "log":
            result = Math.log(parseFloat(prevNumber)).
            break
        default:
            return
    }
    let fixedNum = result
    currentNumber = Math.round((fixedNum + Number.EPSILON)*100000) / 100000
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', ()=> {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearAllBtn = document.querySelector('.all-clear')

clearAllBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearC = () => {
    currentNumber = currentNumber.substring(0, currentNumber.length -1)
}

const clearBtn = document.querySelector('.clear')

clearBtn.addEventListener('click', ()=> {
    clearC()
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})