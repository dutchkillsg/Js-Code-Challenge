//write a function that names stringy
function stringy(size){
	//create and empty array to hold new value
	var num=[]
	//push a the string value of 1 into array
	num.push('1')
	//loop through the array and if the variable equals 1 then push a 0
	for(i=0;i<num.length;i++){
		if(num[i]=='1'){
			num.push('0')
	//if num has 0 in in it push 1
		} else if(num[i]=='0'){
		  num.push('1')
		} 
	//have num.length be greater than to size argument
		if(num.length>size-1){
		  return num.join();
		}
	} 
}
stringy(6);

//given a non-negative integer, return an array containing a list of independent digits in reverse order
function userInput(num) {

  // array where the number wll be pushed
  var inputArray = [];

  // loop
  // the array will be the length of the number passed into function. To get the reverse of the number, subtract the number's length from counter. This will be the index value of the number that is pushed into array.
  for (i=0; i <= num.length; i++) {
    var size = num.length
    var reverse = num[num.length - i];

    inputArray.push(reverse);
  }
  
  inputArray.shift(0);
  return inputArray
  // console.log(inputArray);
}

userInput("123456789");

//fibonacci numbers: 
//start with an array with the values 0 and 1
var fib = [0,1];
//for index =0, i is going to be less than a thousand because I want to see it go far
//for it being less i will keep adding
for(var i=2; i<1000; i++) {
//
    fib[i] = fib[i-2] + fib[i-1]
}
console.log(fib);


//check coupons

// date variables
var checkMonth;
var checkDay;
var checkYear;
var date = new Date();

// month array, will have to convert month to number from 0-11 since that's what getMonth returns
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function checkCoupon(couponDate) {
  // retrieving current month, day and year
  checkMonth = date.getMonth();
  checkDay = date.getDate();
  checkYear = date.getFullYear();
  // console.log(checkMonth);
  // console.log(checkDay);
  // console.log(checkYear);

  // variable containing the input date string split, splitting by space
  var values = couponDate.split(" ");

  // the different parts of date string (3) can be accessed like array
  values[0] = month.indexOf(values[0]);
  // console.log(values)

  // removing the comma after the day
  values[1] = values[1].slice(0, -1);
  // console.log(values)

  // turning string values into numbers
  values[1] = parseInt(values[1]);
  values[2] = parseInt(values[2]);
  // console.log(values)

  // checking coupon date against current date
  // if the year on coupon is greater than current year, then the coupon is valid
  if (values[2] > checkYear) {
    return true
  }
  // if the year on coupon is same as current year, check if the coupon month is greater than current month, if yes then coupon is valid
  else if (values[2] == checkYear && values[0] > checkMonth) {
    return true
  }
  // if the coupon year and month are same as current date, then check to see if the day on coupon is greater than or equal to the current date, if yes coupon is valid
  else if (values[2] == checkYear && values[0] == checkMonth && values[1] >= checkDay) {
  return true
  }
  // if none of the conditions above were met, then coupon is invalid
  else {
    return false
  }
}

checkCoupon("March 01, 2019");


