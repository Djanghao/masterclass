# Official Solution

**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solution/](https://leetcode.com/problems/find-if-array-can-be-sorted/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of positive integers `nums`. Our task is to determine whether we can sort this array in ascending order by using the following operation any number of times (possibly zero):

##### Operation:

-   Pick two consecutive elements of the array.
-   Count the number of set bits (1s) in their binary representation.
-   If both elements have the same number of set bits, you are allowed to swap them.

In all approaches, we will need a `countSetBits` function, which takes a positive integer `n` and returns the number of set bits in it. There are several ways to implement this function:

<details>
<summary>1. Using 2's Complement Method</summary>
<br>

-   Pseudocode:

```plaintext
function countSetBits(n):
    // Initialize a counter for set bits
    count = 0
    // If the number is negative, convert it to its 2's complement representation
    // Loop until the number becomes 0
    while n > 0:
        // Check if the least significant bit (LSB) is 1
        if (n & 1) == 1:
            count = count + 1
        // Right shift the number to process the next bit
        n = n >> 1
    return count
```

</details>
<details>
<summary>2. Using Bit Manipulation</summary>
<br>

-   Pseudocode:

```plaintext
// Function to count the number of set bits
function countSetBits(n):
    // Initialize a counter for set bits
    count = 0
    // Loop until the number becomes 0
    while n > 0:
        // Increment the counter as the current number has a set bit
        count = count + 1
        // Clear the least significant set bit
        n = n & (n - 1)
    return count
```

</details>
<br>

However, in our solutions, we will take advantage of the language-specific built-in functions because they are easy to use and have optimized implementation, which allows them to operate with a constant time complexity of $O(1)$.

Additionally, in some approaches we would like to modify the input while trying to sort the array, to save space. However, this is not always a good practice. For example, if the algorithm needs to run in a multi-thread environment, the other threads might need to read the array too, and might not expect it to be modified. Even if there is only a single thread, the array might need to be reused later with its content unchanged.

[](#interview-tip)

##### Interview Tip

In an interview, you should always check whether or not the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so, if asked!

---

### Approach 1: Bubble Sort

#### Intuition

Since our objective is to sort an array, a sorting algorithm could come in handy. And which one should we choose? Bubble Sort, of course! While Bubble Sort is generally inefficient for larger datasets, it can be quite effective here due to the small input size ($n \leq 100$). The only task remaining is to determine whether the swaps required by the Bubble Sort algorithm are valid, given the sole operation we are allowed to perform.

The idea can be easily generalized, and the same algorithm can be implemented using other sorting methods, such as Insertion Sort and Selection Sort.

#### Algorithm

-   Get the length of the array, denoted as `n`.
-   Make a copy `values` of the array, to avoid modifying the input.
-   The outer loop runs from `i = 0` to `n - 1`.
-   The inner loop iterates from `j = 0` to `n - i - 2` to compare adjacent elements.
-   In each iteration of the inner loop, compare the values `values[j]` and `values[j+1]`.
    -   If `values[j] <= values[j+1]`, no swap is needed; continue.
    -   If `values[j] > values[j+1]`, the elements must be swapped.
        -   If the elements have the same number of set bits, swap them.
        -   Otherwise, return `false`.
-   If the outer loop ends without returning false, the array is sorted, so return `true`.

#### Implementation

<iframe src="https://leetcode.com/playground/HyvrEQaM/shared" frameBorder="0" width="100%" height="500" name="HyvrEQaM"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

- Time complexity: $O(n^2)$

    The outer loop runs $n$ times, iterating through each element in the array.
    
    The inner loop also runs up to $n - i - 1$ times, which averages to $n$ iterations in the worst case.
    
    Inside the inner loop, checking whether to swap elements involves a comparison and potentially a swap operation if the condition is met. The operation `popcount` runs in $O(1)$ time for each pair of elements.

    Therefore, the nested loops lead to a time complexity of $O(n^2)$.

- Space complexity: $O(n)$

    We are creating a copy of the original array to avoid directly modifying the input. However, if modifying the input is permitted (see [Interview Tip](#interview-tip)), the space complexity can be reduced to $O(1)$.

---

### Approach 2: Sortable Segments

#### Intuition

Upon closer examination of the allowed operation (or perhaps after reading the hint! :)), we find that we can divide the array into segments of consecutive elements with the same number of set bits. Since these elements can be swapped with one another, we could sort each segment individually. However, we are not permitted to change the order of the segments themselves, nor can we swap elements that belong to different segments, as they have different numbers of set bits.

Therefore, we must verify that the segments are arranged correctly. Specifically, the maximum value of each segment (the one that would be the rightmost in its sorted order) must be less than or equal to the minimum value of the subsequent segment (the leftmost in its sorted order).

#### Algorithm

-   Initialize `maxOfSegment` and `minOfSegment` with the value of the first element of the array.
-   Set `numOfSetBits` to the number of set bits of the first element of the array.
-   Initialize `maxOfPrevSegment` to `INT_MIN`.
-   Loop with `i` from `1` to `n-1`. In each iteration, consider the following cases:
    -   If the number of set bits of `nums[i]` matches that of the elements in the current segment, update (if needed) `maxOfSegment` and `minOfSegment` with the value of `nums[i]`.
    -   Otherwise, `nums[i]` belongs to a new segment.
        -   If `minOfSegment < maxOfPrevSegment` return `false`.
        -   Update `maxOfPrevSegment` to `maxOfSegment`.
        -   Set `maxOfSegment` and `minOfSegment` to the value of `nums[i]`
        -   Update `numOfSetBits` with the number of set bits for `nums[i]`.
-   If the loop ends without returning `false`, segments are arranged correctly, so return `true`.

> Important: We can safely use the first element of the array to initialize our variables because the constraints guarantee that the array will not be empty ($n \geq 1$). However, in other situations, we should always account for this edge case.

#### Implementation

<iframe src="https://leetcode.com/playground/L9mPrQLA/shared" frameBorder="0" width="100%" height="500" name="L9mPrQLA"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

-   Time complexity: $O(n)$

    We traverse the entire array only once, performing constant-time operations in each iteration.

-   Space complexity: $O(1)$

    We only use a fixed number of integer variables, which does not depend on the input size.

---

### Approach 3: Forward and Backward Pass

#### Intuition

To simplify the previous approach, we can utilize a two-pass method to determine whether the array can be sorted under the given constraints. In the first pass, we iterate through the array from left to right, aiming to move the maximum value of each segment as far to the right as possible by swapping adjacent elements when allowed.

Then, in the second pass, we switch directions and iterate from right to left. This time, we focus on moving the minimum value of each segment as far to the left as possible. 

While we’re making these passes, if we come across a pair of elements that should be swapped but can't be—because they have different numbers of set bits—we immediately return false. This means that sorting the array under the given constraints isn't possible.

#### Algorithm

-   Get the length of the array, denoted as `n`.
-   Make a copy `values` of the array, to avoid modifying the input.
-   Iterate for `i = 0` to `i = n - 1`. In each iteration, check the following conditions:
    -   If `values[i] <= values[i+1]`, continue.
    -   Otherwise, the elements must be swapped, so that the greater (`values[i]`) moves to the right.
        -   If they have the same number of set bits, swap them.
        -   Else, return `false`.
-   Iterate for `i = n - 1` to `i = 1`. In each iteration, check the following conditions:
    -   If `values[i] >= values[i-1]`, continue.
    -   Otherwise, the elements must be swapped, so that the smaller (`values[i]`) moves to the left.
        -   If they have the same number of set bits, swap them.
        -   Else, return `false`.
-   If both loops end without returning `false`, return `true`.

#### Implementation

<iframe src="https://leetcode.com/playground/bV8G2AvV/shared" frameBorder="0" width="100%" height="500" name="bV8G2AvV"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

-   Time complexity: $O(n)$

    The algorithm consists of two independent for loops, which perform constant-time operations in each iteration.

-   Space complexity: $O(n)$

    We are creating a copy of the original array to avoid directly modifying the input. However, if modifying the input is permitted (see [Interview Tip](#interview-tip)), the space complexity can be reduced to $O(1)$.

---