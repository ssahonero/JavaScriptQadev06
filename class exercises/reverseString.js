/**
 * Created by SamuelSahonero on 1/29/2016.
 */
var reverseString = function(word){
    var phrase = word;
    var aux = 0;
    var reversedPhrase = '';

    while(aux <= phrase.length - 1)
    {
        reversedPhrase = reversedPhrase + phrase.charAt((phrase.length - 1) - aux);
        aux++;
    }

    return reversedPhrase;
};

reverseString('Hola');

var factorial= function(number){
    var times = number;
    var aux = 1;
    var factorial = 1;

    while(aux <= times)
    {
        factorial = factorial * aux;
        aux++;
    }

    return factorial;
};

factorial(10);

var truncate = function(myPhrase, myNumber){
    var phrase = myPhrase;
    var number = myNumber;
    var aux = 1;

    while(aux <= number)
    {
        phrase = phrase.slice(1);
        aux++;
    }

    return phrase;
};

truncate('Hola todo mundo', 4);