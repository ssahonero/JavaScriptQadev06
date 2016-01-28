/*
    This exercise show us how to use the Date
    class.
 */

var date = new Date();

/*
    A method that returns the name of a day based
    on a number (1-7).
 */
var dayChange = function(number)
{
    if(number==1)
        return 'Monday';
    if(number==2)
        return 'Tuesday';
    if(number==3)
        return 'Wednesday';
    if(number==4)
        return 'Thursday';
    if(number==5)
        return 'Friday';
    if(number==6)
        return 'Saturday';
    if(number==7)
        return 'Sunday';
};

/*
    A method that returns an hour with a format of AM, PM hours
    based on a number (0-24).
 */
var dateChange = function(number)
{
    if(number > 12)
        return (number - 12) + ' PM';

    return (number) + 'AM';
};

/*
    A simple example that show how to the use
    the dateChange and dayVhange methods.
 */
console.log('Today is : ' + dayChange(date.getDay()));
console.log('Current time is : ' + dateChange(date.getHours())+' : '+date.getMinutes()+' : '+ date.getSeconds());