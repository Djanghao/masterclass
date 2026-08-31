# [2531. Make Number of Distinct Characters Equal](https://leetcode.com/problems/make-number-of-distinct-characters-equal/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 607 | 158 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`

## Description

You are given two **0-indexed** strings `word1` and `word2`.

A **move** consists of choosing two indices `i` and `j` such that `0 <= i < word1.length` and `0 <= j < word2.length` and swapping `word1[i]` with `word2[j]`.

Return `true` *if it is possible to get the number of distinct characters in* `word1` *and* `word2` *to be equal with **exactly one** move. *Return `false` *otherwise*.

 

**Example 1:**

```

Input: word1 = &quot;ac&quot;, word2 = &quot;b&quot;
Output: false
Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.

```

**Example 2:**

```

Input: word1 = &quot;abcc&quot;, word2 = &quot;aab&quot;
Output: true
Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = &quot;abac&quot; and word2 = &quot;cab&quot;, which both have 3 distinct characters.

```

**Example 3:**

```

Input: word1 = &quot;abcde&quot;, word2 = &quot;fghij&quot;
Output: true
Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.

```

 

**Constraints:**

	- `1 <= word1.length, word2.length <= 10^5`

	- `word1` and `word2` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/make-number-of-distinct-characters-equal/) | [Solutions](https://leetcode.com/problems/make-number-of-distinct-characters-equal/)
