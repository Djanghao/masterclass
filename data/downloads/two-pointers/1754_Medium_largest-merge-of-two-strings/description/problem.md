# [1754. Largest Merge Of Two Strings](https://leetcode.com/problems/largest-merge-of-two-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 604 | 86 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `snapchat`

## Description

You are given two strings `word1` and `word2`. You want to construct a string `merge` in the following way: while either `word1` or `word2` are non-empty, choose **one** of the following options:

	- If `word1` is non-empty, append the **first** character in `word1` to `merge` and delete it from `word1`.

	
		For example, if `word1 = "abc" `and `merge = "dv"`, then after choosing this operation, `word1 = "bc"` and `merge = "dva"`.

	
	
	- If `word2` is non-empty, append the **first** character in `word2` to `merge` and delete it from `word2`.
	
		For example, if `word2 = "abc" `and `merge = ""`, then after choosing this operation, `word2 = "bc"` and `merge = "a"`.

	
	

Return *the lexicographically **largest** *`merge`* you can construct*.

A string `a` is lexicographically larger than a string `b` (of the same length) if in the first position where `a` and `b` differ, `a` has a character strictly larger than the corresponding character in `b`. For example, `"abcd"` is lexicographically larger than `"abcc"` because the first position they differ is at the fourth character, and `d` is greater than `c`.

 

**Example 1:**

```

Input: word1 = &quot;cabaa&quot;, word2 = &quot;bcaaa&quot;
Output: &quot;cbcabaaaaa&quot;
Explanation: One way to get the lexicographically largest merge is:
- Take from word1: merge = &quot;c&quot;, word1 = &quot;abaa&quot;, word2 = &quot;bcaaa&quot;
- Take from word2: merge = &quot;cb&quot;, word1 = &quot;abaa&quot;, word2 = &quot;caaa&quot;
- Take from word2: merge = &quot;cbc&quot;, word1 = &quot;abaa&quot;, word2 = &quot;aaa&quot;
- Take from word1: merge = &quot;cbca&quot;, word1 = &quot;baa&quot;, word2 = &quot;aaa&quot;
- Take from word1: merge = &quot;cbcab&quot;, word1 = &quot;aa&quot;, word2 = &quot;aaa&quot;
- Append the remaining 5 a&#39;s from word1 and word2 at the end of merge.

```

**Example 2:**

```

Input: word1 = &quot;abcabc&quot;, word2 = &quot;abdcaba&quot;
Output: &quot;abdcabcabcaba&quot;

```

 

**Constraints:**

	- `1 <= word1.length, word2.length <= 3000`

	- `word1` and `word2` consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/largest-merge-of-two-strings/) | [Solutions](https://leetcode.com/problems/largest-merge-of-two-strings/)
