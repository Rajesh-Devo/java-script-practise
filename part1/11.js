let pattern = /a.c/gi;
let text =  "a c"; 
let result = pattern.test(text);
console.log(result);

pattern = /La{3}/gi;
text =  "Laaa"; 
result = pattern.test(text);
console.log(result);

pattern = /(La){3}/gi;
text =  "LaLaLaLa"; 
result = pattern.test(text);
console.log(result);

console.log("---------------")
pattern = /(zup){2,4}/;
text =  "zup"; 
result = pattern.test(text);
console.log(result);

pattern = /(Yahoo){1,}/;
text =  "YahooYahoo"; 
result = pattern.test(text);
console.log(result);

console.log("-----------------------");
pattern = /C.*/;
text =  "Chennai"; 
result = pattern.test(text);
console.log(result);

console.log("-----------------------");
pattern = /([0][1-9])|([1][0-2])/;
text =  "08"; 
result = pattern.test(text);
console.log(result);


console.log("-----------------------");
pattern = /([0][1-9])|([1][0-2]):([0-5][0-9]):([0-5][0-9]) (AM|PM)/;
text =  "12:59:10 PM"; 
result = pattern.test(text);
console.log(result);


console.log("-----------------------");
pattern = /^[a-z][a-z0-9$_]{3,11}@gmail.com/;
text =  "rajesh123@gmail.com"; 
result = pattern.test(text);
console.log(result);
