# [1190. Reverse Substrings Between Each Pair of Parentheses](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2928 | 128 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `oracle`, `bloomberg`, `microsoft`, `google`, `amazon`, `agoda`, `adobe`

## Description

You are given a string `s` that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should **not** contain any brackets.

 

**Example 1:**

```

Input: s = &quot;(abcd)&quot;
Output: &quot;dcba&quot;

```

**Example 2:**

```

Input: s = &quot;(u(love)i)&quot;
Output: &quot;iloveu&quot;
Explanation: The substring &quot;love&quot; is reversed first, then the whole string is reversed.

```

**Example 3:**

```

Input: s = &quot;(ed(et(oc))el)&quot;
Output: &quot;leetcode&quot;
Explanation: First, we reverse the substring &quot;oc&quot;, then &quot;etco&quot;, and finally, the whole string.

```

 

**Constraints:**

	- `1 <= s.length <= 2000`

	- `s` only contains lower case English characters and parentheses.

	- It is guaranteed that all parentheses are balanced.

---

**Links:** [Submissions](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/) | [Solutions](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)
