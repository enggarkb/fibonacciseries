function generate_Fibonacci(num){
  var a = 1, b = 0, temp,result;

  if (num === undefined || num === null || num == "" || num <=0 ){
    alert("Please type positive and greater than zero value in the text box")
  }
  else {
    num = num - 2 // The first two number of fibonacci are 1 1 so we will minus two number from original input.
    result = a

    while (num >= 0){
      temp = a;
      a = a + b;
      result = result  + " " + a // To concatenate each series value
      b = temp;
      num--;
    }
  }
return result // To return fibonacci series based on input value 'num'
}
