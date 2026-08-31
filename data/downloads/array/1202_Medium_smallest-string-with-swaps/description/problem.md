# [1202. Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3877 | 163 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `palantir-technologies`, `microsoft`, `google`, `paypal`, `uber`, `phonepe`

## Description

You are given a string `s`, and an array of pairs of indices in the string `pairs` where `pairs[i] = [a, b]` indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given `pairs` **any number of times**.

Return the lexicographically smallest string that `s` can be changed to after using the swaps.

 

**Example 1:**

```

Input: s = &quot;dcab&quot;, pairs = [[0,3],[1,2]]
Output: &quot;bacd&quot;
Explaination: 
Swap s[0] and s[3], s = &quot;bcad&quot;
Swap s[1] and s[2], s = &quot;bacd&quot;

```

**Example 2:**

```

Input: s = &quot;dcab&quot;, pairs = [[0,3],[1,2],[0,2]]
Output: &quot;abcd&quot;
Explaination: 
Swap s[0] and s[3], s = &quot;bcad&quot;
Swap s[0] and s[2], s = &quot;acbd&quot;
Swap s[1] and s[2], s = &quot;abcd&quot;
```

**Example 3:**

```

Input: s = &quot;cba&quot;, pairs = [[0,1],[1,2]]
Output: &quot;abc&quot;
Explaination: 
Swap s[0] and s[1], s = &quot;bca&quot;
Swap s[1] and s[2], s = &quot;bac&quot;
Swap s[0] and s[1], s = &quot;abc&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `0 <= pairs.length <= 10^5`

	- `0 <= pairs[i][0], pairs[i][1] < s.length`

	- `s` only contains lower case English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/smallest-string-with-swaps/) | [Solutions](https://leetcode.com/problems/smallest-string-with-swaps/)
