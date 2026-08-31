# [3209. Number of Subarrays With AND Value of K](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 167 | 7 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`segment-tree`](https://leetcode.com/tag/segment-tree)

**Companies:** `de-shaw`

## Description

Given an array of integers `nums` and an integer `k`, return the number of subarrays of `nums` where the bitwise `AND` of the elements of the subarray equals `k`.

 

**Example 1:**

**Input:** nums = [1,1,1], k = 1

**Output:** 6

**Explanation:**

All subarrays contain only 1's.

**Example 2:**

**Input:** nums = [1,1,2], k = 1

**Output:** 3

**Explanation:**

Subarrays having an `AND` value of 1 are: `[1,1,2]`, `[1,1,2]`, `[1,1,2]`.

**Example 3:**

**Input:** nums = [1,2,3], k = 2

**Output:** 2

**Explanation:**

Subarrays having an `AND` value of 2 are: `[1,2,3]`, `[1,2,3]`.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `0 <= nums[i], k <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/) | [Solutions](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/)
