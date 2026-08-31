# [1286. Iterator for Combination](https://leetcode.com/problems/iterator-for-combination/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1385 | 108 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking), [`design`](https://leetcode.com/tag/design), [`iterator`](https://leetcode.com/tag/iterator)

**Companies:** `google`

## Description

Design the `CombinationIterator` class:

	- `CombinationIterator(string characters, int combinationLength)` Initializes the object with a string `characters` of **sorted distinct** lowercase English letters and a number `combinationLength` as arguments.

	- `next()` Returns the next combination of length `combinationLength` in **lexicographical order**.

	- `hasNext()` Returns `true` if and only if there exists a next combination.

 

**Example 1:**

```

Input
[&quot;CombinationIterator&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;]
[[&quot;abc&quot;, 2], [], [], [], [], [], []]
Output
[null, &quot;ab&quot;, true, &quot;ac&quot;, true, &quot;bc&quot;, false]

Explanation
CombinationIterator itr = new CombinationIterator(&quot;abc&quot;, 2);
itr.next();    // return &quot;ab&quot;
itr.hasNext(); // return True
itr.next();    // return &quot;ac&quot;
itr.hasNext(); // return True
itr.next();    // return &quot;bc&quot;
itr.hasNext(); // return False

```

 

**Constraints:**

	- `1 <= combinationLength <= characters.length <= 15`

	- All the characters of `characters` are **unique**.

	- At most `10^4` calls will be made to `next` and `hasNext`.

	- It is guaranteed that all calls of the function `next` are valid.

---

**Links:** [Submissions](https://leetcode.com/problems/iterator-for-combination/) | [Solutions](https://leetcode.com/problems/iterator-for-combination/)
