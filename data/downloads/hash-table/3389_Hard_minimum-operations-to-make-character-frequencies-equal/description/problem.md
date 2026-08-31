# [3389. Minimum Operations to Make Character Frequencies Equal](https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 74 | 2 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`counting`](https://leetcode.com/tag/counting), [`enumeration`](https://leetcode.com/tag/enumeration)


## Description

You are given a string `s`.

A string `t` is called **good** if all characters of `t` occur the same number of times.

You can perform the following operations **any number of times**:

	- Delete a character from `s`.

	- Insert a character in `s`.

	- Change a character in `s` to its next letter in the alphabet.

**Note** that you cannot change `'z'` to `'a'` using the third operation.

Return* *the **minimum** number of operations required to make `s` **good**.

 

**Example 1:**

**Input:** s = "acab"

**Output:** 1

**Explanation:**

We can make `s` good by deleting one occurrence of character `'a'`.

**Example 2:**

**Input:** s = "wddw"

**Output:** 0

**Explanation:**

We do not need to perform any operations since `s` is initially good.

**Example 3:**

**Input:** s = "aaabc"

**Output:** 2

**Explanation:**

We can make `s` good by applying these operations:

	- Change one occurrence of `'a'` to `'b'`

	- Insert one occurrence of `'c'` into `s`

 

**Constraints:**

	- `3 <= s.length <= 2 * 10^4`

	- `s` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/) | [Solutions](https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/)
