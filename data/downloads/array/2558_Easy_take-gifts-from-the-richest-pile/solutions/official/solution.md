# Official Solution

**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solution/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `gifts`, where the $i^{th}$ element represents a pile with `gifts[i]` gifts. We are also given an integer `k`, which is equal to the number of times we should perform the following operation:

1. Find the pile with the most gifts (i.e., the maximum element in the `gifts` array).
2. Replace the number of gifts in that pile with its square root rounded down to the nearest integer (i.e., the *floor* of its square root).

In the end, we should return the total number of gifts remaining, which is the sum of the elements of the array after performing all `k` operations.

> **Floor operation**: The *floor* of a number $x$, denoted as $\lfloor x \rfloor$, is the greatest integer that is less than or equal to $x$.
> For example, $\lfloor 4.3 \rfloor = 4$, $\lfloor -4.3 \rfloor = -5$.
> In most programming languages (including C/C++, Java, and Python), typecasting a **positive** floating-point number to an integer gives the same result as using the floor function. This is because typecasting simply removes the decimal part.

---

### Approach 1: Brute Force

#### Intuition

In this approach, we will directly follow the steps outlined in the problem. We will iterate through the array `k` times. On each iteration, we will find the maximum element and replace it with its square root rounded down to the nearest integer. Then, we will iterate over the array one more time to calculate the sum of its elements (i.e., the total number of the remaining gifts).

###### 1. Usage of built-in functions

Most modern programming languages, such as C++, Java, and Python, provide built-in functions to perform common operations like finding the maximum value or summing the elements of an array. These built-in functions are optimized for ease of use but typically have the same time complexity as a basic, manual implementation. We will explain the more generic, step-by-step operations for these in the Algorithm section below.

###### 2. Modifying the input

In this problem, it is convenient to perform the given operation directly on the input data rather than copying it to save space. However, sometimes this can cause problems. Here are a few cases where in-place algorithms might not be suitable:

-   The algorithm needs to run in a multi-threaded environment, where other threads might need to read the array as well and may not expect it to be modified.
-   Even if there is only a single thread, the array may need to be reused later, and its content should remain unchanged.

> **Interview Tip**: During an interview, always check with the interviewer if overwriting the input is acceptable, and be prepared to discuss the pros and cons of doing so!

#### Algorithm

-   Initialize `n` as the size of the `gifts` array.
-   Repeat the following `k` times:
    -   Initialize `richestPileIndex` to `0`.
    -   Iterate over the array with `currentPileIndex` from `0` to `n - 1`:
        -   If `gifts[richestPileIndex] < gifts[currentPileIndex]`, update `richestPileIndex` to `currentPileIndex`.
    -   Update the value at `richestPileIndex` by setting it to the floor of its square root, i.e., `floor(sqrt(gifts[richestPileIndex]))`.
-   Initialize `numberOfRemaningGifts` to `0`.
-   Loop through the `gifts` with `i` from `0` to `n - 1`:
    -   On each iteration, add `gifts[i]` to `numberOfRemaningGifts`.
-   Return `numberOfRemaningGifts`.

#### Implementation

<iframe src="https://leetcode.com/playground/Di5bZhKC/shared" frameBorder="0" width="100%" height="500" name="Di5bZhKC"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `gifts` array.

-   Time complexity: $O(k \times n)$

    We use two nested for loops: the outer loop runs $k$ times, and the inner loop runs $n$ times. After the loops, summing the array values requires an additional pass through the array, which adds an extra $O(n)$ complexity. However, the overall time complexity remains $O(k \times n) + O(n) = O(k \times n)$.

-   Space complexity: $O(1)$

    If we are allowed to modify the input, we can apply the operations directly on it, requiring only a constant amount of extra space. However, if we need to create a copy of the input, the space complexity would increase to $O(n)$.

---

### Approach 2: Sorted Array

#### Intuition

While trying to improve the previous approach, we realize that its main bottleneck is the operation of finding the maximum value during each step. For this next approach, instead of scanning the array each time, we maintain the array in sorted order, allowing us to access the maximum element in constant time (it’s always the last element).

By sorting the array initially, we can quickly access the largest element at the first step. After that, we replace it with its square root. The challenge is to keep the array sorted after this modification. To do so, we need to figure out the right spot for the square root. This is where the *upper-bound function* comes in—it helps us find the first position in the array where the square root is strictly less than the next element. We then insert the square root in this position, ensuring the array remains in sorted order.

Most programming languages provide built-in functions for the upper-bound operation. For example, C++ has `upper_bound`, Java offers `binary_search` or the `TreeSet` data structure, and Python uses `next`. These functions are typically implemented using binary search, making them efficient for finding the insertion point in a sorted container.

!?!../Documents/2558/2558_second_approach.json:960,540!?!

> In this approach, we will treat the input as read-only and work with a copy of it.

#### Algorithm

-   Initialize `n` as the size of the `gifts` array.
-   Create a copy of the `gifts` array, called `sortedGifts` and sort it.
-   Repeat the following `k` times:
    -   Set `maxElement` to `sortedGifts[n - 1]` (the last element).
    -   Remove the last element of `sortedGifts`.
    -   Find the correct position for the square root of `maxElement` using the upper bound function, and store it in `spotOfSqrt`.
    -   Insert `floor(sqrt(maxElement))` at `spotOfSqrt` in the `sortedGifts` array.
-   Initialize `numberOfRemaningGifts` to `0`.
-   Loop through the `gifts` with `i` from `0` to `n - 1`:
    -   On each iteration, add `gifts[i]` to `numberOfRemaningGifts`.
-   Return `numberOfRemaningGifts`.

#### Implementation

<iframe src="https://leetcode.com/playground/DMZu6zgP/shared" frameBorder="0" width="100%" height="500" name="DMZu6zgP"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `gifts` array.

-   Time complexity: $O(k \times (n + \log n ))$

    At each step, we use the upper bound function to find the correct position for the square root of the maximum element. This function is implemented using binary search, so its time complexity is $O(\log n)$. Additionally, we insert a value into the array at the correct position, which has a time complexity of $O(n)$, because all elements after the insertion point need to be shifted to the right. Since we are performing $k$ operations in total, the overall time complexity becomes $O(k \times (n + \log n))$.

-   Space complexity: $O(n)$

    Here, we avoid modifying the input directly by creating an array, `sortedGifts`, of size $n$. However, if we were allowed to modify the input in place, the space complexity could be reduced to $O(1)$.

---

### Approach 3: Heap

#### Intuition

Even though the second approach makes it faster to find the maximum element, it ends up being slower overall. Why? Probably because we’re putting too much effort into keeping the whole array sorted, when all we really need is quick access to the maximum element. This is where a max-heap (or priority queue) can help.

To solve the problem, we’ll start by creating a max-heap with all the elements from the `gifts` array. Then, for each operation, we’ll remove the maximum element, take the floor of its square root, and add it back to the heap. Finally, we will add up all the values left in the heap and return the result.

> For a more comprehensive understanding of heaps and priority queues, check out the [Heap Explore Card 🔗](https://leetcode.com/explore/learn/card/heap/). This resource offers an in-depth look at heap-based algorithms, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

-   Initialize a priority queue (max-heap) with all the elements of the `gifts` array, called `giftsHeap`.
-   Repeat the following `k` times:
    -   Set `maxElement` to the top element of the `giftsHeap`.
    -   Pop the top element of the `giftsHeap`.
    -   Push `floor(sqrt(maxElement))` into the `giftsHeap`.
-   Initialize `numberOfRemaningGifts` to `0`.
-   While the `giftsHeap` is not empty:
    -   Add the top element to `numberOfRemaningGifts` and pop it from the `giftsHeap`.
-   Return `numberOfRemaningGifts`.

#### Implementation

<iframe src="https://leetcode.com/playground/cTqF7KxB/shared" frameBorder="0" width="100%" height="500" name="cTqF7KxB"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `gifts` array.

-   Time complexity: $O(n + k \times \log n)$

    The initialization of the heap requires $O(n)$ time. On each step, we pop the maximum element and push the square root of that element back into the heap. Both operations (pop and push) have a time complexity of $O(\log n)$ because a heap is a balanced binary tree. Since we perform this operation $k$ times, the overall time complexity is $O(n + k \times \log n)$.

-   Space complexity: $O(n)$

    The space complexity is $O(n)$ since the heap contains exactly $n$ elements.

---