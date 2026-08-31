# [2390. Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3169 | 231 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `amazon`, `google`, `ibm`

## Description

You are given a string `s`, which contains stars `*`.

In one operation, you can:

	- Choose a star in `s`.

	- Remove the closest **non-star** character to its **left**, as well as remove the star itself.

Return *the string after **all** stars have been removed*.

**Note:**

	- The input will be generated such that the operation is always possible.

	- It can be shown that the resulting string will always be unique.

 

**Example 1:**

```

Input: s = &quot;leet**cod*e&quot;
Output: &quot;lecoe&quot;
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is &#39;t&#39; in &quot;leet**cod*e&quot;. s becomes &quot;lee*cod*e&quot;.
- The closest character to the 2nd star is &#39;e&#39; in &quot;lee*cod*e&quot;. s becomes &quot;lecod*e&quot;.
- The closest character to the 3rd star is &#39;d&#39; in &quot;lecod*e&quot;. s becomes &quot;lecoe&quot;.
There are no more stars, so we return &quot;lecoe&quot;.
```

**Example 2:**

```

Input: s = &quot;erase*****&quot;
Output: &quot;&quot;
Explanation: The entire string is removed, so we return an empty string.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters and stars `*`.

	- The operation above can be performed on `s`.

---

**Links:** [Submissions](https://leetcode.com/problems/removing-stars-from-a-string/) | [Solutions](https://leetcode.com/problems/removing-stars-from-a-string/)
