# [819. Most Common Word](https://leetcode.com/problems/most-common-word/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1823 | 3113 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `datadog`, `amazon`, `google`, `facebook`, `microsoft`

## Description

Given a string `paragraph` and a string array of the banned words `banned`, return *the most frequent word that is not banned*. It is **guaranteed** there is **at least one word** that is not banned, and that the answer is **unique**.

The words in `paragraph` are **case-insensitive** and the answer should be returned in **lowercase**.

**Note** that words can not contain punctuation symbols.

 

**Example 1:**

```

Input: paragraph = &quot;Bob hit a ball, the hit BALL flew far after it was hit.&quot;, banned = [&quot;hit&quot;]
Output: &quot;ball&quot;
Explanation: 
&quot;hit&quot; occurs 3 times, but it is a banned word.
&quot;ball&quot; occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as &quot;ball,&quot;), 
and that &quot;hit&quot; isn&#39;t the answer even though it occurs more because it is banned.

```

**Example 2:**

```

Input: paragraph = &quot;a.&quot;, banned = []
Output: &quot;a&quot;

```

 

**Constraints:**

	- `1 <= paragraph.length <= 1000`

	- paragraph consists of English letters, space `' '`, or one of the symbols: `"!?',;."`.

	- `0 <= banned.length <= 100`

	- `1 <= banned[i].length <= 10`

	- `banned[i]` consists of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/most-common-word/) | [Solutions](https://leetcode.com/problems/most-common-word/)
