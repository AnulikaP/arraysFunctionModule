//1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

//ANSWER
//Mutating array: methods are the ones that change the object after the method has been used 
//e.g array.push(), array.shift(), array.unshift(), array.pop(), array.splice.

//Non-mutating array methods do not change the object after the method has been used.e.g array.includes(), array.reduce(), array.concat(), array.find(), array.slice().


//2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them .
//ANSWERS
//1.Add ‘Kotlin’ to the end of the array
let arrayOfLanguages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'
];
console.log(arrayOfLanguages)

let addKotlin = arrayOfLanguages.push('Kotlin');

console.log(arrayOfLanguages);

//2.Add ‘Java’ after ‘Ruby’
arrayOfLanguages.splice(3, 0, 'Java');
console.log(arrayOfLanguages)

//3.Remove the first item in the array
arrayOfLanguages.shift();
console.log(arrayOfLanguages)

//4.Add ’Scala’ and ‘Swift’ to the beginning of the array

arrayOfLanguages.unshift('Scala', 'Swift');
console.log(arrayOfLanguages)

//5.Replace ‘PHP’ with ‘Go’ and ‘Rust’


arrayOfLanguages.splice(5, 1, "Go", "Rust");
console.log(arrayOfLanguages);

//3. What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		
function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
    console.log(changeFruit(fruit));// 'apple', 'mango', 'orange 
    

//4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10
    
let numberArray = [10, 15, 60, 30, 90];

function maxValue(items) {
	let max = items[0];
	for (let i = 1; i < items.length; i++) {
		if (items[i] > max){
			max = items[i]
		}
	}
         return (max);
}
console.log(maxValue(numberArray));//90


//5.Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]


let num = [2, 4, 5];

function valTimesIndex(array) {
  return array.map((valTimesIndex, index) => valTimesIndex * index);
}
		 let multipliedIndex = valTimesIndex(num);
console.log(multipliedIndex);//[0, 4, 10]