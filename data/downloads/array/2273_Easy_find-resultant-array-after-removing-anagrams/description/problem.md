# [2273. Find Resultant Array After Removing Anagrams](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1041 | 236 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `jpmorgan`, `microsoft`, `bloomberg`, `nextjump`

## Description

You are given a **0-indexed** string array `words`, where `words[i]` consists of lowercase English letters.

In one operation, select any index `i` such that `0 < i < words.length` and `words[i - 1]` and `words[i]` are **anagrams**, and **delete** `words[i]` from `words`. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return `words` *after performing all operations*. It can be shown that selecting the indices for each operation in **any** arbitrary order will lead to the same result.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, `"dacb"` is an anagram of `"abdc"`.

 

**Example 1:**

```

Input: words = [&quot;abba&quot;,&quot;baba&quot;,&quot;bbaa&quot;,&quot;cd&quot;,&quot;cd&quot;]
Output: [&quot;abba&quot;,&quot;cd&quot;]
Explanation:
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = &quot;bbaa&quot; and words[1] = &quot;baba&quot; are anagrams, we choose index 2 and delete words[2].
  Now words = [&quot;abba&quot;,&quot;baba&quot;,&quot;cd&quot;,&quot;cd&quot;].
- Since words[1] = &quot;baba&quot; and words[0] = &quot;abba&quot; are anagrams, we choose index 1 and delete words[1].
  Now words = [&quot;abba&quot;,&quot;cd&quot;,&quot;cd&quot;].
- Since words[2] = &quot;cd&quot; and words[1] = &quot;cd&quot; are anagrams, we choose index 2 and delete words[2].
  Now words = [&quot;abba&quot;,&quot;cd&quot;].
We can no longer perform any operations, so [&quot;abba&quot;,&quot;cd&quot;] is the final answer.
```

**Example 2:**

```

Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]
Output: [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]
Explanation:
No two adjacent strings in words are anagrams of each other, so no operations are performed.
```

 

**Constraints:**

	- `1 <= words.length <= 100`

	- `1 <= words[i].length <= 10`

	- `words[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/) | [Solutions](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/)
