# [1933. Check if String Is Decomposable Into Value-Equal Substrings](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 61 | 15 |

**Tags:** [`string`](https://leetcode.com/tag/string)


## Description

A **value-equal** string is a string where **all** characters are the same.

	- For example, `"1111"` and `"33"` are value-equal strings.

	- In contrast, `"123"` is not a value-equal string.

Given a digit string `s`, decompose the string into some number of **consecutive value-equal** substrings where **exactly one** substring has a **length of **`2` and the remaining substrings have a **length of **`3`.

Return `true`* if you can decompose *`s`* according to the above rules. Otherwise, return *`false`.

A **substring** is a contiguous sequence of characters in a string.

 

**Example 1:**

```

Input: s = &quot;000111000&quot;
Output: false
Explanation: s cannot be decomposed according to the rules because [&quot;000&quot;, &quot;111&quot;, &quot;000&quot;] does not have a substring of length 2.

```

**Example 2:**

```

Input: s = &quot;00011111222&quot;
Output: true
Explanation: s can be decomposed into [&quot;000&quot;, &quot;111&quot;, &quot;11&quot;, &quot;222&quot;].

```

**Example 3:**

```

Input: s = &quot;011100022233&quot;
Output: false
Explanation: s cannot be decomposed according to the rules because of the first &#39;0&#39;.

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s` consists of only digits `'0'` through `'9'`.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/) | [Solutions](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/)
