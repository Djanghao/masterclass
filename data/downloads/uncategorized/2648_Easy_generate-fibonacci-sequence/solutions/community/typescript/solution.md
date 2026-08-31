# 🚀 Mastering Generator Functions: ✅  Learn with Exciting Examples! ⚡️ (beginner friendly) JS || TS

**Author:** lovishtater
**Votes:** 21
**Link:** [https://leetcode.com/problems/generate-fibonacci-sequence/solutions/3588028/](https://leetcode.com/problems/generate-fibonacci-sequence/solutions/3588028/)

---

# Generator functions \uD83D\uDE80
<!-- Describe your first thoughts on how to solve this problem. -->
##### Generator functions are a special type of function in JavaScript that can be paused and resumed during execution. 
Yes, you heard it right, these functions can be magically paused during execution and can be resumed later. \uD83E\uDE84
They allow you to generate a sequence of values on-the-fly instead of computing and storing them all at once. Here's a simple example to help illustrate the concept:

```
function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = countToThree(); // Creating a generator object

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
```

- We can then use the `next()` method on the generator object to get the next value in the sequence.
- The `value` property of the returned object gives us the yielded value.

# Real-life implementations of generator functions can be found in various scenarios, such as:

- **Iterating over large or infinite data sets:** Generator functions can be used to iterate over data that is too large to fit in memory all at once. Instead of loading the entire dataset into memory, you can generate and process the data one piece at a time, saving memory resources.
- **Asynchronous programming:** Generators can be combined with asynchronous operations to simplify asynchronous code. By using yield with promises or async/await syntax, you can write asynchronous code that looks more like synchronous code, making it easier to understand and maintain.
- **Parsing and tokenization:** Generator functions can be used in parsing or tokenization tasks. They can generate a sequence of tokens or parsed elements as needed, allowing you to process large streams of data efficiently.

# Approach
<!-- Describe your approach to solving the problem. -->

1. Define a generator function `fibGenerator`.
2. Initialize `current` to 0 and `next` to 1.
3. Use a loop to iterate `callCount` times.
    - Yield `next`.
    - Calculate the next Fibonacci number: `temp = current + next`, `current = next`, `next = temp`.
4. Return or yield any remaining Fibonacci numbers.


# Complexity
- Time complexity: $$O(n)$$ (linear time) where `n` is the number of times the generator function is called.

- Space complexity: $$O(1)$$ (constant space)

<img src="https://assets.leetcode.com/users/images/b93dcc50-7e19-44d3-80ec-c41558d719ba_1684043630.2104852.png" width="50%">


# Code
``` javascript []
var fibGenerator = function*() {

  let current = 0; 
  let next = 1;

  while (true) {
    yield current; 
    let temp = current + next;
    current = next;
    next = temp;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
```

``` Typescript []
function* fibGenerator(): Generator<number, any, number> {
  let current = 0; 
  let next = 1;

  while (true) {
    yield current; 
    // easier way to swap elements
    [current, next] = [next, current + next];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
```