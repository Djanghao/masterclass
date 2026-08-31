# 🤓O(1) SC | Learn Composition | Solution in JS and TypeScript || Learn ReduceRight | Day-7 ✅🏃

**Author:** vermaamanmr
**Votes:** 314
**Link:** [https://leetcode.com/problems/function-composition/solutions/3510406/](https://leetcode.com/problems/function-composition/solutions/3510406/)

---

# Intuition
The compose function takes an` array` of functions and returns a new function that applies each function in the array, from `right to left`, to the input value. This is useful when we want to apply a series of transformations to some input data.

# Approach
The compose function first checks if the input array is empty, and returns a function that simply returns its input if it is. Otherwise, it uses the reduceRight method of the array to apply the functions in reverse order. reduceRight is used instead of reduce to ensure that the functions are applied from right to left.

# What is Composition 
Composition simply means the combination of two or more functions to form a new function. When you compose two functions, you apply one function to the output of the other function.

For example, if you have two functions `f(x)` and `g(x)`, their composition would be `(f\u2218g)(x) = f(g(x))`. This means that you first apply the function `g(x)` to the input x, and then apply the function `f(x)` to the output of `g(x)`.

# Complexity
- Time complexity:
O(n), where n is the number of functions in the input array.

- Space complexity:
O(n), because it creates a new function for each function in the input array.

# What is ReduceRight
- reduceRight is a method available on arrays in JavaScript.
- It works like the reduce method, but starts from the right-hand side of the array instead of the left.
- It takes a callback function as its first argument, which takes two arguments: the accumulator and the current value.
- The callback function is called once for each element in the array, in reverse order.

Here's an example code for reduceRight to explain how it works:
```
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduceRight((prev, curr) => {
  return prev + curr;
});

console.log(sum); // Output: 15

```
In this example, the reduceRight method is used to compute the sum of the elements of an array in reverse order. The function passed to reduceRight takes two arguments: prev and curr, which represent the previous accumulated result and the current element of the array, respectively. 

# Code In JS
```
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }

  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });

};


const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

```

# Code In TypeScript
```
type Func = (arg: any) => any;

function compose(functions: Func[]): Func {
  if (functions.length === 0) {
    return (x: any) => x;
  }

  return functions.reduceRight((prevFn, nextFn) => {
    return (x: any) => {
      return nextFn(prevFn(x));
    };
  });
}

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

```
# O(1) space complexity 

```
var compose = function(functions) {
  if (functions.length === 0) {
    return function(x) { return x; };
  }
  
  return function(x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  }
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

```
It has space complexity of O(1) because it only uses a constant amount of memory to store the loop variable and the current value of x. 

![upvote-2.png](./images/0.png)

