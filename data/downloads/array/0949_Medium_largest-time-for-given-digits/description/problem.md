# [949. Largest Time for Given Digits](https://leetcode.com/problems/largest-time-for-given-digits/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 743 | 1072 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `microsoft`, `liveramp`

## Description

Given an array `arr` of 4 digits, find the latest 24-hour time that can be made using each digit **exactly once**.

24-hour times are formatted as `"HH:MM"`, where `HH` is between `00` and `23`, and `MM` is between `00` and `59`. The earliest 24-hour time is `00:00`, and the latest is `23:59`.

Return *the latest 24-hour time in `"HH:MM"` format*. If no valid time can be made, return an empty string.

 

**Example 1:**

```

Input: arr = [1,2,3,4]
Output: &quot;23:41&quot;
Explanation: The valid 24-hour times are &quot;12:34&quot;, &quot;12:43&quot;, &quot;13:24&quot;, &quot;13:42&quot;, &quot;14:23&quot;, &quot;14:32&quot;, &quot;21:34&quot;, &quot;21:43&quot;, &quot;23:14&quot;, and &quot;23:41&quot;. Of these times, &quot;23:41&quot; is the latest.

```

**Example 2:**

```

Input: arr = [5,5,5,5]
Output: &quot;&quot;
Explanation: There are no valid 24-hour times as &quot;55:55&quot; is not valid.

```

 

**Constraints:**

	- `arr.length == 4`

	- `0 <= arr[i] <= 9`

---

**Links:** [Submissions](https://leetcode.com/problems/largest-time-for-given-digits/) | [Solutions](https://leetcode.com/problems/largest-time-for-given-digits/)
