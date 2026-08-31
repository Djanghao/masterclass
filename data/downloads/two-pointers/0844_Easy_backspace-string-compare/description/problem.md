# [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 7857 | 378 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `google`, `microsoft`, `amazon`, `facebook`, `microstrategy`, `agoda`, `goldman-sachs`, `tinkoff`, `oracle`, `bookingcom`, `ibm`, `wayfair`

## Description

Given two strings `s` and `t`, return `true` *if they are equal when both are typed into empty text editors*. `'#'` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

**Example 1:**

```

Input: s = &quot;ab#c&quot;, t = &quot;ad#c&quot;
Output: true
Explanation: Both s and t become &quot;ac&quot;.

```

**Example 2:**

```

Input: s = &quot;ab##&quot;, t = &quot;c#d#&quot;
Output: true
Explanation: Both s and t become &quot;&quot;.

```

**Example 3:**

```

Input: s = &quot;a#c&quot;, t = &quot;b&quot;
Output: false
Explanation: s becomes &quot;c&quot; while t becomes &quot;b&quot;.

```

 

**Constraints:**

	- `1 <= s.length, t.length <= 200`

	- `s` and `t` only contain lowercase letters and `'#'` characters.

 

**Follow up:** Can you solve it in `O(n)` time and `O(1)` space?

---

**Links:** [Submissions](https://leetcode.com/problems/backspace-string-compare/) | [Solutions](https://leetcode.com/problems/backspace-string-compare/)
