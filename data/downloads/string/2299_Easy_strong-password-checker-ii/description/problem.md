# [2299. Strong Password Checker II](https://leetcode.com/problems/strong-password-checker-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 374 | 41 |

**Tags:** [`string`](https://leetcode.com/tag/string)


## Description

A password is said to be **strong** if it satisfies all the following criteria:

	- It has at least `8` characters.

	- It contains at least **one lowercase** letter.

	- It contains at least **one uppercase** letter.

	- It contains at least **one digit**.

	- It contains at least **one special character**. The special characters are the characters in the following string: `"!@#$%^&*()-+"`.

	- It does **not** contain `2` of the same character in adjacent positions (i.e., `"aab"` violates this condition, but `"aba"` does not).

Given a string `password`, return `true`* if it is a **strong** password*. Otherwise, return `false`.

 

**Example 1:**

```

Input: password = &quot;IloveLe3tcode!&quot;
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.

```

**Example 2:**

```

Input: password = &quot;Me+You--IsMyDream&quot;
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.

```

**Example 3:**

```

Input: password = &quot;1aB!&quot;
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.
```

 

**Constraints:**

	- `1 <= password.length <= 100`

	- `password` consists of letters, digits, and special characters: `"!@#$%^&*()-+"`.

---

**Links:** [Submissions](https://leetcode.com/problems/strong-password-checker-ii/) | [Solutions](https://leetcode.com/problems/strong-password-checker-ii/)
