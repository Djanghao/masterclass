# [1604. Alert Using Same Key-Card Three or More Times in a One Hour Period](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 337 | 438 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `karat`, `ibm`, `wayfair`

## Description

LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an **alert** if any worker uses the key-card **three or more times** in a one-hour period.

You are given a list of strings `keyName` and `keyTime` where `[keyName[i], keyTime[i]]` corresponds to a person's name and the time when their key-card was used **in a** **single day**.

Access times are given in the **24-hour time format "HH:MM"**, such as `"23:51"` and `"09:49"`.

Return a *list of unique worker names who received an alert for frequent keycard use*. Sort the names in **ascending order alphabetically**.

Notice that `"10:00"` - `"11:00"` is considered to be within a one-hour period, while `"22:51"` - `"23:52"` is not considered to be within a one-hour period.

 

**Example 1:**

```

Input: keyName = [&quot;daniel&quot;,&quot;daniel&quot;,&quot;daniel&quot;,&quot;luis&quot;,&quot;luis&quot;,&quot;luis&quot;,&quot;luis&quot;], keyTime = [&quot;10:00&quot;,&quot;10:40&quot;,&quot;11:00&quot;,&quot;09:00&quot;,&quot;11:00&quot;,&quot;13:00&quot;,&quot;15:00&quot;]
Output: [&quot;daniel&quot;]
Explanation: &quot;daniel&quot; used the keycard 3 times in a one-hour period (&quot;10:00&quot;,&quot;10:40&quot;, &quot;11:00&quot;).

```

**Example 2:**

```

Input: keyName = [&quot;alice&quot;,&quot;alice&quot;,&quot;alice&quot;,&quot;bob&quot;,&quot;bob&quot;,&quot;bob&quot;,&quot;bob&quot;], keyTime = [&quot;12:01&quot;,&quot;12:00&quot;,&quot;18:00&quot;,&quot;21:00&quot;,&quot;21:20&quot;,&quot;21:30&quot;,&quot;23:00&quot;]
Output: [&quot;bob&quot;]
Explanation: &quot;bob&quot; used the keycard 3 times in a one-hour period (&quot;21:00&quot;,&quot;21:20&quot;, &quot;21:30&quot;).

```

 

**Constraints:**

	- `1 <= keyName.length, keyTime.length <= 10^5`

	- `keyName.length == keyTime.length`

	- `keyTime[i]` is in the format **"HH:MM"**.

	- `[keyName[i], keyTime[i]]` is **unique**.

	- `1 <= keyName[i].length <= 10`

	- `keyName[i] contains only lowercase English letters.`

---

**Links:** [Submissions](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/) | [Solutions](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/)
