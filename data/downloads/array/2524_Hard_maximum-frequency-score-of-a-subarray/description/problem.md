# [2524. Maximum Frequency Score of a Subarray](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 25 | 7 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`stack`](https://leetcode.com/tag/stack), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `paypal`

## Description

You are given an integer array `nums` and a **positive** integer `k`.

The **frequency score** of an array is the sum of the **distinct** values in the array raised to the power of their **frequencies**, taking the sum **modulo** `10^9 + 7`.

	- For example, the frequency score of the array `[5,4,5,7,4,4]` is `(4^3 + 5^2 + 7^1) modulo (10^9 + 7) = 96`.

Return *the **maximum** frequency score of a **subarray** of size *`k`* in *`nums`. You should maximize the value under the modulo and not the actual value.

A **subarray** is a contiguous part of an array.

 

**Example 1:**

```

Input: nums = [1,1,1,2,1,2], k = 3
Output: 5
Explanation: The subarray [2,1,2] has a frequency score equal to 5. It can be shown that it is the maximum frequency score we can have.

```

**Example 2:**

```

Input: nums = [1,1,1,1,1,1], k = 4
Output: 1
Explanation: All the subarrays of length 4 have a frequency score equal to 1.

```

 

**Constraints:**

	- `1 <= k <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/) | [Solutions](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/)
