# [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5262 | 141 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`math`](https://leetcode.com/tag/math), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `facebook`, `amazon`, `google`, `microsoft`, `bloomberg`, `walmart-labs`, `deliveroo`, `roblox`

## Description

Given an array of integers `nums` and an integer `k`. A continuous subarray is called **nice** if there are `k` odd numbers on it.

Return *the number of **nice** sub-arrays*.

 

**Example 1:**

```

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

```

**Example 2:**

```

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

```

**Example 3:**

```

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16

```

 

**Constraints:**

	- `1 <= nums.length <= 50000`

	- `1 <= nums[i] <= 10^5`

	- `1 <= k <= nums.length`

---

**Links:** [Submissions](https://leetcode.com/problems/count-number-of-nice-subarrays/) | [Solutions](https://leetcode.com/problems/count-number-of-nice-subarrays/)
