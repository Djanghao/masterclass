# 🤓 Learn Memoized Function| Caching ? || JS & TypeScript | Day-9 ✅🏃

**Author:** vermaamanmr
**Votes:** 243
**Link:** [https://leetcode.com/problems/memoize/solutions/3517845/](https://leetcode.com/problems/memoize/solutions/3517845/)

---

# Intuition
The question is asking to create a `memoized version` of a given `function (sum, fib, or factorial)` that will `cache` previously computed results and return them for subsequent calls with the same inputs, rather than recomputing them.

# Approach
- Define a function called` memoize` that takes in a function fn as its parameter.
- Create an empty object called `cache` to store previously computed results.
- Return a new function that takes in any number of arguments using the `spread syntax`.
- Use `JSON.stringify()` to convert the arguments into a string to use as a key for the cache object
- Check if the key already exists in the cache object. If it does, return the cached value.
- If the key doesn't exist in the cache, call the original function fn using `apply() `to pass the arguments and store the result in the cache object using the key as the property name.
- Finally, return the computed result.

# Caching

- Question involves the concept of caching.
- `Caching` is a technique used to improve the performance of a program by storing the results of expensive `operations` and returning the cached result
- In this question, the `memoized function` stores the results of the expensive operations `(sum, fib, and factorial)` and returns the cached result when the same input values are requested again. This can improve the performance of the program significantly as it reduces the number of expensive operations that need to be performed.

# Memoized Function

- Memoization is a technique used to optimize functions that are expensive to compute or have repeated computations with the same input.
- The cache is usually implemented as an object or a map that stores the previously computed results.
- When the memoized function is called with a new input, it first checks if the input exists in the cache. If it does, it returns the cached value. If it doesn't, it computes the result, stores it in the cache, and returns it.


# Complexity

- Time complexity: memoized function depends on the original function being memoized, and can range from O(1) to O(n) to O(2^n).

- Space complexity:
O(n), where n is the number of unique inputs to the function.

# Code In JS
```
/**
 * @param {Function} fn
 */
function memoize(fn) {
    
   const cache = {};
  
   return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = fn.apply(this, args);
    cache[key] = result;
    
    return result;
  }
  
}


const memoizedSum = memoize(function(a, b) {
  return a + b;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5

```

# Code In TypeScript 
```
type Func<T, U> = (arg: T) => U;

interface Cache<T, U> {
  [key: string]: U;
}

function memoize<T, U>(fn: Func<T, U>): Func<T, U> {
  const cache: Cache<T, U> = {};

  return function (...args: T[]): U {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

const memoizedSum = memoize(function (a: number, b: number): number {
  return a + b;
});

const memoizedFib = memoize(function (n: number): number {
  if (n <= 1) {
    return 1;
  }

  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

const memoizedFactorial = memoize(function (n: number): number {
  if (n <= 1) {
    return 1;
  }

  return memoizedFactorial(n - 1) * n;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5

console.log(memoizedFib(5)); // Output: Computing fib, 8
console.log(memoizedFib(5)); // Output: 8

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5)); 

```
![upvote-2.png](./images/0.png)
