# [3076. Shortest Uncommon Substring in an Array](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 163 | 27 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `affirm`, `moveworks`, `airbnb`

## Description

You are given an array `arr` of size `n` consisting of **non-empty** strings.

Find a string array `answer` of size `n` such that:

	- `answer[i]` is the **shortest** substring of `arr[i]` that does **not** occur as a substring in any other string in `arr`. If multiple such substrings exist, `answer[i]` should be the lexicographically smallest. And if no such substring exists, `answer[i]` should be an empty string.

Return *the array *`answer`.

 

**Example 1:**

```

Input: arr = [&quot;cab&quot;,&quot;ad&quot;,&quot;bad&quot;,&quot;c&quot;]
Output: [&quot;ab&quot;,&quot;&quot;,&quot;ba&quot;,&quot;&quot;]
Explanation: We have the following:
- For the string &quot;cab&quot;, the shortest substring that does not occur in any other string is either &quot;ca&quot; or &quot;ab&quot;, we choose the lexicographically smaller substring, which is &quot;ab&quot;.
- For the string &quot;ad&quot;, there is no substring that does not occur in any other string.
- For the string &quot;bad&quot;, the shortest substring that does not occur in any other string is &quot;ba&quot;.
- For the string &quot;c&quot;, there is no substring that does not occur in any other string.

```

**Example 2:**

```

Input: arr = [&quot;abc&quot;,&quot;bcd&quot;,&quot;abcd&quot;]
Output: [&quot;&quot;,&quot;&quot;,&quot;abcd&quot;]
Explanation: We have the following:
- For the string &quot;abc&quot;, there is no substring that does not occur in any other string.
- For the string &quot;bcd&quot;, there is no substring that does not occur in any other string.
- For the string &quot;abcd&quot;, the shortest substring that does not occur in any other string is &quot;abcd&quot;.

```

 

**Constraints:**

	- `n == arr.length`

	- `2 <= n <= 100`

	- `1 <= arr[i].length <= 20`

	- `arr[i]` consists only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/) | [Solutions](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/)
