# [1799. Maximize Score After N Operations](https://leetcode.com/problems/maximize-score-after-n-operations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1702 | 113 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`backtracking`](https://leetcode.com/tag/backtracking), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`number-theory`](https://leetcode.com/tag/number-theory), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `walmart-labs`, `sprinklr`

## Description

You are given `nums`, an array of positive integers of size `2 * n`. You must perform `n` operations on this array.

In the `i^th` operation **(1-indexed)**, you will:

	- Choose two elements, `x` and `y`.

	- Receive a score of `i * gcd(x, y)`.

	- Remove `x` and `y` from `nums`.

Return *the maximum score you can receive after performing *`n`* operations.*

The function `gcd(x, y)` is the greatest common divisor of `x` and `y`.

 

**Example 1:**

```

Input: nums = [1,2]
Output: 1
Explanation:&nbsp;The optimal choice of operations is:
(1 * gcd(1, 2)) = 1

```

**Example 2:**

```

Input: nums = [3,4,6,8]
Output: 11
Explanation:&nbsp;The optimal choice of operations is:
(1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11

```

**Example 3:**

```

Input: nums = [1,2,3,4,5,6]
Output: 14
Explanation:&nbsp;The optimal choice of operations is:
(1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14

```

 

**Constraints:**

	- `1 <= n <= 7`

	- `nums.length == 2 * n`

	- `1 <= nums[i] <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-score-after-n-operations/) | [Solutions](https://leetcode.com/problems/maximize-score-after-n-operations/)
