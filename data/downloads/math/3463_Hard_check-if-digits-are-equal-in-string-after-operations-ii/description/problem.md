# [3463. Check If Digits Are Equal in String After Operations II](https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 99 | 53 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`combinatorics`](https://leetcode.com/tag/combinatorics), [`number-theory`](https://leetcode.com/tag/number-theory)

**Companies:** `google`

## Description

You are given a string `s` consisting of digits. Perform the following operation repeatedly until the string has **exactly** two digits:

	- For each pair of consecutive digits in `s`, starting from the first digit, calculate a new digit as the sum of the two digits **modulo** 10.

	- Replace `s` with the sequence of newly calculated digits, *maintaining the order* in which they are computed.

Return `true` if the final two digits in `s` are the **same**; otherwise, return `false`.

 

**Example 1:**

**Input:** s = "3902"

**Output:** true

**Explanation:**

	- Initially, `s = "3902"`

	- First operation:
	
		`(s[0] + s[1]) % 10 = (3 + 9) % 10 = 2`

		- `(s[1] + s[2]) % 10 = (9 + 0) % 10 = 9`

		- `(s[2] + s[3]) % 10 = (0 + 2) % 10 = 2`

		- `s` becomes `"292"`

	
	
	- Second operation:
	
		`(s[0] + s[1]) % 10 = (2 + 9) % 10 = 1`

		- `(s[1] + s[2]) % 10 = (9 + 2) % 10 = 1`

		- `s` becomes `"11"`

	
	
	- Since the digits in `"11"` are the same, the output is `true`.

**Example 2:**

**Input:** s = "34789"

**Output:** false

**Explanation:**

	- Initially, `s = "34789"`.

	- After the first operation, `s = "7157"`.

	- After the second operation, `s = "862"`.

	- After the third operation, `s = "48"`.

	- Since `'4' != '8'`, the output is `false`.

 

**Constraints:**

	- `3 <= s.length <= 10^5`

	- `s` consists of only digits.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-ii/) | [Solutions](https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-ii/)
