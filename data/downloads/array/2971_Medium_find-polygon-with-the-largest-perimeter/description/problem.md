# [2971. Find Polygon With the Largest Perimeter](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 828 | 70 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting), [`prefix-sum`](https://leetcode.com/tag/prefix-sum)

**Companies:** `microsoft`, `bloomberg`, `airtel`

## Description

You are given an array of **positive** integers `nums` of length `n`.

A **polygon** is a closed plane figure that has at least `3` sides. The **longest side** of a polygon is **smaller** than the sum of its other sides.

Conversely, if you have `k` (`k >= 3`) **positive** real numbers `a_1`, `a_2`, `a_3`, ..., `a_k` where `a_1  a_k`, then there **always** exists a polygon with `k` sides whose lengths are `a_1`, `a_2`, `a_3`, ..., `a_k`.

The **perimeter** of a polygon is the sum of lengths of its sides.

Return *the **largest** possible **perimeter** of a **polygon** whose sides can be formed from* `nums`, *or* `-1` *if it is not possible to create a polygon*.

 

**Example 1:**

```

Input: nums = [5,5,5]
Output: 15
Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15.

```

**Example 2:**

```

Input: nums = [1,12,1,2,5,50,3]
Output: 12
Explanation: The polygon with the largest perimeter which can be made from nums has 5 sides: 1, 1, 2, 3, and 5. The perimeter is 1 + 1 + 2 + 3 + 5 = 12.
We cannot have a polygon with either 12 or 50 as the longest side because it is not possible to include 2 or more smaller sides that have a greater sum than either of them.
It can be shown that the largest possible perimeter is 12.

```

**Example 3:**

```

Input: nums = [5,5,50]
Output: -1
Explanation: There is no possible way to form a polygon from nums, as a polygon has at least 3 sides and 50 &gt; 5 + 5.

```

 

**Constraints:**

	- `3 <= n <= 10^5`

	- `1 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/) | [Solutions](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/)
