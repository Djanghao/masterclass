# Official Solution

**Link:** [https://leetcode.com/problems/curry/solution/](https://leetcode.com/problems/curry/solution/)

---

[TOC]

## Solution

---

### Overview
Currying is a powerful technique in functional programming that transforms a function with multiple arguments into a sequence of functions. It allows you to create flexible and reusable code by enabling partial application of function arguments. In this article, we will discuss the concept and implementation of currying in JavaScript.

Example:

Suppose we have a function sum that takes three arguments and returns their sum:

<iframe src="https://leetcode.com/playground/ajNYd7nW/shared" frameBorder="0" width="100%" height="106" name="ajNYd7nW"></iframe>

 We can create a curried version of this function, curriedSum. Now, we can call curriedSum in various ways, all of which should return the same result as the original sum function:

<iframe src="https://leetcode.com/playground/6RdgZPCZ/shared" frameBorder="0" width="100%" height="174" name="6RdgZPCZ"></iframe>

Currying in JavaScript has several practical applications that can help improve code readability, maintainability, and reusability. Here are some practical use cases of currying:

1. Reusable utility functions: Currying can help create reusable utility functions that can be easily customized for specific use cases.
   Currying allows you to create a function that returns another function with a partially applied argument. In this case, we have a curried add function that takes two arguments, a and b. When you call add with a single argument, it returns a new function that takes the second argument b and adds it to the initially provided a.
   
   Here's the example with more explanation:   
   
   <iframe src="https://leetcode.com/playground/aD7kGDEv/shared" frameBorder="0" width="100%" height="225" name="aD7kGDEv"></iframe>

2. Event handling: In event-driven programming, currying can be used to create event handlers with specific configurations, while keeping the core event handling function generic.
   
   <iframe src="https://leetcode.com/playground/QERaGgxo/shared" frameBorder="0" width="100%" height="208" name="QERaGgxo"></iframe>

3. Customizing API calls: Currying can help create more specific API calls based on a generic API call function.

   <iframe src="https://leetcode.com/playground/cj4RMZoT/shared" frameBorder="0" width="100%" height="259" name="cj4RMZoT"></iframe>

4. Higher-order functions and functional composition: Currying enables the creation of higher-order functions that can be composed to create more complex functionality.

<iframe src="https://leetcode.com/playground/RNPJGJUp/shared" frameBorder="0" width="100%" height="225" name="RNPJGJUp"></iframe>


Currying is a valuable concept in functional programming that enables you to write more flexible and reusable code. Mastering currying will help you create cleaner and more efficient solutions for a wide range of programming problems.

---

### Approach 1: Currying with Recursive Function Calls

### Intuition
The problem requires us to transform a given function into a curried version. A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

This can be achieved using a recursive approach that returns a new function each time it's called with fewer arguments than the original function. This continues until a sufficient amount of arguments has been collected. At that point, the original function can be called.

### Algorithm
1. The `curry` function takes a function (`fn`) as its parameter. This is the function that will be eventually executed with the curried arguments.
2. It returns a new function (`curried`) that is responsible for accumulating the arguments passed to it until the required number of arguments is reached. This function acts as a closure, remembering the accumulated arguments at each step.
3. `curried` is defined with the rest parameter syntax `(...args)` to accept a variable number of arguments, allowing partial application at each step.
4. Inside `curried`, a check is performed to see if the accumulated arguments are sufficient. If the number of arguments passed (`args.length`) is greater than or equal to the original function's arity (`fn.length`), then all required arguments have been provided. This is our base case.
5. If the sufficient arguments check passes, invoke `fn` with the spread syntax `(...args)` to pass all the collected arguments, and return the result.
6. If the number of arguments passed is not sufficient, then return an anonymous function that also uses the rest parameter syntax `(...nextArgs)`. This allows for further accumulation of arguments.
7. When the anonymous function is called, it invokes `curried` again with the accumulated arguments from both `args` and `nextArgs`. This ensures that the arguments are passed in the correct order and merged together.
8. The process of accumulating arguments and invoking `curried` continues until the necessary number of arguments is met. This enables the flexibility to apply arguments in any combination of calls.
9. Once the necessary number of arguments is met, the original function (`fn`) is called with all the accumulated arguments, providing the same result as if the original function had been called directly with those arguments.


### Implementation

<iframe src="https://leetcode.com/playground/Ax69ENcY/shared" frameBorder="0" width="100%" height="208" name="Ax69ENcY"></iframe>

### Complexity Analysis

Let N be the number of arguments in the original function.

Time complexity: O(N). The algorithm creates a chain of functions with a depth proportional to the number of arguments.

Space complexity: O(N). The algorithm uses memory to store intermediate functions and arguments, which grows with the number of arguments in the original function.

---

### Approach 2:  Currying with the Built-in Bind Method 

### Intuition
The general intuition is the same as for Approach 1. Although it's not required by the test cases, in this approach, we're also going to handle situations where the 'this' context needs to be taken care of, as it's an important part of writing a production-ready solution. Using the bind method makes the code very concise, as it abstracts away some of the complexity.

The bind method is particularly helpful in this scenario, as it creates a new function with the same body as the curried function and a specified 'this' context. In our currying implementation, we use bind to create a new function with the accumulated arguments and the same 'this' context as the original curried function. This allows us to keep track of the collected arguments while also preserving the 'this' context across multiple calls. The bind method makes the code concise and easy to read, as it essentially abstracts away the need for writing a whole new function. 

Simply put, the bind method creates a new function, which we return - in this case, it creates a function almost identical to (...nextArgs) => curried(...args, ...nextArgs), but with a fixed 'this' context. Note that the function created by bind also accepts incoming arguments, which we accomplish with the '...nextArgs' part in Approach 1.

### Algorithm
1. The curry function takes a function (fn) as its parameter. This is the function that will be eventually executed with the curried arguments.
2. It returns a new function (curried) that is responsible for accumulating the arguments passed to it until the required number of arguments is reached. This function acts as a closure, remembering the accumulated arguments at each step.
3. curried is defined with the rest parameter syntax (...args) to accept a variable number of arguments, allowing partial application at each step.
4. Inside curried, a check is performed to see if the accumulated arguments are sufficient. If the number of arguments passed (args.length) is greater than or equal to the original function's arity (fn.length), then all required arguments have been provided. This is our base case.
5. If the sufficient arguments check passes, invoke fn with the apply method to pass all the collected arguments with the correct this context, and return the result. It's worth noting that scenarios involving this context are not tested by the automated judge.
6. If the number of arguments passed is not sufficient, then return a new function created with the bind method. This allows for further accumulation of arguments while preserving the this context. The bind method creates a new function similar to the function we were returning in Approach 1. It's essentially equivalent to (...nextArgs) => curried.apply(this, args).
7. The process of accumulating arguments and invoking curried continues until the necessary number of arguments is met. This enables the flexibility to apply arguments in any combination of calls.
8. Once the necessary number of arguments is met, the original function (fn) is called with all the accumulated arguments, providing the same result as if the original function had been called directly with those arguments.

### Implementation

<iframe src="https://leetcode.com/playground/FvumkSuD/shared" frameBorder="0" width="100%" height="208" name="FvumkSuD"></iframe>

### Complexity Analysis

Let N be the number of arguments in the original function.

Time complexity: O(N). The algorithm creates a chain of functions with a depth proportional to the number of arguments.

Space complexity: O(N). The algorithm uses memory to store intermediate functions and arguments, which grows with the number of arguments in the original function.

---

### Additional Considerations

#### Partial Application vs Currying
Partial application and currying are closely related concepts in functional programming, but they serve different purposes. In fact, currying can be considered a type of partial application.

Partial Application:

Partial application refers to the process of fixing a number of arguments to a function, generating a new function with a smaller number of remaining arguments. It allows you to create new functions from existing ones by pre-specifying some of the arguments. This can lead to more modular and reusable code.

For example, suppose we have a function that takes three arguments:
```javascript
function sum(a, b, c) {
  return a + b + c;
}
```

We can create a partially applied function that "fixes" the first argument to 1:

```javascript
function partialSum(b, c) {
  return sum(1, b, c);
}
```

Now, when we call partialSum, we only need to provide the remaining two arguments:
```javascript
console.log(partialSum(2, 3)); // Output: 6
```

Partial application deals with fixing a certain number of arguments, creating a new function with fewer remaining arguments. This makes it useful for creating specialized versions of more general functions.

Currying, on the other hand, breaks down a function into a sequence of functions, each taking a single argument (or possibly more). This allows you to pass arguments one at a time and create new functions based on intermediate results.

While both techniques can lead to more modular and reusable code, their specific use cases and implementations are different. Currying is more focused on creating a chain of functions, while partial application is about fixing arguments to create more specialized functions.


#### Different implementations of curry
It's worth noting that there are many different implementations of the curry higher-order function, which may vary significantly in behavior. 

This problem presents one of the most popular behaviors of curry. Another popular variation is a curry function that doesn't accept a predefined amount of arguments (the function doesn't have a predefined length e.g const getSum = (...args) => args.reduce((a, b) => a + b, 0)) and is called when the user doesn't pass any arguments. We can easily modify one of the approaches above to achieve that:

<iframe src="https://leetcode.com/playground/nZY2ceXL/shared" frameBorder="0" width="100%" height="310" name="nZY2ceXL"></iframe>

It's always important to clarify with the interviewer which version we are asked to implement.