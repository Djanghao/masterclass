# [1897. Redistribute Characters to Make All Strings Equal](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1158 | 83 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`, `moengage`

## Description

You are given an array of strings `words` (**0-indexed**).

In one operation, pick two **distinct** indices `i` and `j`, where `words[i]` is a non-empty string, and move **any** character from `words[i]` to **any** position in `words[j]`.

Return `true` *if you can make** every** string in *`words`* **equal **using **any** number of operations*,* and *`false` *otherwise*.

 

**Example 1:**

```

Input: words = [&quot;abc&quot;,&quot;aabc&quot;,&quot;bc&quot;]
Output: true
Explanation: Move the first &#39;a&#39; in words[1] to the front of words[2],
to make words[1] = &quot;abc&quot; and words[2] = &quot;abc&quot;.
All the strings are now equal to &quot;abc&quot;, so return true.

```

**Example 2:**

```

Input: words = [&quot;ab&quot;,&quot;a&quot;]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.

```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 100`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/) | [Solutions](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/)
