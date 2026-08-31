# [3557. Find Maximum Number of Non Intersecting Substrings](https://leetcode.com/problems/find-maximum-number-of-non-intersecting-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 73 | 3 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `bloomberg`

## Description

You are given a string `word`.

Return the **maximum** number of non-intersecting **substrings** of word that are at **least** four characters long and start and end with the same letter.

 

**Example 1:**

**Input:** word = "abcdeafdef"

**Output:** 2

**Explanation:**

The two substrings are `"abcdea"` and `"fdef"`.

**Example 2:**

**Input:** word = "bcdaaaab"

**Output:** 1

**Explanation:**

The only substring is `"aaaa"`. Note that we cannot **also** choose `"bcdaaaab"` since it intersects with the other substring.

 

**Constraints:**

	- `1 <= word.length <= 2 * 10^5`

	- `word` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/find-maximum-number-of-non-intersecting-substrings/) | [Solutions](https://leetcode.com/problems/find-maximum-number-of-non-intersecting-substrings/)
