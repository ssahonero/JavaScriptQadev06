/**
 * Created by alejandraneolopan on 1/12/2016.
 */
console.log('This is a line from js');

/**
 * Return hello
 * @param name
 * @returns {string}
 */
sayHello=function(name){
    if (name)
    {
        return 'Hello '+name;
    }
    return 'Hello world';
};

var greeting =sayHello('Alejandra');
console.log(greeting);
//logic's operator == equal
//  === equal value and type

//this --la instancia actual

//x=3 number x ={} object could be JSON
//Defining a class
var Pet=function(){};//constructor
var Pet=function(name){//arguments n, no hay forma de decir varios...
    //Properties
    this.age=1;
    this.name=name;
    //Methods
    this.bark=function(){
        console.log(name  +' is barking ')
    };
    //SI QUISIERAMOS USAR VARIOS CONSTRUCTORES???
    draw=function()
    {
        console.log('Drawing');
    }

};//constructor

var Student=function(name,lastName,age,course,module){
    name? this.name=name:this.name='';
    lastName? this.lastName=lastName:this.lastName='';
    age? this.age=age:this.age=0;
    course? this.course=course:this.course='';
    module? this.module=module:this.module='';

    this.GetFullName=function(){
        return name+ ' '+ lastName;
    };
var age='';
    var calculateAge1=function(){
        age=2016-1986;
        return age;
    };
    console.log(age);
    var calculateAge=function(){
     var age2=2016-1987;
    };
    console.log(age);

};

var student=new Student('Toto','Perez',20);
console.log(student.GetFullName());


//var numbers
var operations =function(parameters){
    //Max, min, average, total
    //var sum=0;
    //parameters.length
numbers=parameters;
    console.log('The Total is ',getSum(0,numbers.length-1));
    console.log('The Maximum is ',getMax(numbers));
    console.log('The Minimum is ',getMin(numbers));
    console.log('The Average is ',getAvg(0,numbers.length-1,numbers.length));
};

var getSum = function(ini,fin)
{
    if (ini==fin)
    {return numbers[fin];}
    else
    {
        return params[ini]+getSum(ini+1,fin);
    }
};

var getAvg = function(ini,fin,size)
{
    if (ini==fin)
    {return numbers[fin] / size;}
    else
    {
        return params[ini]+getSum(ini+1,fin, size);
    }
};

var getMax = function(my_array)
{
    if (my_array.length == 1)
    {
        return	my_array[0];
    }
    var first = my_array[0];
    var last = my_array[my_array.length-1];
    return max(first < last ? my_array.slice(1) : my_array.slice(0, -1));
};

var getMin = function(my_array)
{
    if (my_array.length == 1)
    {
        return	my_array[0];
    }
    var first = my_array[0];
    var last = my_array[my_array.length-1];
    return max(first > last ? my_array.slice(1) : my_array.slice(0, -1));
};

operations(10,50,90,100);