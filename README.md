# Assignement-17
1- Practice exercise 13.1

    This exercise will demonstrate how to use a callback function, creating a
    way to pass a value from one function to another by invoking a callback
    function. We will create a greeting callback using a full name in a string.

    1. Create a function named greet() that takes one argument, fullName .
    That argument should be an array. Output the items of the array into
    the console interpolated into a greeting message string.

    2. Create a second function that has two arguments: the first one is a
    string for the user's full name, and the second is the callback
    function.

    3. Split the string into an array using the split() method.

    4. Send the full-name array to the greet() function created in the first
    step.

    5. Invoke the process of the callback function

2- Practice exercise 13.2

    In this exercise, you will create a counter that will output the values in
    sequence using Promises.

    1. Set up a Promise that resolves with a value of Start Counting . 2. Create a function named counter() that has one argument that 
    gets
    the value and outputs it into the console.

    3. Set up the next function in the Promise with four then() instances,
    which should output a value into the counter function, and return a
    value which will provide input for the subsequent then() instance.
    The returned values should be one , then two , then three . The
    screen output in the console should be the following:

    Start Counting
    One
     Two
    Three

3- Practice exercise 13.3

    This exercise will demonstrate how to use await to wait on a Promise
    inside an async function. Using await and async , create a counter with
    timeout() , and increment a global counter value.

    1. Create a global value for a counter. 2. Create a function that takes one argument. Return the result of a new
    Promise, setting a setTimeout() function that will contain the resolve
    instance.

    3. Increment the counter within setTimeout() , adding one every second.
    Resolve the Promise with the value of the counter and the value of the
    variable that was in the function argument.

    4. Create an asynchronous function that outputs into the console the
    value of the global counter and the value of the argument of the
    function.

    5. Create a variable to capture the returned resolve value from the await
    function. Output that result into the console.

    6. Create a loop to iterate 10 times, incrementing the value and invoking
    the async function, passing the mes, incrementing the value and invoking
    the async function, passing the value of the increment variable as the
    parameter in the function.

    The results should look like the following:

    ready 1 counter:0
    ready 2 counter:0
    ready 3 counter:0
    x value 1 counter:1
    x value 2 counter:2
    x value 3 counter:3

4- Password checker

    Using an array of allowed passwords, this exercise will create an
    application to check if one of these password string values exists in an array
    that lists all the accepted passwords. Set a Promise to check if the password
    is valid, and upon the result either resolve with the status of true or reject
    with the status of false. Return the check results.
    1. Create an array of allowed passwords.

    2. Create a login function that will check if the argument is a value that is
    included in the passwords array. You can use indexof() or the
    includes() method to check the array for a value and return a
    Boolean value of the result.
    The includes() method is an array method that can check
    whether a certain value is included among the items in the array. It
    will return a Boolean value depending on the result.

    3. Add a function that returns a Promise. Using resolve and reject ,
    return a JavaScript object with the Boolean of true or false to
    indicate the password validity status.

    4. Create a function that checks the password, sending it to the login
    function, and using then() and catch() , outputs the result of either
    the rejected password or the resolved password.

    5. Send several passwords, some within the array, others not, to the
    checker function.
