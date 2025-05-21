

let args = process.argv.slice(2);

if (!args[0]){
   console.log("Missing number of occurrences");
}else if(Number.isInteger(parseInt(args[0]))){
    let i = 0;
    while (i < parseInt(args[0])){
        console.log("C is fun");
        i++;
    }
}