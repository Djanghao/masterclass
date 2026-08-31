# [3755. Find Maximum Balanced XOR Subarray Length](https://leetcode.com/problems/find-maximum-balanced-xor-subarray-length/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 91 | 4 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)


## Description

Given an integer array `nums`, return the **length** of the **longest subarray** that has a bitwise XOR of zero and contains an **equal** number of **even** and **odd** numbers. If no such subarray exists, return 0.

 

**Example 1:**

**Input:** nums = [3,1,3,2,0]

**Output:** 4

**Explanation:**

The subarray `[1, 3, 2, 0]` has bitwise XOR `1 XOR 3 XOR 2 XOR 0 = 0` and contains 2 even and 2 odd numbers.

**Example 2:**

**Input:** nums = [3,2,8,5,4,14,9,15]

**Output:** 8

**Explanation:**

The whole array has bitwise XOR `0` and contains 4 even and 4 odd numbers.

**Example 3:**

**Input:** nums = [0]

**Output:** 0

**Explanation:**

No non-empty subarray satisfies both conditions.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `0 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/find-maximum-balanced-xor-subarray-length/) | [Solutions](https://leetcode.com/problems/find-maximum-balanced-xor-subarray-length/)
