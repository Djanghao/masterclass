# [1434. Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 950 | 11 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `roblox`, `mindtickle`

## Description

There are `n` people and `40` types of hats labeled from `1` to `40`.

Given a 2D integer array `hats`, where `hats[i]` is a list of all hats preferred by the `i^th` person.

Return the number of ways that `n` people can wear **different** hats from each other.

Since the answer may be too large, return it modulo `10^9 + 7`.

 

**Example 1:**

```

Input: hats = [[3,4],[4,5],[5]]
Output: 1
Explanation: There is only one way to choose hats given the conditions. 
First person choose hat 3, Second person choose hat 4 and last one hat 5.

```

**Example 2:**

```

Input: hats = [[3,5,1],[3,5]]
Output: 4
Explanation: There are 4 ways to choose hats:
(3,5), (5,3), (1,3) and (1,5)

```

**Example 3:**

```

Input: hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
Output: 24
Explanation: Each person can choose hats labeled from 1 to 4.
Number of Permutations of (1,2,3,4) = 24.

```

 

**Constraints:**

	- `n == hats.length`

	- `1 <= n <= 10`

	- `1 <= hats[i].length <= 40`

	- `1 <= hats[i][j] <= 40`

	- `hats[i]` contains a list of **unique** integers.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/) | [Solutions](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
