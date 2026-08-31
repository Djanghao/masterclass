# [2606. Find the Substring With Maximum Cost](https://leetcode.com/problems/find-the-substring-with-maximum-cost/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 389 | 13 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`

## Description

You are given a string `s`, a string `chars` of **distinct** characters and an integer array `vals` of the same length as `chars`.

The **cost of the substring **is the sum of the values of each character in the substring. The cost of an empty string is considered `0`.

The **value of the character **is defined in the following way:

	- If the character is not in the string `chars`, then its value is its corresponding position **(1-indexed)** in the alphabet.

	
		For example, the value of `'a'` is `1`, the value of `'b'` is `2`, and so on. The value of `'z'` is `26`.

	
	
	- Otherwise, assuming `i` is the index where the character occurs in the string `chars`, then its value is `vals[i]`.

Return *the maximum cost among all substrings of the string* `s`.

 

**Example 1:**

```

Input: s = &quot;adaa&quot;, chars = &quot;d&quot;, vals = [-1000]
Output: 2
Explanation: The value of the characters &quot;a&quot; and &quot;d&quot; is 1 and -1000 respectively.
The substring with the maximum cost is &quot;aa&quot; and its cost is 1 + 1 = 2.
It can be proven that 2 is the maximum cost.

```

**Example 2:**

```

Input: s = &quot;abc&quot;, chars = &quot;abc&quot;, vals = [-1,-1,-1]
Output: 0
Explanation: The value of the characters &quot;a&quot;, &quot;b&quot; and &quot;c&quot; is -1, -1, and -1 respectively.
The substring with the maximum cost is the empty substring &quot;&quot; and its cost is 0.
It can be proven that 0 is the maximum cost.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consist of lowercase English letters.

	- `1 <= chars.length <= 26`

	- `chars` consist of **distinct** lowercase English letters.

	- `vals.length == chars.length`

	- `-1000 <= vals[i] <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-substring-with-maximum-cost/) | [Solutions](https://leetcode.com/problems/find-the-substring-with-maximum-cost/)
