// The Fibonacci function which will generate fibonacci series based on input value.
function generate_Fibonacci(num){
  var a = 1, b = 0, temp;

  if (num === undefined || num === null || num == "" || num <=0 ){
    alert("Please type positive and greater than zero value in the text box")
    To_reload()
  }
  else {
    num = num - 2 // The first two number of fibonacci are 1 1 so we will minus two number from original input.
    document.getElementById("series").innerHTML = a // To display first number of fibonacci series which is 1
    while (num >= 0){
      temp = a;
      a = a + b;
      document.getElementById("series").innerHTML = document.getElementById("series").innerHTML + " " + a // To concatenate each series value and show in paragraph tag
      b = temp;
      num--;
    }
  }
  result = document.getElementById("series").innerHTML

return result
}

// To reload the page

function To_reload(){
  location.reload()
}
