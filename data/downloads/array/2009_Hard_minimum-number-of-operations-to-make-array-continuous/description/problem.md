# [2009. Minimum Number of Operations to Make Array Continuous](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1975 | 53 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`binary-search`](https://leetcode.com/tag/binary-search), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `bloomberg`, `uber`, `google`

## Description

You are given an integer array `nums`. In one operation, you can replace **any** element in `nums` with **any** integer.

`nums` is considered **continuous** if both of the following conditions are fulfilled:

	- All elements in `nums` are **unique**.

	- The difference between the **maximum** element and the **minimum** element in `nums` equals `nums.length - 1`.

For example, `nums = [4, 2, 5, 3]` is **continuous**, but `nums = [1, 2, 3, 5, 6]` is **not continuous**.

Return *the **minimum** number of operations to make *`nums`* ****continuous***.

 

**Example 1:**

```

Input: nums = [4,2,5,3]
Output: 0
Explanation:&nbsp;nums is already continuous.

```

**Example 2:**

```

Input: nums = [1,2,3,5,6]
Output: 1
Explanation:&nbsp;One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.

```

**Example 3:**

```

Input: nums = [1,10,100,1000]
Output: 3
Explanation:&nbsp;One possible solution is to:
- Change the second element to 2.
- Change the third element to 3.
- Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous.

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/) | [Solutions](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)
