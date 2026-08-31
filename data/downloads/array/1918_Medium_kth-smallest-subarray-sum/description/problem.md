# [1918. Kth Smallest Subarray Sum](https://leetcode.com/problems/kth-smallest-subarray-sum/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 222 | 14 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `google`

## Description

Given an integer array `nums` of length `n` and an integer `k`, return *the *`k^th` ***smallest subarray sum**.*

A **subarray** is defined as a **non-empty** contiguous sequence of elements in an array. A **subarray sum** is the sum of all elements in the subarray.

 

**Example 1:**

```

Input: nums = [2,1,3], k = 4
Output: 3
Explanation: The subarrays of [2,1,3] are:
- [2] with sum 2
- [1] with sum 1
- [3] with sum 3
- [2,1] with sum 3
- [1,3] with sum 4
- [2,1,3] with sum 6 
Ordering the sums from smallest to largest gives 1, 2, 3, 3, 4, 6. The 4th smallest is 3.

```

**Example 2:**

```

Input: nums = [3,3,5,5], k = 7
Output: 10
Explanation: The subarrays of [3,3,5,5] are:
- [3] with sum 3
- [3] with sum 3
- [5] with sum 5
- [5] with sum 5
- [3,3] with sum 6
- [3,5] with sum 8
- [5,5] with sum 10
- [3,3,5], with sum 11
- [3,5,5] with sum 13
- [3,3,5,5] with sum 16
Ordering the sums from smallest to largest gives 3, 3, 5, 5, 6, 8, 10, 11, 13, 16. The 7th smallest is 10.

```

 

**Constraints:**

	- `n == nums.length`

	- `1 <= n <= 2 * 10^4`

	- `1 <= nums[i] <= 5 * 10^4`

	- `1 <= k <= n * (n + 1) / 2`

---

**Links:** [Submissions](https://leetcode.com/problems/kth-smallest-subarray-sum/) | [Solutions](https://leetcode.com/problems/kth-smallest-subarray-sum/)
