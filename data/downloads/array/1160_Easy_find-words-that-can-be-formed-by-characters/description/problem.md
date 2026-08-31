# [1160. Find Words That Can Be Formed by Characters](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 2235 | 189 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `karat`, `amazon`, `facebook`

## Description

You are given an array of strings `words` and a string `chars`.

A string is **good** if it can be formed by characters from `chars` (each character can only be used once for **each** word in `words`).

Return *the sum of lengths of all good strings in words*.

 

**Example 1:**

```

Input: words = [&quot;cat&quot;,&quot;bt&quot;,&quot;hat&quot;,&quot;tree&quot;], chars = &quot;atach&quot;
Output: 6
Explanation: The strings that can be formed are &quot;cat&quot; and &quot;hat&quot; so the answer is 3 + 3 = 6.

```

**Example 2:**

```

Input: words = [&quot;hello&quot;,&quot;world&quot;,&quot;leetcode&quot;], chars = &quot;welldonehoneyr&quot;
Output: 10
Explanation: The strings that can be formed are &quot;hello&quot; and &quot;world&quot; so the answer is 5 + 5 = 10.

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length, chars.length <= 100`

	- `words[i]` and `chars` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/) | [Solutions](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)
