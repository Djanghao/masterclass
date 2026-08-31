# Official Solution

**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solution/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solution/)

---

[TOC]

## Solution

--- 

### Overview

As shown in the diagram below, for the given `nums`, we have two different partitioning methods that satisfy one of the three conditions required by the problem.

![img](../Figures/2369/1.png)


This raises the question; when there are multiple options, which one should we choose? Each decision will affect future decisions. When we have a problem with this characteristic, we should consider using dynamic programming.

---

### Approach 1: Top-Down Dynamic Programming


#### Intuition   

> If you are not familiar with dynamic programming, please refer to our explore cards [Dynamic Programming Explore Card](https://leetcode.com/explore/featured/card/dynamic-programming/). We will focus on the usage in this article and not the underlying principles or implementation details.

The recursive dynamic programming approach can be used to solve this problem. Here, the idea is to create a recursive function `prefixIsValid(i)` which checks whether a valid partition exists for the prefix subarray `nums[0 ~ i]`. Therefore, for `nums` of length `n`, `prefixIsValid(n - 1)` represents whether there is a valid partition for the whole array.


![img](../Figures/2369/r1.png)


To determine `prefixIsValid(i)` at every index `i`, we have three possibilities plus one base case to check: 

- base case: If `i < 0`, then `prefixIsValid(i)` is true, since it denotes an empty subarray that always has a valid partition.

![img](../Figures/2369/r1p.png)



1. The last two elements `nums[i]` and `nums[i - 1]` form a subarray of two equal elements. In this case, if `prefixIsValid(i - 2)` is true, it indicates that `prefixIsValid(i)` is also true. Since the valid partition for `nums[0 ~ i - 2]` can be appended by the subarray `[nums[i - 1], nums[i]]` to form a valid partition for `nums[0 ~ i]`.


![img](../Figures/2369/r4.png)

2. The last three elements `nums[i]`, `nums[i - 1]`, and `nums[i - 2]` form a subarray of three equal elements. In this case, if `prefixIsValid(i - 3)` is true, it indicates that `prefixIsValid(i)` is also true. Since the valid partition for `nums[0 ~ i - 3]` can be appended by the subarray `[nums[i - 2], nums[i - 1], nums[i]]` to form a valid partition for `nums[0 ~ i]`.

![img](../Figures/2369/r3.png)

3. The last three elements `nums[i]`, `nums[i - 1]`, and `nums[i - 2]` form a subarray of three consecutive increasing elements. In this case, if `prefixIsValid(i - 3)` is true, it indicates that `prefixIsValid(i)` is also true. Since the valid partition for `nums[0 ~ i - 3]` can be appended by the subarray `[nums[i - 2], nums[i - 1], nums[i]]` to form a valid partition for `nums[0 ~ i]`.


![img](../Figures/2369/r2.png)



In summary, if any of the following conditions is true, we can conclude that `prefixIsValid(i)` is true:


![img](../Figures/2369/r5.png)


> To optimize the time complexity, we can make use of memoization (caching previously calculated results) to avoid recomputing the same values multiple times. For instance, if we already know that a valid partition exists starting from the index `i`, we can save it in a hash map `memo` as `memo[i] = true`, therefore, we don't need to check it again the next time we encounter the same index.


<br>

#### Algorithm

1) Initialize a hash map `memo`, and set `memo[-1] = true` since an empty array always has a valid partition.

2) Define a function `prefixIsValid(i)` as whether the prefix subarray `nums[0 ~ i]` has a valid partition.
    - If `i` is stored in `memo`, return `memo[i]`.
    - Otherwise, set `ans = false`.
    - If `i > 0` and `nums[i] = nums[i - 1]`, we update `ans` as `ans |= prefixIsValid(i - 2)`.
    - If `i > 1` and `nums[i] = nums[i - 1] = nums[i - 2]`, update `ans |= prefixIsValid(i - 3)`.
    - If `i > 1` and `nums[i] = nums[i - 1] + 1 = nums[i - 2] + 2`, update `ans |= prefixIsValid(i - 3)`.
    - Set `memo[i] = ans` and return `ans`.

3) Return `prefixIsValid(n - 1)`.



#### Implementation

<iframe src="https://leetcode.com/playground/DveKJxFX/shared" frameBorder="0" width="100%" height="500" name="DveKJxFX"></iframe>


#### Complexity Analysis

Let $n$ be the size of `nums`

* Time complexity: $O(n)$

    - `prefixIsValid(i)` recursively calls itself to determine the existence of a valid partition for the current subarray `nums[0 ~ i]`. Due to memoization, we only calculate each value of `i` once. There are $O(n)$ states and calculating each one involves making no more than 3 calls, which is $O(1)$ per call.



* Space complexity: $O(n)$
    
    - The recursive solution uses the call stack to keep track of the current function being processed. The maximum depth of the call stack equals $n/2$ as the index is decremented by at least $2$ at each call, resulting in a space complexity of $O(n)$.
    - The hash map `memo` stores at most `n` pairs, which also takes $O(n)$ space.

<br/>



---

### Approach 2: Bottom-Up Dynamic Programming 


#### Intuition   

The iterative dynamic programming (DP) approach involves tabulation, where we create a DP table to keep track of the validity of partitions for every index in the array. Instead of starting from the end and recursively breaking the problem into subproblems toward the beginning, this approach starts from the beginning of the array and moves toward the end. 

We will initialize an array `dp` of size `n + 1` with `false` (indicating no valid partition is found yet). Here, `dp[i]` represents if the prefix of length `i` can form a valid partition. Note that `dp[i] = prefixIsValid(i - 1)` from the previous approach. We set `dp[0] = true` since it represents a valid partition for an empty array.

Considering this base case `dp[0] = true`, for the same prefix array, `dp` and `nums` have different indices, specifically `dp_index = i + 1`. Hence, `dp[dp_index]` denotes whether there is a valid partition for the prefix array `nums[0 ~ i]`. We will iterate over `nums` and update `dp` as we go along.

![img](../Figures/2369/2.png)

We check the same three possibilities at each index `i` as in the recursive approach. If any of the conditions is true, it represents the existence of a valid partition, and we update `dp[dp_index]` as `true`.


![img](../Figures/2369/6.png)

In the end, we check the last index of `dp`. If `dp[n]` is true, it means we can form a valid partition of the whole array, we return `true`. Otherwise, we return `false`.


<br>

#### Algorithm

1) Create an array `dp` of length `n + 1`, initialized with all `false` values. Set `dp[0] = true`.


2) Iterate over `nums`, for each index `i`:
    - Get the corresponding index to `dp` as `dp_index = i + 1`.
    - If `i > 0` and `nums[i] = nums[i - 1]`, we update `dp[dp_index]` as `dp[dp_index] |= dp[dp_index - 2]`.
    - If `i > 1` and `nums[i] = nums[i - 1] = nums[i - 2]`, update `dp[dp_index] |= dp[dp_index - 3]`.
    - If `i > 1` and `nums[i] = nums[i - 1] + 1 = nums[i - 2] + 2`, update `dp[dp_index] |= dp[dp_index - 3]`.

3) Return `dp[n]` once the iteration is complete. 


#### Implementation

<iframe src="https://leetcode.com/playground/PnxikSdF/shared" frameBorder="0" width="100%" height="480" name="PnxikSdF"></iframe>


#### Complexity Analysis

Let $n$ be the size of `nums`.

* Time complexity: $O(n)$

    - We iterate over `nums` and fill `dp` which consists of $O(n)$ iterations. 

    - At each index `i`, we check 3 possibilities, which can be done in constant time.


* Space complexity: $O(n)$
    
    - `dp` has a length of `n + 1`.

<br/>

---

### Approach 3: Space Optimized Bottom-Up Dynamic Programming


#### Intuition   

In the previous approach, we build a table `dp` of size `n + 1`. Here we try to optimize the space requirement of this iterative approach. Note that we don't need to keep all elements in the original `dp`. Whether the current subarray has a valid partition only depends on the last three elements in `dp`, hence, it is safe to keep track of only the last three elements in `dp`.

![img](../Figures/2369/better.png)

How do we continuously update the stored values using an array of length 3? We use a method called the "rolling index", as shown in the picture below. Let's assume that `long_dp` is the long table we used in the previous approach, and `dp` is the short array of length `3` for this approach.

- The first three indices can be directly saved in `dp`.

- Upon reaching `dp_index = 3`, we obtain the value of `long_dp[dp_index]`. Recall that we only need the most recent three indices. Therefore, we can directly use `dp[0]` to store `long_dp[3]`. Although the original value `dp[0] = long_dp[0]` is overwritten, it does not affect the calculation because we no longer need that value in the following iterations.

- Upon reaching `dp_index = 4`, similarly, we use `dp[1]` to store `long_dp[4]`.

- Upon reaching `dp_index = 5`, we use `dp[2]` to store `long_dp[5]`.

![img](../Figures/2369/better2.png)

We can use the modulo operation on `dp_index` with `3` to map each element `long_dp[dp_index]` to `dp[dp_index % 3]`.


In the end, we check the last element `long_dp[n]`, which is `dp[n % 3]` in our case. If `dp[n % 3]` is true, it means we can form a valid partition of the whole array, we return `true`. Otherwise, we return `false`.

<br>

#### Algorithm

1) Create an array `dp` of length `3`, initialized with all `false` values. Set `dp[0] = true`.

2) Iterate over `nums`, for each index `i`:
    - Get the corresponding index to `dp` as `dp_index = i + 1`.
    - If `i > 0` and `nums[i] = nums[i - 1]`, we update `dp[dp_index % 3] |= dp[(dp_index - 2) % 3]`.
    - If `i > 1` and `nums[i] = nums[i - 1] = nums[i - 2]`, update `dp[dp_index % 3] |= dp[(dp_index - 3) % 3]`.
    - If `i > 1` and `nums[i] = nums[i - 1] + 1 = nums[i - 2] + 2`, update `dp[dp_index % 3] |= dp[(dp_index - 3) % 3]`.

3) Return `dp[n % 3]` once the iteration is complete. 


#### Implementation

<iframe src="https://leetcode.com/playground/mnecsydL/shared" frameBorder="0" width="100%" height="500" name="mnecsydL"></iframe>

#### Complexity Analysis

Let $n$ be the size of `nums`.

* Time complexity: $O(n)$

    - We iterate over `nums` and fill `dp`, requiring a total of $O(n)$ iterations. 

    - At each index `i`, we check 3 possibilities, which takes $O(1)$ time.


* Space complexity: $O(1)$
    
    - `dp` has a length of `3` and only takes constant space.


<br/>