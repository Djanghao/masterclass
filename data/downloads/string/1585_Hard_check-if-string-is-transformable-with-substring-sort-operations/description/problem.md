# [1585. Check If String Is Transformable With Substring Sort Operations](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 454 | 11 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`

## Description

Given two strings `s` and `t`, transform string `s` into string `t` using the following operation any number of times:

	- Choose a **non-empty** substring in `s` and sort it in place so the characters are in **ascending order**.

	
		For example, applying the operation on the underlined substring in `"14234"` results in `"12344"`.

	
	

Return `true` if *it is possible to transform `s` into `t`*. Otherwise, return `false`.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;84532&quot;, t = &quot;34852&quot;
Output: true
Explanation: You can transform s into t using the following sort operations:
&quot;84532&quot; (from index 2 to 3) -&gt; &quot;84352&quot;
&quot;84352&quot; (from index 0 to 2) -&gt; &quot;34852&quot;

```

**Example 2:**

```

Input: s = &quot;34521&quot;, t = &quot;23415&quot;
Output: true
Explanation: You can transform s into t using the following sort operations:
&quot;34521&quot; -&gt; &quot;23451&quot;
&quot;23451&quot; -&gt; &quot;23415&quot;

```

**Example 3:**

```

Input: s = &quot;12345&quot;, t = &quot;12435&quot;
Output: false

```

 

**Constraints:**

	- `s.length == t.length`

	- `1 <= s.length <= 10^5`

	- `s` and `t` consist of only digits.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/) | [Solutions](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/)
