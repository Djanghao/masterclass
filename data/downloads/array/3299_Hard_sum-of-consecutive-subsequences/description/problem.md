# [3299. Sum of Consecutive Subsequences](https://leetcode.com/problems/sum-of-consecutive-subsequences/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 7 | 1 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

We call an array `arr` of length `n` **consecutive** if one of the following holds:

	- `arr[i] - arr[i - 1] == 1` for *all* `1 <= i < n`.

	- `arr[i] - arr[i - 1] == -1` for *all* `1 <= i < n`.

The **value** of an array is the sum of its elements.

For example, `[3, 4, 5]` is a consecutive array of value 12 and `[9, 8]` is another of value 17. While `[3, 4, 3]` and `[8, 6]` are not consecutive.

Given an array of integers `nums`, return the *sum* of the **values** of all **consecutive ***non-empty* subsequences.

Since the answer may be very large, return it **modulo** `10^9 + 7.`

**Note** that an array of length 1 is also considered consecutive.

 

**Example 1:**

**Input:** nums = [1,2]

**Output:** 6

**Explanation:**

The consecutive subsequences are: `[1]`, `[2]`, `[1, 2]`.

**Example 2:**

**Input:** nums = [1,4,2,3]

**Output:** 31

**Explanation:**

The consecutive subsequences are: `[1]`, `[4]`, `[2]`, `[3]`, `[1, 2]`, `[2, 3]`, `[4, 3]`, `[1, 2, 3]`.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/sum-of-consecutive-subsequences/) | [Solutions](https://leetcode.com/problems/sum-of-consecutive-subsequences/)
