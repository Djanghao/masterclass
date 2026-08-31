# [2434. Using a Robot to Print the Lexicographically Smallest String](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1147 | 304 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `tower-research`, `amazon`, `facebook`, `de-shaw`

## Description

You are given a string `s` and a robot that currently holds an empty string `t`. Apply one of the following operations until `s` and `t` **are both empty**:

	- Remove the **first** character of a string `s` and give it to the robot. The robot will append this character to the string `t`.

	- Remove the **last** character of a string `t` and give it to the robot. The robot will write this character on paper.

Return *the lexicographically smallest string that can be written on the paper.*

 

**Example 1:**

```

Input: s = &quot;zza&quot;
Output: &quot;azz&quot;
Explanation: Let p denote the written string.
Initially p=&quot;&quot;, s=&quot;zza&quot;, t=&quot;&quot;.
Perform first operation three times p=&quot;&quot;, s=&quot;&quot;, t=&quot;zza&quot;.
Perform second operation three times p=&quot;azz&quot;, s=&quot;&quot;, t=&quot;&quot;.

```

**Example 2:**

```

Input: s = &quot;bac&quot;
Output: &quot;abc&quot;
Explanation: Let p denote the written string.
Perform first operation twice p=&quot;&quot;, s=&quot;c&quot;, t=&quot;ba&quot;. 
Perform second operation twice p=&quot;ab&quot;, s=&quot;c&quot;, t=&quot;&quot;. 
Perform first operation p=&quot;ab&quot;, s=&quot;&quot;, t=&quot;c&quot;. 
Perform second operation p=&quot;abc&quot;, s=&quot;&quot;, t=&quot;&quot;.

```

**Example 3:**

```

Input: s = &quot;bdda&quot;
Output: &quot;addb&quot;
Explanation: Let p denote the written string.
Initially p=&quot;&quot;, s=&quot;bdda&quot;, t=&quot;&quot;.
Perform first operation four times p=&quot;&quot;, s=&quot;&quot;, t=&quot;bdda&quot;.
Perform second operation four times p=&quot;addb&quot;, s=&quot;&quot;, t=&quot;&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of only English lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/) | [Solutions](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/)
