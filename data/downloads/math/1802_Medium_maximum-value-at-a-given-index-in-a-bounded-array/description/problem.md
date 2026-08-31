# [1802. Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2697 | 476 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`binary-search`](https://leetcode.com/tag/binary-search), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `tiktok`, `ibm`, `microsoft`

## Description

You are given three positive integers: `n`, `index`, and `maxSum`. You want to construct an array `nums` (**0-indexed**)** **that satisfies the following conditions:

	- `nums.length == n`

	- `nums[i]` is a **positive** integer where `0 = 0`, and `-x` otherwise.

 

**Example 1:**

```

Input: n = 4, index = 2,  maxSum = 6
Output: 2
Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].

```

**Example 2:**

```

Input: n = 6, index = 1,  maxSum = 10
Output: 3

```

 

**Constraints:**

	- `1 <= n <= maxSum <= 10^9`

	- `0 <= index < n`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) | [Solutions](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)
