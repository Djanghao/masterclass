# [3539. Find Sum of Array Product of Magical Sequences](https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 214 | 154 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`combinatorics`](https://leetcode.com/tag/combinatorics), [`bitmask`](https://leetcode.com/tag/bitmask)


## Description

You are given two integers, `m` and `k`, and an integer array `nums`.

A sequence of integers `seq` is called **magical** if:

	- `seq` has a size of `m`.

	- `0 13.

**Example 2:**

**Input:** m = 2, k = 2, nums = [5,4,3,2,1]

**Output:** 170

**Explanation:**

The magical sequences are `[0, 1]`, `[0, 2]`, `[0, 3]`, `[0, 4]`, `[1, 0]`, `[1, 2]`, `[1, 3]`, `[1, 4]`, `[2, 0]`, `[2, 1]`, `[2, 3]`, `[2, 4]`, `[3, 0]`, `[3, 1]`, `[3, 2]`, `[3, 4]`, `[4, 0]`, `[4, 1]`, `[4, 2]`, and `[4, 3]`.

**Example 3:**

**Input:** m = 1, k = 1, nums = [28]

**Output:** 28

**Explanation:**

The only magical sequence is `[0]`.

 

**Constraints:**

	- `1 <= k <= m <= 30`

	- `1 <= nums.length <= 50`

	- `1 <= nums[i] <= 10^8`

---

**Links:** [Submissions](https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/) | [Solutions](https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/)
