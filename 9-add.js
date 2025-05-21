const args = process.argv.slice(2);
if (!args[0]) {
    console.log(NaN)
}else if(isNaN[0]|| isNaN[1]){
    return NaN
}else {
  add(parseInt(args[0]), parseInt(args[1]))
}
function add (a, b) {
    console.log (a + b);
} 