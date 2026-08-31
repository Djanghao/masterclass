# [1592. Rearrange Spaces Between Words](https://leetcode.com/problems/rearrange-spaces-between-words/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 488 | 354 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

You are given a string `text` of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that `text` **contains at least one word**.

Rearrange the spaces so that there is an **equal** number of spaces between every pair of adjacent words and that number is **maximized**. If you cannot redistribute all the spaces equally, place the **extra spaces at the end**, meaning the returned string should be the same length as `text`.

Return *the string after rearranging the spaces*.

 

**Example 1:**

```

Input: text = &quot;  this   is  a sentence &quot;
Output: &quot;this   is   a   sentence&quot;
Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

```

**Example 2:**

```

Input: text = &quot; practice   makes   perfect&quot;
Output: &quot;practice   makes   perfect &quot;
Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.

```

 

**Constraints:**

	- `1 <= text.length <= 100`

	- `text` consists of lowercase English letters and `' '`.

	- `text` contains at least one word.

---

**Links:** [Submissions](https://leetcode.com/problems/rearrange-spaces-between-words/) | [Solutions](https://leetcode.com/problems/rearrange-spaces-between-words/)
