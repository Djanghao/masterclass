# [937. Reorder Data in Log Files](https://leetcode.com/problems/reorder-data-in-log-files/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2187 | 4417 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`

## Description

You are given an array of `logs`. Each log is a space-delimited string of words, where the first word is the **identifier**.

There are two types of logs:

	- Letter-logs: All words (except the identifier) consist of lowercase English letters.

	- **Digit-logs**: All words (except the identifier) consist of digits.

Reorder these logs so that:

	- The **letter-logs** come before all **digit-logs**.

	- The **letter-logs** are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.

	- The **digit-logs** maintain their relative ordering.

Return *the final order of the logs*.

 

**Example 1:**

```

Input: logs = [&quot;dig1 8 1 5 1&quot;,&quot;let1 art can&quot;,&quot;dig2 3 6&quot;,&quot;let2 own kit dig&quot;,&quot;let3 art zero&quot;]
Output: [&quot;let1 art can&quot;,&quot;let3 art zero&quot;,&quot;let2 own kit dig&quot;,&quot;dig1 8 1 5 1&quot;,&quot;dig2 3 6&quot;]
Explanation:
The letter-log contents are all different, so their ordering is &quot;art can&quot;, &quot;art zero&quot;, &quot;own kit dig&quot;.
The digit-logs have a relative order of &quot;dig1 8 1 5 1&quot;, &quot;dig2 3 6&quot;.

```

**Example 2:**

```

Input: logs = [&quot;a1 9 2 3 1&quot;,&quot;g1 act car&quot;,&quot;zo4 4 7&quot;,&quot;ab1 off key dog&quot;,&quot;a8 act zoo&quot;]
Output: [&quot;g1 act car&quot;,&quot;a8 act zoo&quot;,&quot;ab1 off key dog&quot;,&quot;a1 9 2 3 1&quot;,&quot;zo4 4 7&quot;]

```

 

**Constraints:**

	- `1 <= logs.length <= 100`

	- `3 <= logs[i].length <= 100`

	- All the tokens of `logs[i]` are separated by a **single** space.

	- `logs[i]` is guaranteed to have an identifier and at least one word after the identifier.

---

**Links:** [Submissions](https://leetcode.com/problems/reorder-data-in-log-files/) | [Solutions](https://leetcode.com/problems/reorder-data-in-log-files/)
