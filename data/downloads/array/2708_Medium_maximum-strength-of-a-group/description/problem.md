# [2708. Maximum Strength of a Group](https://leetcode.com/problems/maximum-strength-of-a-group/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 381 | 65 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`backtracking`](https://leetcode.com/tag/backtracking), [`greedy`](https://leetcode.com/tag/greedy), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`sorting`](https://leetcode.com/tag/sorting), [`enumeration`](https://leetcode.com/tag/enumeration)


## Description

You are given a **0-indexed** integer array `nums` representing the score of students in an exam. The teacher would like to form one **non-empty** group of students with maximal **strength**, where the strength of a group of students of indices `i_0`, `i_1`, `i_2`, ... , `i_k` is defined as `nums[i_0] * nums[i_1] * nums[i_2] * ... * nums[i_k​]`.

Return *the maximum strength of a group the teacher can create*.

 

**Example 1:**

```

Input: nums = [3,-1,-5,2,5,-9]
Output: 1350
Explanation: One way to form a group of maximal strength is to group the students at indices [0,2,3,4,5]. Their strength is 3 * (-5) * 2 * 5 * (-9) = 1350, which we can show is optimal.

```

**Example 2:**

```

Input: nums = [-4,-5,-4]
Output: 20
Explanation: Group the students at indices [0, 1] . Then, we&rsquo;ll have a resulting strength of 20. We cannot achieve greater strength.

```

 

**Constraints:**

	- `1 <= nums.length <= 13`

	- `-9 <= nums[i] <= 9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-strength-of-a-group/) | [Solutions](https://leetcode.com/problems/maximum-strength-of-a-group/)
