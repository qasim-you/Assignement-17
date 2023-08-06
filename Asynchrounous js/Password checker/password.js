/* 1. Create an array of allowed passwords.

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
checker function */
const allowedPassword = ["Qasim","123","bs cs"] ;
function login(password) {
    return allowedPassword.includes(password) ;

}
function checkPasswordValidity(password) {
    return new Promise((resolve, reject) => {
        if (login(password)) {
            resolve({ isValid: true });
          } else {
            reject({ isValid: false });
          }
      
    }) ;
}
function checkPassword(password) {
    checkPasswordValidity(password)
.then((result) => {
        console.log("Password is valid:", result.isValid);
      })
      .catch((error) => {
        console.log("Password is invalid:", error.isValid);
      });
}
checkPassword("Qasim") ;

























































