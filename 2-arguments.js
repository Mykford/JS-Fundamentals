const args = process.argv.slice(2);

// The first two elements of process.argv are the path to the node executable and the path to the script being executed
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
