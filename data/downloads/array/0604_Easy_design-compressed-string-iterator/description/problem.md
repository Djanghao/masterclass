# [604. Design Compressed String Iterator](https://leetcode.com/problems/design-compressed-string-iterator/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 457 | 167 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`iterator`](https://leetcode.com/tag/iterator)

**Companies:** `google`

## Description

Design and implement a data structure for a compressed string iterator. The given compressed string will be in the form of each letter followed by a positive integer representing the number of this letter existing in the original uncompressed string.

Implement the StringIterator class:

	- `next()` Returns **the next character** if the original string still has uncompressed characters, otherwise returns a **white space**.

	- `hasNext()` Returns true if there is any letter needs to be uncompressed in the original string, otherwise returns `false`.

 

**Example 1:**

```

Input
[&quot;StringIterator&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;]
[[&quot;L1e2t1C1o1d1e1&quot;], [], [], [], [], [], [], [], [], []]
Output
[null, &quot;L&quot;, &quot;e&quot;, &quot;e&quot;, &quot;t&quot;, &quot;C&quot;, &quot;o&quot;, true, &quot;d&quot;, true]

Explanation
StringIterator stringIterator = new StringIterator(&quot;L1e2t1C1o1d1e1&quot;);
stringIterator.next(); // return &quot;L&quot;
stringIterator.next(); // return &quot;e&quot;
stringIterator.next(); // return &quot;e&quot;
stringIterator.next(); // return &quot;t&quot;
stringIterator.next(); // return &quot;C&quot;
stringIterator.next(); // return &quot;o&quot;
stringIterator.hasNext(); // return True
stringIterator.next(); // return &quot;d&quot;
stringIterator.hasNext(); // return True

```

 

**Constraints:**

	- `1 <= compressedString.length <= 1000`

	- `compressedString` consists of lower-case an upper-case English letters and digits.

	- The number of a single character repetitions in `compressedString` is in the range `[1, 10^9]`

	- At most `100` calls will be made to `next` and `hasNext`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-compressed-string-iterator/) | [Solutions](https://leetcode.com/problems/design-compressed-string-iterator/)
