function applyAll(func, a) { 
    return func(a);
  }
  let sum = (a) => { //calculating the sum
    result = 0;
    for (i = 0; i != a.length; i++)
    result += a[i];
    return result;
  }
  let mult = (a) => { //calculating the multiplication
    let result = 1;
    for (i = 0; i != a.length; i++)
    result *= a[i];
    return result;
  }
  let diff= (a) => {  //calculating the difference
    let result = a[0];
    for (i = 1; i != a.length; i++)
    result -= a[i];
    return result;
  }
  let frac= (a) => {  //calculating the fraction
    let result = a[0];
    for (i = 1; i != a.length; i++)
    result /= a[i];
    return result;
  }
  
  const numbers = [75, 4, 10];
  console.log(applyAll(sum,numbers));
  console.log(applyAll(mult,numbers));
  console.log(applyAll(diff,numbers));
  console.log(applyAll(frac,numbers));