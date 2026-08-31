# ✅✅Easy JS Implementation || Prototypal Inheritance || Prototypes || this || Full explanation

**Author:** 2uringTested
**Votes:** 19
**Link:** [https://leetcode.com/problems/call-function-with-custom-context/solutions/3551335/](https://leetcode.com/problems/call-function-with-custom-context/solutions/3551335/)

---

## In this solution I have attached the code first and explained the code in detail line by line explaining everything and all the concepts used.

### If you find the solution useful in any way please upvote! \u2705

# Code
```
Function.prototype.callPolyfill = function(context, ...args) {
  const fn = this;

  Object.defineProperty(context, '__fn__', {
    value: fn,
    enumerable: false
  });

  const result = context.__fn__(...args);

  delete context.__fn__;

  return typeof result !== 'undefined' ? result : undefined;
};

```
## Explanation of the code: 

### The goal of the code: 

The code is implementing a `callPolyfill` method that enhances the `Function.prototype` object, allowing you to set the `this` context for a function and pass additional arguments to it.

### Explanation

1. **`Function.prototype.callPolyfill = function(context, ...args) {`**: We're adding a new method `callPolyfill` to the `Function.prototype` object, which means it will be available on all function objects.

2. **`const fn = this;`**: We save a reference to the current function object (`this`) in the `fn` variable. This ensures that we can later execute the function within the desired context.

3. **`context.__fn__ = fn;`**: We add a temporary property `__fn__` to the `context` object. This property holds the reference to the original function `fn`, effectively setting the desired context for the function execution.

4. **`const result = context.__fn__(...args);`**: We invoke the function using the `context` as the `this` value and pass the provided `args` as arguments. This ensures that the function executes in the desired context with the provided arguments.

5. **`delete context.__fn__;`**: After executing the function, we remove the temporary `__fn__` property from the `context` object. This cleanup step ensures that the `context` object remains unaffected by the temporary property.

6. **`return typeof result !== 'undefined' ? result : undefined;`**: Finally, we check if the function returned a value (`result`). If it did, we return the result; otherwise, we return `undefined`. This allows us to mimic the behavior of the original function when called directly.

## Approach

The approach used in this code makes use of the ability to set properties on objects dynamically. By temporarily adding a property to the `context` object that holds the function reference, we ensure that the function executes within the desired context. Once the function finishes executing, we remove the temporary property to restore the `context` object to its original state.

Additionally, the code utilizes the spread operator (`...args`) to pass any number of additional arguments to the function, making it flexible and adaptable to various scenarios.

Overall, the code employs a straightforward and intuitive approach to enable the `callPolyfill` functionality, providing a way to set the context and pass arguments to functions in a manner that closely resembles the built-in `Function.prototype.call` method.

## Concepts learnt:

### You can do further reading upon these concepts that we are learning from this question:

This question covers several important concepts in JavaScript:

1. **Prototypes and Prototypal Inheritance**: The code modifies the `Function.prototype` object to add a new method, `callPolyfill`, which becomes available on all function objects. This demonstrates how JavaScript uses prototypes for object inheritance and allows us to extend built-in objects.

2. **`this` Keyword and Context**: The code manipulates the `this` keyword by setting the desired context for a function call. It showcases how to change the `this` context dynamically using the `callPolyfill` method.

3. **Dynamic Property Assignment**: The code adds and removes properties (`__fn__`) from objects (`context`) dynamically during runtime. This showcases JavaScript's ability to manipulate objects and their properties programmatically.

![image-removebg-preview (8).png](./images/0.png)



