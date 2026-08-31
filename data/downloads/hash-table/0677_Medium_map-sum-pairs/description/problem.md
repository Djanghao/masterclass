# [677. Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1722 | 165 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `akuna-capital`

## Description

Design a map that allows you to do the following:

	- Maps a string key to a given value.

	- Returns the sum of the values that have a key with a prefix equal to a given string.

Implement the `MapSum` class:

	- `MapSum()` Initializes the `MapSum` object.

	- `void insert(String key, int val)` Inserts the `key-val` pair into the map. If the `key` already existed, the original `key-value` pair will be overridden to the new one.

	- `int sum(string prefix)` Returns the sum of all the pairs' value whose `key` starts with the `prefix`.

 

**Example 1:**

```

Input
[&quot;MapSum&quot;, &quot;insert&quot;, &quot;sum&quot;, &quot;insert&quot;, &quot;sum&quot;]
[[], [&quot;apple&quot;, 3], [&quot;ap&quot;], [&quot;app&quot;, 2], [&quot;ap&quot;]]
Output
[null, null, 3, null, 5]

Explanation
MapSum mapSum = new MapSum();
mapSum.insert(&quot;apple&quot;, 3);  
mapSum.sum(&quot;ap&quot;);           // return 3 (apple = 3)
mapSum.insert(&quot;app&quot;, 2);    
mapSum.sum(&quot;ap&quot;);           // return 5 (apple + app = 3 + 2 = 5)

```

 

**Constraints:**

	- `1 <= key.length, prefix.length <= 50`

	- `key` and `prefix` consist of only lowercase English letters.

	- `1 <= val <= 1000`

	- At most `50` calls will be made to `insert` and `sum`.

---

**Links:** [Submissions](https://leetcode.com/problems/map-sum-pairs/) | [Solutions](https://leetcode.com/problems/map-sum-pairs/)
