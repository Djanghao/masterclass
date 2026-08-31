# [1593. Split a String Into the Max Number of Unique Substrings](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1504 | 73 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking)

**Companies:** `google`, `amazon`, `facebook`

## Description

Given a string `s`, return *the maximum number of unique substrings that the given string can be split into*.

You can split string `s` into any list of **non-empty substrings**, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are **unique**.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;ababccc&quot;
Output: 5
Explanation: One way to split maximally is [&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;cc&#39;]. Splitting like [&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;cc&#39;] is not valid as you have &#39;a&#39; and &#39;b&#39; multiple times.

```

**Example 2:**

```

Input: s = &quot;aba&quot;
Output: 2
Explanation: One way to split maximally is [&#39;a&#39;, &#39;ba&#39;].

```

**Example 3:**

```

Input: s = &quot;aa&quot;
Output: 1
Explanation: It is impossible to split the string any further.

```

 

**Constraints:**

	- 
	
`1 <= s.length <= 16`

	

	- 
	
`s` contains only lower case English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) | [Solutions](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/)
