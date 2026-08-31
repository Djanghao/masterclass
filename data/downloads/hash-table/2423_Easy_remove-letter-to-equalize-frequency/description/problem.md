# [2423. Remove Letter To Equalize Frequency](https://leetcode.com/problems/remove-letter-to-equalize-frequency/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 775 | 1344 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `bloomberg`, `google`, `walmart-labs`, `tcs`

## Description

You are given a **0-indexed** string `word`, consisting of lowercase English letters. You need to select **one** index and **remove** the letter at that index from `word` so that the **frequency** of every letter present in `word` is equal.

Return* *`true`* if it is possible to remove one letter so that the frequency of all letters in *`word`* are equal, and *`false`* otherwise*.

**Note:**

	- The frequency of a letter `x` is the number of times it occurs in the string.

	- You **must** remove exactly one letter and cannot choose to do nothing.

 

**Example 1:**

```

Input: word = &quot;abcc&quot;
Output: true
Explanation: Select index 3 and delete it: word becomes &quot;abc&quot; and each character has a frequency of 1.

```

**Example 2:**

```

Input: word = &quot;aazz&quot;
Output: false
Explanation: We must delete a character, so either the frequency of &quot;a&quot; is 1 and the frequency of &quot;z&quot; is 2, or vice versa. It is impossible to make all present letters have equal frequency.

```

 

**Constraints:**

	- `2 <= word.length <= 100`

	- `word` consists of lowercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-letter-to-equalize-frequency/) | [Solutions](https://leetcode.com/problems/remove-letter-to-equalize-frequency/)
