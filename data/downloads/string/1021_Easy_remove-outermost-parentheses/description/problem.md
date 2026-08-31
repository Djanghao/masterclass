# [1021. Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 3597 | 1708 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `google`, `facebook`, `amazon`, `bloomberg`, `microsoft`

## Description

A valid parentheses string is either empty `""`, `"(" + A + ")"`, or `A + B`, where `A` and `B` are valid parentheses strings, and `+` represents string concatenation.

	- For example, `""`, `"()"`, `"(())()"`, and `"(()(()))"` are all valid parentheses strings.

A valid parentheses string `s` is primitive if it is nonempty, and there does not exist a way to split it into `s = A + B`, with `A` and `B` nonempty valid parentheses strings.

Given a valid parentheses string `s`, consider its primitive decomposition: `s = P_1 + P_2 + ... + P_k`, where `P_i` are primitive valid parentheses strings.

Return `s` *after removing the outermost parentheses of every primitive string in the primitive decomposition of *`s`.

 

**Example 1:**

```

Input: s = &quot;(()())(())&quot;
Output: &quot;()()()&quot;
Explanation: 
The input string is &quot;(()())(())&quot;, with primitive decomposition &quot;(()())&quot; + &quot;(())&quot;.
After removing outer parentheses of each part, this is &quot;()()&quot; + &quot;()&quot; = &quot;()()()&quot;.

```

**Example 2:**

```

Input: s = &quot;(()())(())(()(()))&quot;
Output: &quot;()()()()(())&quot;
Explanation: 
The input string is &quot;(()())(())(()(()))&quot;, with primitive decomposition &quot;(()())&quot; + &quot;(())&quot; + &quot;(()(()))&quot;.
After removing outer parentheses of each part, this is &quot;()()&quot; + &quot;()&quot; + &quot;()(())&quot; = &quot;()()()()(())&quot;.

```

**Example 3:**

```

Input: s = &quot;()()&quot;
Output: &quot;&quot;
Explanation: 
The input string is &quot;()()&quot;, with primitive decomposition &quot;()&quot; + &quot;()&quot;.
After removing outer parentheses of each part, this is &quot;&quot; + &quot;&quot; = &quot;&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s[i]` is either `'('` or `')'`.

	- `s` is a valid parentheses string.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-outermost-parentheses/) | [Solutions](https://leetcode.com/problems/remove-outermost-parentheses/)
