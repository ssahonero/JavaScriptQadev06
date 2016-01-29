/**
 * Created by SamuelSahonero on 1/28/2016.
 */

/*
     This method returns the inverse of a number
     defined on a string
*/
var invertNumber = function(number){
    return parseInt(number.split("").reverse().join(""));
};

/*
    This method returns the first cupicua number
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

/*
    A simple example about how to use the capicua method
 */
capicua(105,200);