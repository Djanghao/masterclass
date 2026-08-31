# [2696. Minimum String Length After Removing Substrings](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1003 | 29 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `wells-fargo`, `ibm`, `jpmorgan`, `google`, `amazon`

## Description

You are given a string `s` consisting only of **uppercase** English letters.

You can apply some operations to this string where, in one operation, you can remove **any** occurrence of one of the substrings `"AB"` or `"CD"` from `s`.

Return *the **minimum** possible length of the resulting string that you can obtain*.

**Note** that the string concatenates after removing the substring and could produce new `"AB"` or `"CD"` substrings.

 

**Example 1:**

```

Input: s = &quot;ABFCACDB&quot;
Output: 2
Explanation: We can do the following operations:
- Remove the substring &quot;ABFCACDB&quot;, so s = &quot;FCACDB&quot;.
- Remove the substring &quot;FCACDB&quot;, so s = &quot;FCAB&quot;.
- Remove the substring &quot;FCAB&quot;, so s = &quot;FC&quot;.
So the resulting length of the string is 2.
It can be shown that it is the minimum length that we can obtain.
```

**Example 2:**

```

Input: s = &quot;ACBBD&quot;
Output: 5
Explanation: We cannot do any operations on the string so the length remains the same.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists only of uppercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/) | [Solutions](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/)
