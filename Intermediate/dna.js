function pairElement(str) {
  var dna = [];
  var word = str.split("");
	console.log(word);
  for(let i=0; i < word.length; i++){
    if ('A'===word[i]){
			dna.push(["A","T"]);
		}
		else if ('T'===word[i]) {
			dna.push(["T","A"]);
		}
		else if ('C'===word[i]){
			dna.push(["C","G"]);
		}
		else{
			dna.push(["G","C"]);
		}
	}
	return dna;
}

console.log(pairElement("ATCGA"));
