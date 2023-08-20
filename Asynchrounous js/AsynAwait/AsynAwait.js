/*  1. Create a global value for a counter. 2. Create a function that takes one argument. Return the result of a new
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
    the async function, passing the value of the increment variable as the
    parameter in the function. */

let counterValue = 0;
function delayIncrement(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      counterValue += 1;
      resolve({ counter: counterValue, argumentValue: value });
    }, 1000);
  });
}
async function resultValue(value) {
  let result = await delayIncrement(value);
  console.log("Counter Value:", result.counter);
  console.log("Argument Value:", result.argumentValue);
  return result ;
}
async function runLoop() {
    for(let i = 0 ; i <= 10 ; i++){
        const result = await resultValue(i);
        console.log("Resolve Value:", result);
    }
}
runLoop();
