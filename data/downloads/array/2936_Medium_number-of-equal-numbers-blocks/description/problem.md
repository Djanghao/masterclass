# [2936. Number of Equal Numbers Blocks](https://leetcode.com/problems/number-of-equal-numbers-blocks/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 23 | 8 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`interactive`](https://leetcode.com/tag/interactive)

**Companies:** `google`

## Description

You are given a **0-indexed** array of integers, `nums`. The following property holds for `nums`:

	- All occurrences of a value are adjacent. In other words, if there are two indices `i  10` is undefined.

 

**Example 1:**

```

Input: nums = [3,3,3,3,3]
Output: 1
Explanation: There is only one block here which is the whole array (because all numbers are equal) and that is: [3,3,3,3,3]. So the answer would be 1. 

```

**Example 2:**

```

Input: nums = [1,1,1,3,9,9,9,2,10,10]
Output: 5
Explanation: There are 5 blocks here:
Block number 1: [1,1,1,3,9,9,9,2,10,10]
Block number 2: [1,1,1,3,9,9,9,2,10,10]
Block number 3: [1,1,1,3,9,9,9,2,10,10]
Block number 4: [1,1,1,3,9,9,9,2,10,10]
Block number 5: [1,1,1,3,9,9,9,2,10,10]
So the answer would be 5.
```

**Example 3:**

```

Input: nums = [1,2,3,4,5,6,7]
Output: 7
Explanation: Since all numbers are distinct, there are 7 blocks here and each element representing one block. So the answer would be 7. 

```

 

**Constraints:**

	- `1 <= nums.length <= 10^15`

	- `1 <= nums[i] <= 10^9`

	- The input is generated such that all equal values are adjacent.

	- The sum of the elements of `nums` is at most `10^15`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-equal-numbers-blocks/) | [Solutions](https://leetcode.com/problems/number-of-equal-numbers-blocks/)
