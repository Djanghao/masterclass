# [1714. Sum Of Special Evenly-Spaced Elements In Array](https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 34 | 27 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `makemytrip`, `sprinklr`

## Description

You are given a **0-indexed** integer array `nums` consisting of `n` non-negative integers.

You are also given an array `queries`, where `queries[i] = [x_i, y_i]`. The answer to the `i^th` query is the sum of all `nums[j]` where `x_i modulo *`10^9 + 7`.

 

**Example 1:**

```

Input: nums = [0,1,2,3,4,5,6,7], queries = [[0,3],[5,1],[4,2]]
Output: [9,18,10]
Explanation: The answers of the queries are as follows:
1) The j indices that satisfy this query are 0, 3, and 6. nums[0] + nums[3] + nums[6] = 9
2) The j indices that satisfy this query are 5, 6, and 7. nums[5] + nums[6] + nums[7] = 18
3) The j indices that satisfy this query are 4 and 6. nums[4] + nums[6] = 10

```

**Example 2:**

```

Input: nums = [100,200,101,201,102,202,103,203], queries = [[0,7]]
Output: [303]

```

 

**Constraints:**

	- `n == nums.length`

	- `1 <= n <= 5 * 10^4`

	- `0 <= nums[i] <= 10^9`

	- `1 <= queries.length <= 1.5 * 10^5`

	- `0 <= x_i < n`

	- `1 <= y_i <= 5 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/) | [Solutions](https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/)
