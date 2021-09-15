let fs = require("fs");
let readlineSync = require('readline-sync');

let lists = []
function init() {
  [1,2,3,4,5].forEach(x => {
    lists.push(require('./list' + x + '.json'))
  })
}

function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

init()
let exit = false
console.log('Press Enter to generate names')
while (!exit) {
  var response = readlineSync.question();
  exit = response === 'x'
  if (!exit) printResult()
}

function printResult() {
  let r0 = rand(lists[0].length-1) 
  let r1 = rand(lists[0].length-1)
  let r2 = rand(lists[0].length-1)
  let r3 = rand(lists[0].length-1)
  let r4 = rand(lists[0].length-1)
  console.log(`${lists[0][rand([r0])]} ${lists[1][rand([r1])]}\'s ${lists[2][rand([r2])]} ${lists[3][rand([r3])]} ${lists[4][rand([r4])]}`);
}
