# Official Solution

**Link:** [https://leetcode.com/problems/special-array-ii/solution/](https://leetcode.com/problems/special-array-ii/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of integers `nums` and a 2D array of queries `queries`, where each query `queries[i] = [from, to]` refers to the subarray `nums[from ... to]`. Our task is to determine if each subarray `nums[from ... to]` is special. A subarray is considered special if every pair of adjacent elements has different parity — that is, the subarray alternates between even and odd elements.

---

### Approach 1: Binary Search

#### Intuition

A brute force solution would involve traversing the entire subarray for each query `queries[i]` and checking if its elements alternate between even and odd parity. However, this approach is inefficient because traversing all subarrays will be very time-consuming, especially if there are many queries or if the subarrays are large. Also, there would be much repeated work if the queries overlap.

Instead, we can perform some precomputations to solve each query faster. If we perform an initial traversal of `nums`, we can easily identify the indices of elements that break or violate the special array property. Specifically, we can find the indices of elements `nums[i]` that have the same parity (even or odd) as its previous element: If `nums[i] % 2 == nums[i-1] % 2` is true, then `nums[i]` is a violating element.

After finding these violating indices, we know that any subarray containing any of these indices is not a special array. Conversely, if a subarray contains no violating indices, then it is a special array. 

The problem now is to find an efficient way to check if each subarray defined by `queries[i] = [start, end]` contains any violating indices. Since we can perform our initial traversal of `nums` from left to right, the violating indices are naturally sorted in ascending order. Because they are sorted, we can perform [binary search](https://leetcode.com/explore/learn/card/binary-search/) on the violating indices to see if any violating indices fall between the range `[start + 1, end]`. Note that we start our search at `start + 1` instead of `start` because the violating indices are defined relative to the element to their left. Therefore, the first element of our subarray (at index `start`) is never a violating element, and our search should begin at `start + 1`.

It is also worth noting that there is usually a single target value we would like to find for traditional binary search problems. However, for this problem, we have a target range of `[start + 1, end]` instead. 

Thus, our precomputation allows us to more efficiently evaluate each subarray, leading to an $O(\logn)$ binary search time for each query rather than a $O(n)$ brute force traversal.

#### Algorithm

1. Create a new boolean `ans` array to hold our answers for all queries.
2. Create a new list `violatingIndices` to store all the indices that violate the special array condition in `nums`.
3. Iterate through `nums` and add all the violating indices found to `violatingIndices`.
4. Traverse through `queries` to answer each `queries[i]`:
    * Initialize variable `start` to `queries[i][0]`.
    * Initialize variable `end` to `queries[i][1]`.
    * Call helper function `binarySearch(start + 1, end, violatingIndices)` to search through `violatingIndices` to see if it contains any indices that fall between `start` and `end`. Save result to variable `foundViolatingIndex`.
    * If `foundViolatingIndex == true`, then we know the answer to the current query is false. Otherwise, the answer is true..
    * Save answer in `ans[i]`.
5. Return `ans`.
6. Define helper function `binarySearch(start, end, violatingIndices)`:
    * We initialize our search space to the entire list of violating indices: `left = 0` and `right = violatingIndices.size() - 1`
    * While `left <= right`:
        * Calculate the midpoint: `mid = (left + right) / 2`.
        * Access the violating index at that index: `violatingIndex = violatingIndices.get(mid)`.
        * If `violatingIndex < start`, then we want to look at the right half of our search space, so update `left = mid + 1`.
        * If `violatingIndex > end`, then we want to look at the left half of our search space, so update `right = mid - 1`.
        * Otherwise, our violating index falls in between `start` and `end`, meaning we found one in the subarray. Thus, we return `true`. 
    * If we reach this point, then we couldn't find any violating indices in the subarray. We return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/4xjpYCrJ/shared" frameBorder="0" width="100%" height="500" name="4xjpYCrJ"></iframe>

#### Complexity Analysis

Let $M$ be the size of `nums` and $N$ be the size of `queries`.

* Time Complexity: $O(M + N \cdot \log M)$

    Our initial traversal of `nums` takes $O(M)$ time. Then, the binary search for each query will take $O(\log M)$. For all $N$ queries, the total time for all searches is $O(N \cdot \log M)$. Thus, the total time complexity is $O(M + N \cdot \log M)$.

* Space Complexity: $O(M)$

    We store the violating indices of `nums`, which will take $O(M)$ space.

---

### Approach 2: Prefix Sum

#### Intuition

For Approach 1, our precomputation involved finding all the violative indices of `nums`. This allowed us to evaluate each query in logarithmic time. 

We will now consider a different precomputation method. We will find the total number of violative indices up to index `i` in `nums` for all indices `i`. In other words, we can create a prefix sum array where `prefix[i]` contains the total number of violative indices considering `nums[0...i]`. This can easily be done in linear time by iterating through `nums` and checking if each element `nums[i]` has the same parity as the previous element. If it does, then we have found a new violating index `i`, and our total number of violative indices increases by 1 (`prefix[i] = prefix[i - 1] + 1`). If it doesn't, then `i` is not a violating index and we keep our number of violative indices the same as before: `prefix[i] = prefix[i - 1]`

This prefix sum array is convenient because it now allows us to evaluate each query in constant time. Given any query `queries[i] = [start, end]`, we know that there are no violating indices found in the subarray between indices `start` and `end` if `prefix[end] - prefix[start] == 0`. If this condition is true, then the subarray is considered special. Otherwise, it is not special.

#### Algorithm

1. Create a new boolean `ans` array to hold our answers for all queries
2. Initialize a `prefix` array to contain the prefix sum of the total number of violative indices.
3. Initialize `prefix[0] = 0`.
4. Iterate through `nums` from `i = 1` to `i = nums.length - 1`:
    * If `nums[i] % 2 == nums[i - 1] % 2` then `i` is a new violative index, and we can increase the total number by 1: `prefix[i] = prefix[i-1] + 1`
    * Otherwise, the total stays the same: `prefix[i] = prefix[i-1]`.
5. Traverse through `queries` to answer each `queries[i]`:
    * Let `start = queries[i][0]`.
    * Let `end = queries[i][1]`.
    * Fill in `ans[i]` with `prefix[end] - prefix[start] == 0`, evaluating if there are no violating indices in the subarray.
6. Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/i9Wih4uH/shared" frameBorder="0" width="100%" height="500" name="i9Wih4uH"></iframe>

#### Complexity Analysis

Let $M$ be the size of `nums` and $N$ be the size of `queries`.

* Time Complexity: $O(M + N)$

    Our initial traversal of `nums` to initialize `prefix` takes $O(M)$ time. Then, answering each query will took constant time. For all $N$ queries, that will take a total of $O(N)$ time. Thus, the total time complexity is $O(M + N)$.

* Space Complexity: $O(M)$

    We maintain a prefix sum array for `nums`, which will take $O(M)$ space.

---

### Approach 3: Sliding Window

#### Intuition

To make the process more fluent, we need a way to precompute information that can help us answer each query in constant time. The key idea is that for any index `start`, the farthest index we can reach while maintaining alternating parity is independent of the queries themselves. Thus, we can calculate this information beforehand.

We define an array `maxReach`, where `maxReach[start]` represents the farthest index that can be reached from `start` while adhering to the parity condition. To compute this, we iterate through the array and use a pointer `end` to expand the range as far as possible. Starting with `end = start`, we increment `end` as long as the parity of adjacent elements (`nums[end]` and `nums[end + 1]`) differs. Once this process is complete for a given `start`, we know that any range `[start, end']` with `end' <= maxReach[start]` satisfies the parity condition.

With this precomputed information, answering queries becomes straightforward. For each query `[start, end]`, we simply check whether `end` is within the range of `maxReach[start]`. If it is, the subarray satisfies the condition; otherwise, it does not.

#### Algorithm

- Initialize `n` as the size of the array `nums` and create a array `maxReach` of size `n` to store the maximum reachable index for each starting index.

- Initialize the last element of `maxReach`:
  - Set `maxReach[n-1]` to `n-1` because the last index can only reach itself.

- Iterate over the array `nums` from the second-to-last index to the first:
  - If the parity (odd/even) of `nums[i]` is different from `nums[i+1]`:
    - Set `maxReach[i]` to `maxReach[i+1]` to extend the reachable range.
  - Otherwise:
    - Set `maxReach[i]` to `i`, as it can only reach itself.

- Create a array `ans` of size equal to the number of queries to store the results.

- For each query in `queries`:
  - Extract `start` and `end` from the query.
  - Check if the range `[start, end]` lies within the maximum reachable range stored in `maxReach[start]`.
  - Store `true` if `end <= maxReach[start]`, otherwise store `false`.

- Return the array `ans`, which contains the results for all queries.

#### Implementation

<iframe src="https://leetcode.com/playground/5FwEX5pA/shared" frameBorder="0" width="100%" height="500" name="5FwEX5pA"></iframe>

#### Complexity Analysis

Let $M$ be the size of `nums` and $N$ be the size of `queries`.

* Time Complexity: $O(M + N)$

    First, we go through the `nums` array to create the `maxReach` array. This process takes $O(M)$ time.

    Next, for each query, we can quickly find the answer using the `maxReach` array. Since each query is answered in constant time, answering all $N$ queries will take $O(N)$ time.

    Combining these two steps, the total time complexity is $O(M + N)$.

* Space Complexity: $O(M)$

    We use an array called `maxReach` to store the maximum reach for each position in the `nums` array. This array takes up $O(M)$ space.

    The `ans` array, which stores the results for each query, is not included in the space complexity calculation because it is considered part of the output. Therefore, the overall space complexity is $O(M)$.

---