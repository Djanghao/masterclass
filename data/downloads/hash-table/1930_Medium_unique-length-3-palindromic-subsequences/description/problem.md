# [1930. Unique Length-3 Palindromic Subsequences](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2847 | 109 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `google`, `amazon`, `facebook`, `microsoft`, `bloomberg`

## Description

Given a string `s`, return *the number of **unique palindromes of length three** that are a **subsequence** of *`s`.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted **once**.

A **palindrome** is a string that reads the same forwards and backwards.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

	- For example, `"ace"` is a subsequence of `"abcde"`.

 

**Example 1:**

```

Input: s = &quot;aabca&quot;
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- &quot;aba&quot; (subsequence of &quot;aabca&quot;)
- &quot;aaa&quot; (subsequence of &quot;aabca&quot;)
- &quot;aca&quot; (subsequence of &quot;aabca&quot;)

```

**Example 2:**

```

Input: s = &quot;adc&quot;
Output: 0
Explanation: There are no palindromic subsequences of length 3 in &quot;adc&quot;.

```

**Example 3:**

```

Input: s = &quot;bbcbaba&quot;
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- &quot;bbb&quot; (subsequence of &quot;bbcbaba&quot;)
- &quot;bcb&quot; (subsequence of &quot;bbcbaba&quot;)
- &quot;bab&quot; (subsequence of &quot;bbcbaba&quot;)
- &quot;aba&quot; (subsequence of &quot;bbcbaba&quot;)

```

 

**Constraints:**

	- `3 <= s.length <= 10^5`

	- `s` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/) | [Solutions](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/)
