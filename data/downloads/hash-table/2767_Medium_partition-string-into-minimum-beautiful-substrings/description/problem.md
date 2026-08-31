# [2767. Partition String Into Minimum Beautiful Substrings](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 382 | 19 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`backtracking`](https://leetcode.com/tag/backtracking)


## Description

Given a binary string `s`, partition the string into one or more **substrings** such that each substring is **beautiful**.

A string is **beautiful** if:

	- It doesn't contain leading zeros.

	- It's the **binary** representation of a number that is a power of `5`.

Return *the **minimum** number of substrings in such partition. *If it is impossible to partition the string `s` into beautiful substrings, return `-1`.

A **substring** is a contiguous sequence of characters in a string.

 

**Example 1:**

```

Input: s = &quot;1011&quot;
Output: 2
Explanation: We can paritition the given string into [&quot;101&quot;, &quot;1&quot;].
- The string &quot;101&quot; does not contain leading zeros and is the binary representation of integer 51 = 5.
- The string &quot;1&quot; does not contain leading zeros and is the binary representation of integer 50 = 1.
It can be shown that 2 is the minimum number of beautiful substrings that s can be partitioned into.

```

**Example 2:**

```

Input: s = &quot;111&quot;
Output: 3
Explanation: We can paritition the given string into [&quot;1&quot;, &quot;1&quot;, &quot;1&quot;].
- The string &quot;1&quot; does not contain leading zeros and is the binary representation of integer 50 = 1.
It can be shown that 3 is the minimum number of beautiful substrings that s can be partitioned into.

```

**Example 3:**

```

Input: s = &quot;0&quot;
Output: -1
Explanation: We can not partition the given string into beautiful substrings.

```

 

**Constraints:**

	- `1 <= s.length <= 15`

	- `s[i]` is either `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/) | [Solutions](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/)
