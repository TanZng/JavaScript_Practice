function destroyer(arr) {
  // Remove all the values
	var allArg = Array.prototype.slice.call(arguments);
	allArg.shift(0)

	for (let j=0; j < allArg.length; j++){
		console.log(100 + allArg[j]);
		arr = arr.filter(e => e !== allArg[j]);
	}
  return arr;
}

console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3) );
