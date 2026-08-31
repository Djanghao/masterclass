# [2592. Maximize Greatness of an Array](https://leetcode.com/problems/maximize-greatness-of-an-array/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 498 | 21 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `nvidia`, `twilio`, `salesforce`, `oracle`

## Description

You are given a 0-indexed integer array `nums`. You are allowed to permute `nums` into a new array `perm` of your choosing.

We define the **greatness** of `nums` be the number of indices `0  nums[i]`.

Return *the **maximum** possible greatness you can achieve after permuting* `nums`.

 

**Example 1:**

```

Input: nums = [1,3,5,2,1,3,1]
Output: 4
Explanation: One of the optimal rearrangements is perm = [2,5,1,3,3,1,1].
At indices = 0, 1, 3, and 4, perm[i] &gt; nums[i]. Hence, we return 4.
```

**Example 2:**

```

Input: nums = [1,2,3,4]
Output: 3
Explanation: We can prove the optimal perm is [2,3,4,1].
At indices = 0, 1, and 2, perm[i] &gt; nums[i]. Hence, we return 3.

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `0 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-greatness-of-an-array/) | [Solutions](https://leetcode.com/problems/maximize-greatness-of-an-array/)
