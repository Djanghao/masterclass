# [960. Delete Columns to Make Sorted III](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 625 | 14 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

You are given an array of `n` strings `strs`, all of the same length.

We may choose any deletion indices, and we delete all the characters in those indices for each string.

For example, if we have `strs = ["abcdef","uvwxyz"]` and deletion indices `{0, 2, 3}`, then the final array after deletions is `["bef", "vyz"]`.

Suppose we chose a set of deletion indices `answer` such that after deletions, the final array has **every string (row) in lexicographic** order. (i.e., `(strs[0][0] <= strs[0][1] <= ... <= strs[0][strs[0].length - 1])`, and `(strs[1][0] <= strs[1][1] <= ... <= strs[1][strs[1].length - 1])`, and so on). Return *the minimum possible value of* `answer.length`.

 

**Example 1:**

```

Input: strs = [&quot;babca&quot;,&quot;bbazb&quot;]
Output: 3
Explanation: After deleting columns 0, 1, and 4, the final array is strs = [&quot;bc&quot;, &quot;az&quot;].
Both these rows are individually in lexicographic order (ie. strs[0][0] &lt;= strs[0][1] and strs[1][0] &lt;= strs[1][1]).
Note that strs[0] &gt; strs[1] - the array strs is not necessarily in lexicographic order.
```

**Example 2:**

```

Input: strs = [&quot;edcba&quot;]
Output: 4
Explanation: If we delete less than 4 columns, the only row will not be lexicographically sorted.

```

**Example 3:**

```

Input: strs = [&quot;ghi&quot;,&quot;def&quot;,&quot;abc&quot;]
Output: 0
Explanation: All rows are already lexicographically sorted.

```

 

**Constraints:**

	- `n == strs.length`

	- `1 <= n <= 100`

	- `1 <= strs[i].length <= 100`

	- `strs[i]` consists of lowercase English letters.

	-

---

**Links:** [Submissions](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/) | [Solutions](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/)
