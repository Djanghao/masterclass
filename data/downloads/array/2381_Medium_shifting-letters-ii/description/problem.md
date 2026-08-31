# [2381. Shifting Letters II](https://leetcode.com/problems/shifting-letters-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1743 | 71 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `google`, `facebook`, `zeta`, `veritas`

## Description

You are given a string `s` of lowercase English letters and a 2D integer array `shifts` where `shifts[i] = [start_i, end_i, direction_i]`. For every `i`, **shift** the characters in `s` from the index `start_i` to the index `end_i` (**inclusive**) forward if `direction_i = 1`, or shift the characters backward if `direction_i = 0`.

Shifting a character **forward** means replacing it with the **next** letter in the alphabet (wrapping around so that `'z'` becomes `'a'`). Similarly, shifting a character **backward** means replacing it with the **previous** letter in the alphabet (wrapping around so that `'a'` becomes `'z'`).

Return *the final string after all such shifts to *`s`* are applied*.

 

**Example 1:**

```

Input: s = &quot;abc&quot;, shifts = [[0,1,0],[1,2,1],[0,2,1]]
Output: &quot;ace&quot;
Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = &quot;zac&quot;.
Secondly, shift the characters from index 1 to index 2 forward. Now s = &quot;zbd&quot;.
Finally, shift the characters from index 0 to index 2 forward. Now s = &quot;ace&quot;.
```

**Example 2:**

```

Input: s = &quot;dztz&quot;, shifts = [[0,0,0],[1,1,1]]
Output: &quot;catz&quot;
Explanation: Firstly, shift the characters from index 0 to index 0 backward. Now s = &quot;cztz&quot;.
Finally, shift the characters from index 1 to index 1 forward. Now s = &quot;catz&quot;.

```

 

**Constraints:**

	- `1 <= s.length, shifts.length <= 5 * 10^4`

	- `shifts[i].length == 3`

	- `0 <= start_i <= end_i < s.length`

	- `0 <= direction_i <= 1`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/shifting-letters-ii/) | [Solutions](https://leetcode.com/problems/shifting-letters-ii/)
