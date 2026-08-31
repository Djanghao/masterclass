# [327. Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2474 | 262 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`merge-sort`](https://leetcode.com/tag/merge-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `amazon`, `oracle`, `google`

## Description

Given an integer array `nums` and two integers `lower` and `upper`, return *the number of range sums that lie in* `[lower, upper]` *inclusive*.

Range sum `S(i, j)` is defined as the sum of the elements in `nums` between indices `i` and `j` inclusive, where `i <= j`.

 

**Example 1:**

```

Input: nums = [-2,5,-1], lower = -2, upper = 2
Output: 3
Explanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.

```

**Example 2:**

```

Input: nums = [0], lower = 0, upper = 0
Output: 1

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `-2^31 <= nums[i] <= 2^31 - 1`

	- `-10^5 <= lower <= upper <= 10^5`

	- The answer is **guaranteed** to fit in a **32-bit** integer.

---

**Links:** [Submissions](https://leetcode.com/problems/count-of-range-sum/) | [Solutions](https://leetcode.com/problems/count-of-range-sum/)
