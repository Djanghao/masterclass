# [2519. Count the Number of K-Big Indices](https://leetcode.com/problems/count-the-number-of-k-big-indices/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 111 | 23 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`merge-sort`](https://leetcode.com/tag/merge-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `amazon`

## Description

You are given a **0-indexed** integer array `nums` and a positive integer `k`.

We call an index `i` **k-big** if the following conditions are satisfied:

	- There exist at least `k` different indices `idx1` such that `idx1  i` and `nums[idx2] < nums[i]`.

Return *the number of k-big indices*.

 

**Example 1:**

```

Input: nums = [2,3,6,5,2,3], k = 2
Output: 2
Explanation: There are only two 2-big indices in nums:
- i = 2 --&gt; There are two valid idx1: 0 and 1. There are three valid idx2: 2, 3, and 4.
- i = 3 --&gt; There are two valid idx1: 0 and 1. There are two valid idx2: 3 and 4.

```

**Example 2:**

```

Input: nums = [1,1,1], k = 3
Output: 0
Explanation: There are no 3-big indices in nums.

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i], k <= nums.length`

---

**Links:** [Submissions](https://leetcode.com/problems/count-the-number-of-k-big-indices/) | [Solutions](https://leetcode.com/problems/count-the-number-of-k-big-indices/)
