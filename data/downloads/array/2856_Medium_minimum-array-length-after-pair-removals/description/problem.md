# [2856. Minimum Array Length After Pair Removals](https://leetcode.com/problems/minimum-array-length-after-pair-removals/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 417 | 105 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`greedy`](https://leetcode.com/tag/greedy), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `snowflake`

## Description

Given an integer array `num` sorted in non-decreasing order.

You can perform the following operation any number of times:

	- Choose **two** indices, `i` and `j`, where `nums[i] < nums[j]`.

	- Then, remove the elements at indices `i` and `j` from `nums`. The remaining elements retain their original order, and the array is re-indexed.

Return the **minimum** length of `nums` after applying the operation zero or more times.

 

**Example 1:**

**Input:** nums = [1,2,3,4]

**Output:** 0

**Explanation:**

![image](./images/0.gif)

**Example 2:**

**Input:** nums = [1,1,2,2,3,3]

**Output:** 0

**Explanation:**

![image](./images/1.gif)

**Example 3:**

**Input:** nums = [1000000000,1000000000]

**Output:** 2

**Explanation:**

Since both numbers are equal, they cannot be removed.

**Example 4:**

**Input:** nums = [2,3,4,4,4]

**Output:** 1

**Explanation:**

![image](./images/2.gif)

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^9`

	- `nums` is sorted in **non-decreasing** order.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-array-length-after-pair-removals/) | [Solutions](https://leetcode.com/problems/minimum-array-length-after-pair-removals/)
