function convertHTML(str) {
	var arr = str.split(""); //Dolce ---> ["D","o","l","c","e"]

	for (let i = 0; i < arr.length; i++){
		switch(arr[i]) {
		  case "&":
				arr[i]= "&​amp;";
		    break;
			case "<":
				arr[i]= "&​lt;";
				break;
			case ">":
				arr[i]= "&​gt;";
				break;
			case '"':// ' " '
				arr[i]= "&​quot;";
				break;
			case "'":// ' " '
				arr[i]= "&​apos;";
				break;
			}
		}
	arr = arr.join('');
  return arr;
}

console.log(convertHTML("<>"));
