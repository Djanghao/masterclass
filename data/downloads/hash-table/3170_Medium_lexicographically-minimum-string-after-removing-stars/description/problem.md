# [3170. Lexicographically Minimum String After Removing Stars](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 582 | 85 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `amazon`, `google`, `facebook`, `bloomberg`, `flexera`

## Description

You are given a string `s`. It may contain any number of `'*'` characters. Your task is to remove all `'*'` characters.

While there is a `'*'`, do the following operation:

	- Delete the leftmost `'*'` and the **smallest** non-`'*'` character to its *left*. If there are several smallest characters, you can delete any of them.

Return the lexicographically smallest resulting string after removing all `'*'` characters.

 

**Example 1:**

**Input:** s = "aaba*"

**Output:** "aab"

**Explanation:**

We should delete one of the `'a'` characters with `'*'`. If we choose `s[3]`, `s` becomes the lexicographically smallest.

**Example 2:**

**Input:** s = "abc"

**Output:** "abc"

**Explanation:**

There is no `'*'` in the string.

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists only of lowercase English letters and `'*'`.

	- The input is generated such that it is possible to delete all `'*'` characters.

---

**Links:** [Submissions](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/) | [Solutions](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/)
