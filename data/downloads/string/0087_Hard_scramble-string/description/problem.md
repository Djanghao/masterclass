# [87. Scramble String](https://leetcode.com/problems/scramble-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 3581 | 1305 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`, `amazon`

## Description

We can scramble a string s to get a string t using the following algorithm:

	- If the length of the string is 1, stop.

	- If the length of the string is > 1, do the following:
	
		Split the string into two non-empty substrings at a random index, i.e., if the string is `s`, divide it to `x` and `y` where `s = x + y`.

		- **Randomly** decide to swap the two substrings or to keep them in the same order. i.e., after this step, `s` may become `s = x + y` or `s = y + x`.

		- Apply step 1 recursively on each of the two substrings `x` and `y`.

	
	

Given two strings `s1` and `s2` of **the same length**, return `true` if `s2` is a scrambled string of `s1`, otherwise, return `false`.

 

**Example 1:**

```

Input: s1 = &quot;great&quot;, s2 = &quot;rgeat&quot;
Output: true
Explanation: One possible scenario applied on s1 is:
&quot;great&quot; --&gt; &quot;gr/eat&quot; // divide at random index.
&quot;gr/eat&quot; --&gt; &quot;gr/eat&quot; // random decision is not to swap the two substrings and keep them in order.
&quot;gr/eat&quot; --&gt; &quot;g/r / e/at&quot; // apply the same algorithm recursively on both substrings. divide at random index each of them.
&quot;g/r / e/at&quot; --&gt; &quot;r/g / e/at&quot; // random decision was to swap the first substring and to keep the second substring in the same order.
&quot;r/g / e/at&quot; --&gt; &quot;r/g / e/ a/t&quot; // again apply the algorithm recursively, divide &quot;at&quot; to &quot;a/t&quot;.
&quot;r/g / e/ a/t&quot; --&gt; &quot;r/g / e/ a/t&quot; // random decision is to keep both substrings in the same order.
The algorithm stops now, and the result string is &quot;rgeat&quot; which is s2.
As one possible scenario led s1 to be scrambled to s2, we return true.

```

**Example 2:**

```

Input: s1 = &quot;abcde&quot;, s2 = &quot;caebd&quot;
Output: false

```

**Example 3:**

```

Input: s1 = &quot;a&quot;, s2 = &quot;a&quot;
Output: true

```

 

**Constraints:**

	- `s1.length == s2.length`

	- `1 <= s1.length <= 30`

	- `s1` and `s2` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/scramble-string/) | [Solutions](https://leetcode.com/problems/scramble-string/)
