/**
 * Created by SamuelSahonero on 2/11/2016.
 */
function JSTest(){
}

JSTest.prototype.getPrimeNumbers = function(limit){

    console.log("Prime numbers between 1 and " + limit);

    for(i=1; i < limit; i++)
    {
        isPrime = 1;

        for (j = 2; j < i; j++)
        {
            if ( (i % j) === 0)
            {
                isPrime = 0;
                break;
            }
        }

        if (isPrime == 1)
        {
            console.log(i);
        }
    }
};

JSTest.prototype.getFactorial = function(number){

    var aux = 1;
    var factorial = 1;

    while(aux <= number)
    {
        factorial = factorial * aux;
        aux++;
    }

    console.log("The factorial of: "+ number + " is "+ factorial);
};

JSTest.prototype.countVowels = function(myParagraph){

    var paragraph = myParagraph;
    var aux = paragraph.split("");

    var countA = 0;
    var countE = 0;
    var countI = 0;
    var countO = 0;
    var countU = 0;

    for(i = 0 ; i <= aux.length; i++)
    {
        if(aux[i] == 'a')
        {
           countA++;
        }

        if(aux[i] == 'e')
        {
            countE++;
        }

        if(aux[i] == 'i')
        {
            countI++;
        }

        if(aux[i] == 'o')
        {
            countO++;
        }

        if(aux[i] == 'u')
        {
            countU++;
        }
    }

    console.log(paragraph);
    console.log("The number of A vowels is: " + countA);
    console.log("The number of E vowels is: " + countE);
    console.log("The number of I vowels is: " + countI);
    console.log("The number of O vowels is: " + countO);
    console.log("The number of U vowels is: " + countU);

};

JSTest.prototype.evalParagraph = function(paragraph, specifiedChar){

    var aux = paragraph.split(" ");

    for(i = 0 ; i <= aux.length; i++)
    {
        var aux2 = aux[i].split("");
        var count = 0;

        for(j = 0; j <= aux2.length; j++)
        {
            if(aux2[j] == specifiedChar)
            {
                count++;
            }
        }

        console.log('Count is: ' + count);
        console.log('Words:' + aux[i]);
    }
};