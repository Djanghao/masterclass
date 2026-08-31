# [3727. Maximum Alternating Sum of Squares](https://leetcode.com/problems/maximum-alternating-sum-of-squares/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 64 | 1 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)


## Description

You are given an integer array `nums`. You may **rearrange the elements** in any order.

The **alternating score** of an array `arr` is defined as:

	- `score = arr[0]^2 - arr[1]^2 + arr[2]^2 - arr[3]^2 + ...`

Return an integer denoting the **maximum possible alternating score** of `nums` after rearranging its elements.

 

**Example 1:**

**Input:** nums = [1,2,3]

**Output:** 12

**Explanation:**

A possible rearrangement for `nums` is `[2,1,3]`, which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

`score = 2^2 - 1^2 + 3^2 = 4 - 1 + 9 = 12`

**Example 2:**

**Input:** nums = [1,-1,2,-2,3,-3]

**Output:** 16

**Explanation:**

A possible rearrangement for `nums` is `[-3,-1,-2,1,3,2]`, which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

`score = (-3)^2 - (-1)^2 + (-2)^2 - (1)^2 + (3)^2 - (2)^2 = 9 - 1 + 4 - 1 + 9 - 4 = 16`

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `-4 * 10^4 <= nums[i] <= 4 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-alternating-sum-of-squares/) | [Solutions](https://leetcode.com/problems/maximum-alternating-sum-of-squares/)
