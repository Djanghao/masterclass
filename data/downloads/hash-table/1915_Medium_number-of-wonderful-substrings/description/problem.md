# [1915. Number of Wonderful Substrings](https://leetcode.com/problems/number-of-wonderful-substrings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1820 | 284 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `facebook`, `amazon`, `google`

## Description

A **wonderful** string is a string where **at most one** letter appears an **odd** number of times.



	- For example, `"ccjjc"` and `"abab"` are wonderful, but `"ab"` is not.




Given a string `word` that consists of the first ten lowercase English letters (`'a'` through `'j'`), return *the **number of wonderful non-empty substrings** in *`word`*. If the same substring appears multiple times in *`word`*, then count **each occurrence** separately.*



A **substring** is a contiguous sequence of characters in a string.



 


**Example 1:**


```

Input: word = &quot;aba&quot;
Output: 4
Explanation: The four wonderful substrings are underlined below:
- &quot;aba&quot; -&gt; &quot;a&quot;
- &quot;aba&quot; -&gt; &quot;b&quot;
- &quot;aba&quot; -&gt; &quot;a&quot;
- &quot;aba&quot; -&gt; &quot;aba&quot;

```


**Example 2:**


```

Input: word = &quot;aabb&quot;
Output: 9
Explanation: The nine wonderful substrings are underlined below:
- &quot;aabb&quot; -&gt; &quot;a&quot;
- &quot;aabb&quot; -&gt; &quot;aa&quot;
- &quot;aabb&quot; -&gt; &quot;aab&quot;
- &quot;aabb&quot; -&gt; &quot;aabb&quot;
- &quot;aabb&quot; -&gt; &quot;a&quot;
- &quot;aabb&quot; -&gt; &quot;abb&quot;
- &quot;aabb&quot; -&gt; &quot;b&quot;
- &quot;aabb&quot; -&gt; &quot;bb&quot;
- &quot;aabb&quot; -&gt; &quot;b&quot;

```


**Example 3:**


```

Input: word = &quot;he&quot;
Output: 2
Explanation: The two wonderful substrings are underlined below:
- &quot;he&quot; -&gt; &quot;h&quot;
- &quot;he&quot; -&gt; &quot;e&quot;

```


 


**Constraints:**



	- `1 <= word.length <= 10^5`

	- `word` consists of lowercase English letters from `'a'` to `'j'`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-wonderful-substrings/) | [Solutions](https://leetcode.com/problems/number-of-wonderful-substrings/)
