//1-Vowel count 

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    var vowelsCount = 0;
    const vowels = /[aeiou]/gi;

    if(str.match(vowels) == null){
        vowelsCount = 0;
    }
    else{
        vowelsCount = str.match(vowels).length;
    }
    
    return vowelsCount;
}

//***********************************************************************

//2-Even or Odd 

/*Create a function (or write a script in Shell) 
that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function even_or_odd(number) {
    return (number%2 == 0) ? "Even" : "Odd";
}

//************************************************************************

//3-Get the middle character

/*You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, 
return the middle 2 characters.*/

/*#Examples:
    Kata.getMiddle("test") should return "es"

    Kata.getMiddle("testing") should return "t"

    Kata.getMiddle("middle") should return "dd"

    Kata.getMiddle("A") should return "A"
*/

/*#Input
    A word (string) of length 0 < str < 1000 
    (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). 
    You do not need to test for this. This is only here to tell you that you do not need to worry 
    about your solution timing out.
*/

/*#Output
    The middle character(s) of the word represented as a string.
*/

function getMiddle(s){
    return (s.length%2) ? s.charAt(Math.trunc(s.length/2)) : s.substr((s.length/2) -1, 2);
}

//************************************************************************

//4-Opposite number

/*Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34 */

function opposite(number) {
    if(number === 0){
        return 0;
    }
    else{
        return (number * -1);
    }
}

//************************************************************************

//5-Mumbling

/*This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

function accum(s){
    return [...s].map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join('-');
}

//************************************************************************

//6-You're a square!

/*A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
}

//************************************************************************

//7-Disemvowel Trolls

/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

//************************************************************************

//8-Highest and Lowest

/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers){
    numbers = [...numbers.split(' ').map(Number)];
    return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers);
}

//************************************************************************

//9-Exes and Ohs

/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
    let arr = [...str.toLowerCase()];
    return arr.filter(ele => ele == 'x').length == arr.filter(ele => ele == 'o').length;
}

//************************************************************************

//10-Square Every Digit

/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num){
    //may the code be with you
    return parseInt(num.toString().split('').map(i => i*i).join(''));
}

//************************************************************************

//11-Shortest word

/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    let words = s.split(' ');
    let shortWord = words.reduce((shortest, curr) => {
        return curr.length < shortest.length ? curr : shortest;
    });
    return shortWord.length;
}

//************************************************************************

//12-Complementary DNA

/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"  */

let DNAPairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
};

function DNAStrand(dna){
    return dna.replace(/./g, c => DNAPairs[c]);
}

//************************************************************************

//13-Descending Order

/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

function descendingOrder(n){
    return parseInt([...n.toString()].sort((a,b) => b - a).join(''));
}

//************************************************************************

//14-Sum of positive

/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
    return (arr === undefined || arr.length === 0) ? 0 : arr.reduce((sum, curr) => {
        if(curr > 0){
            return sum + curr;
        }
        return sum;
    }, 0); 
}

/* Another sol
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}*/

//************************************************************************

//15-Isograms

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case*/

function isIsogram(str){
    return str.toLowerCase().split('').every((letter, i, arr) => arr.indexOf(letter) == i);
}

//************************************************************************

//16-List Filtering

/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]*/

function filter_list(l) {
    return l.filter(curr => typeof curr == 'number');
}

//************************************************************************

//17-Find the smallest integer

/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

//************************************************************************

//18-Sum of two lowest positive integers

/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like 
[19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
}

//************************************************************************

//19-Growth of a Population

/*In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.*/

function nbYear(p0, percent, aug, p) {
    let years;
    for(years = 0; p0 < p; years++){
        p0 += (p0 * (percent / 100)) + aug;
    }
    return years;
}

//************************************************************************

//20-String repeat

/*Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/

function repeatStr(n, s){
    return s.repeat(n);
}

//************************************************************************

//21-Is this a triangle

/*Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).*/

function isTriangle(a,b,c){
    if(a + b > c && a + c > b && b + c > a){
        return true;
    }
   return false;
}

//************************************************************************

//22-Find the next perfect square

/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square*/

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let i = Math.sqrt(sq);
    if(Number.isInteger(i)){
        i++;
        return i * i;
    }
    return -1;
}

//************************************************************************

//23-Credit Card Mask

/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"*/

function maskify(cc) {
    return cc.replace(/[0-9a-zA-Z\W](?=([0-9a-zA-z\W]{4}))/g, '#'); //\W a non-word character
}

//************************************************************************

//24-Sum od odd numbers

/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8*/

function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}

//************************************************************************

//25-Find the divisors!

/*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"*/

function divisors(integer) {
    let arr = [];
    for(let i = 2; i < integer; i++){
        if(integer % i == 0){
            arr.push(i);
        }
    }
    return arr.length ? arr : `${integer} is prime`;
}

//************************************************************************

//26-Return Negative

/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/

function makeNegative(num) {
    return num <= 0 ? num : num * -1;
}

//************************************************************************

//27-Remove First and Last Character

/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.*/

function removeChar(str){
    return str.substring(1, str.length - 1);

}

//************************************************************************

//28-Remove String Spaces

/*Simple, remove the spaces from the string, then return the resultant string.*/

function noSpace(x){
    return x.replace(/[\s+]/g, '');
}

//************************************************************************

//29-Convert boolean values to strings 'Yes' or 'No'

/*Complete the method that takes a boolean value
 and return a "Yes" string for true, or a "No" string for false.*/

 function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}

//************************************************************************

//30-Convert a number to a String!

/*We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"*/

function numberToString(num) {
    return num.toString();
}

//************************************************************************

//31-Basic Mathematical Operations

/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7*/

function basicOp(operation, value1, value2){
    switch (operation){
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;
        case '*':
            return value1 * value2;
            break;
        case '/':
            return value1 / value2;
            break;  
         default:
             return 0;        
    }
}

//************************************************************************

//32-Sum of the first nth term of Series

/*Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
NOTE: In PHP the function is called series_sum().*/

function SeriesSum(n){
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += 1 / (i*3 + 1);
    }
    return sum.toFixed(2);
}

//************************************************************************

//33-Keep Hydrated!

/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5*/

function litres(time) {
    return Math.floor(time * 0.5);
}

//************************************************************************

//34-Century From Year

/*Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples :
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!*/

function century(year) {
    return Math.ceil(year / 100);
}

//************************************************************************

//35-Beginner - Lost Without a Map

/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.*/

function maps(x){
    return x.map(val => val * 2);
}

//************************************************************************

//36-Reversed Strings

/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'*/

function solution(str){
    return str.split('').reverse().join('');
}

//************************************************************************

//37-String ends with?

/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending){
    return str.endsWith(ending);
}

//************************************************************************

//38-Do I get a bonus?

/*It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).*/

function bonusTime(salary, bonus) {
    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
}

//************************************************************************

//39-Abbreviate a Two Word Name

/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

function abbrevName(name){

    return name.toUpperCase().match(/\b[A-Z]/g).join('.');

}

//************************************************************************

//40-DNA to RNA Conversion

/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */

function DNAtoRNA(dna) {
    return dna.split('').map(i => i == 'T' ? i = 'U' : i).join('');
    //Another sol: dna.replace(/T/g, 'U');
}

//************************************************************************

//41-Counting sheep...

/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(val => val === true).length;
}

//************************************************************************

//42-Ones and Zeros

/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. */

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2); //parseInt converts strings to numbers, 2nd arg represnt the base
};

//************************************************************************

//43-A Needle in the Haystack

/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" */

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}

//************************************************************************

//44-Remove the minimum

/*Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1] */

function removeSmallest(numbers) {
    //throw "TODO: removeSmallest";
    let copyarr = [...numbers];
    copyarr.splice(copyarr.indexOf(Math.min(...copyarr)), 1);
    return copyarr;

}

//************************************************************************

//45-Convert number to reversed array of digits

/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3] */

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

//************************************************************************

//46-Make a function that does arithmetic!

/*Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5 */

function arithmetic(a, b, operator){
    const math = {
        'add': (a,b) => a + b,
        'subtract': (a,b) => a - b,
        'multiply': (a,b) => a * b,
        'divide': (a,b) => a / b,
    };
    return math[operator](a,b);
}

//************************************************************************

//47-Regular Ball Super Ball

/*Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super" */

class Ball{
    constructor(ballType = 'regular'){
        this.ballType = ballType;
    }
}

//ball1 = new Ball('super');
//console.log(ball1.ballType);

//************************************************************************

//48-Make them Bark

/*You have been hired by a dogbreeder to write a program to keep record of his dogs.

You've already made a constructor Dog, so no one has to hardcode every puppy.

The work seems to be done. It's high time to collect the payment.

..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().

Can you solve this problem, or will you let this client outsmart you for good?

Practical info:
The .bark() method of a dog should return the string 'Woof!'.

The contructor you made (it is preloaded) looks like this:

function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}
Hint: A friend of yours just told you about how javascript handles classes diferently from other programming languages. He couldn't stop ranting about "prototypes", or something like that. Maybe that could help you... */

class Dog{
    constructor(name, breed, sex, age){
        this.name  = name;
        this.breed = breed;
        this.sex   = sex;
        this.age   = age;
    }
}

Dog.prototype.bark = function(){return 'Woof!'};

let jack = new Dog('Jack', 'Dobermann', 'male', '4');
console.log(jack.bark());

//************************************************************************

//49-Add property to every object in array

/*Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:*/

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

/*After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
The questions array is already defined for you and is not the same as the one in the example.
*/

/*questions.forEach(function(ele){
    ele.usersAnswer = 'null';
});*/ //assertion error

/*questions.map(obj => ({...obj, usersAnswer: null}));*/ //assertion error

for(const ele of questions){
    ele.usersAnswer = null;
}

//console.log(questions);

//************************************************************************

//50-FIXME: Get Full Name

/*The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early. 

The wrong code:

class Dinglemouse{

  constructor( firstName, lastName ){
  }
  
  getFullName(){
    return firstName+" "+lastName
  }
  
}
*/

class Dinglemouse{

    constructor( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName(){
        return `${this.firstName} ${this.lastName}`.trim();
    }
    
}

//console.log(new Dinglemouse("Clint", "Eastwood").getFullName());

//************************************************************************

//51-Grasshopper - Summation

/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */

var summation = function (num) {
  return num > 0 ? num + summation(num - 1) : num;
}

//console.log(summation(8));

//************************************************************************

//52-Jenny's secret message

/*Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

original function

function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
*/

function greet(name){
  if(name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}

//console.log(greet('Johnny')); //-> Hello, my love!
//console.log(greet('Dean')); //-> Hello, Dean!

//************************************************************************

//53-Function 1 - hello world

/*Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? 
What is a "hello world" solution you would want to show your friends? */

function greet1(){
    return 'hello world!';
}

//console.log(greet1()); //-> hello world!
//console.log(typeof greet1); //-> function

//************************************************************************

//54-Count the Monkeys!

/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1] */

function monkeyCount(n) {
    let monkeys = [];
    for(let i = 1; i <= n; i++){
        monkeys.push(i);
    }
    return monkeys;
}

//************************************************************************

//55-Are You Playing Banjo?

/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

function areYouPlayingBanjo(name) {
  return name.match(/^(R|r)/) ? `${name} plays banjo` : `${name} does not play banjo`;
}

//************************************************************************

//56-Find the capitals

/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

let capitals = function (word) {
	let pos = [];
    for(let i = 0; i < word.length; i++){
        if(word[i].match(/[A-Z]/)) pos.push(i);
    }
    return pos;
};

//console.log(capitals('CodEWaRs')); 

//************************************************************************

//57-Plural

/*We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero. */

function plural(n) {
  return (n != 1 && n >= 0);
}

//************************************************************************

//58-Drink about

/*Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky" */

function peopleWithAgeDrink(old) {
    if(old < 14) return "drink toddy";
    else if(old >= 14 && old < 18) return "drink coke";
    else if(old >= 18 && old < 21) return "drink beer";
    else if(old >= 21) return "drink whisky";
}

//************************************************************************

//59-Leonardo Dicaprio and Oscars

/*You have to write a function that describe Leo:

def leo(oscar):
  pass
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!" */

function leo(oscar){
    return oscar == 88 ? "Leo finally won the oscar! Leo is happy" :
           oscar == 86 ? "Not even for Wolf of wallstreet?!" :
           oscar < 88 ? "When will you give Leo an Oscar?" :
           "Leo got one already!";
}

//************************************************************************

//60-Switch/Case - Bug Fixing #6

/*Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

original function 

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    case'-': result = value.a - value.b;
    case'/': result = value.a / value.b;
    case'*': result = value.a * value.b;
    case'%': result = value.a % value.b;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}*/

function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b; break;
      case'-': result = value.a - value.b; break;
      case'/': result = value.a / value.b; break;
      case'*': result = value.a * value.b; break;
      case'%': result = value.a % value.b; break;
      case'^': result = Math.pow(value.a, value.b); break;
    }
    return result;
}

let valObj = {
    a: 10,
    b: 7,
    operation: '+',
}

//************************************************************************

//61-Sentence Smash

/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */

function smash (words) {
    return words.join(' ');
};

//************************************************************************

//62-If you can't sleep, just count sheep!!

/*Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

var countSheep = function (num){
    let result = '';
    for(let i = 1; i <= num; i++){
        result += i + ' sheep...';
    }
    return result;
}

//************************************************************************

//63-Double Char

/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  " */

function doubleChar(str) {
    return [...str].map(e => e + e).join('');
}

//************************************************************************

//64-Unfinished Loop - Bug Fixing #1

/*Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

original loop

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}*/

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}

//************************************************************************

//65-Sum of numbers from 0 to N

/*We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0 */

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let sum = 0;
      let input = '';
      if(count == 0) return '0=0';
      if(count < 0) return `${count}<0`;
      for(let i = 0; i <= count; i++){
          if(i == count) input += i;
          else input += i + '+';
          sum += i;
      }
      return input + " = " + sum;
    };
  
    return SequenceSum;
  
})();

//let res = SequenceSum.showSequence(4);//-> 0+1+2+3+4 = 10
//let res = SequenceSum.showSequence(0); //-> 0=0
//let res = SequenceSum.showSequence(-5); //-> -5<0

//************************************************************************

//66-Multiples of 3 or 5

/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them) */

function solution(number){
    let sum = 0;
    if(number <= 0) return 0;
    for(let i = 1; i < number; i++){
        if((i % 3 == 0) || (i % 5 == 0) || ((i % 3 == 0) && (i % 5 == 0))) sum += i;
    }
    return sum;
}

//************************************************************************

//67-Sum of Digits / Digital Root

/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */

function digital_root(n) {
    let sum = n; //return if n is only one digit
    let arr = [];
    //if n is multi digit
    while(sum > 9){
        sum = [...sum.toString()].reduce((a,b) => parseInt(a) + parseInt(b));
    }
    return sum;
}

//************************************************************************

//68-Who likes it?

/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases. */

function likes(names) {
    return (names == undefined || names.length == 0) ? 'no one likes this' : 
           names.length == 1 ? `${names[0]} likes this` :
           names.length == 2 ? `${names.join(' and ')} like this` :
           names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : 
           `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
}

//************************************************************************

//69-Find The Parity Outlier

/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */

function findOutlier(integers){
    let binary = integers.map((val) => Math.abs(val) % 2);
    console.log(binary);
    let count = 0;
    for(let i = 0; i < binary.length; i++){
        if(binary[i] == 0) count++;
    }
    if(count > 1) return integers[binary.indexOf(1)]; //return even parity
    else return integers[binary.indexOf(0)]; //return odd parity
}

/*another sol:
    function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
    }
*/

//************************************************************************

//70-Stop gninnipS My sdroW!

/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test" */

function spinWords(string){
    const strArr = string.split(' ');
    const reverseStr = (string) => {
        return string.split('').reverse().join('')
    };
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].length >= 5){
            strArr[i] = reverseStr(strArr[i]);
        }
    }
    return strArr.join(' ');
}

//************************************************************************

//let res = spinWords("Hey fellow warriors");
//console.log(res);