# [1090. Largest Values From Labels](https://leetcode.com/problems/largest-values-from-labels/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 493 | 637 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`

## Description

You are given `n` item's value and label as two integer arrays `values` and `labels`. You are also given two integers `numWanted` and `useLimit`.

Your task is to find a subset of items with the **maximum sum** of their values such that:

	- The number of items is **at most** `numWanted`.

	- The number of items with the same label is **at most** `useLimit`.

Return the maximum sum.

 

**Example 1:**

**Input:** values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1

**Output:** 9

**Explanation:**

The subset chosen is the first, third, and fifth items with the sum of values 5 + 3 + 1.

**Example 2:**

**Input:** values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2

**Output:** 12

**Explanation:**

The subset chosen is the first, second, and third items with the sum of values 5 + 4 + 3.

**Example 3:**

**Input:** values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1

**Output:** 16

**Explanation:**

The subset chosen is the first and fourth items with the sum of values 9 + 7.

 

**Constraints:**

	- `n == values.length == labels.length`

	- `1 <= n <= 2 * 10^4`

	- `0 <= values[i], labels[i] <= 2 * 10^4`

	- `1 <= numWanted, useLimit <= n`

---

**Links:** [Submissions](https://leetcode.com/problems/largest-values-from-labels/) | [Solutions](https://leetcode.com/problems/largest-values-from-labels/)
