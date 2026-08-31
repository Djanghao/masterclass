# [2067. Number of Equal Count Substrings](https://leetcode.com/problems/number-of-equal-count-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 111 | 11 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `cisco`

## Description

You are given a **0-indexed** string `s` consisting of only lowercase English letters, and an integer `count`. A **substring** of `s` is said to be an **equal count substring** if, for each **unique** letter in the substring, it appears exactly `count` times in the substring.

Return *the number of **equal count substrings** in *`s`.

A **substring** is a contiguous non-empty sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;aaabcbbcc&quot;, count = 3
Output: 3
Explanation:
The substring that starts at index 0 and ends at index 2 is &quot;aaa&quot;.
The letter &#39;a&#39; in the substring appears exactly 3 times.
The substring that starts at index 3 and ends at index 8 is &quot;bcbbcc&quot;.
The letters &#39;b&#39; and &#39;c&#39; in the substring appear exactly 3 times.
The substring that starts at index 0 and ends at index 8 is &quot;aaabcbbcc&quot;.
The letters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39; in the substring appear exactly 3 times.

```

**Example 2:**

```

Input: s = &quot;abcd&quot;, count = 2
Output: 0
Explanation:
The number of times each letter appears in s is less than count.
Therefore, no substrings in s are equal count substrings, so return 0.

```

**Example 3:**

```

Input: s = &quot;a&quot;, count = 5
Output: 0
Explanation:
The number of times each letter appears in s is less than count.
Therefore, no substrings in s are equal count substrings, so return 0
```

 

**Constraints:**

	- `1 <= s.length <= 3 * 10^4`

	- `1 <= count <= 3 * 10^4`

	- `s` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-equal-count-substrings/) | [Solutions](https://leetcode.com/problems/number-of-equal-count-substrings/)
