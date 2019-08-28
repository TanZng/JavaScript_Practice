function translatePigLatin(str){
	var add = "";
	var arr = str.split("");
	var i = 0;
	if(["a", "e", "i", "o", "u"].includes(arr[0])){
		return str +"way";
	}
	else if (noVowels(str)){
		return str +"ay";
	}
	else{
		while(!["a", "e", "i", "o", "u"].includes(arr[i])){
			add = add + str[i];
			i++;
			}
		}
		str = str.slice(i,str.length);
		str = str + add;
		return str +"ay";
	}

console.log(translatePigLatin("rwrw"));

function noVowels(str){
	var vowels = 0;
	for(let i = 0; i<str.length; i++){
		if (["a", "e", "i", "o", "u"].includes(str[i])){
			vowels = vowels + 1;
		}
	}
	if (vowels == 0){
		return true
	}
	else{
		return false
	}
}
