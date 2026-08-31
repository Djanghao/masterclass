# Official Solution

**Link:** [https://leetcode.com/problems/array-upper-bound/solution/](https://leetcode.com/problems/array-upper-bound/solution/)

---

[TOC]


## Overview:
The task is to enhance arrays to have a method called `upperBound()`, which should return the last index (i.e., the index of the last occurrence) of a given `target` number. There are three important insights that are given to us:
1. The `nums` array consists of numbers.
2. The `nums` array is sorted in ascending order and may contain duplicates. 
3. If the `target` number is not found in the array, the method should return -1.

---

## Approach 1: Linear Search/Brute Force

### Intuition:
We can simply traverse the entire `nums` array and during this traversal, we can update the index every time the `target` is encountered

### Algorithm:
1. Initialize `result` as `-1` to handle cases where the `target` is not found.
2. Now iterate through each element in the array and for each element `val` and its index `ind`, check if `val` is equal to the `target`.
3. If a match is found, update `result` with the current index. This will make sure that the `result` variable always stores the index of the last occurrence of the `target`.
4. Finally after traversing the whole array, return `result`.

### Implementation:


<iframe src="https://leetcode.com/playground/o2zZaFFf/shared" frameBorder="0" width="100%" height="310" name="o2zZaFFf"></iframe>


### Complexity Analysis:
In all the complexity analysis `n` represents the size of array.
* **Time complexity:** The time complexity is $O(n)$ as we are traversing the entire input array.

* **Space complexity:** The space complexity is $O(1)$ as the space used is constant and doesn't depend on the input.

---

## Approach 2: Binary Search

### Intuition:
Since the array is sorted we should take advantage of it rather than traversing the whole array. Whenever something has a pattern of monotonic increment or decrement one should think of binary search.

### Algorithm:
1. Initially initialize three variables `left` to leftmost index(`0`), `right` to righmost index(`this.length - 1`) and `result` as `-1`, which will be used to store the last occurrence of the `target`.
2. While `left` is less than or equal to `right`, calculate the middle index `mid`.
3. If the element at `mid` is equal to the `target`, update `result` to `mid` and move `left` to `mid + 1` to continue searching in the right half for the last occurrence.
4. If the element at `mid` is less than the `target`, update `left = mid + 1`.
5. If the element at `mid` is greater than the `target`, update `right = mid - 1`.
6. The loop continues until `left` becomes greater than `right`, at which point the search interval has been exhausted.
7. Finally return the result from array or -1 if the target was not found.

> **Note:** The right shift operator (>>) is used to perform an arithmetic `right` shift by a specified number of bits. In the case of `mid` index calculation, `(right - left) >> 1` calculates half the distance between `left` and `right`. Adding this to `left` gives the `mid` index. This helps in avoiding integer overflow. It's equivalent to `Math.floor(left + (right-left)/2)`.  

### Implementation:

<iframe src="https://leetcode.com/playground/3aVkZyRr/shared" frameBorder="0" width="100%" height="497" name="3aVkZyRr"></iframe>


### Complexity Analysis:

* **Time complexity:** The time complexity is $O(logn)$ as we have used binary search algorithm.

* **Space complexity:** The space complexity is $O(1)$ as the space used is constant and doesn't depend on the input.

---

## Approach 3: Using Built-in method

While using this built-in method is convenient, it does not take advantage of the sorted nature of the array. Therefore, for problems where the array's sorted property is given, there might be more efficient approaches, especially for large datasets.

### Algorithm:
1. The lastIndexOf method is a built-in method for arrays that returns the index of the last occurrence of a specified element in the array. If the element is not found, it returns -1.
2. By simply calling `this.lastIndexOf(target)`, we can directly get the index of the last occurrence of the target using a single line of code.

### Implementation:


<iframe src="https://leetcode.com/playground/eDHoAjAb/shared" frameBorder="0" width="100%" height="208" name="eDHoAjAb"></iframe>


### Complexity Analysis:

* **Time complexity:** The time complexity is $O(n)$ as the built-in method checks all the elements.

* **Space complexity:** The space complexity is $O(1)$ as the space used is constant and doesn't depend on the input.

---

## Interview Tips:

* Can you explain prototype-based programming in JavaScript?
    * Prototype-based programming is a style where objects are created based on prototypes rather than classes. Objects inherit properties and methods directly from their prototypes. When an object in JavaScript has a prototype, these prototypes create a chain known as the prototype chain.

* How can you modify the binary search algorithm to find the first occurrence of a `target` element in a sorted array?
    * To find the first occurrence, update the `right` pointer when the `target` is found. If the `target` is less than or equal to the `middle` element, move the `right` pointer to `mid - 1`. This way, the search continues in the left half to find the first occurrence.

* How would you adapt the `upperBound()` method to find the count of occurrences of the `target` element in a sorted array?
    * To find the count of occurrences, you can modify the binary search to look for the first and last occurrences of the `target`, and then calculate the `count` as the difference between their indices plus one.

* Could you discuss potential ways to handle the situation when there are floating-point numbers in the array while implementing the `upperBound()` method?
    * When dealing with floating-point numbers, it's important to consider the precision of comparisons. You may need to use a tolerance value for comparisons to handle small differences between floating-point numbers.
        * The tolerance value, often referred to as an epsilon value or delta, is a small positive number that is used as a threshold for comparisons between floating-point numbers. It represents the acceptable range of difference between two floating-point values for them to be considered equal. 
        * The specific value of the tolerance depends on the precision required for your application and the characteristics of the floating-point numbers you are working with. In many cases, a common choice for the tolerance value is a very small number, such as $1e-9$ or $1e-10$, which is appropriate for handling small differences in typical floating-point calculations. The tolerance value and precision are inversely propertional to each other.

---