/**
 * Created by SamuelSahonero on 1/28/2016.
 */

/*
     This methods returns the inverse of a number
     defined on a string
*/
var invertNumber = function(number){
    return parseInt(number.split("").reverse().join(""));
};

var invertNumber2 = function(number){

    var numbers = number;
    var reversed = 0;
    var aux = 0;

    while( numbers > 0 )
    {
        aux = numbers % 10;
        reversed = (reversed * 10) + aux;
        numbers = parseInt(numbers/10);
    }

    return reversed;
};

/*
 This methods returns the first cupicua number
 on a defined range
 */
var capicua = function(firstNumber, secondNumber){

    var capicua;

    for(i = firstNumber; i <= secondNumber; i++)
    {
        if(i == invertNumber(i.toString()))
        {
            capicua = i;
            break;
        }
    }

    return capicua;
};

var capicua2 = function(firstNumber, secondNumber){

    var capicua;

    for(i = firstNumber; i <= secondNumber; i++)
    {
        if(i == invertNumber2(i))
        {
            capicua = i;
            break;
        }
    }

    return capicua;
};

/*
    A simple example about how to use the capicua method
 */
capicua(105,200);
capicua2(105,200);