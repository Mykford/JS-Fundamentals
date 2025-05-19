function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("Missing number of occurrences");
  } else {
    const sum = parseInt(a) + parseInt(b);
    console.log(sum);
  }
}