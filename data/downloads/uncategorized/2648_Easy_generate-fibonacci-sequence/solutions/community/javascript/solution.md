# ✔️Easy Solution✔️ 2648. Generate Fibonacci Sequence✔️Level up🚀your JS skills 🚀Day 29

**Author:** Vikas-Pathak-123
**Votes:** 82
**Link:** [https://leetcode.com/problems/generate-fibonacci-sequence/solutions/3587908/](https://leetcode.com/problems/generate-fibonacci-sequence/solutions/3587908/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. We can use a generator function to generate the Fibonacci sequence one number at a time.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two variables, `current` and `next`, with values 0 and 1
respectively. These variables represent the current Fibonacci number and the next Fibonacci number in the sequence.
2. Use a while loop to generate the Fibonacci sequence indefinitely.
3. Inside the loop, yield the value of `current` as the next value of the generator.
4. Update the values of `current` and `next` by swapping their values. Set `current` to the value of `next` and `next` to the sum of `current` and `next`.
5. Repeat steps 3 and 4 indefinitely to generate the Fibonacci sequence.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of generating the Fibonacci sequence using a generator function is $O(1)$ per iteration. This is because each Fibonacci number is generated on the fly as requested, without needing to generate the entire sequence in advance.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is $O(1)$ because we only need a constant amount of space to store the current and next Fibonacci numbers. The generator function does not require any additional space proportional to the size of the sequence.

# Code
```
/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {

  let current = 0; 
  let next = 1;

  while (true) {
    yield current; 

    [current, next] = [next, current + next];

    // The above line is equivalent to the following:
    // let temp = current;
    // current = next;
    // next = temp + next;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
```

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

## There are several ways to implement a Fibonacci generator in JavaScript. Here are a few alternative approaches:
- ## Implementation 1: Using a Closure
```JS []
const fibGenerator = () => {
  let current = 0;
  let next = 1;

  return () => {
    const result = current;
    [current, next] = [next, current + next];
    return result;
  };
};

const gen = fibGenerator();
console.log(gen()); // 0
console.log(gen()); // 1

```
>In this approach, we use a closure to create a Fibonacci generator. The `fibGenerator` function returns another function that generates the Fibonacci numbers. The inner function keeps track of the `current` and `next` values using a closure. Each time the inner function is called, it calculates the next Fibonacci number, updates the values, and returns the current one.

- ## Implementation 2: Using an Iterator
```JS []
const fibGenerator = {
  [Symbol.iterator]: function*() {
    let current = 0;
    let next = 1;

    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
};

const gen = fibGenerator[Symbol.iterator]();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1

```
>In this approach, we define `fibGenerator` as an object with a
`Symbol.iterator` method. The `Symbol.iterator` method is a generator
function that generates the Fibonacci sequence. We can then create an iterator by calling `fibGenerator[Symbol.iterator]()` and use it to retrieve the Fibonacci numbers.

- ## Implementation 3: Using a Recursive Generator
``` JS []
function* fibGenerator(current = 0, next = 1) {
  yield current;
  yield* fibGenerator(next, current + next);
}

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1

```
>In this approach, we define the `fibGenerator` function as a recursive generator. It takes two parameters, `current` and `next`, representing the current and next Fibonacci numbers. It yields the current number and then delegates to itself with the updated values of `next` and `current + next`. This recursive generator generates the Fibonacci sequence indefinitely.

- ## Implementation 4: Without using a generator function
``` JS []
const fibGenerator = {
  current: 0,
  next: 1,
  nextNumber: function() {
    const result = this.current;
    [this.current, this.next] = [this.next, this.current + this.next];
    return result;
  }
};

console.log(fibGenerator.nextNumber()); // 0
console.log(fibGenerator.nextNumber()); // 1

```
In this approach, we define `fibGenerator` as an object with properties `current` and `next` to store the current and next Fibonacci numbers, respectively. The `nextNumber` method calculates and returns the next Fibonacci number while updating the `current` and `next` properties accordingly.
To generate Fibonacci numbers, you can simply call the `nextNumber` method of the `fibGenerator` object. Each call to `nextNumber` will return the next Fibonacci number in the sequence.
>Note: that this approach does not provide the infinite sequence of Fibonacci numbers like a generator function does. Instead, it generates the Fibonacci numbers one at a time upon each method call.



# Important topic to Learn 

| Sr No. | Topic | Sr No. | Topic |
|-----|-----|-----|-----|
1.|Arrays , Array methods() |2.|Function programming *|
3.|Higher-order function|4.|Memoization|
5.|Currying|6.|Promises, async/await|
7.|Compare Objects|8.|Prototypes, inheritance|
9.|Generators, advanced iteration*|10.|----------------
>[ Note:- * marked is related to today's problem ]

<img src="https://media.giphy.com/media/Xd6WrGsyh1su7X0ZGF/giphy.gif" width="40">

# Please Comment\uD83D\uDC4D\uD83D\uDC4D 
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```






