# [3632. Subarrays with XOR at Least K](https://leetcode.com/problems/subarrays-with-xor-at-least-k/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 4 | 1 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`trie`](https://leetcode.com/tag/trie), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)


## Description

Given an array of positive integers nums of length n and a non‑negative integer k.

Return the number of **contiguous subarrays** whose bitwise XOR of all elements is **greater** than or **equal** to k.

 

**Example 1:**

**Input:** nums = [3,1,2,3], k = 2

**Output:** 6

**Explanation:**

The valid subarrays with `XOR >= 2` are `[3]` at index 0, `[3, 1]` at indices 0 - 1, `[3, 1, 2, 3]` at indices 0 - 3, `[1, 2]` at indices 1 - 2, `[2]` at index 2, and `[3]` at index 3; there are 6 in total.

**Example 2:**

**Input:** nums = [0,0,0], k = 0

**Output:** 6

**Explanation:**

Every contiguous subarray yields `XOR = 0`, which meets `k = 0`. There are 6 such subarrays in total.

 

**Constraints:**

	1 5
	0 9
	0 9

---

**Links:** [Submissions](https://leetcode.com/problems/subarrays-with-xor-at-least-k/) | [Solutions](https://leetcode.com/problems/subarrays-with-xor-at-least-k/)
