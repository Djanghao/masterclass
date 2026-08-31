# [2799. Count Complete Subarrays in an Array](https://leetcode.com/problems/count-complete-subarrays-in-an-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1109 | 25 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `amazon`, `google`, `facebook`, `tiktok`

## Description

You are given an array `nums` consisting of **positive** integers.

We call a subarray of an array **complete** if the following condition is satisfied:

	- The number of **distinct** elements in the subarray is equal to the number of distinct elements in the whole array.

Return *the number of **complete** subarrays*.

A **subarray** is a contiguous non-empty part of an array.

 

**Example 1:**

```

Input: nums = [1,3,1,2,2]
Output: 4
Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].

```

**Example 2:**

```

Input: nums = [5,5,5,5]
Output: 10
Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.

```

 

**Constraints:**

	- `1 <= nums.length <= 1000`

	- `1 <= nums[i] <= 2000`

---

**Links:** [Submissions](https://leetcode.com/problems/count-complete-subarrays-in-an-array/) | [Solutions](https://leetcode.com/problems/count-complete-subarrays-in-an-array/)
