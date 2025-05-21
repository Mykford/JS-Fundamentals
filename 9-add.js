

function add(a,b){
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  } else {
    return a + b;
  }
}

console.log(add())
console.log(add(1))
console.log(add(1,7))
console.log(add(13,89))