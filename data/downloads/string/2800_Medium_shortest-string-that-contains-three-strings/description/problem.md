# [2800. Shortest String That Contains Three Strings](https://leetcode.com/problems/shortest-string-that-contains-three-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 367 | 292 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `google`, `de-shaw`

## Description

Given three strings `a`, `b`, and `c`, your task is to find a string that has the** minimum** length and contains all three strings as **substrings**.

If there are multiple such strings, return the* ***lexicographically* *smallest **one.

Return *a string denoting the answer to the problem.*

**Notes**

	- A string `a` is **lexicographically smaller** than a string `b` (of the same length) if in the first position where `a` and `b` differ, string `a` has a letter that appears **earlier **in the alphabet than the corresponding letter in `b`.

	- A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: a = &quot;abc&quot;, b = &quot;bca&quot;, c = &quot;aaa&quot;
Output: &quot;aaabca&quot;
Explanation:  We show that &quot;aaabca&quot; contains all the given strings: a = ans[2...4], b = ans[3..5], c = ans[0..2]. It can be shown that the length of the resulting string would be at least 6 and &quot;aaabca&quot; is the lexicographically smallest one.
```

**Example 2:**

```

Input: a = &quot;ab&quot;, b = &quot;ba&quot;, c = &quot;aba&quot;
Output: &quot;aba&quot;
Explanation: We show that the string &quot;aba&quot; contains all the given strings: a = ans[0..1], b = ans[1..2], c = ans[0..2]. Since the length of c is 3, the length of the resulting string would be at least 3. It can be shown that &quot;aba&quot; is the lexicographically smallest one.

```

 

**Constraints:**

	- `1 <= a.length, b.length, c.length <= 100`

	- `a`, `b`, `c` consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-string-that-contains-three-strings/) | [Solutions](https://leetcode.com/problems/shortest-string-that-contains-three-strings/)
