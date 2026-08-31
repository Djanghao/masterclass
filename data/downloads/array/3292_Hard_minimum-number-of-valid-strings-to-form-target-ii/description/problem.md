# [3292. Minimum Number of Valid Strings to Form Target II](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 81 | 10 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`rolling-hash`](https://leetcode.com/tag/rolling-hash), [`string-matching`](https://leetcode.com/tag/string-matching), [`hash-function`](https://leetcode.com/tag/hash-function)


## Description

You are given an array of strings `words` and a string `target`.

A string `x` is called **valid** if `x` is a prefix of **any** string in `words`.

Return the **minimum** number of **valid** strings that can be *concatenated* to form `target`. If it is **not** possible to form `target`, return `-1`.

 

**Example 1:**

**Input:** words = ["abc","aaaaa","bcdef"], target = "aabcdabc"

**Output:** 3

**Explanation:**

The target string can be formed by concatenating:

	- Prefix of length 2 of `words[1]`, i.e. `"aa"`.

	- Prefix of length 3 of `words[2]`, i.e. `"bcd"`.

	- Prefix of length 3 of `words[0]`, i.e. `"abc"`.

**Example 2:**

**Input:** words = ["abababab","ab"], target = "ababaababa"

**Output:** 2

**Explanation:**

The target string can be formed by concatenating:

	- Prefix of length 5 of `words[0]`, i.e. `"ababa"`.

	- Prefix of length 5 of `words[0]`, i.e. `"ababa"`.

**Example 3:**

**Input:** words = ["abcdef"], target = "xyz"

**Output:** -1

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 5 * 10^4`

	- The input is generated such that `sum(words[i].length) <= 10^5`.

	- `words[i]` consists only of lowercase English letters.

	- `1 <= target.length <= 5 * 10^4`

	- `target` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/) | [Solutions](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/)
