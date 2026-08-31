# [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8021 | 490 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `datadog`, `apple`, `google`, `amazon`, `microsoft`, `bloomberg`, `snowflake`, `tiktok`, `atlassian`, `doordash`, `snapchat`, `linkedin`, `rubrik`, `docusign`, `facebook`

## Description

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

	- `WordDictionary()` Initializes the object.

	- `void addWord(word)` Adds `word` to the data structure, it can be matched later.

	- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.

 

**Example:**

```

Input
[&quot;WordDictionary&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;]
[[],[&quot;bad&quot;],[&quot;dad&quot;],[&quot;mad&quot;],[&quot;pad&quot;],[&quot;bad&quot;],[&quot;.ad&quot;],[&quot;b..&quot;]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord(&quot;bad&quot;);
wordDictionary.addWord(&quot;dad&quot;);
wordDictionary.addWord(&quot;mad&quot;);
wordDictionary.search(&quot;pad&quot;); // return False
wordDictionary.search(&quot;bad&quot;); // return True
wordDictionary.search(&quot;.ad&quot;); // return True
wordDictionary.search(&quot;b..&quot;); // return True

```

 

**Constraints:**

	- `1 <= word.length <= 25`

	- `word` in `addWord` consists of lowercase English letters.

	- `word` in `search` consist of `'.'` or lowercase English letters.

	- There will be at most `2` dots in `word` for `search` queries.

	- At most `10^4` calls will be made to `addWord` and `search`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | [Solutions](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
