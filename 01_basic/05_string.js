let name = "Shubham";

const newname = new String("Hello-Word-Shubham");

console.log(newname.length); // length property

console.log(newname.charAt(4));
console.log(newname.indexOf("Z")); //if value is not present it return -1
console.log(newname.slice(0, 4)); // returns a section of string
console.log(newname.substring(3, 9)); //  Returns the substring at the specified location within a String object.

let anotherString = "    Shubham pawar     ";
console.log(anotherString);
console.log(anotherString.trim());

// console.log(anotherString.toUpperCase());
// console.log(anotherString.toLowerCase());

let url = "https://shubham.com/shubham%20pawar";

console.log(url.replace("%20", "-"));
console.log(url.includes("%20"));

console.log(newname.split("-"));
console.log(newname.split("")); //  split the every character and return as an array
console.log(newname.split(newname));
console.log(newname.toString());
