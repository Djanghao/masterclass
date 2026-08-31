# Official Solution

**Link:** [https://leetcode.com/problems/sort-by/solution/](https://leetcode.com/problems/sort-by/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, you are asked to create a JavaScript function named `sortBy`, which will sort an array `arr` according to a function `fn` provided as input. The function `fn` always returns a number, and this number is used to determine the sort order of `arr`. The result should be an array `sortedArr`, sorted in ascending order according to the output of function `fn`.

The problem description provides three key examples to clarify the expected functionality. The first example passes an array of numbers and a function that simply returns its input as it is, resulting in an array sorted in ascending order. The second example uses an array of objects and a function that returns the value of a specific key, "x" in this case, within each object. The output is an array of objects sorted according to the values of "x". The third example contains an array of arrays, with a function that returns the second element of each array (index = 1). The output array is sorted in ascending order based on these second elements.

Solving this problem effectively requires a good understanding of JavaScript's `Array.sort()` method, callback functions, and array manipulations. You should be able to define and use callback functions to extract the value needed for sorting from the array elements. A thorough knowledge of how JavaScript handles sorting of different data types (numbers, objects, arrays) will also be beneficial.

For a comprehensive understanding of JavaScript's `Array.sort()` function and sorting in JavaScript in general, we recommend checking out the [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) guide on MDN. If you're new to callback functions in JavaScript, you may also find our [Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/editorial/) editorial helpful.

#### Understanding Array.sort() in JavaScript

JavaScript's built-in `Array.sort()` method is used to sort the elements of an array in place. It is important to note that the sort operation directly modifies (mutates) the original array, rather than creating a new sorted array. This is different from some array methods like `Array.map()`, which create a new array based on the original. In JavaScript, functions that modify the original array or object are called "mutating" or "in-place" operations.

What does it mean when we say that `Array.sort()` "returns" the sorted array? After `Array.sort()` has sorted the original array, it gives back a reference to the same (now sorted) array. This is not a 'return' in the sense of creating a new array with the sorted elements, but rather a convenience feature to allow method chaining.

The `sort()` method, by default, converts elements into strings and compares their sequences of UTF-16 code unit values to determine the sort order. This works for strings but can lead to unexpected results when sorting numbers or mixed data types.

For instance, the array `[10, 2, 20]` would be sorted as `[10, 2, 20]` when sorted with `Array.sort()` because when converted to strings, "10" comes before "2" in lexicographic order. This is one of the reasons why a compare function is often supplied to the `sort()` method when working with numeric data.

Here's a basic usage of the `Array.sort()` method:

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

In the above example, the `sort()` method arranges the fruit names alphabetically. Note that the original fruits array is sorted in place - no new array is created.

It's important to note that the `Array.sort()` method does not guarantee a stable sort. Stability in sorting algorithms is the property where equal elements retain their relative order in the sorted output as in the original array. The stability of the `Array.sort()` function depends on the specific implementation of the JavaScript engine. Some implementations of JavaScript may provide stability, while others may not.

For example, if you're sorting an array of students by grade and two students have the same grade, a stable sort will preserve the original order of those two students. However, if the JavaScript engine's `Array.sort()` method is not stable, this original order may not be preserved.

Examples of stable sort algorithms include [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) and [TimSort](https://en.wikipedia.org/wiki/Timsort) (used by Python and Java, and also in V8 for arrays longer than 10 elements). On the contrary, [QuickSort](https://en.wikipedia.org/wiki/Quicksort) and [HeapSort](https://en.wikipedia.org/wiki/Heapsort) are examples of unstable sorting algorithms.

Thus, when it is important to maintain the relative order of equal elements in your sorted output, you should consider using or implementing a stable sorting algorithm, rather than relying on the built-in `Array.sort()` method.

#### Custom Sorting with Compare Function

While `Array.sort()` without a compare function can suffice for arrays of strings, it often doesn't work as expected for arrays of numbers or when there is a specific sorting criteria for arrays of objects. This is where the compare function comes in.

`Array.sort()` allows us to pass a compare function to customize the sorting mechanism. The compare function should be a function that takes two arguments and returns a negative, zero, or positive value:

* **Negative Value**: If the compare function returns a value less than zero, it sorts `a` to an index lower than `b`. In simple terms, `a` should come before `b`.

* **Positive Value**: If the compare function returns a value greater than zero, it sorts `a` to an index higher than `b`. That is, `a` should come after `b`.

* **Zero**: If the compare function returns `0`, it leaves `a` and `b` unchanged with respect to each other. However, their order compared to other elements is sorted.

Here's how you can sort numbers in ascending order by using a compare function:

```javascript
let numbers = [40, 1, 5, 200];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 40, 200]

```

In the above example, the compare function is `(a, b) => a - b`. This function subtracts `b` from `a`. If `a` is less than `b`, a negative value is returned, placing `a` before `b`. If `a` is more than `b`, a positive value is returned, placing `a` after `b`. If `a` equals `b`, zero is returned, leaving their relative positions unchanged.

This is a powerful tool in JavaScript, as it allows us to sort complex data structures easily. For example, you could sort an array of objects based on one of their properties, sort strings with locale considerations, or even implement multi-criteria sorting.

For instance, consider sorting an array of objects based on the `age` property in descending order:

```javascript
let people = [
  { name: "John", age: 23 },
  { name: "Amy", age: 17 },
  { name: "Zack", age: 30 },
];
people.sort((a, b) => b.age - a.age);
console.log(people);
// [
//   { name: "Zack", age: 30 },
//   { name: "John", age: 23 },
//   { name: "Amy", age: 17 }
// ]
```

In this case, `b.age - a.age` sorts the people array in descending order of `age`.

#### Working with Callback Functions in JavaScript

A callback function is a function that is passed as an argument into another function. This passed function is then invoked at a later time or in response to some event within the containing function. The use of callback functions is a fundamental concept in JavaScript due to its asynchronous nature, which requires a way to manage operations that don't finish immediately (like network requests or timers).

In our `sortBy` function, a callback function `fn` is passed as an argument. This `fn` function is then used inside the `Array.sort()` method's compare function to determine the sort order of elements in the array.

Let's take a look at a simple example of using a callback function:

```javascript
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// usage
greet('John', function() {
    console.log('The callback was invoked!');
});

// Hello John
// The callback was invoked!

```

In this example, the second argument of the `greet` function is a callback function. After the 'Hello John' message is logged, the greet function invokes the callback function that was passed in. This pattern of passing functions as arguments for later execution is very common in JavaScript and is used in various aspects of the language, from handling events to processing asynchronous operations.

#### Real World Applications of Array.sort() with Custom Comparators
1. Displaying Sorted Data on a UI

One of the prevalent applications of `Array.sort()` is displaying sorted data on a user interface. Consider a product listing page where items can be sorted by name, price, or date.

```javascript
let products = [
  { name: 'Apple', price: 1 },
  { name: 'Banana', price: 0.5 },
  { name: 'Cherry', price: 2 }
];

products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products); // [{ name: 'Apple', price: 1 }, { name: 'Banana', price: 0.5 }, { name: 'Cherry', price: 2 }]

```

This example demonstrates how `Array.sort()` with a custom comparator is used to alphabetically sort an array of product objects by their names. The `localeCompare()` method is a powerful tool for comparing strings in JavaScript, taking into account locale specific rules of string comparison. For instance, in Swedish, "ä" is considered a separate letter that sorts after "z". A naive comparison would fail to take this into account.

By using `localeCompare()`, you ensure that your code is fully internationalizable and can handle a wide array of human languages correctly. This would be critically important in an e-commerce application that lists products and needs to support internationalization.

2. Data Analysis and Insights

`Array.sort()` is often utilized in data analysis. If you're working with numerical data, sorting can be a crucial first step in understanding the dataset, for instance, in finding the median value or recognizing the distribution.

```javascript
let numbers = [42, 21, 1, 100, 75, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 21, 42, 75, 100]

```

Here, `Array.sort()` is used to sort an array of numbers in ascending order.

3. Prioritizing Task Execution

In scenarios where data needs to be processed in a specific order, `Array.sort()` comes in handy. An example can be processing tasks based on their priority levels.

```javascript
let tasks = [
  { title: 'Task 1', priority: 'Low' },
  { title: 'Task 2', priority: 'High' },
  { title: 'Task 3', priority: 'Medium' }
];

let priorityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };

tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
console.log(tasks); // [{ title: 'Task 1', priority: 'Low' }, { title: 'Task 3', priority: 'Medium' }, { title: 'Task 2', priority: 'High' }]

```

In this scenario, `Array.sort()` is used to sort an array of tasks based on their defined priorities.

4. Sorting Objects on Deep Properties

```javascript
let arr = [
  { prop: { deep: 3 } },
  { prop: { deep: 1 } },
  { prop: { deep: 2 } }
];

arr.sort((a, b) => a.prop.deep - b.prop.deep);
console.log(arr); // [{ prop: { deep: 1 } }, { prop: { deep: 2 } }, { prop: { deep: 3 } }]
```

In this example, `Array.sort()` sorts an array of objects based on a nested property.

---

### Approach 1: Custom Comparator

#### Intuition
The goal is to create a flexible sorting function that sorts an array based on a user-provided function, `fn`. This `fn` function can incorporate any logic to derive a sortable value from an array element.

#### Algorithm
1. Leverage JavaScript's `Array.sort()` method, which allows defining a custom sorting order with a comparator function.
2. The comparator function uses `fn` to extract the sortable value from the elements and compares these values to determine the elements' order.
3. In the comparator function, subtract the sortable value of element `b` from that of `a`. If the result is positive, `a` will be sorted to a higher index than `b` (i.e., `a` comes after `b`). If it's negative, `a` will be sorted to a lower index than `b` (i.e., `a` comes before `b`). If the result is 0, the order of `a` and `b` remains unchanged.


#### Implementation

##### Implementation 1: Subtraction-Based Comparator

<iframe src="https://leetcode.com/playground/6TEqgs3b/shared" frameBorder="0" width="100%" height="123" name="6TEqgs3b"></iframe>

This code leverages JavaScript's `Array.sort()` method with a custom comparator function. The comparator determines the sort order by calling `fn` on `a` and `b` (the elements being compared), and subtracts the result of `fn(b)` from `fn(a)`. The subtraction's outcome sets the order of `a` and `b` in the sorted array.

##### Implementation 2: Comparison-Based Comparator

<iframe src="https://leetcode.com/playground/WDJkGgP7/shared" frameBorder="0" width="100%" height="191" name="WDJkGgP7"></iframe>

In the second implementation, we define a `compare` function which determines the sort order by comparing the results of `fn` applied on `a` and `b`. If `fn(a)` is less than `fn(b)`, it returns -1, indicating that `a` should come before `b`. Conversely, if `fn(a)` is not less than `fn(b)`, it returns 1, indicating that `a` should come after `b`.

When `fn(a)` equals `fn(b)`, the `compare` function still returns 1, which suggests that `a` should be sorted after `b`. This does change the relative order of `a` and `b`. However, since `a` and `b` are the same when processed through the function `fn`, this change in order does not affect the resulting sorted array's appearance. This is because the "swap" operation between two identical values doesn't visibly change the array.

#### Complexity Analysis

Time complexity: $O(NlogN)$, where $N$ is the length of the input array. This is due to the `Array.prototype.sort()` method, which has a worst-case time complexity of $O(NlogN)$ in most JavaScript engines, including V8 (used in Chrome and Node.js). The actual time complexity can also be impacted by the complexity of the comparator function (`fn`).

Space complexity: $O(N)$, where $N$ is the length of the input array. However, it's important to note that the actual space complexity can depend on the specific sorting algorithm used by the JavaScript engine, and this might vary across different engines. For instance, Chrome's V8 engine employs TimSort for longer arrays, which comes with a space complexity of $O(N)$, and InsertionSort for shorter arrays, carrying a space complexity of $O(1)$. To ensure accurate analysis, you are encouraged to check the specifics of the JavaScript engine you are utilizing.

## Interview Tips:

* What does the `Array.prototype.sort()` method in JavaScript do?
  * `Array.prototype.sort()` is a built-in JavaScript method used to sort the elements of an array in place. By default, it sorts elements as strings, which can lead to unexpected results when sorting numbers. However, you can also provide a custom comparator function to determine how the array should be sorted.

* How does a comparator function work with `Array.prototype.sort()`?
  * A comparator function in `Array.prototype.sort()` is a function that takes two arguments (commonly referred to as `a` and `b`) and returns a value indicating how `a` and `b` should be sorted relative to each other. If the function returns a value less than 0, `a` is sorted before `b`. If it returns a value greater than 0, `a` is sorted after `b`. If it returns 0, `a` and `b` remain in their current order.

* How would you sort an array of objects based on a particular property?
  * To sort an array of objects based on a particular property, you can use `Array.prototype.sort()` with a custom comparator function. The comparator function can access the desired property on the two objects it compares, and determine their sort order based on the values of that property.

* What does `String.prototype.localeCompare()` do, and why might you use it in a comparator function?
  * `String.prototype.localeCompare()` is a method that compares two strings based on their locale (i.e., language and regional settings). This can be useful in a comparator function when sorting strings that may contain special characters or when the sort order should respect specific language rules. For example, in Swedish, "ö" is a separate letter that comes after "z" in the alphabet, so a locale-aware sort is necessary to get the correct order.

* Can you sort an array of numbers in descending order using `Array.prototype.sort()`? How?
  * Yes, you can sort an array of numbers in descending order using `Array.prototype.sort()` by providing a comparator function that sorts `b` before `a` if `b` is greater than `a`. Here is an example: `let arr = [1, 5, 2]; arr.sort((a, b) => b - a);`