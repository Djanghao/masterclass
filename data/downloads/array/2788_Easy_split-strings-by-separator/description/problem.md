# [2788. Split Strings by Separator](https://leetcode.com/problems/split-strings-by-separator/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 340 | 13 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `apple`

## Description

Given an array of strings `words` and a character `separator`, **split** each string in `words` by `separator`.

Return *an array of strings containing the new strings formed after the splits, **excluding empty strings**.*

**Notes**

	- `separator` is used to determine where the split should occur, but it is not included as part of the resulting strings.

	- A split may result in more than two strings.

	- The resulting strings must maintain the same order as they were initially given.

 

**Example 1:**

```

Input: words = [&quot;one.two.three&quot;,&quot;four.five&quot;,&quot;six&quot;], separator = &quot;.&quot;
Output: [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;,&quot;five&quot;,&quot;six&quot;]
Explanation: In this example we split as follows:

&quot;one.two.three&quot; splits into &quot;one&quot;, &quot;two&quot;, &quot;three&quot;
&quot;four.five&quot; splits into &quot;four&quot;, &quot;five&quot;
&quot;six&quot; splits into &quot;six&quot; 

Hence, the resulting array is [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;,&quot;five&quot;,&quot;six&quot;].
```

**Example 2:**

```

Input: words = [&quot;$easy___PRE_BLOCK_1___quot;,&quot;$problem___PRE_BLOCK_1___quot;], separator = &quot;___PRE_BLOCK_1___quot;
Output: [&quot;easy&quot;,&quot;problem&quot;]
Explanation: In this example we split as follows: 

&quot;$easy___PRE_BLOCK_1___quot; splits into &quot;easy&quot; (excluding empty strings)
&quot;$problem___PRE_BLOCK_1___quot; splits into &quot;problem&quot; (excluding empty strings)

Hence, the resulting array is [&quot;easy&quot;,&quot;problem&quot;].

```

**Example 3:**

```

Input: words = [&quot;|||&quot;], separator = &quot;|&quot;
Output: []
Explanation: In this example the resulting split of &quot;|||&quot; will contain only empty strings, so we return an empty array []. 
```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 20`

	- characters in `words[i]` are either lowercase English letters or characters from the string `".,|$#@"` (excluding the quotes)

	- `separator` is a character from the string `".,|$#@"` (excluding the quotes)

---

**Links:** [Submissions](https://leetcode.com/problems/split-strings-by-separator/) | [Solutions](https://leetcode.com/problems/split-strings-by-separator/)
