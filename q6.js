let n = 82 
let last = n%10 // 2
let first = parseInt(n/10) // 8

// 78 => 7*10 +8

// 789 => 7*100 + 8*10 +9
// 28

let rev = last*10 + first

console.log(rev)