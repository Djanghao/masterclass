# [2031. Count Subarrays With More Ones Than Zeros](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 183 | 17 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`merge-sort`](https://leetcode.com/tag/merge-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `google`

## Description

You are given a binary array `nums` containing only the integers `0` and `1`. Return* the number of **subarrays** in nums that have **more** *`1`'*s than *`0`*'s. Since the answer may be very large, return it **modulo** *`10^9 + 7`.

A **subarray** is a contiguous sequence of elements within an array.

 

**Example 1:**

```

Input: nums = [0,1,1,0,1]
Output: 9
Explanation:
The subarrays of size 1 that have more ones than zeros are: [1], [1], [1]
The subarrays of size 2 that have more ones than zeros are: [1,1]
The subarrays of size 3 that have more ones than zeros are: [0,1,1], [1,1,0], [1,0,1]
The subarrays of size 4 that have more ones than zeros are: [1,1,0,1]
The subarrays of size 5 that have more ones than zeros are: [0,1,1,0,1]

```

**Example 2:**

```

Input: nums = [0]
Output: 0
Explanation:
No subarrays have more ones than zeros.

```

**Example 3:**

```

Input: nums = [1]
Output: 1
Explanation:
The subarrays of size 1 that have more ones than zeros are: [1]

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `0 <= nums[i] <= 1`

---

**Links:** [Submissions](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/) | [Solutions](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/)
