# [553. Optimal Division](https://leetcode.com/problems/optimal-division/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 410 | 1634 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `amazon`

## Description

You are given an integer array `nums`. The adjacent integers in `nums` will perform the float division.

	- For example, for `nums = [2,3,4]`, we will evaluate the expression `"2/3/4"`.

However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum.

Return *the corresponding expression that has the maximum value in string format*.

**Note:** your expression should not contain redundant parenthesis.

 

**Example 1:**

```

Input: nums = [1000,100,10,2]
Output: &quot;1000/(100/10/2)&quot;
Explanation: 1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in &quot;1000/((100/10)/2)&quot; are redundant since they do not influence the operation priority.
So you should return &quot;1000/(100/10/2)&quot;.
Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2

```

**Example 2:**

```

Input: nums = [2,3,4]
Output: &quot;2/(3/4)&quot;
Explanation: (2/(3/4)) = 8/3 = 2.667
It can be shown that after trying all possibilities, we cannot get an expression with evaluation greater than 2.667

```

 

**Constraints:**

	- `1 <= nums.length <= 10`

	- `2 <= nums[i] <= 1000`

	- There is only one optimal division for the given input.

---

**Links:** [Submissions](https://leetcode.com/problems/optimal-division/) | [Solutions](https://leetcode.com/problems/optimal-division/)
