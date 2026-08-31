# [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 12305 | 159 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `google`, `mongodb`, `microsoft`, `oracle`, `facebook`, `general-motors`, `amazon`, `apple`, `docusign`, `roblox`, `snowflake`, `tiktok`, `doordash`, `bloomberg`, `nvidia`, `citadel`, `arista-networks`, `instabase`, `grammarly`, `uber`, `twitter`

## Description

A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

	- `Trie()` Initializes the trie object.

	- `void insert(String word)` Inserts the string `word` into the trie.

	- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.

	- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

 

**Example 1:**

```

Input
[&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]
[[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert(&quot;apple&quot;);
trie.search(&quot;apple&quot;);   // return True
trie.search(&quot;app&quot;);     // return False
trie.startsWith(&quot;app&quot;); // return True
trie.insert(&quot;app&quot;);
trie.search(&quot;app&quot;);     // return True

```

 

**Constraints:**

	- `1 <= word.length, prefix.length <= 2000`

	- `word` and `prefix` consist only of lowercase English letters.

	- At most `3 * 10^4` calls **in total** will be made to `insert`, `search`, and `startsWith`.

---

**Links:** [Submissions](https://leetcode.com/problems/implement-trie-prefix-tree/) | [Solutions](https://leetcode.com/problems/implement-trie-prefix-tree/)
