# [1271. Hexspeak](https://leetcode.com/problems/hexspeak/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 80 | 126 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string)

**Companies:** `virtu`

## Description

A decimal number can be converted to its **Hexspeak representation** by first converting it to an uppercase hexadecimal string, then replacing all occurrences of the digit `'0'` with the letter `'O'`, and the digit `'1'` with the letter `'I'`. Such a representation is valid if and only if it consists only of the letters in the set `{'A', 'B', 'C', 'D', 'E', 'F', 'I', 'O'}`.

Given a string `num` representing a decimal integer `n`, *return the **Hexspeak representation** of *`n`* if it is valid, otherwise return *`"ERROR"`.

 

**Example 1:**

```

Input: num = &quot;257&quot;
Output: &quot;IOI&quot;
Explanation: 257 is 101 in hexadecimal.

```

**Example 2:**

```

Input: num = &quot;3&quot;
Output: &quot;ERROR&quot;

```

 

**Constraints:**

	- `1 <= num.length <= 12`

	- `num` does not contain leading zeros.

	- num represents an integer in the range `[1, 10^12]`.

---

**Links:** [Submissions](https://leetcode.com/problems/hexspeak/) | [Solutions](https://leetcode.com/problems/hexspeak/)
