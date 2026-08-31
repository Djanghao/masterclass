# [2736. Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 350 | 17 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`stack`](https://leetcode.com/tag/stack), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`sorting`](https://leetcode.com/tag/sorting), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack)


## Description

You are given two **0-indexed** integer arrays `nums1` and `nums2`, each of length `n`, and a **1-indexed 2D array** `queries` where `queries[i] = [x_i, y_i]`.

For the `i^th` query, find the **maximum value** of `nums1[j] + nums2[j]` among all indices `j` `(0 = x_i` and `nums2[j] >= y_i`, or **-1** if there is no `j` satisfying the constraints.

Return *an array *`answer`* where *`answer[i]`* is the answer to the *`i^th`* query.*

 

**Example 1:**

```

Input: nums1 = [4,3,1,2], nums2 = [2,4,9,5], queries = [[4,1],[1,3],[2,5]]
Output: [6,10,7]
Explanation: 
For the 1st query xi = 4&nbsp;and&nbsp;yi = 1, we can select index&nbsp;j = 0&nbsp;since&nbsp;nums1[j] &gt;= 4&nbsp;and&nbsp;nums2[j] &gt;= 1. The sum&nbsp;nums1[j] + nums2[j]&nbsp;is 6, and we can show that 6 is the maximum we can obtain.

For the 2nd query xi = 1&nbsp;and&nbsp;yi = 3, we can select index&nbsp;j = 2&nbsp;since&nbsp;nums1[j] &gt;= 1&nbsp;and&nbsp;nums2[j] &gt;= 3. The sum&nbsp;nums1[j] + nums2[j]&nbsp;is 10, and we can show that 10 is the maximum we can obtain. 

For the 3rd query xi = 2&nbsp;and&nbsp;yi = 5, we can select index&nbsp;j = 3&nbsp;since&nbsp;nums1[j] &gt;= 2&nbsp;and&nbsp;nums2[j] &gt;= 5. The sum&nbsp;nums1[j] + nums2[j]&nbsp;is 7, and we can show that 7 is the maximum we can obtain.

Therefore, we return&nbsp;[6,10,7].

```

**Example 2:**

```

Input: nums1 = [3,2,5], nums2 = [2,3,4], queries = [[4,4],[3,2],[1,1]]
Output: [9,9,9]
Explanation: For this example, we can use index&nbsp;j = 2&nbsp;for all the queries since it satisfies the constraints for each query.

```

**Example 3:**

```

Input: nums1 = [2,1], nums2 = [2,3], queries = [[3,3]]
Output: [-1]
Explanation: There is one query in this example with xi = 3 and yi = 3. For every index, j, either nums1[j] &lt; xi or nums2[j] &lt; yi. Hence, there is no solution. 

```

 

**Constraints:**

	- `nums1.length == nums2.length` 

	- `n == nums1.length `

	- `1 <= n <= 10^5`

	- `1 <= nums1[i], nums2[i] <= 10^9 `

	- `1 <= queries.length <= 10^5`

	- `queries[i].length == 2`

	- `x_i == queries[i][1]`

	- `y_i == queries[i][2]`

	- `1 <= x_i, y_i <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-sum-queries/) | [Solutions](https://leetcode.com/problems/maximum-sum-queries/)
