# [1790. Check if One String Swap Can Make Strings Equal](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1700 | 86 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `doordash`, `facebook`, `google`, `amazon`

## Description

You are given two strings `s1` and `s2` of equal length. A **string swap** is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return `true` *if it is possible to make both strings equal by performing **at most one string swap **on **exactly one** of the strings. *Otherwise, return `false`.

 

**Example 1:**

```

Input: s1 = &quot;bank&quot;, s2 = &quot;kanb&quot;
Output: true
Explanation: For example, swap the first character with the last character of s2 to make &quot;bank&quot;.

```

**Example 2:**

```

Input: s1 = &quot;attack&quot;, s2 = &quot;defend&quot;
Output: false
Explanation: It is impossible to make them equal with one string swap.

```

**Example 3:**

```

Input: s1 = &quot;kelb&quot;, s2 = &quot;kelb&quot;
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.

```

 

**Constraints:**

	- `1 <= s1.length, s2.length <= 100`

	- `s1.length == s2.length`

	- `s1` and `s2` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/) | [Solutions](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/)
