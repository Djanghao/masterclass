# [2337. Move Pieces to Obtain a String](https://leetcode.com/problems/move-pieces-to-obtain-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1446 | 83 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `facebook`, `bloomberg`, `amazon`

## Description

You are given two strings `start` and `target`, both of length `n`. Each string consists **only** of the characters `'L'`, `'R'`, and `'_'` where:

	- The characters `'L'` and `'R'` represent pieces, where a piece `'L'` can move to the **left** only if there is a **blank** space directly to its left, and a piece `'R'` can move to the **right** only if there is a **blank** space directly to its right.

	- The character `'_'` represents a blank space that can be occupied by **any** of the `'L'` or `'R'` pieces.

Return `true` *if it is possible to obtain the string* `target`* by moving the pieces of the string *`start`* **any** number of times*. Otherwise, return `false`.

 

**Example 1:**

```

Input: start = &quot;_L__R__R_&quot;, target = &quot;L______RR&quot;
Output: true
Explanation: We can obtain the string target from start by doing the following moves:
- Move the first piece one step to the left, start becomes equal to &quot;L___R__R_&quot;.
- Move the last piece one step to the right, start becomes equal to &quot;L___R___R&quot;.
- Move the second piece three steps to the right, start becomes equal to &quot;L______RR&quot;.
Since it is possible to get the string target from start, we return true.

```

**Example 2:**

```

Input: start = &quot;R_L_&quot;, target = &quot;__LR&quot;
Output: false
Explanation: The &#39;R&#39; piece in the string start can move one step to the right to obtain &quot;_RL_&quot;.
After that, no pieces can move anymore, so it is impossible to obtain the string target from start.

```

**Example 3:**

```

Input: start = &quot;_R&quot;, target = &quot;R_&quot;
Output: false
Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.
```

 

**Constraints:**

	- `n == start.length == target.length`

	- `1 <= n <= 10^5`

	- `start` and `target` consist of the characters `'L'`, `'R'`, and `'_'`.

---

**Links:** [Submissions](https://leetcode.com/problems/move-pieces-to-obtain-a-string/) | [Solutions](https://leetcode.com/problems/move-pieces-to-obtain-a-string/)
