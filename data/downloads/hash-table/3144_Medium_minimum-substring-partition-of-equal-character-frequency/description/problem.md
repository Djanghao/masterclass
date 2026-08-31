# [3144. Minimum Substring Partition of Equal Character Frequency](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 170 | 36 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `morgan-stanley`, `amazon`, `mitsogo`

## Description

Given a string `s`, you need to partition it into one or more **balanced** substrings. For example, if `s == "ababcc"` then `("abab", "c", "c")`, `("ab", "abc", "c")`, and `("ababcc")` are all valid partitions, but `("a", "bab", "cc")`, `("aba", "bc", "c")`, and `("ab", "abcc")` are not. The unbalanced substrings are bolded.

Return the **minimum** number of substrings that you can partition `s` into.

**Note:** A **balanced** string is a string where each character in the string occurs the same number of times.

 

**Example 1:**

**Input:** s = "fabccddg"

**Output:** 3

**Explanation:**

We can partition the string `s` into 3 substrings in one of the following ways: `("fab, "ccdd", "g")`, or `("fabc", "cd", "dg")`.

**Example 2:**

**Input:** s = "abababaccddb"

**Output:** 2

**Explanation:**

We can partition the string `s` into 2 substrings like so: `("abab", "abaccddb")`.

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s` consists only of English lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/) | [Solutions](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/)
