/**
 * Created by SamuelSahonero on 1/28/2016.
 */

/*
     A regular expression that evaluates a string with
     a date format: e.g.: '2015-09-03'
*/
// Another way to do the method
//var regExp = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);

var regExp = new RegExp(/^\d{4}[-](0?[1-9]|1[012])[-](0?[1-3]|1[031])$/);

/*
    A simple example about how to use the regExp method
*/
regExp.test('2015-12-03');