# [3470. Permutations IV](https://leetcode.com/problems/permutations-iv/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 28 | 3 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`combinatorics`](https://leetcode.com/tag/combinatorics), [`enumeration`](https://leetcode.com/tag/enumeration)


## Description

Given two integers, `n` and `k`, an **alternating permutation** is a permutation of the first `n` positive integers such that no **two** adjacent elements are both odd or both even.

Return the **k-th** **alternating permutation** sorted in *lexicographical order*. If there are fewer than `k` valid **alternating permutations**, return an empty list.

 

**Example 1:**

**Input:** n = 4, k = 6

**Output:** [3,4,1,2]

**Explanation:**

The lexicographically-sorted alternating permutations of `[1, 2, 3, 4]` are:

	- `[1, 2, 3, 4]`

	- `[1, 4, 3, 2]`

	- `[2, 1, 4, 3]`

	- `[2, 3, 4, 1]`

	- `[3, 2, 1, 4]`

	- `[3, 4, 1, 2]` &larr; 6th permutation

	- `[4, 1, 2, 3]`

	- `[4, 3, 2, 1]`

Since `k = 6`, we return `[3, 4, 1, 2]`.

**Example 2:**

**Input:** n = 3, k = 2

**Output:** [3,2,1]

**Explanation:**

The lexicographically-sorted alternating permutations of `[1, 2, 3]` are:

	- `[1, 2, 3]`

	- `[3, 2, 1]` &larr; 2nd permutation

Since `k = 2`, we return `[3, 2, 1]`.

**Example 3:**

**Input:** n = 2, k = 3

**Output:** []

**Explanation:**

The lexicographically-sorted alternating permutations of `[1, 2]` are:

	- `[1, 2]`

	- `[2, 1]`

There are only 2 alternating permutations, but `k = 3`, which is out of range. Thus, we return an empty list `[]`.

 

**Constraints:**

	- `1 <= n <= 100`

	- `1 <= k <= 10^15`

---

**Links:** [Submissions](https://leetcode.com/problems/permutations-iv/) | [Solutions](https://leetcode.com/problems/permutations-iv/)
