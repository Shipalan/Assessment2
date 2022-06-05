///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((sum, object) => {       //assigning variable summedPrice. Calling the .reduce() method on each object in the cart array. sum parameter is the starting point.
    return sum + object.price                            //taking sum and adding each price from each object to it.
}, 0)                                                    // 0 is the starting value of 'sum'

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(ct, cv, tax){
    let total = (tax + ct) - cv
    return total
}

let input = calcFinalPrice(summedPrice, 5, .06)

console.log(input)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Name- 'string' Its going to be a string because that is how you would track names.
    orderNumber- 'number' so they can keep track of the orders. It will be a number because it is a number value.
    items- array['string'] It will be an array of strings so I can keep track of multiple items.
    price- 'number' This will be a number value so we can keep track of the order cost.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const cart2 = {
    name: 'Alan',
    orderNumber: 1,
    items: ['Hamburger', 'fries', 'drink'],
    price: 12
}
