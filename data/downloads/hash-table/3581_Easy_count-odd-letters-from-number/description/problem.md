# [3581. Count Odd Letters from Number](https://leetcode.com/problems/count-odd-letters-from-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 8 | 2 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation), [`counting`](https://leetcode.com/tag/counting)


## Description

You are given an integer `n` perform the following steps:

	- Convert each digit of `n` into its *lowercase English word* (e.g., 4 &rarr; "four", 1 &rarr; "one").

	- **Concatenate** those words in the **original digit order** to form a string `s`.

Return the number of **distinct** characters in `s` that appear an **odd** number of times.

 

**Example 1:**

**Input:** n = 41

**Output:** 5

**Explanation:**

41 &rarr; `"fourone"`

Characters with odd frequencies: `'f'`, `'u'`, `'r'`, `'n'`, `'e'`. Thus, the answer is 5.

**Example 2:**

**Input:** n = 20

**Output:** 5

**Explanation:**

20 &rarr; `"twozero"`

Characters with odd frequencies: `'t'`, `'w'`, `'z'`, `'e'`, `'r'`. Thus, the answer is 5.

 

**Constraints:**

	- `1 <= n <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/count-odd-letters-from-number/) | [Solutions](https://leetcode.com/problems/count-odd-letters-from-number/)
