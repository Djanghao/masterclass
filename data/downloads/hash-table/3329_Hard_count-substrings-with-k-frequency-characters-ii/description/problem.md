# [3329. Count Substrings With K-Frequency Characters II](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 8 | 1 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)


## Description

Given a string `s` and an integer `k`, return the total number of substrings of `s` where **at least one** character appears **at least** `k` times.

 

**Example 1:**

**Input:** s = "abacb", k = 2

**Output:** 4

**Explanation:**

The valid substrings are:

	- "`aba"` (character `'a'` appears 2 times).

	- `"abac"` (character `'a'` appears 2 times).

	- `"abacb"` (character `'a'` appears 2 times).

	- `"bacb"` (character `'b'` appears 2 times).

**Example 2:**

**Input:** s = "abcde", k = 1

**Output:** 15

**Explanation:**

All substrings are valid because every character appears at least once.

 

**Constraints:**

	- `1 <= s.length <= 3 * 10^5`

	- `1 <= k <= s.length`

	- `s` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/) | [Solutions](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/)
