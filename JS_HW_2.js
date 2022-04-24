// JS. HW_2

// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.

let input = "test" 

const StringValid = function (input){
    if (typeof input === "string"){
        return true
    }
    else {
        console.log("Error! Data is not string!")
        return false
    }
}
StringValid(input);

//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
const LenValid = function (input){
    if (input.length >= 5 && input.length <= 64) {
       return true

    } else {
        console.log("Error! Please enter between 5 and 64 characters")
        return false
    } 
}
LenValid(input);

//  5. В строке должны быть буквы
function LettersValid(input) {
    if (/(?=.*[a-zA-Z])/.test(input)){
     return true

 } else {
    console.log("Error! Please enter latin letters")
     return false
 }

}
LettersValid(input);

//  6. Должна быть хотя бы одна буква в верхнем регистре
function RegisterValid(input) {
    if (/(?=.*[A-Z])/.test(input)) {
     return true

 } else {
    console.log("Error! Please enter at least 1 uppercase letter")
    return false
 }

}
RegisterValid(input)

//  7. Должна быть хотя бы одна цифра
function NumbValid(input) {
       if (/(?=.*[0-9])/.test(input)) {
           return true
          
     } else {
          console.log("Error! Please enter at least 1 number")
            return false
    }
}
    NumbValid(input)

//  8. Должна быть хотя бы одна @
function DogValid(input) {
    if (/(?=.*[@])/.test(input)){
        return true

  } else {
       console.log("Error! Please enter at least one \"@\"")
         return false
 }
}
 DogValid(input)

//  9. Строка не должна быть пустой
function EmValid(input) {
    if (/[^\s]/.test(input)){
        return true

  } else {
       console.log("Error! The string mustn\'t be empty")
         return false
 }
}
EmValid(input)




