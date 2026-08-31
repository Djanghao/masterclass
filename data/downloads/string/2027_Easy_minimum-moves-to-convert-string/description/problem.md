# [2027. Minimum Moves to Convert String](https://leetcode.com/problems/minimum-moves-to-convert-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 519 | 79 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`, `jeavio`

## Description

You are given a string `s` consisting of `n` characters which are either `'X'` or `'O'`.

A **move** is defined as selecting **three** **consecutive characters** of `s` and converting them to `'O'`. Note that if a move is applied to the character `'O'`, it will stay the **same**.

Return *the **minimum** number of moves required so that all the characters of *`s`* are converted to *`'O'`.

 

**Example 1:**

```

Input: s = &quot;XXX&quot;
Output: 1
Explanation: XXX -&gt; OOO
We select all the 3 characters and convert them in one move.

```

**Example 2:**

```

Input: s = &quot;XXOX&quot;
Output: 2
Explanation: XXOX -&gt; OOOX -&gt; OOOO
We select the first 3 characters in the first move, and convert them to &#39;O&#39;.
Then we select the last 3 characters and convert them so that the final string contains all &#39;O&#39;s.
```

**Example 3:**

```

Input: s = &quot;OOOO&quot;
Output: 0
Explanation: There are no &#39;X&#39;s in s to convert.

```

 

**Constraints:**

	- `3 <= s.length <= 1000`

	- `s[i]` is either `'X'` or `'O'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-moves-to-convert-string/) | [Solutions](https://leetcode.com/problems/minimum-moves-to-convert-string/)
