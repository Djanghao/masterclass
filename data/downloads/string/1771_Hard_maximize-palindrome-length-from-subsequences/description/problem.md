# [1771. Maximize Palindrome Length From Subsequences](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 564 | 17 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `goldman-sachs`

## Description

You are given two strings, `word1` and `word2`. You want to construct a string in the following manner:

	- Choose some **non-empty** subsequence `subsequence1` from `word1`.

	- Choose some **non-empty** subsequence `subsequence2` from `word2`.

	- Concatenate the subsequences: `subsequence1 + subsequence2`, to make the string.

Return *the **length** of the longest **palindrome** that can be constructed in the described manner. *If no palindromes can be constructed, return `0`.

A **subsequence** of a string `s` is a string that can be made by deleting some (possibly none) characters from `s` without changing the order of the remaining characters.

A **palindrome** is a string that reads the same forward as well as backward.

 

**Example 1:**

```

Input: word1 = &quot;cacb&quot;, word2 = &quot;cbba&quot;
Output: 5
Explanation: Choose &quot;ab&quot; from word1 and &quot;cba&quot; from word2 to make &quot;abcba&quot;, which is a palindrome.
```

**Example 2:**

```

Input: word1 = &quot;ab&quot;, word2 = &quot;ab&quot;
Output: 3
Explanation: Choose &quot;ab&quot; from word1 and &quot;a&quot; from word2 to make &quot;aba&quot;, which is a palindrome.
```

**Example 3:**

```

Input: word1 = &quot;aa&quot;, word2 = &quot;bb&quot;
Output: 0
Explanation: You cannot construct a palindrome from the described method, so return 0.
```

 

**Constraints:**

	- `1 <= word1.length, word2.length <= 1000`

	- `word1` and `word2` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/) | [Solutions](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/)
