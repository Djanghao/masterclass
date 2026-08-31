# [244. Shortest Word Distance II](https://leetcode.com/problems/shortest-word-distance-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1079 | 393 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design)

**Companies:** `linkedin`, `anduril`

## Description

Design a data structure that will be initialized with a string array, and then it should answer queries of the shortest distance between two different strings from the array.

Implement the `WordDistance` class:

	- `WordDistance(String[] wordsDict)` initializes the object with the strings array `wordsDict`.

	- `int shortest(String word1, String word2)` returns the shortest distance between `word1` and `word2` in the array `wordsDict`.

 

**Example 1:**

```

Input
[&quot;WordDistance&quot;, &quot;shortest&quot;, &quot;shortest&quot;]
[[[&quot;practice&quot;, &quot;makes&quot;, &quot;perfect&quot;, &quot;coding&quot;, &quot;makes&quot;]], [&quot;coding&quot;, &quot;practice&quot;], [&quot;makes&quot;, &quot;coding&quot;]]
Output
[null, 3, 1]

Explanation
WordDistance wordDistance = new WordDistance([&quot;practice&quot;, &quot;makes&quot;, &quot;perfect&quot;, &quot;coding&quot;, &quot;makes&quot;]);
wordDistance.shortest(&quot;coding&quot;, &quot;practice&quot;); // return 3
wordDistance.shortest(&quot;makes&quot;, &quot;coding&quot;);    // return 1

```

 

**Constraints:**

	- `1 <= wordsDict.length <= 3 * 10^4`

	- `1 <= wordsDict[i].length <= 10`

	- `wordsDict[i]` consists of lowercase English letters.

	- `word1` and `word2` are in `wordsDict`.

	- `word1 != word2`

	- At most `5000` calls will be made to `shortest`.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-word-distance-ii/) | [Solutions](https://leetcode.com/problems/shortest-word-distance-ii/)
