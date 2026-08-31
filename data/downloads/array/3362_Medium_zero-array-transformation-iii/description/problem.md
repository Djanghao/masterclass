# [3362. Zero Array Transformation III](https://leetcode.com/problems/zero-array-transformation-iii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 685 | 125 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `bloomberg`, `google`, `amazon`

## Description

You are given an integer array `nums` of length `n` and a 2D array `queries` where `queries[i] = [l_i, r_i]`.

Each `queries[i]` represents the following action on `nums`:

	- Decrement the value at each index in the range `[l_i, r_i]` in `nums` by **at most**** **1.

	- The amount by which the value is decremented can be chosen **independently** for each index.

A **Zero Array** is an array with all its elements equal to 0.

Return the **maximum **number of elements that can be removed from `queries`, such that `nums` can still be converted to a **zero array** using the *remaining* queries. If it is not possible to convert `nums` to a **zero array**, return -1.

 

**Example 1:**

**Input:** nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]

**Output:** 1

**Explanation:**

After removing `queries[2]`, `nums` can still be converted to a zero array.

	- Using `queries[0]`, decrement `nums[0]` and `nums[2]` by 1 and `nums[1]` by 0.

	- Using `queries[1]`, decrement `nums[0]` and `nums[2]` by 1 and `nums[1]` by 0.

**Example 2:**

**Input:** nums = [1,1,1,1], queries = [[1,3],[0,2],[1,3],[1,2]]

**Output:** 2

**Explanation:**

We can remove `queries[2]` and `queries[3]`.

**Example 3:**

**Input:** nums = [1,2,3,4], queries = [[0,3]]

**Output:** -1

**Explanation:**

`nums` cannot be converted to a zero array even after using all the queries.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `0 <= nums[i] <= 10^5`

	- `1 <= queries.length <= 10^5`

	- `queries[i].length == 2`

	- `0 <= l_i <= r_i < nums.length`

---

**Links:** [Submissions](https://leetcode.com/problems/zero-array-transformation-iii/) | [Solutions](https://leetcode.com/problems/zero-array-transformation-iii/)
