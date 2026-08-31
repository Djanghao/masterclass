# [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 9178 | 252 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`merge-sort`](https://leetcode.com/tag/merge-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `microsoft`, `google`, `bloomberg`, `facebook`, `tiktok`

## Description

Given an integer array `nums`, return* an integer array *`counts`* where *`counts[i]`* is the number of smaller elements to the right of *`nums[i]`.

 

**Example 1:**

```

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.

```

**Example 2:**

```

Input: nums = [-1]
Output: [0]

```

**Example 3:**

```

Input: nums = [-1,-1]
Output: [0,0]

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `-10^4 <= nums[i] <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | [Solutions](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
