# [1885. Count Pairs in Two Arrays](https://leetcode.com/problems/count-pairs-in-two-arrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 244 | 23 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `shopee`

## Description

Given two integer arrays `nums1` and `nums2` of length `n`, count the pairs of indices `(i, j)` such that `i  nums2[i] + nums2[j]`.

Return *the **number of pairs** satisfying the condition.*

 

**Example 1:**

```

Input: nums1 = [2,1,2,1], nums2 = [1,2,1,2]
Output: 1
Explanation: The pairs satisfying the condition are:
- (0, 2) where 2 + 2 &gt; 1 + 1.
```

**Example 2:**

```

Input: nums1 = [1,10,6,2], nums2 = [1,4,1,5]
Output: 5
Explanation: The pairs satisfying the condition are:
- (0, 1) where 1 + 10 &gt; 1 + 4.
- (0, 2) where 1 + 6 &gt; 1 + 1.
- (1, 2) where 10 + 6 &gt; 4 + 1.
- (1, 3) where 10 + 2 &gt; 4 + 5.
- (2, 3) where 6 + 2 &gt; 1 + 5.

```

 

**Constraints:**

	- `n == nums1.length == nums2.length`

	- `1 <= n <= 10^5`

	- `1 <= nums1[i], nums2[i] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/count-pairs-in-two-arrays/) | [Solutions](https://leetcode.com/problems/count-pairs-in-two-arrays/)
