// Blocco 1 - JSnack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.



const user_numberHTML = document.getElementById("user_number")
const button1 = document.getElementById("button_1")
const button2 = document.getElementById("button_2")
const numberPHTML = document.getElementById("all_numbers")
const resultHTML = document.getElementById("result")
let allNumbers = []


button1.addEventListener("click", () => {
    allNumbers.push(user_numberHTML.value)
    console.log(allNumbers)
    if (allNumbers.length == 1) {
        numberPHTML.innerText += user_numberHTML.value
    } else {
        numberPHTML.innerText += `, ${user_numberHTML.value}`
    }


    if (allNumbers.length >= 2) {
        button2.style.opacity = 1
        button2.style.cursor = "pointer"
        let allNumSum = 0
        button2.addEventListener("click", () => {
            for (let i = 0; i < allNumbers.length; i++) {
                allNumSum = allNumSum + Number(allNumbers[i])
                console.log(allNumSum)
                if (i == allNumbers.length - 1) {
                    resultHTML.innerHTML = `La somma di tutti i numeri che hai aggiunto è: <span class= "highlight">${allNumSum}</span>`
                }
            }
        })

    }

})

// button2.addEventListener("click", ()=>{
//     if (allNumbers.length)
// })