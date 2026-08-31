# [676. Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1459 | 213 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `bloomberg`, `google`, `facebook`

## Description

Design a data structure that is initialized with a list of **different** words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.

Implement the `MagicDictionary` class:

	- `MagicDictionary()` Initializes the object.

	- `void buildDict(String[] dictionary)` Sets the data structure with an array of distinct strings `dictionary`.

	- `bool search(String searchWord)` Returns `true` if you can change **exactly one character** in `searchWord` to match any string in the data structure, otherwise returns `false`.

 

**Example 1:**

```

Input
[&quot;MagicDictionary&quot;, &quot;buildDict&quot;, &quot;search&quot;, &quot;search&quot;, &quot;search&quot;, &quot;search&quot;]
[[], [[&quot;hello&quot;, &quot;leetcode&quot;]], [&quot;hello&quot;], [&quot;hhllo&quot;], [&quot;hell&quot;], [&quot;leetcoded&quot;]]
Output
[null, null, false, true, false, false]

Explanation
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict([&quot;hello&quot;, &quot;leetcode&quot;]);
magicDictionary.search(&quot;hello&quot;); // return False
magicDictionary.search(&quot;hhllo&quot;); // We can change the second &#39;h&#39; to &#39;e&#39; to match &quot;hello&quot; so we return True
magicDictionary.search(&quot;hell&quot;); // return False
magicDictionary.search(&quot;leetcoded&quot;); // return False

```

 

**Constraints:**

	- `1 <= dictionary.length <= 100`

	- `1 <= dictionary[i].length <= 100`

	- `dictionary[i]` consists of only lower-case English letters.

	- All the strings in `dictionary` are **distinct**.

	- `1 <= searchWord.length <= 100`

	- `searchWord` consists of only lower-case English letters.

	- `buildDict` will be called only once before `search`.

	- At most `100` calls will be made to `search`.

---

**Links:** [Submissions](https://leetcode.com/problems/implement-magic-dictionary/) | [Solutions](https://leetcode.com/problems/implement-magic-dictionary/)
