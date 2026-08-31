# Official Solution

**Link:** [https://leetcode.com/problems/repeat-string/solution/](https://leetcode.com/problems/repeat-string/solution/)

---

[TOC]


## Overview:
Our task is to enhance the behavior of strings by implementing a method `string.replicate(x)` that returns the string repeated `x` times. The challenge is to achieve this without using the built-in `string.repeat() method`.

---

## Approach 1: Recursive Solution

### Intuition:
Given the need to repeatedly perform the same action, a recursive solution offers an intuitive approach. However, for a task like string replication where the number of repetitions is known upfront, iterative methods using loops might be more efficient. In this approach, we'll explore the recursive method for its elegance and simplicity. For the base case, if `times` is `0`, the replication of the string is an empty string. Otherwise, we concatenate the original string with the result of the replicate method called with `times - 1`.

### Algorithm:
1. Check if `times` is equal to `0`. If so, return an empty string.
2. Otherwise, return the original string concatenated with the result of `this.replicate(times - 1)`.

### Implementation:

<iframe src="https://leetcode.com/playground/ZxCXY4Lh/shared" frameBorder="0" width="100%" height="276" name="ZxCXY4Lh"></iframe>


### Complexity Analysis:

**Time complexity**: The recursive concatenation approach involves a series of growing concatenation operations:
* In the first recursive call, you're concatenating the original string of length `m`. This operation takes $O(m)$ time.
* In the second recursive call, you're dealing with a result string that has already grown to length `m`, and you concatenate another string of length `m` to it. This operation takes $O(2m)$ time.
* In the third call, the operation takes $O(3m)$ time, and the pattern continues in this manner. Adding up the time complexity for each recursive call, we get: $O(m + 2m + 3m + ... + nm)$
* This represents the quadratic growth in the number of repetitions `n` and the linear growth in the length of the string `m`. Therefore, the overall time complexity is: $O(n^2 * m)$

**Space complexity:** $O(M x N)$, where `M` is the length of the original string and `N` is the number of repetitions. The space complexity is dominated by the continuously growing result string, which can grow up to `M` times `N` in length. Additionally, the recursive approach leads to recursive calls for each level of repetition, adding levels to the call stack. However, the primary contributor to the space complexity is the resulting string itself.

---

## Approach 2: Iterative Solution

### Intuition:
The replication we achieved using recursion can also be accomplished iteratively. Specifically, we can initialize an empty string and then use a loop to concatenate the original string `times` number of times.

### Algorithm:
1. Create an empty string `result`.
2. Iterate `times` number of times:
    * Inside the loop, concatenate the original string to the `result` string.
3. Finally, return the `result` string.

### Implementation:

<iframe src="https://leetcode.com/playground/WJXzUEST/shared" frameBorder="0" width="100%" height="276" name="WJXzUEST"></iframe>


### Complexity Analysis:

**Time complexity:** The iterative concatenation approach involves a series of growing concatenation operations.
* In the first iteration, you concatenate the original string (of length `m`) to the result. This operation is $O(m)$.
* In the second iteration, the result string is of length `m`, and you concatenate another string of length `m` to it. This operation is $O(2m)$.
* In the third iteration, it's $O(3m)$, and the pattern continues in this manner. Thus summing up the time taken for each iteration: $O(m + 2m + 3m + ... + nm)$
* Given the properties of big O notation where we focus on the term that grows the fastest, this can be approximated as: $O(m * n^2)$

**Space complexity:** The space complexity primarily stems from the continuously growing result string. At the end of all iterations, the length of the result string is `m * n`, making the space complexity $O(m * n)$.

---

## Approach 3: Using array.join method 

### Intuition:
Instead of concatenating the string in every iteration, we could create an array to store the repeated substrings and then use the `join` method to combine them into a single string. This approach will reduce memory overhead compared to repeated string concatenation as the `+` operator involves creating a new string each time two strings are concatenated, which can be slow and memory-intensive in a loop while the `array.join` method, efficiently concatenates an array of strings using a single delimiter, resulting in improved performance.

### Algorithm:
1. Create an empty array called `result`.
2. Iterate `times` number of times:
    * In each iteration, push the original string into the `result` array. 
3. After completing the loop, concatenate the elements of the `result` array using the `join` method with an empty string as the delimiter and return the resulting string.

### Implementation:

<iframe src="https://leetcode.com/playground/cFTDebCW/shared" frameBorder="0" width="100%" height="293" name="cFTDebCW"></iframe>


### Complexity Analysis:

**Time complexity:** $O(m * n)$, where `m` is the length of the original string and `n` is the value of times. You have a loop that pushes the string into the array `n` times. If you have `n` strings, each of length `m`, the time taken by the `join` operation is proportional to `m * n` because it needs to assemble a string that's `m * n` characters long.

**Space complexity:** $O(m * n)$, due to the space required for the `result` array. You're storing the same string, of length `m`, in the result array `n` times.

---

## Interview Tips:

* Is there a way to improve the memory efficiency of the loop-based solution?
    * Instead of concatenating the string in every iteration, we could create an array to store the repeated substrings and then use the `join` method to combine them into a single string. This approach reduces memory overhead compared to repeated string concatenation.

* How might you extend this solution to support more advanced string manipulations beyond simple replication?
    * We could implement additional prototype methods to perform tasks like reversing the string or extracting substrings based on certain criteria.

* Can you think of scenarios where extending a built-in type might cause conflicts or compatibility issues?
    * If multiple libraries extend the same built-in type with conflicting methods, there could be naming collisions also another risk is that it can make the code less predictable for other developers who might not expect the built-in types to have been extended. Additionally, future updates to the programming language might introduce new methods that conflict with our extensions. 

---