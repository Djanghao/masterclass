# [2437. Number of Valid Clock Times](https://leetcode.com/problems/number-of-valid-clock-times/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 305 | 246 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `google`

## Description

You are given a string of length `5` called `time`, representing the current time on a digital clock in the format `"hh:mm"`. The **earliest** possible time is `"00:00"` and the **latest** possible time is `"23:59"`.

In the string `time`, the digits represented by the `?` symbol are **unknown**, and must be **replaced** with a digit from `0` to `9`.

Return* an integer *`answer`*, the number of valid clock times that can be created by replacing every *`?`* with a digit from *`0`* to *`9`.

 

**Example 1:**

```

Input: time = &quot;?5:00&quot;
Output: 2
Explanation: We can replace the ? with either a 0 or 1, producing &quot;05:00&quot; or &quot;15:00&quot;. Note that we cannot replace it with a 2, since the time &quot;25:00&quot; is invalid. In total, we have two choices.

```

**Example 2:**

```

Input: time = &quot;0?:0?&quot;
Output: 100
Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.

```

**Example 3:**

```

Input: time = &quot;??:??&quot;
Output: 1440
Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.

```

 

**Constraints:**

	- `time` is a valid string of length `5` in the format `"hh:mm"`.

	- `"00" <= hh <= "23"`

	- `"00" <= mm <= "59"`

	- Some of the digits might be replaced with `'?'` and need to be replaced with digits from `0` to `9`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-valid-clock-times/) | [Solutions](https://leetcode.com/problems/number-of-valid-clock-times/)
