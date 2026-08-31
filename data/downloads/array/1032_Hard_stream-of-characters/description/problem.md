# [1032. Stream of Characters](https://leetcode.com/problems/stream-of-characters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1866 | 185 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie), [`data-stream`](https://leetcode.com/tag/data-stream)

**Companies:** `google`

## Description

Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings `words`.

For example, if `words = ["abc", "xyz"]` and the stream added the four characters (one by one) `'a'`, `'x'`, `'y'`, and `'z'`, your algorithm should detect that the suffix `"xyz"` of the characters `"axyz"` matches `"xyz"` from `words`.

Implement the `StreamChecker` class:

	- `StreamChecker(String[] words)` Initializes the object with the strings array `words`.

	- `boolean query(char letter)` Accepts a new character from the stream and returns `true` if any non-empty suffix from the stream forms a word that is in `words`.

 

**Example 1:**

```

Input
[&quot;StreamChecker&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;, &quot;query&quot;]
[[[&quot;cd&quot;, &quot;f&quot;, &quot;kl&quot;]], [&quot;a&quot;], [&quot;b&quot;], [&quot;c&quot;], [&quot;d&quot;], [&quot;e&quot;], [&quot;f&quot;], [&quot;g&quot;], [&quot;h&quot;], [&quot;i&quot;], [&quot;j&quot;], [&quot;k&quot;], [&quot;l&quot;]]
Output
[null, false, false, false, true, false, true, false, false, false, false, false, true]

Explanation
StreamChecker streamChecker = new StreamChecker([&quot;cd&quot;, &quot;f&quot;, &quot;kl&quot;]);
streamChecker.query(&quot;a&quot;); // return False
streamChecker.query(&quot;b&quot;); // return False
streamChecker.query(&quot;c&quot;); // return False
streamChecker.query(&quot;d&quot;); // return True, because &#39;cd&#39; is in the wordlist
streamChecker.query(&quot;e&quot;); // return False
streamChecker.query(&quot;f&quot;); // return True, because &#39;f&#39; is in the wordlist
streamChecker.query(&quot;g&quot;); // return False
streamChecker.query(&quot;h&quot;); // return False
streamChecker.query(&quot;i&quot;); // return False
streamChecker.query(&quot;j&quot;); // return False
streamChecker.query(&quot;k&quot;); // return False
streamChecker.query(&quot;l&quot;); // return True, because &#39;kl&#39; is in the wordlist

```

 

**Constraints:**

	- `1 <= words.length <= 2000`

	- `1 <= words[i].length <= 200`

	- `words[i]` consists of lowercase English letters.

	- `letter` is a lowercase English letter.

	- At most `4 * 10^4` calls will be made to query.

---

**Links:** [Submissions](https://leetcode.com/problems/stream-of-characters/) | [Solutions](https://leetcode.com/problems/stream-of-characters/)
