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
    var day;

    switch (number) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
    }

    return day;
};

/*
    A method that returns an hour with a format of AM, PM hours
    based on a number (0-24).
 */
var dateChange = function(number)
{
    return (number > 12) ? (number - 12) + ' PM' : (number) + ' AM';
};

/*
    A simple example that show how to the use
    the dateChange and dayVhange methods.
 */
console.log('Today is : ' + dayChange(date.getDay()));
console.log('Current time is : ' + dateChange(date.getHours())+' : '+date.getMinutes()+' : '+ date.getSeconds());