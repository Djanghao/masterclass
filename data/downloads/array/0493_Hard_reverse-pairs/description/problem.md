# [493. Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 6847 | 294 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree), [`segment-tree`](https://leetcode.com/tag/segment-tree), [`merge-sort`](https://leetcode.com/tag/merge-sort), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `amazon`, `facebook`, `google`, `bloomberg`, `microsoft`, `apple`

## Description

Given an integer array `nums`, return *the number of **reverse pairs** in the array*.

A **reverse pair** is a pair `(i, j)` where:

	- `0  2 * nums[j]`.

 

**Example 1:**

```

Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are:
(1, 4) --&gt; nums[1] = 3, nums[4] = 1, 3 &gt; 2 * 1
(3, 4) --&gt; nums[3] = 3, nums[4] = 1, 3 &gt; 2 * 1

```

**Example 2:**

```

Input: nums = [2,4,3,5,1]
Output: 3
Explanation: The reverse pairs are:
(1, 4) --&gt; nums[1] = 4, nums[4] = 1, 4 &gt; 2 * 1
(2, 4) --&gt; nums[2] = 3, nums[4] = 1, 3 &gt; 2 * 1
(3, 4) --&gt; nums[3] = 5, nums[4] = 1, 5 &gt; 2 * 1

```

 

**Constraints:**

	- `1 <= nums.length <= 5 * 10^4`

	- `-2^31 <= nums[i] <= 2^31 - 1`

---

**Links:** [Submissions](https://leetcode.com/problems/reverse-pairs/) | [Solutions](https://leetcode.com/problems/reverse-pairs/)
