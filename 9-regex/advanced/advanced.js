let str = 'cat with a hat sat on a mat.'
let regex

// // match only the a char
// regex = /a/g
// // match any char
// regex = /./g
// // match at and one more char
 regex = /at./g
// // match at and specific chars
// regex = /[smc]at/gi
// // match at and exclude specific chars
// regex = /[^sc]at/gi


// // Quantifiers
//str = 'aaaaaaas'
// regex = /as{0,}/g // 0 or more of the previous
// regex = /a{2,3}/

// regex = /a*/  //
// regex = /a+/ // at least 1 to infinity
// regex = /a?/ // optional (0 or 1)



// // Match full web address
// str = `https://www-mobile.shiftgig.net
// http://www.google.com
// http://
// ftp://
// `

// regex = /https*:\/\/.+/g



// // Match groups
// str = `Send ice cream for Karen - 1KG $56.99 99%`
// regex = /[a-zA-Z0-9]/g // get any letters or numbers
// regex = /\w/g
// regex = /\W/g

// regex = /[0-9]/g; // get digits
// regex = /\d/g
// regex = /\D/g // except digits

// regex = /[^\w]/g // don't match any letters or numbers
// regex = /[\W]/g // don't match any letters or numbers
// regex = /[\s]/g // match blank space


// // Capture groups
// str = `foo
// foobar
// foozoo
// fooboo`
// regex = /foo(bar|zoo)/g

// // Look aheads
// regex = /foo(?=bar|zoo)/g
// regex = /foo(?!bar|zoo)/g


//let str1 = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem justo </p>'
//regex = /<(\w+)>(.*)<\/\1>/
//console.log(str1.replace(regex, '$2'))




const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str =>
    `<span>${str}</span>`
)
}
output(str, regex, document.querySelector('pre'));
