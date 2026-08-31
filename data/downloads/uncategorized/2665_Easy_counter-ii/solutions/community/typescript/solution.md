# ✔️2665. Counter II✔️Level up🚀your JavaScript skills with these intuitive implementations󠁓🚀

**Author:** Vikas-Pathak-123
**Votes:** 80
**Link:** [https://leetcode.com/problems/counter-ii/solutions/3495319/](https://leetcode.com/problems/counter-ii/solutions/3495319/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>The `createCounter` function creates a counter object that can be used to keep track of a count and perform operations on it. The returned object has three methods: `increment`, `decrement`, and `reset`, which respectively increase the count by 1, decrease the count by 1, and reset the count to its initial value.


# Approach
<!-- Describe your approach to solving the problem. -->
>The `createCounter` function uses a closure to create a private `count` variable that is initialized to either the provided `init` value or 0 if no value is provided. It then defines three inner functions (`increment`, `decrement`, and `reset`) that operate on this count variable and return its new value. Finally, it returns an object containing these three functions as properties, providing a public interface for manipulating the count.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
>The `createCounter` function has a space complexity of O(1) as it creates a fixed number of variables (count, increment, decrement, reset) that are not dependent on the size of the input

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
>Each instance of the counter object created by `createCounter` has a space complexity of O(1) as well, as it only contains three function properties and the count variable, which are all fixed-size.


# Code
```Javascript []
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let count = init || 0; // initialize count to 0 or given value

  const increment = function() {
    count++;
    return count;
  };

  const decrement = function() {
    count--;
    return count;
  };

  const reset = function() {
    count = init || 0;
    return count;
  };

  return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```
``` typescript []
interface Counter {
  increment(): number;
  decrement(): number;
  reset(): number;
}

const createCounter = (init: number = 0): Counter => {
  let count: number = init;

  const increment = (): number => {
    count++;
    return count;
  };

  const decrement = (): number => {
    count--;
    return count;
  };

  const reset = (): number => {
    count = init;
    return count;
  };

  return { increment, decrement, reset };
};

const counter: Counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

```
![image.png](./images/0.png)
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

> ##### There are several ways to implement a counter object with increment, decrement, and reset functionality in JavaScript. Here are a few alternative approaches:

1. Using an ES6 class
```
class Counter {
  constructor(init = 0) {
    this.count = init;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }

  reset() {
    this.count = 0;
    return this.count;
  }
}
```
>Here, we define a `Counter` class with a constructor that takes an optional `init` parameter (defaulting to 0). We also define three methods (`increment`, `decrement`, and `reset`) that modify the `count` property and return its new value.


2. Using an object literal
```
const counter = {
  count: 0,
  increment() {
    return ++this.count;
  },
  decrement() {
    return --this.count;
  },
  reset() {
    this.count = 0;
    return this.count;
  }
};

```
>Here, we define an object literal with a `count` property and three methods (`increment`, `decrement`, and `reset`) that modify the `count` property and return its new value.
3. Using a factory function
```
function createCounter(init = 0) {
  let count = init;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    reset() {
      count = 0;
      return count;
    }
  };
}
```
>Here, we define a `createCounter` factory function that returns an object with three methods (`increment`, `decrement`, and `reset`) that modify a private `count` variable and return its new value.

# Important topic to Learn
```
1. Closures: A closure is a function that has access to variables in
 its outer lexical environment. The original implementation of the 
`createCounter` function uses a closure to create a private `count`
 variable that is shared by the `increment`, `decrement`, and `reset`
 functions. Understanding closures is essential for writing clean 
and efficient JavaScript code.

2. Object-oriented programming (OOP): OOP is a programming paradigm 
that uses objects and classes to encapsulate data and behavior. The 
ES6 class-based implementation of the counter object demonstrates
how to define a class with properties and methods, while the object 
literal and factory function approaches use object-based programming 
to define a set of related methods.

3. JavaScript syntax: Understanding basic JavaScript syntax is 
essential for writing clean and readable code. The original 
implementation and alternative approaches use different syntax 
elements, such as arrow functions, default parameter values, and 
object destructuring, that are common in modern JavaScript code.

4. DOM manipulation: If you're interested in front-end web 
development, you'll need to learn how to manipulate the Document 
Object Model (DOM) using JavaScript. You can use a counter object to 
update the text content or attributes of a HTML element in response 
to user events, such as button clicks or key presses.

```



# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```
