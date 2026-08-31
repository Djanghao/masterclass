# [1531. String Compression II](https://leetcode.com/problems/string-compression-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2505 | 220 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `github`, `microsoft`, `amazon`, `toptal`

## Description

Run-length encoding is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string `"aabccc"` we replace `"aa"` by `"a2"` and replace `"ccc"` by `"c3"`. Thus the compressed string becomes `"a2bc3"`.

Notice that in this problem, we are not adding `'1'` after single characters.

Given a string `s` and an integer `k`. You need to delete **at most** `k` characters from `s` such that the run-length encoded version of `s` has minimum length.

Find the *minimum length of the run-length encoded version of *`s`* after deleting at most *`k`* characters*.

 

**Example 1:**

```

Input: s = &quot;aaabcccd&quot;, k = 2
Output: 4
Explanation: Compressing s without deleting anything will give us &quot;a3bc3d&quot; of length 6. Deleting any of the characters &#39;a&#39; or &#39;c&#39; would at most decrease the length of the compressed string to 5, for instance delete 2 &#39;a&#39; then we will have s = &quot;abcccd&quot; which compressed is abc3d. Therefore, the optimal way is to delete &#39;b&#39; and &#39;d&#39;, then the compressed version of s will be &quot;a3c3&quot; of length 4.
```

**Example 2:**

```

Input: s = &quot;aabbaa&quot;, k = 2
Output: 2
Explanation: If we delete both &#39;b&#39; characters, the resulting compressed string would be &quot;a4&quot; of length 2.

```

**Example 3:**

```

Input: s = &quot;aaaaaaaaaaa&quot;, k = 0
Output: 3
Explanation: Since k is zero, we cannot delete anything. The compressed string is &quot;a11&quot; of length 3.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `0 <= k <= s.length`

	- `s` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/string-compression-ii/) | [Solutions](https://leetcode.com/problems/string-compression-ii/)
