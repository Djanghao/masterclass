# [1750. Minimum Length of String After Deleting Similar Ends](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1302 | 109 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `amazon`, `goldman-sachs`

## Description

Given a string `s` consisting only of characters `'a'`, `'b'`, and `'c'`. You are asked to apply the following algorithm on the string any number of times:

	- Pick a **non-empty** prefix from the string `s` where all the characters in the prefix are equal.

	- Pick a **non-empty** suffix from the string `s` where all the characters in this suffix are equal.

	- The prefix and the suffix should not intersect at any index.

	- The characters from the prefix and suffix must be the same.

	- Delete both the prefix and the suffix.

Return *the **minimum length** of *`s` *after performing the above operation any number of times (possibly zero times)*.

 

**Example 1:**

```

Input: s = &quot;ca&quot;
Output: 2
Explanation: You can&#39;t remove any characters, so the string stays as is.

```

**Example 2:**

```

Input: s = &quot;cabaabac&quot;
Output: 0
Explanation: An optimal sequence of operations is:
- Take prefix = &quot;c&quot; and suffix = &quot;c&quot; and remove them, s = &quot;abaaba&quot;.
- Take prefix = &quot;a&quot; and suffix = &quot;a&quot; and remove them, s = &quot;baab&quot;.
- Take prefix = &quot;b&quot; and suffix = &quot;b&quot; and remove them, s = &quot;aa&quot;.
- Take prefix = &quot;a&quot; and suffix = &quot;a&quot; and remove them, s = &quot;&quot;.
```

**Example 3:**

```

Input: s = &quot;aabccabba&quot;
Output: 3
Explanation: An optimal sequence of operations is:
- Take prefix = &quot;aa&quot; and suffix = &quot;a&quot; and remove them, s = &quot;bccabb&quot;.
- Take prefix = &quot;b&quot; and suffix = &quot;bb&quot; and remove them, s = &quot;cca&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` only consists of characters `'a'`, `'b'`, and `'c'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/) | [Solutions](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/)
