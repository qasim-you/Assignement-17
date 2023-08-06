/* 1. Set up a Promise that resolves with a value of Start Counting

. 2. Create a function named counter() that has one argument that gets
the value and outputs it into the console.

3. Set up the next function in the Promise with four then() instances,
which should output a value into the counter function, and return a
value which will provide input for the subsequent then() instance.
The returned values should be one , then two , then three . The
screen output in the console should be the following:
*/
 
const promiseCounting = new Promise((resolve, reject) => {
    resolve("Start Counting") ;
})


function counter(value) {
    console.log(value) ;
}
promiseCounting
.then((result)=>{
    counter(result);
    return "one" ;
}) 
.then((result)=>{
    counter(result);
    return "two" ;
}) 
.then((result)=>{
    counter(result);
    return "three" ;
}) 
.then((result)=>{
    counter(result);
    
}) 











































