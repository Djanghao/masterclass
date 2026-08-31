# [3196. Maximize Total Cost of Alternating Subarrays](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 192 | 29 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

You are given an integer array `nums` with length `n`.

The **cost** of a subarray `nums[l..r]`, where `0  1`, at indices `i_1, i_2, ..., i_k &minus; 1`, where `0 <= i_1 < i_2 < ... < i_k - 1 < n - 1`, then the total cost will be:

`cost(0, i_1) + cost(i_1 + 1, i_2) + ... + cost(i_k &minus; 1 + 1, n &minus; 1)`

Return an integer denoting the *maximum total cost* of the subarrays after splitting the array optimally.

**Note:** If `nums` is not split into subarrays, i.e. `k = 1`, the total cost is simply `cost(0, n - 1)`.

 

**Example 1:**

**Input:** nums = [1,-2,3,4]

**Output:** 10

**Explanation:**

One way to maximize the total cost is by splitting `[1, -2, 3, 4]` into subarrays `[1, -2, 3]` and `[4]`. The total cost will be `(1 + 2 + 3) + 4 = 10`.

**Example 2:**

**Input:** nums = [1,-1,1,-1]

**Output:** 4

**Explanation:**

One way to maximize the total cost is by splitting `[1, -1, 1, -1]` into subarrays `[1, -1]` and `[1, -1]`. The total cost will be `(1 + 1) + (1 + 1) = 4`.

**Example 3:**

**Input:** nums = [0]

**Output:** 0

**Explanation:**

We cannot split the array further, so the answer is 0.

**Example 4:**

**Input:** nums = [1,-1]

**Output:** 2

**Explanation:**

Selecting the whole array gives a total cost of `1 + 1 = 2`, which is the maximum.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `-10^9 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/) | [Solutions](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/)
