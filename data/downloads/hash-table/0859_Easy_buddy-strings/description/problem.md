# [859. Buddy Strings](https://leetcode.com/problems/buddy-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 3330 | 1844 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `doordash`, `zoho`

## Description

Given two strings `s` and `goal`, return `true`* if you can swap two letters in *`s`* so the result is equal to *`goal`*, otherwise, return *`false`*.*

Swapping letters is defined as taking two indices `i` and `j` (0-indexed) such that `i != j` and swapping the characters at `s[i]` and `s[j]`.

	- For example, swapping at indices `0` and `2` in `"abcd"` results in `"cbad"`.

 

**Example 1:**

```

Input: s = &quot;ab&quot;, goal = &quot;ba&quot;
Output: true
Explanation: You can swap s[0] = &#39;a&#39; and s[1] = &#39;b&#39; to get &quot;ba&quot;, which is equal to goal.

```

**Example 2:**

```

Input: s = &quot;ab&quot;, goal = &quot;ab&quot;
Output: false
Explanation: The only letters you can swap are s[0] = &#39;a&#39; and s[1] = &#39;b&#39;, which results in &quot;ba&quot; != goal.

```

**Example 3:**

```

Input: s = &quot;aa&quot;, goal = &quot;aa&quot;
Output: true
Explanation: You can swap s[0] = &#39;a&#39; and s[1] = &#39;a&#39; to get &quot;aa&quot;, which is equal to goal.

```

 

**Constraints:**

	- `1 <= s.length, goal.length <= 2 * 10^4`

	- `s` and `goal` consist of lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/buddy-strings/) | [Solutions](https://leetcode.com/problems/buddy-strings/)
