# [906. Super Palindromes](https://leetcode.com/problems/super-palindromes/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 375 | 423 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `google`

## Description

Let's say a positive integer is a **super-palindrome** if it is a palindrome, and it is also the square of a palindrome.

Given two positive integers `left` and `right` represented as strings, return *the number of **super-palindromes** integers in the inclusive range* `[left, right]`.

 

**Example 1:**

```

Input: left = &quot;4&quot;, right = &quot;1000&quot;
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.

```

**Example 2:**

```

Input: left = &quot;1&quot;, right = &quot;2&quot;
Output: 1

```

 

**Constraints:**

	- `1 <= left.length, right.length <= 18`

	- `left` and `right` consist of only digits.

	- `left` and `right` cannot have leading zeros.

	- `left` and `right` represent integers in the range `[1, 10^18 - 1]`.

	- `left` is less than or equal to `right`.

---

**Links:** [Submissions](https://leetcode.com/problems/super-palindromes/) | [Solutions](https://leetcode.com/problems/super-palindromes/)
