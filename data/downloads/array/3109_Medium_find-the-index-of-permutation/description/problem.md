# [3109. Find the Index of Permutation](https://leetcode.com/problems/find-the-index-of-permutation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 16 | 5 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`merge-sort`](https://leetcode.com/tag/merge-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)


## Description

Given an array `perm` of length `n` which is a permutation of `[1, 2, ..., n]`, return the index of `perm` in the lexicographically sorted array of all of the permutations of `[1, 2, ..., n]`.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

**Input:** perm = [1,2]

**Output:** 0

**Explanation:**

There are only two permutations in the following order:

`[1,2]`, `[2,1]`

And `[1,2]` is at index 0.

**Example 2:**

**Input:** perm = [3,1,2]

**Output:** 4

**Explanation:**

There are only six permutations in the following order:

`[1,2,3]`, `[1,3,2]`, `[2,1,3]`, `[2,3,1]`, `[3,1,2]`, `[3,2,1]`

And `[3,1,2]` is at index 4.

 

**Constraints:**

	- `1 <= n == perm.length <= 10^5`

	- `perm` is a permutation of `[1, 2, ..., n]`.

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-index-of-permutation/) | [Solutions](https://leetcode.com/problems/find-the-index-of-permutation/)
