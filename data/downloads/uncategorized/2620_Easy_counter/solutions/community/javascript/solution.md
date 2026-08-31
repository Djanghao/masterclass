# Day2=O(1)>Understanding Closure in easy way and its practical uses!!

**Author:** Cosmic_Phantom
**Votes:** 591
**Link:** [https://leetcode.com/problems/counter/solutions/3491300/](https://leetcode.com/problems/counter/solutions/3491300/)

---

# When, Where, What, and How to use closure!!!
First of all closure is not something you create it's something that the language has created for itself for appropriate development and we need to crack this code that how the language uses it. 

"*To be honest, a good developer's greatest fear is discovering that something is working but not knowing how it works.*"

## What is Closure ?
* A closure is created when a function is defined inside another function, and the **inner function references variables in the outer function's scope**. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!
* In simple terms a closure can "**remember" values from its outer function's scope and use them later**, even if the outer function has returned and those values would normally be out of scope.

## When to use closure concept ?
FIrst let's summarize the definition as usually the definition gives the answer for when to use..
* From definition you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used for retrival of dead values which have become out of scope. also we can comprehend that it can used for privating some varibles or function. 
* **Thus closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.**
* While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e. In a programmer languge it's called `lexical environment`

## Where and How to use closure concept ?
1. **Private variables and functions:**

```
const makeCounter = () => {
  let count = 0;
  
  return () => {
    count++;
    console.log(count);
  }
}

let counter = makeCounter();
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3
```
* In this example, `makeCounter` is an `arrow function` that returns another `arrow function`. The returned function increments a count variable each time it is called, and logs the new value of `count` to the console.
* When `makeCounter` is called, it creates a new scope with a `count` variable initialized to `0`. It then returns a **new arrow function that "closes over" this scope and increments the count variable each time it is called.**
* When we assign the returned arrow function to the counter variable, we create a closure that retains a reference to the count variable. 
* Each time we call `counter()`, it increments the `count` variable and logs the new value to the console, because it is still "closing over" the original `count` variable in the outer function's scope.
* Thus because the `count` variable is not exposed outside of the returned object, it is effectively a private variable that can only be accessed or modified through the `makeCounter()` methods.

2. **Partial function:**
I was introduced to this concept name during development phase but was shocked that unknowingly I have used it many times. I'm sure that you all also must have use this:
```
function add(x) {
  return function(y) {
    return x + y;
  }
}

let add5 = add(5);
console.log(add5(3)); // 8
```
* In this example, the `add()` function returns another function that takes a single argument and returns the `sum` of that argument and the `x` value from the outer function's scope. 
* This allows us to "partially apply" the `add()` function by passing in an `x` value and getting back a new function that always adds that value to its argument. 
* Thuse we can then use the new function like any other function, passing in different `y` values as needed.

3. **For preserving states in asynchronous code:** 
The below snippet is from my personal project:)
```
const animate = (element, from, to, duration) => {
  let start = performance.now();
  
  const update = () => {
    let time = performance.now() - start;
    let progress = time / duration;
    let value = from + (to - from) * progress;
    
    element.style.left = value + 'px';
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

let element = document.getElementById('my-element');
animate(element, 0, 100, 1000);
```

* In this example, the `animate()` function creates a closure over the `start` variable, which is used to calculate the elapsed time since the animation started. 
* The `update()` function also "closes over" the element, `from`, `to`, and `duration` arguments, so that it can use them to update the element's position over time. 
* Thus by **creating a closure over these values**, we can **preserve their state between animation frames**, even though the `update()` function is called **asynchronously** by `requestAnimationFrame()`.


# Answer to todays(#2) JS challenge:
```
var createCounter = function(n) {
    return ()=> n++
};
```
**TIme and Space : O(1)**
