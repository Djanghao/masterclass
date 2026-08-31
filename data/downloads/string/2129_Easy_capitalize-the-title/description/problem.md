# [2129. Capitalize the Title](https://leetcode.com/problems/capitalize-the-title/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 804 | 52 |

**Tags:** [`string`](https://leetcode.com/tag/string)


## Description

You are given a string `title` consisting of one or more words separated by a single space, where each word consists of English letters. **Capitalize** the string by changing the capitalization of each word such that:

	- If the length of the word is `1` or `2` letters, change all letters to lowercase.

	- Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

Return *the **capitalized** *`title`.

 

**Example 1:**

```

Input: title = &quot;capiTalIze tHe titLe&quot;
Output: &quot;Capitalize The Title&quot;
Explanation:
Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

```

**Example 2:**

```

Input: title = &quot;First leTTeR of EACH Word&quot;
Output: &quot;First Letter of Each Word&quot;
Explanation:
The word &quot;of&quot; has length 2, so it is all lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

```

**Example 3:**

```

Input: title = &quot;i lOve leetcode&quot;
Output: &quot;i Love Leetcode&quot;
Explanation:
The word &quot;i&quot; has length 1, so it is lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

```

 

**Constraints:**

	- `1 <= title.length <= 100`

	- `title` consists of words separated by a single space without any leading or trailing spaces.

	- Each word consists of uppercase and lowercase English letters and is **non-empty**.

---

**Links:** [Submissions](https://leetcode.com/problems/capitalize-the-title/) | [Solutions](https://leetcode.com/problems/capitalize-the-title/)
