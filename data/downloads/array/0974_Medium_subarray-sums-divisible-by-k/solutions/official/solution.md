# Official Solution

**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solution/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solution/)

---

[TOC]

## Solution

---

### Overview

The problem presents an integer array `nums` and an integer `k`. Our task is to find the number of non-empty subarrays that have a sum divisible by `k`.

---

### Approach: Prefix Sums and Counting

#### Intuition

The problem is based on the concept of using prefix sums to compute the total number of subarrays that are divisible by `k`. A prefix sum array for `nums` is another array `prefixSum` of the same size as `nums`, such that the value of `prefixSum[i]` is the sum of all elements of the `nums` array from index `0` to index `i`, i.e., `nums[0] + nums[1] + nums[2] + . . . + nums[i]`.

The sum of the subarray `i + 1` to `j` (inclusive) is computed by `prefixSum[j] - prefixSum[i]`. Using this, we can count the number of pairs that exist for every pair `(i, j)` where `i < j` and `(prefixSum[j] - prefix[i]) % k = 0`. There are `n * (n - 1) / 2` pairs for an array of length `n` (pick any two from `n`). As a result, while this will provide the correct answer for every test case, it will take $O(n^2)$ time, indicating that the time limit has been exceeded (TLE).

> The character `%` is the modulo operator.

Let's try to use the information with respect to the remainders of every prefix sum and try to optimize the above approach.

As stated previously, our task is to determine the number of pairs `(i, j)` where `i < j` and `(prefixSum[j] - prefix[i]) % k = 0`. This equality can only be true if `prefixSum[i] % k = prefixSum[j] % k`. We will demonstrate this property.

We can express any `number` as `number = divisor × quotient + remainder`. For example, `13` when divided by `3` can be written as `13 = 3 * 4 + 1`. So we can express:  
a) `prefixSum[i]` as `prefixSum[i] = A * k + R0` where `A` is the quotient and `R0` is the remainder when divided by `k`.  
b) Similarly, `prefixSum[j] = B * k + R1` where `B` is the quotient and `R1` is the remainder when divided by `k`.

We can write, `prefixSum[j] - prefixSum[i] = k * (B - A) + (R1 - R0)`. The first term (`k * (B - A)`) is divisible by `k`, so for the entire expression to be divisible by `k`, `R1 - R0` must also be divisible by `k`. This gives us an equation `R1 - R0 = C * k`, where C is some integer. Rearranging it yields `R1 = C * k + R0`. Because the values of `R0` and `R1` will be between `0` and `k - 1`, `R1` cannot be greater than `k`. So the only possible value for `C` is `0`, leading to `R0 = R1`, which proves the above property. If `C > 0`, then the RHS would be at least `k`, but as stated the LHS (`R1`) is between `0` and `k - 1`.

Here are two visual examples showing the calculations:

![img](../Figures/974/974-1.png)

![img](../Figures/974/974-2.png)

Let's say a subarray ranging from index `0` to index `j` has a remainder `R` when the sum of its elements (prefix sum) is divided by `k`. Our task now becomes to figure out how many subarrays `0..i` exist with `i < j` having the same remainder `R` when their prefix sum is divided by `k`. So, we need to maintain the count of remainders while moving in the array.

We start with an integer `prefixMod = 0` to store the remainder when the sum of the elements of a subarray that start from index `0` is divided by `k`. We do not need the prefix sum array, since we only need to maintain the count of each remainder (`0` to `k - 1`) so far. To maintain the count of the remainders, we initialize an array `modGroups[k]`, where `modGroups[R]` stores the number of times R was the remainder so far.

We iterate over all the elements starting from index `0`. We set `prefixMod = (prefixMod + num[i] % k + k) % k` for each element at index `i` to find the remainder of the sum of the subarray ranging from index `0` to index `i` when divided by `k`. The `+ k` is needed to handle negative numbers. We can then add the number of subarrays previously seen having the same remainder `prefixMod` to cancel out the remainder. The total number of these arrays is in `modGroups[prefixMod]`. In the end, we increment the count of `modGroups[R]` by one to include the current subarray with the remainder `R` for future matches.

Till now, we chose some previous subarrays (if they exist) to delete the remainder from the existing array formed till index `i` when the sum of its elements is divided by `k`. What if the sum of the elements of the array till index `i` is divisible by `k` and we don't need another subarray to delete the remainder?

To count the complete subarray from index `0` to index `i`, we also initialize `modGroups[0] = 1` at the start so that if a complete subarray from index `0` to the current index is divisible by `k`, we include the complete array in the count of `modGroups[0]`. It is set to start with `1` to cover the complete subarray case. For example, let's assume we are index `i`. Say, we have previously encountered three subarrays from index `0` to some index `j` where `j < i` that were divisible by 'k'. Now, assume the sum of elements in the array up to index `i` is also divisible by `k`. So, we will have `4` options to form a subarray ending at index `i` that is divisible by `k`. Three of these come from choosing the subarrays (resulting in subarray `j + 1, .., i` that is divisble by `k`) that were divisble by `k` and one comes from choosing the complete subarray starting from index `0` till index `i`.

#### Algorithm

1. Initialize an integer `prefixMod = 0` to store the remainder when the sum of the elements of a array till the current index when divided by `k`, and the answer variable `result = 0` to store the number of subarrays divisible by `k`.
2. Initialize an array, `modGroups[k]` where `modGroup[R]` stores the number of subarrays encountered with the sum of elements having a remainder `R` when divided by `k`. Set `modGroups[0] = 1`.
3. Iterate over all the elements of `num`.
    - For each index `i`, compute the prefix modulo as `prefixMod = (prefixMod + num[i] % k + k) % k`. We take modulo twice in `(prefixMod + num[i] % k + k) % k` to remove negative numbers since `num[i]` can be a negative number and the sum `prefixMod + nums[i] % k` can turn out to be negative. To remove the negative number we add `k` to make it positive and then takes its modulo again with `k`.
    - Add the number of subarrays encountered till now that have the same remainder to the result: `result = result + modGroups[prefixMod]`.
    - In the end, we include the remainder of the subarray in the modGroups, i.e., `modGroups[prefixMod] = modGroups[prefixMod] + 1` for future matches.
4. Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/mkGnoJE9/shared" frameBorder="0" width="100%" height="429" name="mkGnoJE9"></iframe>

#### Complexity Analysis

Here, $n$ is the length of `nums` and $k$ is the given integer.

* Time complexity: $O(n + k)$

    - We require $O(k)$ time to initialize the `modGroups` array.
    - We also require $O(n)$ time to iterate over all the elements of the `nums` array. The computation of the `prefixSum` and the calculation of the subarrays divisible by `k` take $O(1)$ time for each index of the array.

* Space complexity: $O(k)$

    - We require $O(k)$ space for the `modGroups` array.