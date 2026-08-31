# [681. Next Closest Time](https://leetcode.com/problems/next-closest-time/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 742 | 1078 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `google`

## Description

Given a `time` represented in the format `"HH:MM"`, form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, `"01:34"`, `"12:09"` are all valid. `"1:34"`, `"12:9"` are all invalid.

 

**Example 1:**

```

Input: time = &quot;19:34&quot;
Output: &quot;19:39&quot;
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.
It is not 19:33, because this occurs 23 hours and 59 minutes later.

```

**Example 2:**

```

Input: time = &quot;23:59&quot;
Output: &quot;22:22&quot;
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22.
It may be assumed that the returned time is next day&#39;s time since it is smaller than the input time numerically.

```

 

**Constraints:**

	- `time.length == 5`

	- `time` is a valid time in the form `"HH:MM"`.

	- `0 <= HH < 24`

	- `0 <= MM < 60`

---

**Links:** [Submissions](https://leetcode.com/problems/next-closest-time/) | [Solutions](https://leetcode.com/problems/next-closest-time/)
