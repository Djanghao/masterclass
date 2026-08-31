# [2068. Check Whether Two Strings are Almost Equivalent](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 571 | 22 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `jpmorgan`, `salesforce`

## Description

Two strings `word1` and `word2` are considered **almost equivalent** if the differences between the frequencies of each letter from `'a'` to `'z'` between `word1` and `word2` is **at most** `3`.

Given two strings `word1` and `word2`, each of length `n`, return `true` *if *`word1` *and* `word2` *are **almost equivalent**, or* `false` *otherwise*.

The **frequency** of a letter `x` is the number of times it occurs in the string.

 

**Example 1:**

```

Input: word1 = &quot;aaaa&quot;, word2 = &quot;bccb&quot;
Output: false
Explanation: There are 4 &#39;a&#39;s in &quot;aaaa&quot; but 0 &#39;a&#39;s in &quot;bccb&quot;.
The difference is 4, which is more than the allowed 3.

```

**Example 2:**

```

Input: word1 = &quot;abcdeef&quot;, word2 = &quot;abaaacc&quot;
Output: true
Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
- &#39;a&#39; appears 1 time in word1 and 4 times in word2. The difference is 3.
- &#39;b&#39; appears 1 time in word1 and 1 time in word2. The difference is 0.
- &#39;c&#39; appears 1 time in word1 and 2 times in word2. The difference is 1.
- &#39;d&#39; appears 1 time in word1 and 0 times in word2. The difference is 1.
- &#39;e&#39; appears 2 times in word1 and 0 times in word2. The difference is 2.
- &#39;f&#39; appears 1 time in word1 and 0 times in word2. The difference is 1.

```

**Example 3:**

```

Input: word1 = &quot;cccddabba&quot;, word2 = &quot;babababab&quot;
Output: true
Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
- &#39;a&#39; appears 2 times in word1 and 4 times in word2. The difference is 2.
- &#39;b&#39; appears 2 times in word1 and 5 times in word2. The difference is 3.
- &#39;c&#39; appears 3 times in word1 and 0 times in word2. The difference is 3.
- &#39;d&#39; appears 2 times in word1 and 0 times in word2. The difference is 2.

```

 

**Constraints:**

	- `n == word1.length == word2.length`

	- `1 <= n <= 100`

	- `word1` and `word2` consist only of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/) | [Solutions](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/)
