/**
 * Created by SamuelSahonero on 1/21/2016.
 */

/*
    This class have a set arithmetics methods based on
    recursive methods.
 */
function Math(){
    //properties
}

//Methods

/*
    This method execute all the arithmetic functions
    defined in the class
 */
Math.prototype.doOperations =function(){
    var numbers = arguments;
    console.log('The Total is ',this.getSum(numbers));
    console.log('The Maximum is ',this.getMax(numbers));
    console.log('The Minimum is ',this.getMin(numbers));
    console.log('The Average is ',this.getAvg(numbers));
};

/*
    This method returns the total addition
    of the input arguments
 */
Math.prototype.getSum = function(numbers, ini, fin)
{
    if (ini == null)
        ini = 0;

    if (fin == null)
        fin = numbers.length - 1;

    if (ini == fin)
        return numbers[fin];

    return numbers[ini] + this.getSum(numbers, ini + 1, fin);
};

/*
    This method returns the average of the total
    number addition of the input arguments
 */
Math.prototype.getAvg = function(numbers, ini, fin)
{
    if (ini == null)
        ini = 0;

    if (fin == null)
        fin = numbers.length - 1;

    if (ini == fin)
        return (numbers[fin]/numbers.length);

    return (numbers[ini]/numbers.length) + this.getAvg(numbers, ini + 1, fin);

};

/*
    This method returns the number with the maximum
    value of the input arguments
 */
Math.prototype.getMax = function(numbers, pos, max){

    if (pos == null)
        pos = numbers.length - 1;

    if (max == null)
        max = numbers[pos];

    if (pos == 0)
        return max;

    if (max < numbers[pos - 1])
        max = numbers[pos - 1];

    return this.getMax(numbers, pos - 1, max);
};

/*
    This method returns the number with the minimum
    value of the input arguments
 */
Math.prototype.getMin = function(numbers, pos, min){

    if (pos == null)
        pos = numbers.length - 1;

    if (min == null)
        min = numbers[pos];

    if (pos == 0)
        return min;

    if (min > numbers[pos - 1])
        min = numbers[pos - 1];

    return this.getMin(numbers, pos - 1, min);
};

/*
    A simple example about how to use this class
 */

var math = new Math();

math.doOperations(1,2,3,6,8);