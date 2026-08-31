# Official Solution

**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solution/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we are given an array of integers `nums` and the task is to find the number of zero-filled subarrays.

A zero-filled subarray only contains `0`, as shown in the picture below.

![img](../Figures/2348/2348-1.png)

---

### Approach: Count the number of consecutive 0's.

#### Intuition   

Since every subarray ends with a number in the array, let's check that for each number `num`, how many subarrays end with it? 

![img](../Figures/2348/2348-2.png)

If `num != 0`, there will not be any subarray ends with it. Otherwise, it depends on how many zero-filled subarrays end with the **previous** number. Suppose there are `k` subarrays end with the previous number, we can append `num` to them to make `k` longer subarrays that end with this number! Plus `num` itself is a zero-filled subarray, we have `k + 1` zero-filled subarrays end with `num`. Note that the first number doesn't have a previous number, which equals `k = 0`.

Therefore, we can iterate over `nums` and update two variables, `ans` for the total number of zero-filled subarrays, and `subArray` for the number of zero-filled subarrays end with the current number `num`. As shown in the picture below.

![img](../Figures/2348/2348-2_4.png)


<br>

#### Algorithm

1) Initialize `ans = 0`, `numSubarray = 0`.
2) Iterate over `nums`, for each number `num`:
    - If `num = 0`, increment `numSubarray` by 1.
    - Otherwise, set `numSubarray = 0`.

    Then increment `ans` by `numSubarray`.
3) Return `ans` at the end of the iteration.

#### Implementation

<iframe src="https://leetcode.com/playground/MQ8ZyhQc/shared" frameBorder="0" width="100%" height="361" name="MQ8ZyhQc"></iframe>


#### Complexity Analysis

Let $$n$$ be the length of the input array `nums`.

* Time complexity: $$O(n)$$

    - We need to iterate over `nums`. 
    - At each step, we update two variables `num_subarray` and `ans`, which take constant time.
    - The overall time complexity is $$O(n)$$.

* Space complexity: $$O(1)$$

    - We only need record two variables `num_subarray` and `ans`, which require constant space.

<br/>