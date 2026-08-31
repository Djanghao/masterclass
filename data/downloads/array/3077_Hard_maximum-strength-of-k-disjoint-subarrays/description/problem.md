# [3077. Maximum Strength of K Disjoint Subarrays](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 167 | 75 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `de-shaw`

## Description

You are given an array of integers `nums` with length `n`, and a positive **odd** integer `k`.

Select exactly `k` disjoint subarrays `sub_1, sub_2, ..., sub_k` from `nums` such that the last element of `sub_i` appears before the first element of `sub_{i+1}` for all `1 `sum(sub_i)` is the sum of the elements in the `i`-th subarray.

Return the **maximum** possible strength that can be obtained from selecting exactly `k` disjoint subarrays from `nums`.

**Note** that the chosen subarrays **don't** need to cover the entire array.

 

**Example 1:**

**Input:** nums = [1,2,3,-1,2], k = 3

**Output:** 22

**Explanation:**

The best possible way to select 3 subarrays is: nums[0..2], nums[3..3], and nums[4..4]. The strength is calculated as follows:

`strength = 3 * (1 + 2 + 3) - 2 * (-1) + 2 = 22`

 

**Example 2:**

**Input:** nums = [12,-2,-2,-2,-2], k = 5

**Output:** 64

**Explanation:**

The only possible way to select 5 disjoint subarrays is: nums[0..0], nums[1..1], nums[2..2], nums[3..3], and nums[4..4]. The strength is calculated as follows:

`strength = 5 * 12 - 4 * (-2) + 3 * (-2) - 2 * (-2) + (-2) = 64`

**Example 3:**

**Input:** nums = [-1,-2,-3], k = 1

**Output:** -1

**Explanation:**

The best possible way to select 1 subarray is: nums[0..0]. The strength is -1.

 

**Constraints:**

	- `1 <= n <= 10^4`

	- `-10^9 <= nums[i] <= 10^9`

	- `1 <= k <= n`

	- `1 <= n * k <= 10^6`

	- `k` is odd.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/) | [Solutions](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/)
