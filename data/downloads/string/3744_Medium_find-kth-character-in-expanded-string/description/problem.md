# [3744. Find Kth Character in Expanded String](https://leetcode.com/problems/find-kth-character-in-expanded-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5 | 2 |

**Tags:** [`string`](https://leetcode.com/tag/string)


## Description

You are given a string `s` consisting of one or more words separated by single spaces. Each word in `s` consists of lowercase English letters.

We obtain the **expanded** string `t` from `s` as follows:

	- For each **word** in `s`, repeat its first character once, then its second character twice, and so on.

For example, if `s = "hello world"`, then `t = "heelllllllooooo woorrrllllddddd"`.

You are also given an integer `k`, representing a **valid** index of the string `t`.

Return the `k^th` character of the string `t`.

 

**Example 1:**

**Input:** s = "hello world", k = 0

**Output:** "h"

**Explanation:**

`t = "heelllllllooooo woorrrllllddddd"`. Therefore, the answer is `t[0] = "h"`.

**Example 2:**

**Input:** s = "hello world", k = 15

**Output:** " "

**Explanation:**

`t = "heelllllllooooo woorrrllllddddd"`. Therefore, the answer is `t[15] = " "`.

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` contains only lowercase English letters and spaces `' '`.

	- `s` **does not contain** any leading or trailing spaces.

	- All the words in `s` are separated by a **single space**.

	- `0 <= k < t.length`. That is, `k` is a **valid** index of `t`.

---

**Links:** [Submissions](https://leetcode.com/problems/find-kth-character-in-expanded-string/) | [Solutions](https://leetcode.com/problems/find-kth-character-in-expanded-string/)
