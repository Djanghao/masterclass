# [3773. Maximum Number of Equal Length Runs](https://leetcode.com/problems/maximum-number-of-equal-length-runs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3 | 2 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)


## Description

You are given a string `s` consisting of lowercase English letters.

A **run** in `s` is a **substring** of **equal** letters that cannot be extended further. For example, the runs in `"hello"` are `"h"`, `"e"`, `"ll"`, and `"o"`.

You can **select** runs that have the **same** length in `s`.

Return an integer denoting the **maximum** number of runs you can select in `s`.

 

**Example 1:**

**Input:** s = "hello"

**Output:** 3

**Explanation:**

The runs in `s` are `"h"`, `"e"`, `"ll"`, and `"o"`. You can select `"h"`, `"e"`, and `"o"` because they have the same length 1.

**Example 2:**

**Input:** s = "aaabaaa"

**Output:** 2

**Explanation:**

The runs in `s` are `"aaa"`, `"b"`, and `"aaa"`. You can select `"aaa"` and `"aaa"` because they have the same length 3.

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-number-of-equal-length-runs/) | [Solutions](https://leetcode.com/problems/maximum-number-of-equal-length-runs/)
