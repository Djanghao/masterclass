# [1785. Minimum Elements to Add to Form a Given Sum](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 281 | 196 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `twitter`

## Description

You are given an integer array `nums` and two integers `limit` and `goal`. The array `nums` has an interesting property that `abs(nums[i]) = 0`, and `-x` otherwise.

 

**Example 1:**

```

Input: nums = [1,-1,1], limit = 3, goal = -4
Output: 2
Explanation: You can add -2 and -3, then the sum of the array will be 1 - 1 + 1 - 2 - 3 = -4.

```

**Example 2:**

```

Input: nums = [1,-10,9,1], limit = 100, goal = 0
Output: 1

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= limit <= 10^6`

	- `-limit <= nums[i] <= limit`

	- `-10^9 <= goal <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/) | [Solutions](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/)
