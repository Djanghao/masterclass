# Official Solution

**Link:** [https://leetcode.com/problems/function-composition/solution/](https://leetcode.com/problems/function-composition/solution/)

---

[TOC]

## Solution

--- 

### Overview
Function composition is a concept in [functional programming](https://en.wikipedia.org/wiki/Functional_programming) where the output of one function is used as the input of another function. In other words, it's the process of chaining two or more functions together so that the result of one function becomes the input to the next.

For example, let's say we have two functions, `f(x)` and `g(x)`:

<iframe src="https://leetcode.com/playground/k2xzegva/shared" frameBorder="0" width="100%" height="89" name="k2xzegva"></iframe>

The composition of these two functions, denoted as `(f ∘ g)(x)`*, means applying the function `g(x)` first, and then using the result of `g(x)` as the input to `f(x)`. In this case, `(f ∘ g)(x)` would be:

<iframe src="https://leetcode.com/playground/FKkcVs85/shared" frameBorder="0" width="100%" height="72" name="FKkcVs85"></iframe>

So, when we compose the functions `f(x)` and `g(x)`, the resulting function `(f ∘ g)(x)` takes an input `x`, multiplies it by `3` (using `g(x)`), and then adds `2` to the result (using `f(x)`). 


<iframe src="https://leetcode.com/playground/a8r4sZKi/shared" frameBorder="0" width="100%" height="72" name="a8r4sZKi"></iframe>

So, when we compose the functions `f(x)` and `g(x)`, the resulting function `(f ∘ g)(x)` takes an input `x`, multiplies it by `3` (using `g(x)`), and then adds `2` to the result (using `f(x)`).

In this problem, you are given an array of functions and asked to create a single function that represents the function composition of the given array of functions.

The challenge here is to create a new function that evaluates the composition of the given functions in the correct order, from right to left. This requires understanding how to chain functions together and pass the output of one function as the input to the next.

In cases where the array of functions is empty, the composed function should act as the identity function, i.e., `f(x) = x`. In other words, the function should return whatever was passed into it without any modifications.


*The notation `(f ∘ g)(x)` is used in mathematics to represent function composition. It is read as "`f` composed with `g`" or "`f` of `g`." The small circle (`∘`) between `f` and `g` is the composition operator. This notation is used to indicate that the function `f` is applied to the result of applying the function `g` to the input `x`. In other words, you first apply `g(x)` and then use the result as the input to `f(x)`.

---

### Approach 1: Function Composition using Iteration

#### Intuition

Function composition is a concept where we apply a series of functions to an input value in a specified order. In this problem, we're asked to compose functions given in an array and create a new function that represents their composition. The order of applying these functions is from right to left, and when the array of functions is empty, we should return the identity function, which returns the input unchanged.

In order to solve this problem, we can iterate over the array of functions backwards and successively apply each function to the input value. We'll start with the input value `x` and apply the last function in the array to it. We'll then use the result as the input for the previous function and continue the process until we reach the first function in the array. After applying all the functions, we'll return the final result.

#### Algorithm
1. Inside the `compose` function, return another function that takes an input value `x`. 
2. Check if the length of the array of functions is zero; if so, return the identity function (i.e., return `x`).
3. Initialize a variable `input` with the value of `x`.
4. Iterate over the array of functions from the last index to the first index.
5.  For each function in the array, apply it to the `input` value and update the `input` with the result.
6.  After iterating through all the functions, return the final `input` value as the output of the composed function.

#### Implementation

Here is an implementation using a regular `for` loop: 

<iframe src="https://leetcode.com/playground/PJBjzx9r/shared" frameBorder="0" width="100%" height="344" name="PJBjzx9r"></iframe>


Implementation using a `for ... of` loop:

<iframe src="https://leetcode.com/playground/eLn4pmkE/shared" frameBorder="0" width="100%" height="293" name="eLn4pmkE"></iframe>

#### Complexity Analysis
Let $N$ be the number of functions in the array.

Time complexity: $O(N)$. Each of the $N$ functions in the array is called exactly once, assuming that each function has a constant time complexity.

Space complexity: $O(1)$. The iterative method uses a single variable input to store the intermediate results, not requiring any additional space.

---

### Approach 2:  Function Composition using Array.reduceRight()

#### Intuition

In the first approach, we used iteration to apply the functions from right to left. Alternatively, we can utilize the `Array.reduceRight()` method to achieve the same result. The `reduceRight()` method applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value. In this case, our accumulator will be the input value `x`, and the function will be the composition of the functions in the array.

Using `reduceRight()` simplifies the code and provides a more functional programming style solution. The key is to understand how the `Array.reduceRight()` method works and how it can be applied to this problem.

#### Algorithm

1. Inside the `compose` function, return another function that takes an input value `x`.
2. Use the `Array.reduceRight()` method to iterate over the functions from right to left.
3. For each function in the array, apply it to the accumulator (`x` initially) and update the accumulator with the result.
4. After iterating through all the functions, return the final accumulator value as the output of the composed function.

#### Implementation

<iframe src="https://leetcode.com/playground/BnB8VKgZ/shared" frameBorder="0" width="100%" height="157" name="BnB8VKgZ"></iframe>

The key here is to understand how `Array.reduceRight()` works.

`Array.reduceRight()` is a built-in JavaScript array method that can be used to apply a function to each element of an array, starting from the rightmost element and moving towards the left. It takes two arguments: a reducer function and an optional initial value for the accumulator.

The reducer function itself has four arguments: the accumulator, the current value, the current index, and the array being processed. The accumulator is a value that is being built up with each iteration, and it is returned at the end of the process. In our case, the accumulator represents the intermediate result of applying the functions in the composition.

Here's a breakdown of how `Array.reduceRight()` works in the context of the compose function:
1. The compose function receives an array of functions and returns a new function that takes an input value `x`.
2. When the new function is called with an input value `x`, it calls `Array.reduceRight()` on the functions array.
3. The reducer function is called for each function in the array, starting from the rightmost element and moving towards the left. The accumulator initially holds the input value `x`.
4. In each iteration, the reducer function applies the current function to the accumulator and updates the accumulator with the result.
5. Once all the functions have been applied, the final value of the accumulator is returned.

To illustrate this process, let's consider a simple example:

<iframe src="https://leetcode.com/playground/4874V9Rg/shared" frameBorder="0" width="100%" height="106" name="4874V9Rg"></iframe>

1. The compose function receives an array functions with two functions: `x => x * 2` and `x => x + 1`.
2. When `composedFn` is called with the input value `3`, it calls `Array.reduceRight()` on the functions array.
3. The reducer function starts with the rightmost function `x => x + 1` and applies it to the accumulator (initially `3`). The accumulator becomes `3 + 1 = 4`.
4. The reducer function then moves to the next function `x => x * 2` and applies it to the accumulator (now `4`). The accumulator becomes `4 * 2 = 8`.
5. The final value of the accumulator, `8`, is returned as the result of the composed function.

To sum up, by using `Array.reduceRight()`, we can easily apply the function composition in a clean and concise manner.

#### Complexity Analysis

Let $N$ be the number of functions in the array.

Time complexity: $O(N)$. Each of the $N$ functions in the array is called exactly once, assuming that each function has a constant time complexity.
Space complexity: $O(1)$. The reduceRight method uses an accumulator to store the intermediate results, not requiring any additional space.

---

### Additional Considerations

A professional implementation would need to consider several more things when dealing with function composition.

#### Handling this context
In JavaScript, the value of this within a function depends on how the function is called. When using function composition, it's important to consider how the `this` context of the original functions is preserved. Although the provided test cases may not explicitly test for this, handling the `this` context correctly can be crucial in real-world scenarios.

One approach to handle the `this` context is to use the `call` or `apply` methods when invoking the composed functions. This allows you to explicitly set the value of this when calling the function. For example:

<iframe src="https://leetcode.com/playground/QDEkrCev/shared" frameBorder="0" width="100%" height="174" name="QDEkrCev"></iframe>

This ensures that the `this` context of the original functions is preserved when they are called as part of the composed function. For more clarity, consider a scenario where the functions you're composing are methods on an object, and they rely on `this` to access other properties or methods on that object. If you don't correctly preserve the `this` context when composing these methods, they may not work as expected.

<iframe src="https://leetcode.com/playground/ZZ2YMCit/shared" frameBorder="0" width="100%" height="500" name="ZZ2YMCit"></iframe>

To handle this situation, you can use the `call` or `apply` methods when invoking the composed functions. This allows you to explicitly set the value of `this` when calling the function:

<iframe src="https://leetcode.com/playground/ZRXeaVP3/shared" frameBorder="0" width="100%" height="500" name="ZRXeaVP3"></iframe>

#### Using External Libraries

Instead of writing your own function composition implementation, you might consider using external libraries that provide this functionality. Libraries like Ramda and Lodash offer various utility functions, including function composition. By using a well-known library, you can benefit from the following:

1. Robustness: These libraries have been tested extensively and are used by many developers, ensuring that their implementations are reliable and handle various edge cases.
2. Performance: These libraries are optimized for performance and are likely to have better performance characteristics than a custom implementation.
3. Readability: Using a popular library can improve the readability of your code, as other developers are more likely to be familiar with the library's functions and their behavior.
4. Documentation: Renowned libraries usually have comprehensive documentation. This can significantly ease the development process, as you can quickly refer to the documentation for function explanations, usage examples, and more. Furthermore, many modern code editors support features like hovering over a function to display a brief description and a link to more detailed documentation. This is particularly helpful for understanding the expected behavior of library functions without having to constantly switch to a web browser.

Here's an example of using Ramda's `compose` function:

<iframe src="https://leetcode.com/playground/YEcsjDym/shared" frameBorder="0" width="100%" height="106" name="YEcsjDym"></iframe>

And similarly, using Lodash's `flowRight` function:

<iframe src="https://leetcode.com/playground/kJA3Snsp/shared" frameBorder="0" width="100%" height="106" name="kJA3Snsp"></iframe>