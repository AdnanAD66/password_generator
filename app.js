let uperCase = 'ABCDEFGHIJKLMNOPUVWXYZ'
let lowCase = 'abcdefghijklmnopuvwxyz'
let num = '1234567890'
let characters = '!@#$%^&*()'

let password = ''

function range() {
password = ''
let rang = document.getElementById('range')
let label = document.getElementById('labforrange')

label.innerText = rang.value

checkBox()
}



function checkBox() {

password = ''

let uppercase = document.getElementById('uppercase')
let lowercase = document.getElementById('lowercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let rang = document.getElementById('range') 

let inp = document.getElementById('inp')




for (let i = 1; i <= rang.value; i++) {
    

    
    if (uppercase.checked) {
        let randUper = Math.floor(Math.random() * uperCase.length)
        password += uperCase[randUper]
        
        
    }
    
    if (lowercase.checked) {
        let randLow = Math.floor(Math.random() * lowCase.length)
        password += lowCase[randLow]
    
    }
    if (numbers.checked) {
        let randNum = Math.floor(Math.random() * num.length)
        password += num[randNum]
    
    } 
    
    if (symbols.checked) {
        let randChar = Math.floor(Math.random() * characters.length)
        password += characters[randChar]

    }
    

}
inp.value = password.slice(0, rang.value)




}

