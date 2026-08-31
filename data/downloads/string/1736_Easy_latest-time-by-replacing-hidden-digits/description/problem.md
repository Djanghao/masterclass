# [1736. Latest Time by Replacing Hidden Digits](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 396 | 188 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`

## Description

You are given a string `time` in the form of ` hh:mm`, where some of the digits in the string are hidden (represented by `?`).

The valid times are those inclusively between `00:00` and `23:59`.

Return *the latest valid time you can get from* `time`* by replacing the hidden* *digits*.

 

**Example 1:**

```

Input: time = &quot;2?:?0&quot;
Output: &quot;23:50&quot;
Explanation: The latest hour beginning with the digit &#39;2&#39; is 23 and the latest minute ending with the digit &#39;0&#39; is 50.

```

**Example 2:**

```

Input: time = &quot;0?:3?&quot;
Output: &quot;09:39&quot;

```

**Example 3:**

```

Input: time = &quot;1?:22&quot;
Output: &quot;19:22&quot;

```

 

**Constraints:**

	- `time` is in the format `hh:mm`.

	- It is guaranteed that you can produce a valid time from the given string.

---

**Links:** [Submissions](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/) | [Solutions](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/)
