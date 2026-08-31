# [2446. Determine if Two Events Have Conflict](https://leetcode.com/problems/determine-if-two-events-have-conflict/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 529 | 71 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `goldman-sachs`

## Description

You are given two arrays of strings that represent two inclusive events that happened **on the same day**, `event1` and `event2`, where:

	- `event1 = [startTime_1, endTime_1]` and

	- `event2 = [startTime_2, endTime_2]`.

Event times are valid 24 hours format in the form of `HH:MM`.

A **conflict** happens when two events have some non-empty intersection (i.e., some moment is common to both events).

Return `true`* if there is a conflict between two events. Otherwise, return *`false`.

 

**Example 1:**

```

Input: event1 = [&quot;01:15&quot;,&quot;02:00&quot;], event2 = [&quot;02:00&quot;,&quot;03:00&quot;]
Output: true
Explanation: The two events intersect at time 2:00.

```

**Example 2:**

```

Input: event1 = [&quot;01:00&quot;,&quot;02:00&quot;], event2 = [&quot;01:20&quot;,&quot;03:00&quot;]
Output: true
Explanation: The two events intersect starting from 01:20 to 02:00.

```

**Example 3:**

```

Input: event1 = [&quot;10:00&quot;,&quot;11:00&quot;], event2 = [&quot;14:00&quot;,&quot;15:00&quot;]
Output: false
Explanation: The two events do not intersect.

```

 

**Constraints:**

	- `event1.length == event2.length == 2`

	- `event1[i].length == event2[i].length == 5`

	- `startTime_1 <= endTime_1`

	- `startTime_2 <= endTime_2`

	- All the event times follow the `HH:MM` format.

---

**Links:** [Submissions](https://leetcode.com/problems/determine-if-two-events-have-conflict/) | [Solutions](https://leetcode.com/problems/determine-if-two-events-have-conflict/)
