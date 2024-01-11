// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.
const user_numberHTML = document.getElementById("user_number")
const button1 = document.getElementById("button_1")
const numberPHTML = document.getElementById("all_numbers")
const resultHTML = document.getElementById("result")
const resultNumbersHTML = document.getElementById("numbers")
resultHTML.style.display = "none"


button1.addEventListener("click", () => {
    let userNumber = user_numberHTML.value
    let arrayOfResults = []
    for (let i = 0; i <= userNumber; i++) {
        let numbersCube = i * i * i
        arrayOfResults.push(numbersCube)
        if (i == userNumber) {
            resultHTML.style.display = "block"
            resultNumbersHTML.innerText = arrayOfResults
        }
    }
})


