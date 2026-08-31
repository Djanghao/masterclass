# [3301. Maximize the Total Height of Unique Towers](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 127 | 8 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)


## Description

You are given an array `maximumHeight`, where `maximumHeight[i]` denotes the **maximum** height the `i^th` tower can be assigned.

Your task is to assign a height to each tower so that:

	- The height of the `i^th` tower is a positive integer and does not exceed `maximumHeight[i]`.

	- No two towers have the same height.

Return the **maximum** possible total sum of the tower heights. If it's not possible to assign heights, return `-1`.

 

**Example 1:**

**Input:** maximumHeight = [2,3,4,3]

**Output:** 10

**Explanation:**

We can assign heights in the following way: `[1, 2, 4, 3]`.

**Example 2:**

**Input:** maximumHeight = [15,10]

**Output:** 25

**Explanation:**

We can assign heights in the following way: `[15, 10]`.

**Example 3:**

**Input:** maximumHeight = [2,2,1]

**Output:** -1

**Explanation:**

It's impossible to assign positive heights to each index so that no two towers have the same height.

 

**Constraints:**

	- `1 <= maximumHeight.length <= 10^5`

	- `1 <= maximumHeight[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/) | [Solutions](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/)
