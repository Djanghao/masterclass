# [220. Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1248 | 140 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sliding-window`](https://leetcode.com/tag/sliding-window), [`sorting`](https://leetcode.com/tag/sorting), [`bucket-sort`](https://leetcode.com/tag/bucket-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `netflix`, `amazon`, `google`, `yandex`, `airbnb`, `palantir-technologies`

## Description

You are given an integer array `nums` and two integers `indexDiff` and `valueDiff`.

Find a pair of indices `(i, j)` such that:

	- `i != j`,

	- `abs(i - j) <= indexDiff`.

	- `abs(nums[i] - nums[j]) <= valueDiff`, and

Return `true`* if such pair exists or *`false`* otherwise*.

 

**Example 1:**

```

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --&gt; 0 != 3
abs(i - j) &lt;= indexDiff --&gt; abs(0 - 3) &lt;= 3
abs(nums[i] - nums[j]) &lt;= valueDiff --&gt; abs(1 - 1) &lt;= 0

```

**Example 2:**

```

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

```

 

**Constraints:**

	- `2 <= nums.length <= 10^5`

	- `-10^9 <= nums[i] <= 10^9`

	- `1 <= indexDiff <= nums.length`

	- `0 <= valueDiff <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/contains-duplicate-iii/) | [Solutions](https://leetcode.com/problems/contains-duplicate-iii/)
