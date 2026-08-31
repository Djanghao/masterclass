# [2426. Number of Pairs Satisfying Inequality](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 570 | 11 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`merge-sort`](https://leetcode.com/tag/merge-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `facebook`, `amazon`, `google`

## Description

You are given two **0-indexed** integer arrays `nums1` and `nums2`, each of size `n`, and an integer `diff`. Find the number of **pairs** `(i, j)` such that:

	- `0 <= i < j <= n - 1` **and**

	- `nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff`.

Return* the **number of pairs** that satisfy the conditions.*

 

**Example 1:**

```

Input: nums1 = [3,2,5], nums2 = [2,2,1], diff = 1
Output: 3
Explanation:
There are 3 pairs that satisfy the conditions:
1. i = 0, j = 1: 3 - 2 &lt;= 2 - 2 + 1. Since i &lt; j and 1 &lt;= 1, this pair satisfies the conditions.
2. i = 0, j = 2: 3 - 5 &lt;= 2 - 1 + 1. Since i &lt; j and -2 &lt;= 2, this pair satisfies the conditions.
3. i = 1, j = 2: 2 - 5 &lt;= 2 - 1 + 1. Since i &lt; j and -3 &lt;= 2, this pair satisfies the conditions.
Therefore, we return 3.

```

**Example 2:**

```

Input: nums1 = [3,-1], nums2 = [-2,2], diff = -1
Output: 0
Explanation:
Since there does not exist any pair that satisfies the conditions, we return 0.

```

 

**Constraints:**

	- `n == nums1.length == nums2.length`

	- `2 <= n <= 10^5`

	- `-10^4 <= nums1[i], nums2[i] <= 10^4`

	- `-10^4 <= diff <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/) | [Solutions](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/)
