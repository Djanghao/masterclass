# 💣 Learn rest parameter & argument handling in function. ✅ 1 line easy sol in JS || TS🔥

**Author:** lovishtater
**Votes:** 248
**Link:** [https://leetcode.com/problems/return-length-of-arguments-passed/solutions/3586843/](https://leetcode.com/problems/return-length-of-arguments-passed/solutions/3586843/)

---

# Why rest parameter ?
<!-- Describe your first thoughts on how to solve this problem. -->
Rest parameters in JavaScript allow us to represent an indefinite number of arguments as an array within a function. It enables us to handle multiple arguments without explicitly defining each one in the function signature. 

The rest parameter is denoted by three dots (`...`) followed by a parameter name in a function declaration or function expression.

lets understand with example where we have an array and we want to pass all its value to a function :-

```
let array = [1,2,3,4,5];

// we expect argument to be passed in this way
function sum (a,b,c,d,e){
    console.log(a,b,c,d,e) // 1 2 3 4 5 
}

// brute force method 
sum(array[0],array[1],array[2],array[3],array[4]);

// Problem :- we have to pass each value individually & 
// if we have 1000 values in array then 
// we have to pass 1000 arguments in function which is not feasible.


// using spread parameter we can pass all the values of array in one go
sum(...array); 

//spread parameter allows us to pass indefinite number of arguments as an array within a function.
// In the function we can get them as an array and use them as we want.
 
function sum (...args){
    console.log(args) // [1,2,3,4,5]
}

// we can also use rest parameter to get part of arguments as an array
function sum (a,b,...args){
    console.log(a,b,args) // 1 2 [3,4,5]
}


```

# Approach
<!-- Describe your approach to solving the problem. -->
As we know `args` is an array of arguments passed to a function. We can use `args.length` to get the number of arguments passed to a function.

hence we will return `args.length` to get the number of arguments passed to a function.

# Complexity 
- Time complexity: $$O(1)$$ 
- Space complexity: $$O(1)$$

<img src="https://assets.leetcode.com/users/images/b93dcc50-7e19-44d3-80ec-c41558d719ba_1684043630.2104852.png" width="50%">

# Code
```javascript []
var argumentsLength = function(...args) {
 return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
```

```typescript []
function argumentsLength(...args: any[]): number {
  return args.length
};
/**
 * argumentsLength(1, 2, 3); // 3
 */
```
