# [2707. Extra Characters in a String](https://leetcode.com/problems/extra-characters-in-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2612 | 137 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `amazon`, `facebook`

## Description

You are given a **0-indexed** string `s` and a dictionary of words `dictionary`. You have to break `s` into one or more **non-overlapping** substrings such that each substring is present in `dictionary`. There may be some **extra characters** in `s` which are not present in any of the substrings.

Return *the **minimum** number of extra characters left over if you break up *`s`* optimally.*

 

**Example 1:**

```

Input: s = &quot;leetscode&quot;, dictionary = [&quot;leet&quot;,&quot;code&quot;,&quot;leetcode&quot;]
Output: 1
Explanation: We can break s in two substrings: &quot;leet&quot; from index 0 to 3 and &quot;code&quot; from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.


```

**Example 2:**

```

Input: s = &quot;sayhelloworld&quot;, dictionary = [&quot;hello&quot;,&quot;world&quot;]
Output: 3
Explanation: We can break s in two substrings: &quot;hello&quot; from index 3 to 7 and &quot;world&quot; from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.

```

 

**Constraints:**

	- `1 <= s.length <= 50`

	- `1 <= dictionary.length <= 50`

	- `1 <= dictionary[i].length <= 50`

	- `dictionary[i]` and `s` consists of only lowercase English letters

	- `dictionary` contains distinct words

---

**Links:** [Submissions](https://leetcode.com/problems/extra-characters-in-a-string/) | [Solutions](https://leetcode.com/problems/extra-characters-in-a-string/)
