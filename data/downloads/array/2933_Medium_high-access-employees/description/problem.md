# [2933. High-Access Employees](https://leetcode.com/problems/high-access-employees/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 223 | 22 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `atlassian`, `amazon`

## Description

You are given a 2D **0-indexed** array of strings, `access_times`, with size `n`. For each `i` where `0 <= i <= n - 1`, `access_times[i][0]` represents the name of an employee, and `access_times[i][1]` represents the access time of that employee. All entries in `access_times` are within the same day.

The access time is represented as **four digits** using a **24-hour** time format, for example, `"0800"` or `"2250"`.

An employee is said to be **high-access** if he has accessed the system **three or more** times within a **one-hour period**.

Times with exactly one hour of difference are **not** considered part of the same one-hour period. For example, `"0815"` and `"0915"` are not part of the same one-hour period.

Access times at the start and end of the day are **not** counted within the same one-hour period. For example, `"0005"` and `"2350"` are not part of the same one-hour period.

Return *a list that contains the names of **high-access** employees with any order you want.*

 

**Example 1:**

```

Input: access_times = [[&quot;a&quot;,&quot;0549&quot;],[&quot;b&quot;,&quot;0457&quot;],[&quot;a&quot;,&quot;0532&quot;],[&quot;a&quot;,&quot;0621&quot;],[&quot;b&quot;,&quot;0540&quot;]]
Output: [&quot;a&quot;]
Explanation: &quot;a&quot; has three access times in the one-hour period of [05:32, 06:31] which are 05:32, 05:49, and 06:21.
But &quot;b&quot; does not have more than two access times at all.
So the answer is [&quot;a&quot;].
```

**Example 2:**

```

Input: access_times = [[&quot;d&quot;,&quot;0002&quot;],[&quot;c&quot;,&quot;0808&quot;],[&quot;c&quot;,&quot;0829&quot;],[&quot;e&quot;,&quot;0215&quot;],[&quot;d&quot;,&quot;1508&quot;],[&quot;d&quot;,&quot;1444&quot;],[&quot;d&quot;,&quot;1410&quot;],[&quot;c&quot;,&quot;0809&quot;]]
Output: [&quot;c&quot;,&quot;d&quot;]
Explanation: &quot;c&quot; has three access times in the one-hour period of [08:08, 09:07] which are 08:08, 08:09, and 08:29.
&quot;d&quot; has also three access times in the one-hour period of [14:10, 15:09] which are 14:10, 14:44, and 15:08.
However, &quot;e&quot; has just one access time, so it can not be in the answer and the final answer is [&quot;c&quot;,&quot;d&quot;].
```

**Example 3:**

```

Input: access_times = [[&quot;cd&quot;,&quot;1025&quot;],[&quot;ab&quot;,&quot;1025&quot;],[&quot;cd&quot;,&quot;1046&quot;],[&quot;cd&quot;,&quot;1055&quot;],[&quot;ab&quot;,&quot;1124&quot;],[&quot;ab&quot;,&quot;1120&quot;]]
Output: [&quot;ab&quot;,&quot;cd&quot;]
Explanation: &quot;ab&quot; has three access times in the one-hour period of [10:25, 11:24] which are 10:25, 11:20, and 11:24.
&quot;cd&quot; has also three access times in the one-hour period of [10:25, 11:24] which are 10:25, 10:46, and 10:55.
So the answer is [&quot;ab&quot;,&quot;cd&quot;].
```

 

**Constraints:**

	- `1 <= access_times.length <= 100`

	- `access_times[i].length == 2`

	- `1 <= access_times[i][0].length <= 10`

	- `access_times[i][0]` consists only of English small letters.

	- `access_times[i][1].length == 4`

	- `access_times[i][1]` is in 24-hour time format.

	- `access_times[i][1]` consists only of `'0'` to `'9'`.

---

**Links:** [Submissions](https://leetcode.com/problems/high-access-employees/) | [Solutions](https://leetcode.com/problems/high-access-employees/)
