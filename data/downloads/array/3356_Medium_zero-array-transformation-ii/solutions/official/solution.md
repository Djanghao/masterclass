# Official Solution

**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solution/](https://leetcode.com/problems/zero-array-transformation-ii/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `nums` of length `n`, and a list of queries that are each in the form `[left, right, val]`. For a given range `[left, right]`, we can decrease each element in that range by at most `val`. Our task is to determine the earliest query that allows us to turn `nums` into an array of all zeroes. If it's not possible, we return `-1`.  

We can look at an example of the queries being processed:

!?!../Documents/3356/slideshow1.json:960,540!?!

From this example, we can see that there are two main operations that will occur:

1. Iterating through each element in `queries`.
2. Applying the range and value of each query to `nums`.

We need to assess how to optimally handle both operations to find the earliest value of `k` to reach a zero array.

---

### Approach 1: Binary Search

#### Intuition

A simple approach would be to iterate through each query, applying the updates directly to `nums` and checking whether all elements have become zero. However, given the constraints where both `nums` and `queries` can be as large as $10^5$, this approach is too slow. Each query might require traversing the entire array, leading to an impractical time complexity.  

To optimize this, we need a more efficient way to apply queries to `nums`. Instead of modifying each element individually, we can take advantage of a **difference array**. This technique allows us to apply a range update in constant time. The key idea is to store the changes at the boundaries of the range rather than updating every element inside it. For a query $[ \text{left}, \text{right}, \text{val} ]$, we add `val` at index `left`, and subtract `val` at index `right + 1`. When we later compute the prefix sum of this difference array, it reconstructs the actual values efficiently. This way, instead of updating `nums` repeatedly, we can process all queries in an optimized manner and then traverse `nums` just once to check if all elements have become zero.  

Let's look at how the difference array can be applied to this problem:

!?!../Documents/3356/slideshow2.json:960,540!?!

Now that we optimized how we apply queries, the next step is to determine how many queries we actually need. Instead of processing all queries one by one, we can use **binary search** to quickly determine the minimum number of queries required to achieve the zero array. We start by setting two pointers: `left = 0` and `right = len(queries)`, representing the search range. The middle index, `mid = (left + right) / 2`, represents the number of queries we will attempt to apply. We update `nums` using only the first `mid` queries, compute the final state using the prefix sum of the difference array, and check if `nums` is now a zero array.  

If it is possible to achieve a zero array with `mid` queries, we reduce our search range by setting `right = mid - 1`, since we might be able to do it with even fewer queries. Otherwise, we increase our search range by setting `left = mid + 1`, since we need more queries to reach the desired state. This binary search ensures that instead of checking every possible number of queries linearly $O(N)$, we find the answer in $O(\log N)$ time.  

#### Algorithm

- Define a function `canFormZeroArray`, which takes the parameters `nums`, `queries`, and integer `k` and returns a boolean value:
    - Initialize:
        - `n` to the size of `nums`.
        - `sum` to `0` to track the cumulative sum of updates added to a given index.
        - `differenceArray` as a vector of integers of size `n + 1` to apply range updates
    - Iterate through the first `k` elements of `queries`:
        - Initialize `start`, `end`, and `val` to the respective values of the current query.
        - Increment `differenceArray[start]` by `val` to update the start of the range.
        - Decrement `differenceArray[end + 1]` by `val` to update the end of the range.
    - Iterate through `nums`. For each index, `numIndex`:
        - Increment `sum` by `differenceArray[numIndex]`;
        - If `sum` is less than `nums[numIndex]`, return `false`, indicating that a zero array cannot be formed after the first `k` queries.
    - Return `true`, meaning a zero array was formed after `k` queries.

- Define `minZeroArray`:
    - Initialize:
        - `n` to the size of `nums`.
        - `left` to `0`.
        - `right` to the size of `queries`.
    - If a zero array cannot be formed at `right`, return `-1`, since that means we processed all the queries without reaching a zero array.
    - Perform binary search on `queries`. While `left` is less than or equal to `right`:
        - Initialize `middle` to half of the current search interval (`left + (right - left) / 2`).
        - If `canFormZeroArray` returns `false` when we pass `middle` as the `k` parameter, set `right` to `middle - 1`.
        - Else, set `left` to `middle + 1`.
    - Return `left`, which is the earliest query that a zero array can be formed.
    
#### Implementation

<iframe src="https://leetcode.com/playground/XkQaAdC4/shared" frameBorder="0" width="100%" height="500" name="XkQaAdC4"></iframe>

#### Complexity Analysis

Let $N$ be the size of array `nums` and $M$ be the size of array `queries`.

* Time Complexity: $O(log(M) \cdot (N + M))$

    We perform a binary search on `queries`, which repeatedly divides the search space in half at each step, leading to a time complexity of $log(M)$.

    In each iteration of the binary search, we first iterate through the first `k` elements in `queries`. In the worst case, we have to iterate through each element when `k` is the size of `queries`, leading to a time complexity of $O(M)$.

    From there, we iterate through each element of `nums` until one of the elements exceeds the value of `sum`. In the worst case, we have to iterate through each element in `nums` when this doesn't occur, leading to a time complexity of $O(N)$.

    As a result, each iteration of the binary search has a time complexity of $O(N + M)$. Combining each iteration leads to a final time complexity of $O(log(M) \cdot (N + M))$.

* Space Complexity: $O(N)$

    The space complexity is based on the array `differenceArray`. Here, `differenceArray` is set to hold elements from the range `[0, N + 1]` to track all the changes in `nums`. As a result, this creates a space complexity of $O(N + 1)$, which can be simplified to $O(N)$.

---

### Approach 2: Line Sweep

#### Intuition

In our previous approach, we used binary search to determine how many queries were needed to turn `nums` into a zero array. This allowed us to efficiently process a subset of `queries`, applying them to a **difference array**, and then checking if `nums` had become all zeros. While this was an improvement over a naive approach, there was still an inefficiency: we were iterating over `queries` twice: once for binary search and again while applying updates.  

To optimize further, we can change our perspective on how we traverse the data. Instead of iterating through `queries`, we can iterate directly through `nums`, using it as the main loop. This means that as we process each element in `nums`, we dynamically apply only the necessary queries at the right moment. The key challenge, then, is finding an efficient way to apply queries while moving through `nums`.  

This is where a line sweep approach comes into play. Line sweeping is a technique that processes an array incrementally, maintaining only the relevant updates at each step. Instead of processing all queries upfront, we maintain an **active set of queries** and update `nums` only when necessary. Here, the **difference array** helps us track how `nums` is being modified, while `queries` provide the updates at specific points.  

We start at index `0` of `nums` and check if it can be turned into `0` with the queries we have processed so far. If it cannot be zeroed out, we process additional queries to apply their effects. The key observation is that at any index `i` in `nums`, a query `[left, right, val]` can fall into three possible cases:  

1. If `i < left`, the query affects a later part of `nums`, so we store it for later processing.  
2. If `left ≤ i ≤ right`, the query is immediately relevant and should be applied.  
3. If `right < i`, the query is no longer useful for the current index and can be ignored.  

For example, if we're at index `4` in `nums` and the current query accesses the range `[0,2]`, we do not need to process that query and can simply move on to the next query.

Otherwise, we continue to the next element of `nums`. We repeat this process until we reach the end of either `nums` or `queries`, where we then return either `k` or `-1`, respectively. 

Through this process, we only have to iterate through both `nums` and `queries` at most once each while skipping over unnecessary queries.

#### Algorithm
- Initialize:
    - `n` to the size of `nums`.
    - `sum` to `0` to track the cumulative sum of updates applied up to a given index
    - `k` to `0` to represent the number of queries used.
    - `differenceArray` as a vector of integers set to size `n + 1` to apply range updates.
- Iterate through `nums`. For each `index`:
    - If `sum + differenceArray[index]` is less than `nums[index]`, meaning more operations need to be applied at the current index:
        - Increase `k` by `1`.
        - If `k` is greater than the size of `queries`, return `-1`, since we processed all the queries without reaching a zero array.
        - Initialize `left`, `right`, and `val` to the respective values of the current query.
        - If `right` is greater than or equal to `index`:
            - Increment `differenceArray[max(left, index)]` by `val` to update the start of the range.
            - Decrement `differenceArray[right + 1]` by `val` to update the end of the range.
    - Increment `sum` by `differenceArray[index]`.
- Return `k`.

#### Implementation

<iframe src="https://leetcode.com/playground/nYxo3uqw/shared" frameBorder="0" width="100%" height="500" name="nYxo3uqw"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums` and $M$ be the size of `queries`.

* Time Complexity: $O(N + M)$

    We iterate through each element of `nums` at most once. Within this loop, we loop through each element of `queries` at most once. 
    
    The program returns a value and ends when we reach the end of either of these arrays. In the worst case, we iterate through each element in `nums` and `queries` once before returning a value. As a result, this leads to a time complexity of $O(N + M)$.

* Space Complexity: $O(N)$

    The space complexity is based on the array `differenceArray`. Here, `differenceArray` is set to hold elements from the range `[0, N + 1]` to track all the changes in `nums`. As a result, this creates a space complexity of $O(N + 1)$, which can be simplified to $O(N)$.

---