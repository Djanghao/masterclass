# [334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 8754 | 682 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `facebook`, `amazon`, `bloomberg`, `google`, `nutanix`, `microsoft`, `uber`, `tiktok`

## Description

Given an integer array `nums`, return `true`* if there exists a triple of indices *`(i, j, k)`* such that *`i < j < k`* and *`nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.

 

**Example 1:**

```

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i &lt; j &lt; k is valid.

```

**Example 2:**

```

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

```

**Example 3:**

```

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 &lt; nums[4] == 4 &lt; nums[5] == 6.

```

 

**Constraints:**

	- `1 <= nums.length <= 5 * 10^5`

	- `-2^31 <= nums[i] <= 2^31 - 1`

 

**Follow up:** Could you implement a solution that runs in `O(n)` time complexity and `O(1)` space complexity?

---

**Links:** [Submissions](https://leetcode.com/problems/increasing-triplet-subsequence/) | [Solutions](https://leetcode.com/problems/increasing-triplet-subsequence/)
