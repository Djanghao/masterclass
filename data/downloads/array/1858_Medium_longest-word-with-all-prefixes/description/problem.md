# [1858. Longest Word With All Prefixes](https://leetcode.com/problems/longest-word-with-all-prefixes/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 204 | 7 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `google`

## Description

Given an array of strings `words`, find the **longest** string in `words` such that **every prefix** of it is also in `words`.

	- For example, let `words = ["a", "app", "ap"]`. The string `"app"` has prefixes `"ap"` and `"a"`, all of which are in `words`.

Return *the string described above. If there is more than one string with the same length, return the **lexicographically smallest** one, and if no string exists, return *`""`.

 

**Example 1:**

```

Input: words = [&quot;k&quot;,&quot;ki&quot;,&quot;kir&quot;,&quot;kira&quot;, &quot;kiran&quot;]
Output: &quot;kiran&quot;
Explanation: &quot;kiran&quot; has prefixes &quot;kira&quot;, &quot;kir&quot;, &quot;ki&quot;, and &quot;k&quot;, and all of them appear in words.

```

**Example 2:**

```

Input: words = [&quot;a&quot;, &quot;banana&quot;, &quot;app&quot;, &quot;appl&quot;, &quot;ap&quot;, &quot;apply&quot;, &quot;apple&quot;]
Output: &quot;apple&quot;
Explanation: Both &quot;apple&quot; and &quot;apply&quot; have all their prefixes in words.
However, &quot;apple&quot; is lexicographically smaller, so we return that.

```

**Example 3:**

```

Input: words = [&quot;abc&quot;, &quot;bc&quot;, &quot;ab&quot;, &quot;qwe&quot;]
Output: &quot;&quot;

```

 

**Constraints:**

	- `1 <= words.length <= 10^5`

	- `1 <= words[i].length <= 10^5`

	- `1 <= sum(words[i].length) <= 10^5`

	- `words[i]` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-word-with-all-prefixes/) | [Solutions](https://leetcode.com/problems/longest-word-with-all-prefixes/)
