# [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4887 | 246 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `facebook`, `amazon`, `ibm`, `google`, `bloomberg`, `tiktok`, `tcs`

## Description

A parentheses string is valid if and only if:

	- It is the empty string,

	- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or

	- It can be written as `(A)`, where `A` is a valid string.

You are given a parentheses string `s`. In one move, you can insert a parenthesis at any position of the string.

	- For example, if `s = "()))"`, you can insert an opening parenthesis to be `"(()))"` or a closing parenthesis to be `"())))"`.

Return *the minimum number of moves required to make *`s`* valid*.

 

**Example 1:**

```

Input: s = &quot;())&quot;
Output: 1

```

**Example 2:**

```

Input: s = &quot;(((&quot;
Output: 3

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s[i]` is either `'('` or `')'`.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) | [Solutions](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)
