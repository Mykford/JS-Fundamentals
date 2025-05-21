function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("Missing number of occurrences");
  } else {
    const sum = a+b;
    console.log(sum);
  }
}

add(2, 3);