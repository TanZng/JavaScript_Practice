function sumAll(arr) {
  var m = Math.max(arr[0],arr[1]);
	var n = Math.min(arr[0],arr[1]);
	var sum = 0;
	for (let i = n; i <= m; i++ ){
		sum = sum + i;
	}
  return sum;
}

console.log(sumAll([5, 10]));
