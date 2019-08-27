function chunkArrayInGroups(arr, size) {
  // Break it up.
  var list = [];
	var i = 0;
	while(i < arr.length){
		var sublist = [];
		while(sublist.length<size && i < arr.length){
			sublist.push(arr[i]);
			i++;
		}
		list.push(sublist)
	}
  return list;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
