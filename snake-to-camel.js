function snakeToCamel (string) {
  return string.replace(/(_\w)/g, function (m) {
    return m[1].toUpperCase()
  })
}

// const toCamel = (s) => {
//   return s.replace(/([-_][a-z])/ig, ($1) => {
//     return $1.toUpperCase()
//       .replace('-', '')
//       .replace('_', '');
//   });
// };

let snakeCaseString = ''
const snakeToCamelCase = sentence =>
  sentence
    .split('_')
    .map(word => {
      if (word === 0) {
        return part.toLowerCase()
      }
      return firstUppercase(word)
    })
    .join('')
const firstUppercase = word =>
  word && word.charAt(0).toUpperCase() + word.slice(1)

console.log(snakeCaseString)
console.log(snakeToCamelCase(snakeCaseString))
