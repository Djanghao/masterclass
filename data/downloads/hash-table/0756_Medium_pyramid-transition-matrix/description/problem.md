# [756. Pyramid Transition Matrix](https://leetcode.com/problems/pyramid-transition-matrix/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 552 | 493 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `airbnb`, `google`

## Description

You are stacking blocks to form a pyramid. Each block has a color, which is represented by a single letter. Each row of blocks contains **one less block** than the row beneath it and is centered on top.

To make the pyramid aesthetically pleasing, there are only specific **triangular patterns** that are allowed. A triangular pattern consists of a **single block** stacked on top of **two blocks**. The patterns are given as a list of three-letter strings `allowed`, where the first two characters of a pattern represent the left and right bottom blocks respectively, and the third character is the top block.

	- For example, `"ABC"` represents a triangular pattern with a `'C'` block stacked on top of an `'A'` (left) and `'B'` (right) block. Note that this is different from `"BAC"` where `'B'` is on the left bottom and `'A'` is on the right bottom.

You start with a bottom row of blocks `bottom`, given as a single string, that you **must** use as the base of the pyramid.

Given `bottom` and `allowed`, return `true`* if you can build the pyramid all the way to the top such that **every triangular pattern** in the pyramid is in *`allowed`*, or *`false`* otherwise*.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: bottom = &quot;BCD&quot;, allowed = [&quot;BCC&quot;,&quot;CDE&quot;,&quot;CEA&quot;,&quot;FFF&quot;]
Output: true
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 3), we can build &quot;CE&quot; on level 2 and then build &quot;A&quot; on level 1.
There are three triangular patterns in the pyramid, which are &quot;BCC&quot;, &quot;CDE&quot;, and &quot;CEA&quot;. All are allowed.

```

**Example 2:**

![image](./images/1.jpg)
```

Input: bottom = &quot;AAAA&quot;, allowed = [&quot;AAB&quot;,&quot;AAC&quot;,&quot;BCD&quot;,&quot;BBE&quot;,&quot;DEF&quot;]
Output: false
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 4), there are multiple ways to build level 3, but trying all the possibilites, you will get always stuck before building level 1.

```

 

**Constraints:**

	- `2 <= bottom.length <= 6`

	- `0 <= allowed.length <= 216`

	- `allowed[i].length == 3`

	- The letters in all input strings are from the set `{'A', 'B', 'C', 'D', 'E', 'F'}`.

	- All the values of `allowed` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/pyramid-transition-matrix/) | [Solutions](https://leetcode.com/problems/pyramid-transition-matrix/)
