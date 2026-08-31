# [848. Shifting Letters](https://leetcode.com/problems/shifting-letters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1526 | 140 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `microsoft`, `google`

## Description

You are given a string `s` of lowercase English letters and an integer array `shifts` of the same length.

Call the `shift()` of a letter, the next letter in the alphabet, (wrapping around so that `'z'` becomes `'a'`).

	- For example, `shift('a') = 'b'`, `shift('t') = 'u'`, and `shift('z') = 'a'`.

Now for each `shifts[i] = x`, we want to shift the first `i + 1` letters of `s`, `x` times.

Return *the final string after all such shifts to s are applied*.

 

**Example 1:**

```

Input: s = &quot;abc&quot;, shifts = [3,5,9]
Output: &quot;rpl&quot;
Explanation: We start with &quot;abc&quot;.
After shifting the first 1 letters of s by 3, we have &quot;dbc&quot;.
After shifting the first 2 letters of s by 5, we have &quot;igc&quot;.
After shifting the first 3 letters of s by 9, we have &quot;rpl&quot;, the answer.

```

**Example 2:**

```

Input: s = &quot;aaa&quot;, shifts = [1,2,3]
Output: &quot;gfd&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

	- `shifts.length == s.length`

	- `0 <= shifts[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/shifting-letters/) | [Solutions](https://leetcode.com/problems/shifting-letters/)
