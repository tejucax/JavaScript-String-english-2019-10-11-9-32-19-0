// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
name = name.toUpperCase();
console.log(name)


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
splittedSentence = sentence.split(" ");
var upperSentence = '';
for(var i = 0; i < splittedSentence.length; i++){
    splittedSentence[i] = splittedSentence[i].charAt(0).toUpperCase() + splittedSentence[i].slice(1);
    upperSentence = upperSentence + ' ' + splittedSentence[i];
}
console.log(upperSentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var newMoney = money.split("￥");
console.log(newMoney[1].trim());
