function validatePassword(password) {  
  return ifValidLength(password) && ifContainsOnlyLettersAndDigits(password) && ifContainsLettersAndDigits(password);
}
function ifValidLength(password) {
  let strlength = password.length;
  if (strlength >= 6 && strlength <= 20 ) {   //string length check
      return true;
  }
  else return false;
}
function ifContainsOnlyLettersAndDigits(password) {
  for (let value of password) {
    if (Number(value)) {                    // check number 
      for (let value of password) {
        if (Number(value)) {}               // check number in if (false)
        else {                              // letter check in if (true) 
          return true;                           
        }              
      }
    }
    else {                                  // letter check
      for (let value of password) {
        if (Number(value)) {                // check number in if (true)
          return true;  
        }                                  
        else {}                            // letter check in if (false)
      }
    }
    return false;
  }
}
function ifContainsLettersAndDigits(password) {
  for (let value of password) {
    if ("a" <= value && value <= "z" ) {
      continue
    }
    else if ("0" <= value && value <= "9"){
      continue
    }
    else {
      return false;
    }
  }
  return true;
}



password = prompt('Введіть пароль:')
let valid = validatePassword(password);
if (valid) {
  console.log("VALID")
}
else {
  console.log("INVALID")
}