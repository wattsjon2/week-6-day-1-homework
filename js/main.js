//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dogNames, dogString){
    name_find = []
    for (let i = 0; i < dogNames.length; i++){
        if (dogString.toLowerCase().search(dogNames[i].toLowerCase()) != -1) {
            name_find.push(`Matched ${dogNames[i]}`)}
        else {
            name_find.push('No Matches')
        }
    }
    return name_find
}

//Call method here with parameters
console.log(findWords(dog_names,dog_string))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let GivenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        (i % 2 == 0) ? arr.splice(i,1,'even_index') : {}
    }
    return arr
}
console.log(replaceEvens(GivenArr))

//============Exercise #3 ============//
// Code wars problem 1
// put a space in camel case -> helloWorld = hello World

function breakCamelCase(string){
    new_string = ""
    for (let i = 0; i < string.length; i++){
        (string[i] == string[i].toUpperCase()) ? new_string += ` ${string[i]}`: new_string += string[i]
    }
    return new_string
}
console.log(breakCamelCase('breakCamelCase'))

//============Exercise #4 ============//
// Code Wars problem 2
// make a string do the wave in a list eg: "abc d" =[:Abc d, aBc d, abC d, abc D]

function theWave(string){
    let waveWords = []
    let waveWord = ''
    let replace = ''
    let i = 0
    do {
        replace = string[i].toUpperCase()
        if (replace != ' '){
            waveWord = string.slice(0, i) + replace + string.slice(i + 1)
            waveWords.push(waveWord)
        }
        else{}
        i += 1
    } while (i < string.length)
    return waveWords
}

console.log(theWave('abc d'))