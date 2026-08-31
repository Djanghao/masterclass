# [2516. Take K of Each Character From Left and Right](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1506 | 168 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `google`, `amazon`

## Description

You are given a string `s` consisting of the characters `'a'`, `'b'`, and `'c'` and a non-negative integer `k`. Each minute, you may take either the **leftmost** character of `s`, or the **rightmost** character of `s`.

Return* the **minimum** number of minutes needed for you to take **at least** *`k`* of each character, or return *`-1`* if it is not possible to take *`k`* of each character.*

 

**Example 1:**

```

Input: s = &quot;aabaaaacaabc&quot;, k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two &#39;a&#39; characters, and one &#39;b&#39; character.
Take five characters from the right of s. You now have four &#39;a&#39; characters, two &#39;b&#39; characters, and two &#39;c&#39; characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.

```

**Example 2:**

```

Input: s = &quot;a&quot;, k = 1
Output: -1
Explanation: It is not possible to take one &#39;b&#39; or &#39;c&#39; so return -1.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of only the letters `'a'`, `'b'`, and `'c'`.

	- `0 <= k <= s.length`

---

**Links:** [Submissions](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/) | [Solutions](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/)
