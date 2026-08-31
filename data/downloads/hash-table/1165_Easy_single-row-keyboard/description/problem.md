# [1165. Single-Row Keyboard](https://leetcode.com/problems/single-row-keyboard/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 542 | 23 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

There is a special keyboard with **all keys in a single row**.

Given a string `keyboard` of length `26` indicating the layout of the keyboard (indexed from `0` to `25`). Initially, your finger is at index `0`. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index `i` to index `j` is `|i - j|`.

You want to type a string `word`. Write a function to calculate how much time it takes to type it with one finger.

 

**Example 1:**

```

Input: keyboard = &quot;abcdefghijklmnopqrstuvwxyz&quot;, word = &quot;cba&quot;
Output: 4
Explanation: The index moves from 0 to 2 to write &#39;c&#39; then to 1 to write &#39;b&#39; then to 0 again to write &#39;a&#39;.
Total time = 2 + 1 + 1 = 4. 

```

**Example 2:**

```

Input: keyboard = &quot;pqrstuvwxyzabcdefghijklmno&quot;, word = &quot;leetcode&quot;
Output: 73

```

 

**Constraints:**

	- `keyboard.length == 26`

	- `keyboard` contains each English lowercase letter exactly once in some order.

	- `1 <= word.length <= 10^4`

	- `word[i]` is an English lowercase letter.

---

**Links:** [Submissions](https://leetcode.com/problems/single-row-keyboard/) | [Solutions](https://leetcode.com/problems/single-row-keyboard/)
