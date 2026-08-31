# [745. Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2339 | 498 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `google`, `facebook`

## Description

Design a special dictionary that searches the words in it by a prefix and a suffix.

Implement the `WordFilter` class:

	- `WordFilter(string[] words)` Initializes the object with the `words` in the dictionary.

	- `f(string pref, string suff)` Returns *the index of the word in the dictionary,* which has the prefix `pref` and the suffix `suff`. If there is more than one valid index, return **the largest** of them. If there is no such word in the dictionary, return `-1`.

 

**Example 1:**

```

Input
[&quot;WordFilter&quot;, &quot;f&quot;]
[[[&quot;apple&quot;]], [&quot;a&quot;, &quot;e&quot;]]
Output
[null, 0]
Explanation
WordFilter wordFilter = new WordFilter([&quot;apple&quot;]);
wordFilter.f(&quot;a&quot;, &quot;e&quot;); // return 0, because the word at index 0 has prefix = &quot;a&quot; and suffix = &quot;e&quot;.

```

 

**Constraints:**

	- `1 <= words.length <= 10^4`

	- `1 <= words[i].length <= 7`

	- `1 <= pref.length, suff.length <= 7`

	- `words[i]`, `pref` and `suff` consist of lowercase English letters only.

	- At most `10^4` calls will be made to the function `f`.

---

**Links:** [Submissions](https://leetcode.com/problems/prefix-and-suffix-search/) | [Solutions](https://leetcode.com/problems/prefix-and-suffix-search/)
