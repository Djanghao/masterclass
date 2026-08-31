# [1309. Decrypt String from Alphabet to Integer Mapping](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1601 | 120 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `microsoft`, `facebook`, `quip`

## Description

You are given a string `s` formed by digits and `'#'`. We want to map `s` to English lowercase characters as follows:

	- Characters (`'a'` to `'i'`) are represented by (`'1'` to `'9'`) respectively.

	- Characters (`'j'` to `'z'`) are represented by (`'10#'` to `'26#'`) respectively.

Return *the string formed after mapping*.

The test cases are generated so that a unique mapping will always exist.

 

**Example 1:**

```

Input: s = &quot;10#11#12&quot;
Output: &quot;jkab&quot;
Explanation: &quot;j&quot; -&gt; &quot;10#&quot; , &quot;k&quot; -&gt; &quot;11#&quot; , &quot;a&quot; -&gt; &quot;1&quot; , &quot;b&quot; -&gt; &quot;2&quot;.

```

**Example 2:**

```

Input: s = &quot;1326#&quot;
Output: &quot;acz&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s` consists of digits and the `'#'` letter.

	- `s` will be a valid string such that mapping is always possible.

---

**Links:** [Submissions](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/) | [Solutions](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/)
