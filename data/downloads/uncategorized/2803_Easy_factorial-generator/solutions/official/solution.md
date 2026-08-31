# Official Solution

**Link:** [https://leetcode.com/problems/factorial-generator/solution/](https://leetcode.com/problems/factorial-generator/solution/)

---

[TOC]


## Overview:
Our goal is to create a factorial sequence for a given non-negative integer `n`. The factorial sequence is a series of numbers where each number is the product of all positive integers from 1 to that number. Apart from this one more thing is mentioned i.e., "The calling code yields the value one by one". This statement helps us to think in a right direction i.e., we can use `yield` to get the values one by one. 

In the context of this question, the calling code expects to receive the factorial values one by one. It doesn't want to compute or generate all the factorial values at once; it wants to access them incrementally, only as needed. 

So let's understand how the generator function accomplishes this:
1. **Initialization:** The generator function is defined with the logic for calculating the factorial sequence.
2. **Caller Interaction:** When the calling code requests a value from the generator using the generator's `next()` method, the generator's code starts executing until it encounters a `yield` statement.
3. **Yield Value:** At the `yield` statement, the generator produces (yields) the current value to the calling code. This value is returned to the caller, and the generator's execution is paused.
4. **Resumption:** The next time the generator's `next()` method is called, execution resumes from where it was paused, continuing until the next `yield` statement or until the generator's logic is exhausted.
5. **Iterative Process:** This process repeats every time the generator's `next()` method is called, allowing the caller to obtain values one at a time without needing to compute or generate all the values upfront.

So each time the calling code requests a value, the generator calculates the next factorial value using the chosen approach(which we will discuss below) and then uses the `yield` statement to provide that value to the caller. The calling code can then proceed to request the next value, and the generator will continue providing values incrementally.

This lazy evaluation and incremental value production are what make generators suitable for scenarios where large sequences of values need to be generated or computed without consuming excessive memory or computational resources upfront. 
[Generate Fibonacci Sequence](https://leetcode.com/problems/generate-fibonacci-sequence/) is a good problem to understand more about generators.

---

## Approach 1: Iterative Approach

### Intuition: 
Upon understanding the problem statement, it's clear that we need to yield factorial values one by one. Thus the core idea is to iterate through the range from `1` to `n`, calculating and yielding the factorial value for each number in the sequence. 

### Algorithm: 
1. Initialize a variable `fact` to 1. This will be used to accumulate the factorial value.
2. Iterate i from 1 to n.
    * In each iteration, multiply `fact` by `i` to calculate the factorial value for the current iteration.
3. Inside the loop, yield the current value of `fact` to produce the next element in the factorial sequence.

### Implementation: 


<iframe src="https://leetcode.com/playground/eavUTtkb/shared" frameBorder="0" width="100%" height="225" name="eavUTtkb"></iframe>


### Complexity Analysis:

* **Time complexity:** The generator iterates from `1` to `n`, performing constant-time operations (multiplication and yielding) in each iteration. Therefore, the time complexity is $O(n)$.

* **Space complexity:** The implementation uses a constant amount of extra space for variables (`fact`, `i`). Thus, the space complexity is $O(1)$. It will remain constant even if you were to call the generator `n` times, because the generator function only keeps track of its current state and doesn't store all previously generated values.

---

## Approach 2: Recursive approach

### Intuition: 
An alternate approach is to use recursion to calculate the factorial sequence. In this case, we'll define a recursive function that calculates the factorial for each value of `n` and yields the result.
 
### Algorithm: 
1. Define a recursive function `factorialRecursive(n)` that takes an integer `n` as an argument.
2. The base case is when `n` is `0` or `1`. In this case, return `1`, Otherwise recursively calculate `factorialRecursive(n - 1)` and multiply it by `n` to get the factorial value for `n`.
3. Finally yield the factorial value for the current `n`.

### Implementation: 


<iframe src="https://leetcode.com/playground/RT9QDxbU/shared" frameBorder="0" width="100%" height="327" name="RT9QDxbU"></iframe>


### Complexity Analysis:

* **Time complexity:** We are iterating from `1` to `n`, where each iteration involves recursive calculations. The recursion performs a constant number of operations for each `n`, resulting in a total time complexity of $O(n^2)$.

* **Space complexity:** The space complexity is determined by the depth of the recursion, which is $O(n)$ due to the call stack.

---

## Approach 3: Memoization

We can upgrade our recursive approach to a memoized approach by introducing a `memo` Map to store calculated factorial values for specific `n` values. When the recursive function is called, it first checks if the result for a specific `n` is already present in the memoization cache. If so, it returns the cached result. If not, it calculates the result recursively, stores it in the cache, and then returns it. This way, repeated calculations are avoided, improving performance for larger values of `n`.

### Implementation: 


<iframe src="https://leetcode.com/playground/T59Z4VUf/shared" frameBorder="0" width="100%" height="500" name="T59Z4VUf"></iframe>


### Complexity Analysis:

* **Time complexity:** We are iterating from `1` to `n`, where each iteration involves recursive calculations. For each value of `n`, the recursive function calculates the factorial by recursively calling itself `n` times. However, due to memoization, the function calculates the factorial of each value of `n` only once and stores the result in the memoization cache resulting in $O(n)$.

* **Space complexity:** The space complexity is determined by the depth of the recursion and the memo cache, which will result in an overall space complexity of $O(n)$.

---

## Interview Tips:

* Why would you choose to use a generator function for generating the factorial sequence?
    * Using a generator function allows for lazy evaluation of values, which is efficient when dealing with large sequences of values. It avoids upfront computation and memory consumption.

* How does using a generator for the factorial sequence help manage memory consumption?
    * Generators generate values on-the-fly and only store the necessary state to resume computation. This means that the generator doesn't need to precompute and store all factorial values in memory at once, which can be especially helpful when dealing with large `n` values.

* Can you explain the difference between a regular function and a generator function?
    * A regular function runs to completion and returns a single value. In contrast, a generator function can be paused and resumed, allowing it to yield multiple values over time. Regular functions use the `return` statement to send a value back to the caller, while generator functions use the `yield` statement to emit a value while retaining their internal state.

* Are there scenarios where using a generator might not be the best choice for generating sequences?
    * If there's a requirement for random access to elements in the sequence, generators may not be ideal since they produce values sequentially.
    * When the entire sequence needs to be immediately available, a generator's incremental approach might be a hindrance.
    * Generators might not be the best choice when integrating with systems or libraries that don't support or work well with generator semantics.

---