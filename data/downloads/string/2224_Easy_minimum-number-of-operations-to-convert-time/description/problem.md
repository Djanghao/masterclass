# [2224. Minimum Number of Operations to Convert Time](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 497 | 39 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`

## Description

You are given two strings `current` and `correct` representing two **24-hour times**.

24-hour times are formatted as `"HH:MM"`, where `HH` is between `00` and `23`, and `MM` is between `00` and `59`. The earliest 24-hour time is `00:00`, and the latest is `23:59`.

In one operation you can increase the time `current` by `1`, `5`, `15`, or `60` minutes. You can perform this operation **any** number of times.

Return *the **minimum number of operations** needed to convert *`current`* to *`correct`.

 

**Example 1:**

```

Input: current = &quot;02:30&quot;, correct = &quot;04:35&quot;
Output: 3
Explanation:
We can convert current to correct in 3 operations as follows:
- Add 60 minutes to current. current becomes &quot;03:30&quot;.
- Add 60 minutes to current. current becomes &quot;04:30&quot;.
- Add 5 minutes to current. current becomes &quot;04:35&quot;.
It can be proven that it is not possible to convert current to correct in fewer than 3 operations.
```

**Example 2:**

```

Input: current = &quot;11:00&quot;, correct = &quot;11:01&quot;
Output: 1
Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.

```

 

**Constraints:**

	- `current` and `correct` are in the format `"HH:MM"`

	- `current <= correct`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/) | [Solutions](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/)
