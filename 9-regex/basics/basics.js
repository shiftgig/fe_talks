// Basic Examples

// Example 1) Constructor (string, flags)
let string = 'cat in a mat sat on a hat'

let pattern = new RegExp('a', 'g')
let pattern2 = new RegExp('pe')

// Test will return true or false
console.log(pattern.test(string))
console.log(pattern2.test(string))

// // Example 2) Exec and literals
// // Exec will return null if it doesn't match the pattern
let pattern3 = /j/
console.log(pattern3.exec(string))

// // Example 4) Global flag -> Search it everywhere in the string!
// // Exec works over the lastIndex prop
let pattern4 = /at/g // Global flag!
console.log(pattern4.exec(string))
console.log(pattern4.exec(string))
console.log(pattern4.exec(string))
console.log(pattern4.exec(string))

// // Example 5) Combine with string methods
console.log('string.match', string.match(pattern4))
console.log('string.replace', string.replace(pattern4, str => 'OUCH'))
console.log('string.search', string.search(pattern4)) // -1 doesnt exist  1 exists
