/**
 * Created by SamuelSahonero on 1/21/2016.
 */
function Math(){
    //properties

}

//Methods

Math.prototype.doOperations =function(){
    console.log('The Total is ',getSum(0,arguments.length-1));
    console.log('The Maximum is ',getMax(numbers));
    console.log('The Minimum is ',getMin(numbers));
    console.log('The Average is ',getAvg(0,numbers.length-1,numbers.length));
};

Math.prototype.getSum = function(ini,fin)
{
    if (ini==fin)
    {return arguments[fin];}
    else
    {
        return arguments[ini]+getSum(ini+1,fin);
    }
};

Math.prototype.getAvg = function(ini,fin,size)
{
    if (ini==fin)
    {return arguments[fin] / size;}
    else
    {
        return arguments[ini]+getSum(ini+1,fin, size);
    }
};

Math.prototype.getMax = function(my_array)
{
    if (my_array.length == 1)
    {
        return	my_array[0];
    }
    var first = my_array[0];
    var last = my_array[my_array.length-1];
    return max(first < last ? my_array.slice(1) : my_array.slice(0, -1));
};

Math.prototype.getMin = function(my_array)
{
    if (my_array.length == 1)
    {
        return	my_array[0];
    }
    var first = my_array[0];
    var last = my_array[my_array.length-1];
    return max(first > last ? my_array.slice(1) : my_array.slice(0, -1));
};
doOpe(1,2,3,6,8)