# [1804. Implement Trie II (Prefix Tree)](https://leetcode.com/problems/implement-trie-ii-prefix-tree/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 353 | 19 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `microsoft`

## Description

A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

	- `Trie()` Initializes the trie object.

	- `void insert(String word)` Inserts the string `word` into the trie.

	- `int countWordsEqualTo(String word)` Returns the number of instances of the string `word` in the trie.

	- `int countWordsStartingWith(String prefix)` Returns the number of strings in the trie that have the string `prefix` as a prefix.

	- `void erase(String word)` Erases the string `word` from the trie.

 

**Example 1:**

```

Input
[&quot;Trie&quot;, &quot;insert&quot;, &quot;insert&quot;, &quot;countWordsEqualTo&quot;, &quot;countWordsStartingWith&quot;, &quot;erase&quot;, &quot;countWordsEqualTo&quot;, &quot;countWordsStartingWith&quot;, &quot;erase&quot;, &quot;countWordsStartingWith&quot;]
[[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;apple&quot;], [&quot;app&quot;]]
Output
[null, null, null, 2, 2, null, 1, 1, null, 0]

Explanation
Trie trie = new Trie();
trie.insert(&quot;apple&quot;);               // Inserts &quot;apple&quot;.
trie.insert(&quot;apple&quot;);               // Inserts another &quot;apple&quot;.
trie.countWordsEqualTo(&quot;apple&quot;);    // There are two instances of &quot;apple&quot; so return 2.
trie.countWordsStartingWith(&quot;app&quot;); // &quot;app&quot; is a prefix of &quot;apple&quot; so return 2.
trie.erase(&quot;apple&quot;);                // Erases one &quot;apple&quot;.
trie.countWordsEqualTo(&quot;apple&quot;);    // Now there is only one instance of &quot;apple&quot; so return 1.
trie.countWordsStartingWith(&quot;app&quot;); // return 1
trie.erase(&quot;apple&quot;);                // Erases &quot;apple&quot;. Now the trie is empty.
trie.countWordsStartingWith(&quot;app&quot;); // return 0

```

 

**Constraints:**

	- `1 <= word.length, prefix.length <= 2000`

	- `word` and `prefix` consist only of lowercase English letters.

	- At most `3 * 10^4` calls **in total** will be made to `insert`, `countWordsEqualTo`, `countWordsStartingWith`, and `erase`.

	- It is guaranteed that for any function call to `erase`, the string `word` will exist in the trie.

---

**Links:** [Submissions](https://leetcode.com/problems/implement-trie-ii-prefix-tree/) | [Solutions](https://leetcode.com/problems/implement-trie-ii-prefix-tree/)
