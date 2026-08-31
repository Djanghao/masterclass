# [3019. Number of Changing Keys](https://leetcode.com/problems/number-of-changing-keys/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 154 | 15 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `apple`, `autodesk`

## Description

You are given a **0-indexed **string `s` typed by a user. Changing a key is defined as using a key different from the last used key. For example, `s = "ab"` has a change of a key while `s = "bBBb"` does not have any.

Return *the number of times the user had to change the key. *

**Note: **Modifiers like `shift` or `caps lock` won't be counted in changing the key that is if a user typed the letter `'a'` and then the letter `'A'` then it will not be considered as a changing of key.

 

**Example 1:**

```

Input: s = &quot;aAbBcC&quot;
Output: 2
Explanation: 
From s[0] = &#39;a&#39; to s[1] = &#39;A&#39;, there is no change of key as caps lock or shift is not counted.
From s[1] = &#39;A&#39; to s[2] = &#39;b&#39;, there is a change of key.
From s[2] = &#39;b&#39; to s[3] = &#39;B&#39;, there is no change of key as caps lock or shift is not counted.
From s[3] = &#39;B&#39; to s[4] = &#39;c&#39;, there is a change of key.
From s[4] = &#39;c&#39; to s[5] = &#39;C&#39;, there is no change of key as caps lock or shift is not counted.


```

**Example 2:**

```

Input: s = &quot;AaAaAaaA&quot;
Output: 0
Explanation: There is no change of key since only the letters &#39;a&#39; and &#39;A&#39; are pressed which does not require change of key.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists of only upper case and lower case English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-changing-keys/) | [Solutions](https://leetcode.com/problems/number-of-changing-keys/)
