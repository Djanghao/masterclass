# [880. Decoded String at Index](https://leetcode.com/problems/decoded-string-at-index/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2601 | 365 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `phonepe`, `national-instruments`

## Description

You are given an encoded string `s`. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

	- If the character read is a letter, that letter is written onto the tape.

	- If the character read is a digit `d`, the entire current tape is repeatedly written `d - 1` more times in total.

Given an integer `k`, return *the *`k^th`* letter (**1-indexed)** in the decoded string*.

 

**Example 1:**

```

Input: s = &quot;leet2code3&quot;, k = 10
Output: &quot;o&quot;
Explanation: The decoded string is &quot;leetleetcodeleetleetcodeleetleetcode&quot;.
The 10th letter in the string is &quot;o&quot;.

```

**Example 2:**

```

Input: s = &quot;ha22&quot;, k = 5
Output: &quot;h&quot;
Explanation: The decoded string is &quot;hahahaha&quot;.
The 5th letter is &quot;h&quot;.

```

**Example 3:**

```

Input: s = &quot;a2345678999999999999999&quot;, k = 1
Output: &quot;a&quot;
Explanation: The decoded string is &quot;a&quot; repeated 8301530446056247680 times.
The 1st letter is &quot;a&quot;.

```

 

**Constraints:**

	- `2 <= s.length <= 100`

	- `s` consists of lowercase English letters and digits `2` through `9`.

	- `s` starts with a letter.

	- `1 <= k <= 10^9`

	- It is guaranteed that `k` is less than or equal to the length of the decoded string.

	- The decoded string is guaranteed to have less than `2^63` letters.

---

**Links:** [Submissions](https://leetcode.com/problems/decoded-string-at-index/) | [Solutions](https://leetcode.com/problems/decoded-string-at-index/)
