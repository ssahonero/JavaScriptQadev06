/**
 * Created by SamuelSahonero on 1/21/2016.
 */
function Math(){
    //properties

}

//Methods

Math.prototype.doOperations =function(){
    var numbers = arguments;
    console.log('The Total is ',this.getSum(numbers));
    console.log('The Maximum is ',this.getMax(numbers));
    console.log('The Minimum is ',this.getMin(numbers));
    console.log('The Average is ',this.getAvg(numbers));
};

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

var math = new Math();

math.doOperations(1,2,3,6,8);