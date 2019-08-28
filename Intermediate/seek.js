function destroyer(arr) {
  // Remove all the values
	var allArg = Array.prototype.slice.call(arguments);
	console.log(allArg);
	console.log(arr);
	allArg.shift(0);
	console.log(allArg);
	for (let j=0; j < allArg.length; j++){
		console.log(100 + allArg[j]);
		arr = arr.filter(e => e !== allArg[j]);
	}
  return arr;
}

console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3) );
