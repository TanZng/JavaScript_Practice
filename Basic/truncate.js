function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num){
    var str = str.slice(0, num);
    return str = str + "...";
  }
  else{
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
