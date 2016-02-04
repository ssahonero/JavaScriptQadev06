/**
 * Created by SamuelSahonero on 2/1/2016.
 */

//var askQuestions = function(){
//   console.log('How are you?');
//};

/*
 * Say hello
 * @param (function) cb, any function to execute
 */

var sayHello = function(cb, name) {
    if (name === null) {
        console.log('Hello world!');
        console.log('How are you?');
        console.log('What is your name?');
    } else
    {
        cb(name);
    }
};

/*
 * This is a basic example
 */
sayHello(function(name2){
    console.log('Hello '+ name2);
    console.log('How are you? '+ name2 + '?');
    console.log('What is your age? '+ name2 + '?');
    console.log('Do you have any brothers or sisters? '+ name2 + '?');
}, 'Leo');

sayHello(function(name3){
    console.log('Hello '+ name3);
    console.log('How are you? '+ name3 + '?');
    console.log('What type of food do you like? '+ name3 + '?');
    console.log('Do you have any brothers or sisters? '+ name3 + '?');
}, 'Popeye');

//sayHello(function(){
//    console.log('What\'s your name?');
//});


/*
 * Auto-executable functions, it only executes
 */
(function(){
    var a = 2;
    var b = 3;
    var res = a + b;
    console.log('Sum is ', res);
})();

/*
 * This is a basic example that receives
 */
(function(a, b){
    var res = a + b;
    console.log('Sum is ', res);
})(2, 3);