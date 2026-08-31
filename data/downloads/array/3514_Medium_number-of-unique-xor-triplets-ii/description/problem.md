# [3514. Number of Unique XOR Triplets II](https://leetcode.com/problems/number-of-unique-xor-triplets-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 43 | 9 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`enumeration`](https://leetcode.com/tag/enumeration)


## Description

You are given an integer array `nums`.

A **XOR triplet** is defined as the XOR of three elements `nums[i] XOR nums[j] XOR nums[k]` where `i `(0, 0, 0) &rarr; 1 XOR 1 XOR 1 = 1`
	`(0, 0, 1) &rarr; 1 XOR 1 XOR 3 = 3`
	`(0, 1, 1) &rarr; 1 XOR 3 XOR 3 = 1`
	`(1, 1, 1) &rarr; 3 XOR 3 XOR 3 = 3`

The unique XOR values are {1, 3}. Thus, the output is 2.

**Example 2:**

**Input:** nums = [6,7,8,9]

**Output:** 4

**Explanation:**

The possible XOR triplet values are {6, 7, 8, 9}. Thus, the output is 4.

 

**Constraints:**

	- `1 <= nums.length <= 1500`

	- `1 <= nums[i] <= 1500`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-unique-xor-triplets-ii/) | [Solutions](https://leetcode.com/problems/number-of-unique-xor-triplets-ii/)
