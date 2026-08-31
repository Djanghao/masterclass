# [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 6772 | 116 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`, `microsoft`, `hashedin`, `google`, `uber`, `capital-one`, `tiktok`, `roblox`, `servicenow`, `bloomberg`, `infosys`, `salesforce`, `oracle`, `facebook`, `morgan-stanley`

## Description

Given an integer array `nums` and an integer `k`, return *the number of **good subarrays** of *`nums`.

A **good array** is an array where the number of different integers in that array is exactly `k`.

	- For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.

A **subarray** is a **contiguous** part of an array.

 

**Example 1:**

```

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

```

**Example 2:**

```

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

```

 

**Constraints:**

	- `1 <= nums.length <= 2 * 10^4`

	- `1 <= nums[i], k <= nums.length`

---

**Links:** [Submissions](https://leetcode.com/problems/subarrays-with-k-different-integers/) | [Solutions](https://leetcode.com/problems/subarrays-with-k-different-integers/)
