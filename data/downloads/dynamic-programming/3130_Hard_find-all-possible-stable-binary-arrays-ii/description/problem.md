# [3130. Find All Possible Stable Binary Arrays II](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 69 | 13 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)


## Description

You are given 3 positive integers `zero`, `one`, and `limit`.

A binary array `arr` is called **stable** if:

	- The number of occurrences of 0 in `arr` is **exactly **`zero`.

	- The number of occurrences of 1 in `arr` is **exactly** `one`.

	- Each subarray of `arr` with a size greater than `limit` must contain **both **0 and 1.

Return the *total* number of **stable** binary arrays.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

**Input:** zero = 1, one = 1, limit = 2

**Output:** 2

**Explanation:**

The two possible stable binary arrays are `[1,0]` and `[0,1]`.

**Example 2:**

**Input:** zero = 1, one = 2, limit = 1

**Output:** 1

**Explanation:**

The only possible stable binary array is `[1,0,1]`.

**Example 3:**

**Input:** zero = 3, one = 3, limit = 2

**Output:** 14

**Explanation:**

All the possible stable binary arrays are `[0,0,1,0,1,1]`, `[0,0,1,1,0,1]`, `[0,1,0,0,1,1]`, `[0,1,0,1,0,1]`, `[0,1,0,1,1,0]`, `[0,1,1,0,0,1]`, `[0,1,1,0,1,0]`, `[1,0,0,1,0,1]`, `[1,0,0,1,1,0]`, `[1,0,1,0,0,1]`, `[1,0,1,0,1,0]`, `[1,0,1,1,0,0]`, `[1,1,0,0,1,0]`, and `[1,1,0,1,0,0]`.

 

**Constraints:**

	- `1 <= zero, one, limit <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/) | [Solutions](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/)
