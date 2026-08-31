# [955. Delete Columns to Make Sorted II](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 689 | 96 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `google`

## Description

You are given an array of `n` strings `strs`, all of the same length.

We may choose any deletion indices, and we delete all the characters in those indices for each string.

For example, if we have `strs = ["abcdef","uvwxyz"]` and deletion indices `{0, 2, 3}`, then the final array after deletions is `["bef", "vyz"]`.

Suppose we chose a set of deletion indices `answer` such that after deletions, the final array has its elements in **lexicographic** order (i.e., `strs[0] <= strs[1] <= strs[2] <= ... <= strs[n - 1]`). Return *the minimum possible value of* `answer.length`.

 

**Example 1:**

```

Input: strs = [&quot;ca&quot;,&quot;bb&quot;,&quot;ac&quot;]
Output: 1
Explanation: 
After deleting the first column, strs = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;].
Now strs is in lexicographic order (ie. strs[0] &lt;= strs[1] &lt;= strs[2]).
We require at least 1 deletion since initially strs was not in lexicographic order, so the answer is 1.

```

**Example 2:**

```

Input: strs = [&quot;xc&quot;,&quot;yb&quot;,&quot;za&quot;]
Output: 0
Explanation: 
strs is already in lexicographic order, so we do not need to delete anything.
Note that the rows of strs are not necessarily in lexicographic order:
i.e., it is NOT necessarily true that (strs[0][0] &lt;= strs[0][1] &lt;= ...)

```

**Example 3:**

```

Input: strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]
Output: 3
Explanation: We have to delete every column.

```

 

**Constraints:**

	- `n == strs.length`

	- `1 <= n <= 100`

	- `1 <= strs[i].length <= 100`

	- `strs[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/) | [Solutions](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/)
