# [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 7308 | 163 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `facebook`, `bloomberg`, `tiktok`, `snapchat`, `amazon`, `microsoft`, `google`, `apple`, `walmart-labs`

## Description

Given a string s of `'('` , `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting *parentheses string* is valid and return **any** valid string.

Formally, a *parentheses string* is valid if and only if:

	- It is the empty string, contains only lowercase characters, or

	- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or

	- It can be written as `(A)`, where `A` is a valid string.

 

**Example 1:**

```

Input: s = &quot;lee(t(c)o)de)&quot;
Output: &quot;lee(t(c)o)de&quot;
Explanation: &quot;lee(t(co)de)&quot; , &quot;lee(t(c)ode)&quot; would also be accepted.

```

**Example 2:**

```

Input: s = &quot;a)b(c)d&quot;
Output: &quot;ab(c)d&quot;

```

**Example 3:**

```

Input: s = &quot;))((&quot;
Output: &quot;&quot;
Explanation: An empty string is also valid.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s[i]` is either `'('` , `')'`, or lowercase English letter.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) | [Solutions](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)
