# [719. Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 3892 | 124 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`, `bloomberg`, `microsoft`, `google`, `flipkart`

## Description

The **distance of a pair** of integers `a` and `b` is defined as the absolute difference between `a` and `b`.

Given an integer array `nums` and an integer `k`, return *the* `k^th` *smallest **distance among all the pairs*** `nums[i]` *and* `nums[j]` *where* `0 <= i < j < nums.length`.

 

**Example 1:**

```

Input: nums = [1,3,1], k = 1
Output: 0
Explanation: Here are all the pairs:
(1,3) -&gt; 2
(1,1) -&gt; 0
(3,1) -&gt; 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.

```

**Example 2:**

```

Input: nums = [1,1,1], k = 2
Output: 0

```

**Example 3:**

```

Input: nums = [1,6,1], k = 3
Output: 5

```

 

**Constraints:**

	- `n == nums.length`

	- `2 <= n <= 10^4`

	- `0 <= nums[i] <= 10^6`

	- `1 <= k <= n * (n - 1) / 2`

---

**Links:** [Submissions](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) | [Solutions](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
