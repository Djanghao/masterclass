# [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8954 | 249 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `facebook`, `amazon`, `google`, `verkada`, `microsoft`, `bloomberg`, `zoho`, `goldman-sachs`, `oracle`, `jpmorgan`, `capital-one`, `snowflake`

## Description

Given an array of intervals `intervals` where `intervals[i] = [start_i, end_i]`, return *the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping*.

**Note** that intervals which only touch at a point are **non-overlapping**. For example, `[1, 2]` and `[2, 3]` are non-overlapping.

 

**Example 1:**

```

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

```

**Example 2:**

```

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

```

**Example 3:**

```

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don&#39;t need to remove any of the intervals since they&#39;re already non-overlapping.

```

 

**Constraints:**

	- `1 <= intervals.length <= 10^5`

	- `intervals[i].length == 2`

	- `-5 * 10^4 <= start_i < end_i <= 5 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/non-overlapping-intervals/) | [Solutions](https://leetcode.com/problems/non-overlapping-intervals/)
