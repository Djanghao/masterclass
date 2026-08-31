# [943. Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1511 | 152 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `google`

## Description

Given an array of strings `words`, return *the smallest string that contains each string in* `words` *as a substring*. If there are multiple valid strings of the smallest length, return **any of them**.

You may assume that no string in `words` is a substring of another string in `words`.

 

**Example 1:**

```

Input: words = [&quot;alex&quot;,&quot;loves&quot;,&quot;leetcode&quot;]
Output: &quot;alexlovesleetcode&quot;
Explanation: All permutations of &quot;alex&quot;,&quot;loves&quot;,&quot;leetcode&quot; would also be accepted.

```

**Example 2:**

```

Input: words = [&quot;catg&quot;,&quot;ctaagt&quot;,&quot;gcta&quot;,&quot;ttca&quot;,&quot;atgcatc&quot;]
Output: &quot;gctaagttcatgcatc&quot;

```

 

**Constraints:**

	- `1 <= words.length <= 12`

	- `1 <= words[i].length <= 20`

	- `words[i]` consists of lowercase English letters.

	- All the strings of `words` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-shortest-superstring/) | [Solutions](https://leetcode.com/problems/find-the-shortest-superstring/)
