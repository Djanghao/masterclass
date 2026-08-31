# [3442. Maximum Difference Between Even and Odd Frequency I](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 386 | 71 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `microsoft`, `amazon`, `google`

## Description

You are given a string `s` consisting of lowercase English letters.

Your task is to find the **maximum** difference `diff = freq(a_1) - freq(a_2)` between the frequency of characters `a_1` and `a_2` in the string such that:

	- `a_1` has an **odd frequency** in the string.

	- `a_2` has an **even frequency** in the string.

Return this **maximum** difference.

 

**Example 1:**

**Input:** s = "aaaaabbc"

**Output:** 3

**Explanation:**

	- The character `'a'` has an **odd frequency** of `5`, and `'b'` has an **even frequency** of `2`.

	- The maximum difference is `5 - 2 = 3`.

**Example 2:**

**Input:** s = "abcabcab"

**Output:** 1

**Explanation:**

	- The character `'a'` has an **odd frequency** of `3`, and `'c'` has an **even frequency** of 2.

	- The maximum difference is `3 - 2 = 1`.

 

**Constraints:**

	- `3 <= s.length <= 100`

	- `s` consists only of lowercase English letters.

	- `s` contains at least one character with an odd frequency and one with an even frequency.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/) | [Solutions](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/)
