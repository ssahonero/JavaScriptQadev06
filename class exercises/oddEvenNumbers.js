/**
 * Created by SamuelSahonero on 1/29/2016.
 */

/*
    This method shows the first n even numbers between a
    defined range.
*/
var evenNumbers = function(firstNumber, secondNumber, quantity){

    var aux = 0;

    for(i = firstNumber; i <= secondNumber; i++)
    {
        if((i%2) == 0)
        {
            console.log(i);
            aux++;
        }

        if(aux == quantity)
        {
            break;
        }
    }
};

/*
    This method shows the first n odd numbers between a
    defined range.
 */
var oddNumbers = function(firstNumber, secondNumber, quantity){

    var aux = 0;

    for(i = firstNumber; i <= secondNumber; i++)
    {
        if((i%2) != 0)
        {
            console.log(i);
            aux++;
        }

        if(aux == quantity)
        {
            break;
        }
    }
};

/*
    This method shows the first n odd and even numbers between a
    defined range.
 */
var oddEvenNumbers = function(firstNumber, secondNumber, quantity){

    console.log('The first ' + quantity + ' Even numbers between '+ firstNumber +' and ' + secondNumber + ' are:');
    evenNumbers(firstNumber,secondNumber,quantity);
    console.log('The first ' + quantity + ' Odd numbers between '+ firstNumber +' and ' + secondNumber + ' are:');
    oddNumbers(firstNumber,secondNumber,quantity)
};

oddEvenNumbers(1,20,10);