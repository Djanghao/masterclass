# [2380. Time Needed to Rearrange a Binary String](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 547 | 114 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `wayfair`, `salesforce`, `servicenow`, `paypal`, `amazon`

## Description

You are given a binary string `s`. In one second, **all** occurrences of `"01"` are **simultaneously** replaced with `"10"`. This process **repeats** until no occurrences of `"01"` exist.

Return* the number of seconds needed to complete this process.*

 

**Example 1:**

```

Input: s = &quot;0110101&quot;
Output: 4
Explanation: 
After one second, s becomes &quot;1011010&quot;.
After another second, s becomes &quot;1101100&quot;.
After the third second, s becomes &quot;1110100&quot;.
After the fourth second, s becomes &quot;1111000&quot;.
No occurrence of &quot;01&quot; exists any longer, and the process needed 4 seconds to complete,
so we return 4.

```

**Example 2:**

```

Input: s = &quot;11100&quot;
Output: 0
Explanation:
No occurrence of &quot;01&quot; exists in s, and the processes needed 0 seconds to complete,
so we return 0.

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s[i]` is either `'0'` or `'1'`.

 

**Follow up:**

Can you solve this problem in O(n) time complexity?

---

**Links:** [Submissions](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/) | [Solutions](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/)
