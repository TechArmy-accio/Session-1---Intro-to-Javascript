// 2) assume some value of p,r,t 
// si = p*r*t/100 

// A = p(1+r/100)^t
// ci = A-p


let  p = 100000
let r = 10 
let t = 3

// let si = p*r*t/100 

// console.log(si)

let amt = p*(1+r/100)**t
let ci = amt - p 
console.log(ci)

