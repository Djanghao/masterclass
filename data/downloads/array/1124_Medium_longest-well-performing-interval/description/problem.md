# [1124. Longest Well-Performing Interval](https://leetcode.com/problems/longest-well-performing-interval/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1514 | 122 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`stack`](https://leetcode.com/tag/stack), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `infosys`

## Description

We are given `hours`, a list of the number of hours worked per day for a given employee.

A day is considered to be a *tiring day* if and only if the number of hours worked is (strictly) greater than `8`.

A *well-performing interval* is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.

Return the length of the longest well-performing interval.

 

**Example 1:**

```

Input: hours = [9,9,6,0,6,6,9]
Output: 3
Explanation: The longest well-performing interval is [9,9,6].

```

**Example 2:**

```

Input: hours = [6,6,6]
Output: 0

```

 

**Constraints:**

	- `1 <= hours.length <= 10^4`

	- `0 <= hours[i] <= 16`

---

**Links:** [Submissions](https://leetcode.com/problems/longest-well-performing-interval/) | [Solutions](https://leetcode.com/problems/longest-well-performing-interval/)
