# [2506. Count Pairs Of Similar Strings](https://leetcode.com/problems/count-pairs-of-similar-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 578 | 40 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `tiktok`, `ibm`, `adobe`, `oracle`

## Description

You are given a **0-indexed** string array `words`.

Two strings are **similar** if they consist of the same characters.

	- For example, `"abca"` and `"cba"` are similar since both consist of characters `'a'`, `'b'`, and `'c'`.

	- However, `"abacba"` and `"bcfd"` are not similar since they do not consist of the same characters.

Return *the number of pairs *`(i, j)`* such that *`0 <= i < j <= word.length - 1`* and the two strings *`words[i]`* and *`words[j]`* are similar*.

 

**Example 1:**

```

Input: words = [&quot;aba&quot;,&quot;aabb&quot;,&quot;abcd&quot;,&quot;bac&quot;,&quot;aabc&quot;]
Output: 2
Explanation: There are 2 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters &#39;a&#39; and &#39;b&#39;. 
- i = 3 and j = 4 : both words[3] and words[4] only consist of characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;. 

```

**Example 2:**

```

Input: words = [&quot;aabb&quot;,&quot;ab&quot;,&quot;ba&quot;]
Output: 3
Explanation: There are 3 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters &#39;a&#39; and &#39;b&#39;. 
- i = 0 and j = 2 : both words[0] and words[2] only consist of characters &#39;a&#39; and &#39;b&#39;.
- i = 1 and j = 2 : both words[1] and words[2] only consist of characters &#39;a&#39; and &#39;b&#39;.

```

**Example 3:**

```

Input: words = [&quot;nba&quot;,&quot;cba&quot;,&quot;dba&quot;]
Output: 0
Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.
```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 100`

	- `words[i]` consist of only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-pairs-of-similar-strings/) | [Solutions](https://leetcode.com/problems/count-pairs-of-similar-strings/)
