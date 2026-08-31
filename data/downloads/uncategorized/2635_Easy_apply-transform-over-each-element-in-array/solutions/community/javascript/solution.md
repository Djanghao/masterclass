# Day4=O(n)&O(1)>Practicality and Efficiency are two sides of the same coin!✔

**Author:** Cosmic_Phantom
**Votes:** 309
**Link:** [https://leetcode.com/problems/apply-transform-over-each-element-in-array/solutions/3498378/](https://leetcode.com/problems/apply-transform-over-each-element-in-array/solutions/3498378/)

---

**Why as a problem setter do you think the `Array.map()` was restricted to use??**
I can think of three reasons why the problem setter must have restricted us to use `Array.map()`..
1. To apply alternatives to built-in `Array.map()` method to encourage developers to think creatively and come up with alternative solutions using `loops`, `functions`, or `recursion`. 
2. Using `Array.map()` may not always be the most efficient solution, especially for large arrays, and other techniques like loops or recursion may be more performant. So, it's good to know and be comfortable with different approaches to solve array manipulation problems.
3. Finally, it could have gotten too easy with `Array.map()`.. ;)

***
### 1. Using a for loop with operational container:
* We can loop through each element of the input array and apply the `map function` to each element. We then store the transformed values in a new array.
```
var map = function(arr, fn) {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr[i] = fn(arr[i], i);
  }
  return transformedArr;
};
```
**TC and SC: O(n)**
***
### Using a for loop without any container a.k.a Inmemory transformations
```
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};
```
**TC and SC : O(n) and O(1)**
* This is a **bad practice** as it alters the given data and also It can result in unexpected problems where the programmer was not expecting that as a side-effect.
* Now think that you have got a data of array knwon as personsAge now they need to check if a person is 18+ or not and if yes they want to mark it as 1 if not then 0.
* So if we implement this method to that real world question we are gonna loose the most important data i.e. the persons age and instead of persons age now that column will have 1 and 0.
* Now say the app is scaled to many countries and one of the countires has +21 as adult benchmark.
* Should the firm again ask for their age?
* Should the developers have used a different method then it would have been a smooth process.

*"THATS WHY NEVER MESS WITH PASSED DATA."*
**#Note: The built-in `Array.map()` does not modify the original array.**
***
### 2. Using the forEach method:
* We can use the `forEach` method to iterate through each element of the `input array` and apply the `map function` to each element. We then store the transformed values in a new array.
```
var map = function(arr, fn) {
  const transformedArr = [];
  arr.forEach((element, index) => {
    transformedArr[index] = fn(element, index);
  });
  return transformedArr;
};
```
**TC and SC: O(n)**
***
### 3. Using the reduce method:
* We can use the `reduce` method to iterate through each element of the `input array` and apply the `map function` to each element. We then accumulate the transformed values in a new array.
```
var map = function(arr, fn) {
  return arr.reduce((transformedArr, element, index) => {
    transformedArr[index] = fn(element, index);
    return transformedArr;
  }, []);
};
```
**TC and SC: O(n)**
***
### 4. Using the for...of loop:
* We can use the `for...of loop` to iterate through each element of the` input array` and apply the `map function` to each element. We then store the transformed values in a new array.
```
var map = function(arr, fn) {
  const transformedArr = [];
  let index = 0;
  for (const element of arr) {
    transformedArr[index] = fn(element, index);
    index++;
  }
  return transformedArr;
};
```
**TC and SC: O(n)**
***
Here's my [github link](https://github.com/Jatin-Shihora) where I keep my solutions.
***