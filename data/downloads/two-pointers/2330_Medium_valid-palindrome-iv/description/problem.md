# [2330. Valid Palindrome IV](https://leetcode.com/problems/valid-palindrome-iv/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 111 | 35 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `amazon`

## Description

You are given a **0-indexed** string `s` consisting of only lowercase English letters. In one operation, you can change **any** character of `s` to any **other** character.

Return `true`* if you can make *`s`* a palindrome after performing **exactly** one or two operations, or return *`false`* otherwise.*

 

**Example 1:**

```

Input: s = &quot;abcdba&quot;
Output: true
Explanation: One way to make s a palindrome using 1 operation is:
- Change s[2] to &#39;d&#39;. Now, s = &quot;abddba&quot;.
One operation could be performed to make s a palindrome so return true.

```

**Example 2:**

```

Input: s = &quot;aa&quot;
Output: true
Explanation: One way to make s a palindrome using 2 operations is:
- Change s[0] to &#39;b&#39;. Now, s = &quot;ba&quot;.
- Change s[1] to &#39;b&#39;. Now, s = &quot;bb&quot;.
Two operations could be performed to make s a palindrome so return true.

```

**Example 3:**

```

Input: s = &quot;abcdef&quot;
Output: false
Explanation: It is not possible to make s a palindrome using one or two operations so return false.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/valid-palindrome-iv/) | [Solutions](https://leetcode.com/problems/valid-palindrome-iv/)
