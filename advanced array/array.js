console.log("Here is : ", "array");

/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
// array1 = [1, 7, 9, 45];
// array2 = ["Str", "alex", "moh"];
// array3 = ["the", "fox", "over", "lazy", "dog"];

//----------------------------------------------

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// const fruits = ["Tomato", "Banana", "Watermelon"];
// let index1 = fruits.indexOf("Tomato");
// let index2 = fruits.indexOf("Banana");
// console.log(index1);
// console.log(index2);

//----------------------------------------------

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// const Favorite_Food = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// const Sport = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// const Movie = ["Banana", "Orange", "Apple", "Mango", "Apple"];

//----------------------------------------------

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// let array = [1, 4, 5];

// function firstOfArray() {
//   return array[0];
// }
// console.log(firstOfArray());
/*
5------------------------------------------------------------------------
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// let arraylast = [1, 4, 5];

// function firstOfArray() {
//   return arraylast[2];
// }
// console.log(firstOfArray());
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// var arraybefor = [0, 5, 7, 9];
// arraybefor.shift();
// arraybefor.shift();
// arraybefor.shift();
// arraybefor.pop(9);
// arraybefor.unshift(9);

// arraybefor.unshift(8);
// arraybefor.unshift(6);

// arraybefor.unshift(4);
// arraybefor.unshift(3);
// arraybefor.unshift(1);
// arraybefor.push(10);

// console.log(arraybefor);

/*
7----------------------------------------------------------------------------------------------------
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// var array2 = [5, 9, -7, 3.5];
// array2.shift();
// array2.shift();
// array2.pop(9);
// array2.unshift(9);
// array2.unshift(8);
// array2.unshift(6);

// array2.unshift(4);
// array2.unshift(3);
// array2.unshift(1);
// array2.push(10);

// console.log(array2);
/*
8----------------------------------------------------------------------------------
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

// var arr = [2, 4, 6, 8, 10];

// function middleOfArray(array) {
//   let result = [];
//   let n = arr.length;

//   const median = Math.floor(n / 2);

//   if (n % 2 == 0) {
//     return array[median - 1] + " , " + array[median];
//   } else {
//     return array[median];
//   }
// }
// console.log(middleOfArray(arr));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// var animals = ["cat", "ele", "bird"];
// animals[0] = "zebra";
// animals[1] = "elephant";

// console.log(animals);
/*
10----------------------------------------------------------------------------------
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self--------sol
*/
// const nums = [1, 2, 3, 8, 9];
// let index = 3;

// function indexOfArray(array, index) {
//   return array[index];
// }
// console.log(indexOfArray(nums, index));

//----------------------------------------------

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
// const nums = [1, 2, 3, 8, 9];

// function arrayExceptLast(array) {
//   nums.pop();
//   return nums;
// }
// console.log(arrayExceptLast(nums));

/*---------------------------------------------------------------------------
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// const nums = [1, 2, 3, 8, 9];

// function addToEnd(array, value) {
//   nums.push(55);
//   return nums;
// }
// console.log(addToEnd(nums));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp--------------------
/*

//----------------------------------------------

13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop

// var nums = [1, 2, 3, 8, 9];
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray(nums));

//while loop
// var nums = [1, 2, 3, 8, 9];

// function sumArray(arr) {
//   let sum = 0;
//   let i = 0;
//   while (i < arr.length) {
//     sum += arr[i];
//     i++;
//   }
//   return sum;
// }

// console.log(sumArray(nums));

//----------------------------------------------

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
// var nums = [1, 2, 3, 8, 9];

// function minInArray(arr) {
//   let minimum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minimum) {
//       minimum = arr[i];
//     }
//   }
//   return minimum;
// }

// console.log(minInArray(nums));

//while loop
// var nums = [1, 2, 3, 8, 9];

// function minInArray(arr) {
//   let minimum = arr[0];
//   let i = 1;

//   while (i < arr.length) {
//     if (arr[i] < minimum) {
//       minimum = arr[i];
//     }
//     i++;
//   }
//   return minimum;
// }

// console.log(minInArray(nums));

//----------------------------------------------

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop

// var nums = [1, 2, 3, 8, 9];

// function removeFromArray(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == element) {
//       arr.splice(i, 1);
//       i--; // Adjust the index again
//     }
//   }
//   return arr;
// }

// console.log(removeFromArray(nums, 8));

//while loop

// var nums = [1, 2, 3, 8, 9];

// function removeFromArray(arr, element) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] == element) {
//       arr.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   return arr;
// }
// console.log(removeFromArray(nums, 8));
//----------------------------------------------

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop

// var nums = [1, 2, 3, 8, 9];

// function oddArray(arr) {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       array[array.length] = arr[i];
//     }
//   }
//   return array;
// }

// console.log(oddArray(nums));

//while loop
// var nums = [1, 2, 3, 8, 9];

// function oddArray(arr) {
//   let array = [];
//   let i = 0;

//   while (i < arr.length) {
//     if (arr[i] % 2 !== 0) {
//       array[array.length] = arr[i];
//     }
//     i++;
//   }

//   return array;
// }
// console.log(oddArray(nums));
//----------------------------------------------

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//------ for loop

// var nums = [1, 2, 3, 8, 9];

// function aveArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   var average = sum / arr.length;
//   return average;
// }

// console.log(aveArray(nums));

//------  while loop
// var nums = [1, 2, 3, 8, 9];

// function aveArray(arr) {
//   let sum = 0;
//   let i = 0;
//   while (i < arr.length) {
//     sum += arr[i];
//     i++;
//   }
//   var average = sum / arr.length;
//   return average;
// }

// console.log(aveArray(nums));
//----------------------------------------------

// 18
// Create a function called shorterInArray
// that accept an array of strings
// and return the shortest string inside this array (first)

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterInArray(strings) => "alex"

// ** solve it one time using for loop and another using while loop
// **try more cases by your self

// using For loop

// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
// function shorterInArray(arr) {
//   let short = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length < short.length) {
//       short = arr[i];
//     }
//   }

//   return short;
// }
// console.log(shorterInArray(strings));

//--- using While
// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

// function shorterInArray(arr) {
//   let short = arr[0];
//   let i = 1;
//   while (i < arr.length) {
//     if (arr[i].length < short.length) {
//       short = arr[i];
//     }
//     i++;
//   }

//   return short;
// }

// console.log(shorterInArray(strings));

//----------------------------------------------

//  19
// Create a function called repeatChar
// that accept a string and char
// and return the times that this char repeat inside this string

// var string= "alex mercer madrasa rashed2 emad hala"
// Ex: repeatChar(string,"a") => 6
// Ex: repeatChar(string,"z") => 0

// ** solve it one time using for loop and another using while loop
// **try more cases by your self

//-- solving using For loop

// var string = "alex mercer madrasa rashed2 emad hala";

// function repeatChar(str, char) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(repeatChar(string, "a"));
// console.log(repeatChar(string, "z"));

// console.log(repeatChar(string, "m"));
// console.log(repeatChar(string, "d"));

// solving it using While loop

var string = "alex mercer madrasa rashed2 emad hala";

function repeatChar(str, char) {
  let counter = 0;
  let i = 0;

  while (i < str.length) {
    if (str[i] === char) {
      counter++;
    }
    i++;
  }

  return counter;
}

console.log(repeatChar(string, "a"));
console.log(repeatChar(string, "z"));
console.log(repeatChar(string, "m"));
console.log(repeatChar(string, "d"));

//----------------------------------------------

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// solve For loop

// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

// function evenIndexOddLength(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i].length % 2 !== 0) {
//       result[result.length] = arr[i];
//     }
//   }

//   return result;
// }

// console.log(evenIndexOddLength(strings));

// -- solve using While

// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

// function evenIndexOddLength(arr) {
//   let result = [];
//   let i = 0;

//   while (i < arr.length) {
//     if (i % 2 == 0 && arr[i].length % 2 !== 0) {
//       result[result.length] = arr[i];
//     }
//     i += 2;
//   }

//   return result;
// }

// console.log(evenIndexOddLength(strings));

//----------------------------------------------

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//-- solve using For

// var nums = [44, 5, 4, 3, 2, 10];

// function powerElementIndex(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[result.length] = Math.pow(arr[i], i);
//   }

//   return result;
// }

// console.log(powerElementIndex(nums));

//-- solve  using While

// var nums = [44, 5, 4, 3, 2, 10];

// function powerElementIndex(arr) {
//   let result = [];
//   let i = 0;

//   while (i < arr.length) {
//     result[result.length] = Math.pow(arr[i], i);
//     i++;
//   }

//   return result;
// }

// console.log(powerElementIndex(nums));

// ==== same question 21  ===    (( but Another case I did here using For loop ))

// var nums = [1, 5, 4, 3, 2, 3];

// function powerElementIndex(arr) {
//   let result = [];
//   let i = 0;

//   while (i < arr.length) {
//     result[result.length] = Math.pow(arr[i], i);
//     i++;
//   }

//   return result;
// }

// console.log(powerElementIndex(nums));

//----------------------------------------------

// 22

// Create a function called evenNumberEvenIndex
// that accept an array of nums
// and return a new array that have the even number in even index

// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// Ex: evenNumberEvenIndex(nums) => [2,8,34]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self

//---- using For loop

// var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
// function evenNumberEvenIndex(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0 && arr[i] % 2 === 0) {
//       result[result.length] = arr[i];
//     }
//   }

//   return result;
// }

// console.log(evenNumberEvenIndex(nums));

//-- solve  using While loop

// var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];

// function evenNumberEvenIndex(arr) {
//   let result = [];
//   let i = 0;

//   while (i < arr.length) {
//     if (i % 2 == 0 && arr[i] % 2 === 0) {
//       result[result.length] = arr[i];
//     }
//     i++;
//   }

//   return result;
// }

// console.log(evenNumberEvenIndex(nums));
