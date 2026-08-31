# [2515. Shortest Distance to Target String in a Circular Array](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 371 | 24 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `salesforce`, `bloomberg`

## Description

You are given a **0-indexed** **circular** string array `words` and a string `target`. A **circular array** means that the array's end connects to the array's beginning.

	- Formally, the next element of `words[i]` is `words[(i + 1) % n]` and the previous element of `words[i]` is `words[(i - 1 + n) % n]`, where `n` is the length of `words`.

Starting from `startIndex`, you can move to either the next word or the previous word with `1` step at a time.

Return *the **shortest** distance needed to reach the string* `target`. If the string `target` does not exist in `words`, return `-1`.

 

**Example 1:**

```

Input: words = [&quot;hello&quot;,&quot;i&quot;,&quot;am&quot;,&quot;leetcode&quot;,&quot;hello&quot;], target = &quot;hello&quot;, startIndex = 1
Output: 1
Explanation: We start from index 1 and can reach &quot;hello&quot; by
- moving 3 units to the right to reach index 4.
- moving 2 units to the left to reach index 4.
- moving 4 units to the right to reach index 0.
- moving 1 unit to the left to reach index 0.
The shortest distance to reach &quot;hello&quot; is 1.

```

**Example 2:**

```

Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;leetcode&quot;], target = &quot;leetcode&quot;, startIndex = 0
Output: 1
Explanation: We start from index 0 and can reach &quot;leetcode&quot; by
- moving 2 units to the right to reach index 3.
- moving 1 unit to the left to reach index 3.
The shortest distance to reach &quot;leetcode&quot; is 1.
```

**Example 3:**

```

Input: words = [&quot;i&quot;,&quot;eat&quot;,&quot;leetcode&quot;], target = &quot;ate&quot;, startIndex = 0
Output: -1
Explanation: Since &quot;ate&quot; does not exist in words, we return -1.

```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 100`

	- `words[i]` and `target` consist of only lowercase English letters.

	- `0 <= startIndex < words.length`

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/) | [Solutions](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/)
