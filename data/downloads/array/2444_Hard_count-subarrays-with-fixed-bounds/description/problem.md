# [2444. Count Subarrays With Fixed Bounds](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 3730 | 95 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`queue`](https://leetcode.com/tag/queue), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`monotonic-queue`](https://leetcode.com/tag/monotonic-queue)

**Companies:** `uber`, `google`, `mathworks`, `microsoft`, `facebook`, `morgan-stanley`, `snowflake`, `amazon`, `apple`, `adobe`, `meesho`

## Description

You are given an integer array `nums` and two integers `minK` and `maxK`.

A **fixed-bound subarray** of `nums` is a subarray that satisfies the following conditions:

	- The **minimum** value in the subarray is equal to `minK`.

	- The **maximum** value in the subarray is equal to `maxK`.

Return *the **number** of fixed-bound subarrays*.

A **subarray** is a **contiguous** part of an array.

 

**Example 1:**

```

Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

```

**Example 2:**

```

Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.

```

 

**Constraints:**

	- `2 <= nums.length <= 10^5`

	- `1 <= nums[i], minK, maxK <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/) | [Solutions](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)
