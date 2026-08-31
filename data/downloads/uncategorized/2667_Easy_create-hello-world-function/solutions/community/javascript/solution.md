# 👀First understand what is Closure ? 🎯🤩 Easily Master the Concept with Examples!

**Author:** ShadAbdullah
**Votes:** 416
**Link:** [https://leetcode.com/problems/create-hello-world-function/solutions/3486638/](https://leetcode.com/problems/create-hello-world-function/solutions/3486638/)

---

# Definition

In programming, a closure is a combination of a function and its lexical environment. The lexical environment consists of any variables that were in scope at the time the closure was created.

To understand closures, it's important to first understand lexical scoping. In JavaScript, variables declared within a function are only accessible within that function, and any nested functions within it. However, a nested function can "remember" the variables from the outer function even after the outer function has returned. This is because the inner function has access to the variables in the outer function's lexical scope.

# Example 

```
function outer() {
  const name = "Bob";

  function inner() {
    console.log(`Hello, ${name}!`);
  }

  return inner;
}

const greeting = outer();
greeting(); // logs "Hello, Bob!"

```

# Explanation

In this example, **outer** defines a variable name and a function **inner** . **inner** is defined within outer, so it has access to name in outer's lexical environment. When outer is called and returns inner, a closure is created that retains access to name. This means that even though outer has finished running and name is technically out of scope, inner can still access it and log a greeting with it.

# Another Example
```
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}

const increment = counter();
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3

```
# Explanation

In this example, counter returns a function that increments and logs a variable count each time it's called. count is defined within counter, so it's not accessible outside of it. However, when counter returns the inner function, a closure is created that retains access to count. This means that each time increment is called, it can still access and modify count.


# Solution 

To create a function that returns another function that always returns "Hello World" in JavaScript, you can use a technique called "function currying". This involves creating a function that returns another function that has access to the original function's variables.
```
function createHelloWorld() {
  const greeting = "Hello World";
  
  return function() {
    return greeting;
  };
}

```

#  \u2B06\uFE0F Please Upvote \uD83D\uDE43
