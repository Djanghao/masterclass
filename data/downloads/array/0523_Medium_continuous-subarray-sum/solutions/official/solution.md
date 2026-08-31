# Official Solution

**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solution/](https://leetcode.com/problems/continuous-subarray-sum/solution/)

---

[TOC]

## Solution

---

### Overview

The problem asks us to determine if there exists a subarray in the given integer array `nums` where the sum of its elements is divisible by an integer `k`. 

**Key Observations:**
1. The length of the subarray should be at least two.
2. The constraints indicate that the problem must be solved in linear or log-linear time complexity, in terms of the size of the given array.

---

### Approach 1: Prefix Sum and Hashing

#### Intuition

One brute force approach for this problem can be to find out the sum of all subarrays of the array and check if there exists a subarray with a sum divisible by `k`. Since the number of subarrays in an array of size `n` is `n * (n - 1) / 2`, the time complexity to calculate all possible subarrays is $O(n^2)$, and calculating the sum for each subarray takes $O(n)$. Therefore, the total time complexity is $O(n^3)$, which will give a Time Limit Exceeded judgment.

Recall that prefix sums are particularly useful to calculate the sum of subarrays. The sum of the subarray starting at the index `i + 1` and ending at `j` (inclusive) is computed by $prefix_j - prefix_i$ where $prefix_i$ denotes the prefix sum up to index `i`. We can find out if there exists a subarray with a sum divisible by `k`, as shown below:

![prefix sum formula](../Figures/523/Slide1.png)

Since we are only concerned with the modulo of the prefix sum, we start with an integer `prefixMod` to store the remainder of the `prefixSum` with `k` progressively. We can find the longest subarray that satisfies the above conditions by calculating the difference between the current index and the first index with the value `prefixMod`. This is explained with an example shown below:

![prefix sum formula2](../Figures/523/Slide2.png)

A hashmap provides constant lookup and insertion time for the values in the list. Therefore, we initialize a hashmap `modSeen` with `prefixMod` as the key and the first index of each value of `prefixMod` as the value.

We iterate over all the elements from the beginning of `nums`. We set `prefixMod = (prefixMod + nums[i]) % k` for each element to find the remainder of the prefix sum when divided by `k`. 

If the key `prefixMod` exists in the hashmap and the size of the subarray is at least 1, then we can return `true` as the output. If the key does not exist, we can store the current index in the hashmap with `prefixMod` as the key.

#### Algorithm

1. Initialize an integer `prefixMod = 0` and a hashmap `modSeen`. Initialize `modSeen[0]` with -1 to account for the initial value of prefixMod.
2. Iterate over all the elements of `nums`:
   - Compute the `prefixMod` as `prefixMod = (prefixMod + nums[i]) % k`.
   - If `prefixMod` exists in the hashmap:
     - If the size of the longest subarray with modulo `k` is at least 2.
       - Return `true`.  
   - If `prefixMod` doesn't exist in the hashmap:
     - Set `modSeen[prefixMod] = i`. 
3. Return `false`.

!?!../Documents/523/slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/8p3J3RiG/shared" frameBorder="0" width="100%" height="500" name="8p3J3RiG"></iframe>

#### Complexity Analysis

Let $n$ be the number of elements in `nums`.

- Time complexity: $O(n)$

 We iterate through the array exactly once. In each iteration, we perform a search operation in the hashmap that takes $O(1)$ time. Therefore, the time complexity can be stated as $O(n)$.

- Space complexity: $O(n)$

 In each iteration, we insert a key-value pair in the hashmap. The space complexity is $O(n)$ because the size of the hashmap is proportional to the size of the list after $n$ iterations.

---