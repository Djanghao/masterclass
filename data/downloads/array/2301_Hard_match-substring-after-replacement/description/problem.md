# [2301. Match Substring After Replacement](https://leetcode.com/problems/match-substring-after-replacement/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 391 | 81 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`string-matching`](https://leetcode.com/tag/string-matching)

**Companies:** `discord`

## Description

You are given two strings `s` and `sub`. You are also given a 2D character array `mappings` where `mappings[i] = [old_i, new_i]` indicates that you may perform the following operation **any** number of times:

	- **Replace** a character `old_i` of `sub` with `new_i`.

Each character in `sub` **cannot** be replaced more than once.

Return `true`* if it is possible to make *`sub`* a substring of *`s`* by replacing zero or more characters according to *`mappings`. Otherwise, return `false`.

A **substring** is a contiguous non-empty sequence of characters within a string.

 

**Example 1:**

```

Input: s = &quot;fool3e7bar&quot;, sub = &quot;leet&quot;, mappings = [[&quot;e&quot;,&quot;3&quot;],[&quot;t&quot;,&quot;7&quot;],[&quot;t&quot;,&quot;8&quot;]]
Output: true
Explanation: Replace the first &#39;e&#39; in sub with &#39;3&#39; and &#39;t&#39; in sub with &#39;7&#39;.
Now sub = &quot;l3e7&quot; is a substring of s, so we return true.
```

**Example 2:**

```

Input: s = &quot;fooleetbar&quot;, sub = &quot;f00l&quot;, mappings = [[&quot;o&quot;,&quot;0&quot;]]
Output: false
Explanation: The string &quot;f00l&quot; is not a substring of s and no replacements can be made.
Note that we cannot replace &#39;0&#39; with &#39;o&#39;.

```

**Example 3:**

```

Input: s = &quot;Fool33tbaR&quot;, sub = &quot;leetd&quot;, mappings = [[&quot;e&quot;,&quot;3&quot;],[&quot;t&quot;,&quot;7&quot;],[&quot;t&quot;,&quot;8&quot;],[&quot;d&quot;,&quot;b&quot;],[&quot;p&quot;,&quot;b&quot;]]
Output: true
Explanation: Replace the first and second &#39;e&#39; in sub with &#39;3&#39; and &#39;d&#39; in sub with &#39;b&#39;.
Now sub = &quot;l33tb&quot; is a substring of s, so we return true.


```

 

**Constraints:**

	- `1 <= sub.length <= s.length <= 5000`

	- `0 <= mappings.length <= 1000`

	- `mappings[i].length == 2`

	- `old_i != new_i`

	- `s` and `sub` consist of uppercase and lowercase English letters and digits.

	- `old_i` and `new_i` are either uppercase or lowercase English letters or digits.

---

**Links:** [Submissions](https://leetcode.com/problems/match-substring-after-replacement/) | [Solutions](https://leetcode.com/problems/match-substring-after-replacement/)
