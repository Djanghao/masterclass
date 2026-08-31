# [3295. Report Spam Message](https://leetcode.com/problems/report-spam-message/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 95 | 25 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `salesforce`, `ibm`

## Description

You are given an array of strings `message` and an array of strings `bannedWords`.

An array of words is considered **spam** if there are **at least** two words in it that exactly match any word in `bannedWords`.

Return `true` if the array `message` is spam, and `false` otherwise.

 

**Example 1:**

**Input:** message = ["hello","world","leetcode"], bannedWords = ["world","hello"]

**Output:** true

**Explanation:**

The words `"hello"` and `"world"` from the `message` array both appear in the `bannedWords` array.

**Example 2:**

**Input:** message = ["hello","programming","fun"], bannedWords = ["world","programming","leetcode"]

**Output:** false

**Explanation:**

Only one word from the `message` array (`"programming"`) appears in the `bannedWords` array.

 

**Constraints:**

	- `1 <= message.length, bannedWords.length <= 10^5`

	- `1 <= message[i].length, bannedWords[i].length <= 15`

	- `message[i]` and `bannedWords[i]` consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/report-spam-message/) | [Solutions](https://leetcode.com/problems/report-spam-message/)
