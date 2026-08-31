# Official Solution

**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solution/](https://leetcode.com/problems/max-chunks-to-make-sorted/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array `arr` of length `n` that contains the numbers `0`, `1`, ... , `n - 1` in random order. According to the problem description, three operations are to be performed:

1. Split the array into a number of *chunks* (i.e., segments).
2. Sort each segment separately in increasing order.
3. Concatenate all segments **in the same order** as they appear in the original array.

Our task is to find the highest possible number of chunks we can split the array into such that each chunk can be sorted independently and still be concatenated to match the sorted version of the entire array. 

A key observation here is that a split is valid if and only if each segment contains numbers strictly greater than those in the previous segment. In other words, the minimum value of each segment must be greater than the maximum value of the previous segment.

---

### Approach 1: PrefixMax and SuffixMin Arrays

#### Intuition

Building on the above observation, we further notice that for each number in the array, we have two options: we can either include it in the same chunk as the previous number or create a new chunk for it. However, we must consider the limitation that a new chunk at index $i$ can only be created if all the numbers in the current and previous chunks (the "prefix" of the array) are smaller than all the numbers in the following chunks (the "suffix" of the array). This is equivalent to checking whether:

$$
\begin{aligned}
max(prefix[0:i]) < min(suffix[i:n]).
\end{aligned}
$$

Since we aim to find the largest possible number of chunks, we will choose the second option (i.e., create a new chunk) whenever the above condition is satisfied. Therefore, the problem reduces to counting how many indices in the array satisfy this condition.

#### Algorithm

-   Initialize `n` to the size of the `arr` array.
-   Initialize `prefixMax` and `suffixMin` arrays to `arr`.
-   Iterate over `arr` with `i` from `1` to `n - 1`:
    -   Set `prefixMax[i] = max(prefixMax[i], prefixMax[i-1])`.
-   Iterate over `arr` with `i` from `n - 2` to `0`:
    -   Set `suffixMin[i] = min(suffixMin[i], suffixMin[i+1])`.
-   Initialize `chunks` to `0`.
-   Iterate over `arr` with `i` from `0` to `n - 1`:
    -   Check if `i == 0` (create a chunk for the first element) or `suffixMin[i] > prefixMax[i - 1]`.
        -   If true, increment `chunks` by `1`.
-   Return `chunks`.

#### Implementation

<iframe src="https://leetcode.com/playground/DUP4x9QQ/shared" frameBorder="0" width="100%" height="500" name="DUP4x9QQ"></iframe>

#### Complexity Analysis

Let $n$ be the size of the array `arr`.

-   Time complexity: $O(n)$

    The initialization of the `prefixMax` and `suffixMin` arrays, as well as the computation of `chunks`, each requires a single pass through the array `arr`, taking $O(n)$ time. Therefore, the total time complexity is $O(n) + O(n) + O(n) = O(n)$.

-   Space complexity: $O(n)$

    The `prefixMax` and `suffixMin` arrays require $O(n)$ space.

---

### Approach 2: Prefix Sums

#### Intuition

An important observation is that a segment of the array can form a valid chunk if, when sorted, it matches the corresponding segment in the fully sorted version of the array.

Since the numbers in `arr` belong to the range `[0, n - 1]`, we can simplify the problem by using the property of sums. Specifically, for any index, it suffices to check whether the sum of the elements in `arr` up to that index is equal to the sum of the elements in the corresponding prefix of the sorted array.

If these sums are equal, it guarantees that the elements in the current segment of `arr` match the elements in the corresponding segment of the sorted array (possibly in a different order). When this condition is satisfied, we can form a new chunk — either starting from the beginning of the array or the end of the previous chunk.

For example, consider `arr = [1, 2, 0, 3, 4]` and the sorted version `sortedArr = [0, 1, 2, 3, 4]`. We find the valid segments as follows:
-   Segment `[0, 0]` is not valid, since `sum = 1` and `sortedSum = 0`.
-   Segment `[0, 1]` is not valid, since `sum = 1 + 2 = 3` and `sortedSum = 0 + 1 = 1`.
-   Segment `[0, 2]` is valid, since `sum = 1 + 2 + 0 = 3` and `sortedSum = 0 + 1 + 2 = 3`.
-   Segment `[3, 3]` is valid, because `sum = 1 + 2 + 0 + 3 = 6` and `sortedSum = 0 + 1 + 2 + 3 = 6`.
-   Segment `[4, 4]` is valid, because `sum = 1 + 2 + 0 + 3 + 4 = 10` and `sortedSum = 0 + 1 + 2 + 3 + 4 = 10`.

Therefore, the answer here is 3.

#### Algorithm

-   Initialize `n` to the size of the `arr` array.
-   Initialize `chunks`, `prefixSum`, and `sortedPrefixSum` to `0`.
-   Iterate over `arr` with `i` from `0` to `n - 1`:
    -   Increment `prefixSum` by `arr[i]`.
    -   Increment `sortedPrefixSum` by `i`.
    -   Check if `prefixSum == sortedPrefixSum`:
        -   If so, increment `chunks` by `1`.
-   Return `chunks`.

#### Implementation

<iframe src="https://leetcode.com/playground/DBPgzN5d/shared" frameBorder="0" width="100%" height="429" name="DBPgzN5d"></iframe>

#### Complexity Analysis

Let $n$ be the size of the array `arr`.

-   Time complexity: $O(n)$

    We iterate over the array `arr` once and perform constant-time operations on each iteration.

-   Space complexity: $O(1)$

    We are only using a fixed number of variables which does not depend on the input size.

---

### Approach 3: Monotonic Increasing Stack

#### Intuition

The main idea of this approach is that if a number in the array is less than any number in the previous chunks, this number cannot create a new chunk, as we cannot swap elements from different chunks to fix their relative order. We will iterate over the array and maintain a stack to represent the maximum values of the chunks created so far. As we loop over the array, we decide whether the current element (`arr[i]`) can start a new chunk or should merge with an existing chunk. We handle two cases:
1. `arr[i] > stack.top`: If the current element is greater than the top of the stack, it means it can start a new chunk because it’s larger than all previous chunks. We push `arr[i]` into the stack to represent a new chunk.
2. `arr[i] < stack.top`: If the current element is smaller the top of the stack, it cannot form a new chunk. Instead, it must merge with one or more existing chunks. To merge, remove all chunks from the stack whose maximum values are greater than the current element. Then, push back the maximum value of the merged chunks to maintain the stack sorted.

Let's take a look at an example, where `arr = [1, 2, 0, 3, 4]`. Initially the stack is empty: `stack = []`.
-   We then push `1` into the stack: `stack = [1]`.
-   `2 > 1`, we push `2` into the stack: `stack = [1, 2]`.
-   `0 < 2`, `0 < 1`, we pop `2` and `1` from the stack. We push `2` back into the stack, as it the maximum element of the current chunk: `stack = [2]`.
-   `3 > 2`, we push `3` into the stack: `stack = [2, 3]`.
-   `4 > 3`, we push `4` into the stack: `stack = [2, 3, 4]`. 

Now recall that at each point the elements in the stack represent the maximum elements of the chunks created so far. Therefore, at the end of the iteration, the size of the stack equals the maximum number of chunks that can be formed.

> For a more comprehensive understanding of stacks, check out the [Stack Explore Card](https://leetcode.com/explore/learn/card/queue-stack/). This resource provides an in-depth look at stacks, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

-   Initialize `n` to the size of the `arr` array.
-   Initialize `monotonicStack` to an empty stack.
-   Iterate over `arr` with `i` from `0` to `n - 1`:
    -  If the `monotonicStack` is empty or `arr[i]` is greater than the top of the stack:
        -   Push `arr[i]` into the `monotonicStack`.
    -  Otherwise:
        -   Initialize `maxElement` to the top element of the `monotonicStack`.
        -   While the `monotonicStack` is not empty and the top element is greater than `arr[i]`:
            -   Pop the top element from the `monotonicStack`.
        -   Push `maxElement` into the `monotonicStack`.      
-   Return the size of the `monotonicStack`.

#### Implementation

<iframe src="https://leetcode.com/playground/XVZvpjGz/shared" frameBorder="0" width="100%" height="480" name="XVZvpjGz"></iframe>

#### Complexity Analysis

Let $n$ be the size of the array `arr`.

-   Time complexity: $O(n)$

    We iterate over the array, and during each iteration, we either push an element into the `monotonicStack` (constant-time operation) or pop elements from the stack using the inner while loop. Notice that the number of times the while loop runs in a single iteration corresponds to the size of the current chunk being merged. The total number of pop operations across all iterations is therefore equal to the sum of the sizes of the chunks which is the total number of elements in the array. Hence the total time complexity is $O(n)$.

-   Space complexity: $O(n)$

    In the worst case (i.e., `arr` is in increasing order), the stack contains $n$ elements, so the space complexity of the algorithm is $O(n)$.

---

### Approach 4: Maximum Element

#### Intuition

Similarly to the second approach, we will use a condition to determine when a segment can be considered a valid chunk. Here, we iterate through the array while keeping track of the maximum element we've encountered up to the current index. 

Now, consider the case where the current index $i$, is equal to the maximum element encountered so far, $\text{maxElement}$. This condition means that all elements preceding index $i$ are less than $\text{maxElement}$. Since the array is a permutation of integers in the range $[0, n - 1]$, it also guarantees that all integers from $0$ to $\text{maxElement}$ must appear in the array before index $i$. Therefore, whenever the current index matches the maximum value so far (i.e., $i == \text{maxElement}$), we increment the count of chunks. 

#### Algorithm

-   Initialize `n` to the size of the `arr` array.
-   Initialize `chunks` and `maxElement` to `0`.
-   Iterate over `arr` with `i` from `0` to `n - 1`:
    -  Update `maxElement` to `max(maxElement, arr[i])`.
    -  If `maxElement == i`:
        -   Increment `chunks` by `1`.
-   Return `chunks`.

#### Implementation

<iframe src="https://leetcode.com/playground/ZvF2KSk7/shared" frameBorder="0" width="100%" height="412" name="ZvF2KSk7"></iframe>

#### Complexity Analysis

Let $n$ be the size of the array `arr`.

-   Time complexity: $O(n)$

    We iterate over the array `arr` once and perform constant-time operations on each iteration.

-   Space complexity: $O(1)$

    We are only using a fixed number of variables which does not depend on the input size.


---

**Follow Up:** Want to challenge yourself further? Try out the harder version of the problem: [Max Chunks To Make Sorted II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/description/)