var date = new Date();

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

var dateChange = function(number)
{
    if(number > 12)
        return (number - 12) + ' PM';

    return (number) + 'AM';

};

console.log('Today is : ' + dayChange(date.getDay()));
console.log('Current time is : ' + dateChange(date.getHours())+' : '+date.getMinutes()+' : '+ date.getSeconds());