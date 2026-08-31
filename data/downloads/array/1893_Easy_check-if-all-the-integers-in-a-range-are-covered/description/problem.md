# [1893. Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 665 | 127 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `squarespace`, `amazon`, `bloomberg`

## Description

You are given a 2D integer array `ranges` and two integers `left` and `right`. Each `ranges[i] = [start_i, end_i]` represents an **inclusive** interval between `start_i` and `end_i`.

Return `true` *if each integer in the inclusive range* `[left, right]` *is covered by **at least one** interval in* `ranges`. Return `false` *otherwise*.

An integer `x` is covered by an interval `ranges[i] = [start_i, end_i]` if `start_i <= x <= end_i`.

 

**Example 1:**

```

Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
Output: true
Explanation: Every integer between 2 and 5 is covered:
- 2 is covered by the first range.
- 3 and 4 are covered by the second range.
- 5 is covered by the third range.

```

**Example 2:**

```

Input: ranges = [[1,10],[10,20]], left = 21, right = 21
Output: false
Explanation: 21 is not covered by any range.

```

 

**Constraints:**

	- `1 <= ranges.length <= 50`

	- `1 <= start_i <= end_i <= 50`

	- `1 <= left <= right <= 50`

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/) | [Solutions](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/)
