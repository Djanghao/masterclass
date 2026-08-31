# [1427. Perform String Shifts](https://leetcode.com/problems/perform-string-shifts/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 275 | 15 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string)

**Companies:** `goldman-sachs`

## Description

You are given a string `s` containing lowercase English letters, and a matrix `shift`, where `shift[i] = [direction_i, amount_i]`:

	- `direction_i` can be `0` (for left shift) or `1` (for right shift).

	- `amount_i` is the amount by which string `s` is to be shifted.

	- A left shift by 1 means remove the first character of `s` and append it to the end.

	- Similarly, a right shift by 1 means remove the last character of `s` and add it to the beginning.

Return the final string after all operations.

 

**Example 1:**

```

Input: s = &quot;abc&quot;, shift = [[0,1],[1,2]]
Output: &quot;cab&quot;
Explanation:&nbsp;
[0,1] means shift to left by 1. &quot;abc&quot; -&gt; &quot;bca&quot;
[1,2] means shift to right by 2. &quot;bca&quot; -&gt; &quot;cab&quot;
```

**Example 2:**

```

Input: s = &quot;abcdefg&quot;, shift = [[1,1],[1,1],[0,2],[1,3]]
Output: &quot;efgabcd&quot;
Explanation:&nbsp; 
[1,1] means shift to right by 1. &quot;abcdefg&quot; -&gt; &quot;gabcdef&quot;
[1,1] means shift to right by 1. &quot;gabcdef&quot; -&gt; &quot;fgabcde&quot;
[0,2] means shift to left by 2. &quot;fgabcde&quot; -&gt; &quot;abcdefg&quot;
[1,3] means shift to right by 3. &quot;abcdefg&quot; -&gt; &quot;efgabcd&quot;
```

 

**Constraints:**

	- `1  is either `0` or `1`.

	- `0 <= amount_i <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/perform-string-shifts/) | [Solutions](https://leetcode.com/problems/perform-string-shifts/)
