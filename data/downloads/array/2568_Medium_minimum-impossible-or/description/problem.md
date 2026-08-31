# [2568. Minimum Impossible OR](https://leetcode.com/problems/minimum-impossible-or/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 377 | 22 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`brainteaser`](https://leetcode.com/tag/brainteaser)


## Description

You are given a **0-indexed** integer array `nums`.

We say that an integer x is **expressible** from `nums` if there exist some integers `0 <= index_1 < index_2 < ... < index_k < nums.length` for which `nums[index_1] | nums[index_2] | ... | nums[index_k] = x`. In other words, an integer is expressible if it can be written as the bitwise OR of some subsequence of `nums`.

Return *the minimum **positive non-zero integer** that is not **expressible from *`nums`.

 

**Example 1:**

```

Input: nums = [2,1]
Output: 4
Explanation: 1 and 2 are already present in the array. We know that 3 is expressible, since nums[0] | nums[1] = 2 | 1 = 3. Since 4 is not expressible, we return 4.

```

**Example 2:**

```

Input: nums = [5,3,2]
Output: 1
Explanation: We can show that 1 is the smallest number that is not expressible.

```

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-impossible-or/) | [Solutions](https://leetcode.com/problems/minimum-impossible-or/)
