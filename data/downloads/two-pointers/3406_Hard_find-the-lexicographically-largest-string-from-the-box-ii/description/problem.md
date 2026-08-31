# [3406. Find the Lexicographically Largest String From the Box II](https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 6 | 1 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)


## Description

You are given a string `word`, and an integer `numFriends`.

Alice is organizing a game for her `numFriends` friends. There are multiple rounds in the game, where in each round:

	- `word` is split into `numFriends` **non-empty** strings, such that no previous round has had the **exact** same split.

	- All the split words are put into a box.

Find the **lexicographically largest** string from the box after all the rounds are finished.

A string `a` is **lexicographically smaller** than a string `b` if in the first position where `a` and `b` differ, string `a` has a letter that appears earlier in the alphabet than the corresponding letter in `b`.

If the first `min(a.length, b.length)` characters do not differ, then the shorter string is the lexicographically smaller one.

 

**Example 1:**

**Input:** word = "dbca", numFriends = 2

**Output:** "dbc"

**Explanation:**

All possible splits are:

	- `"d"` and `"bca"`.

	- `"db"` and `"ca"`.

	- `"dbc"` and `"a"`.

**Example 2:**

**Input:** word = "gggg", numFriends = 4

**Output:** "g"

**Explanation:**

The only possible split is: `"g"`, `"g"`, `"g"`, and `"g"`.

 

**Constraints:**

	- `1 <= word.length <= 2 * 10^5`

	- `word` consists only of lowercase English letters.

	- `1 <= numFriends <= word.length`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-ii/) | [Solutions](https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-ii/)
