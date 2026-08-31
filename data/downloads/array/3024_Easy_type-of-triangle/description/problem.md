# [3024. Type of Triangle](https://leetcode.com/problems/type-of-triangle/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 449 | 65 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `google`, `bloomberg`, `microsoft`, `ibm`

## Description

You are given a **0-indexed** integer array `nums` of size `3` which can form the sides of a triangle.

	- A triangle is called **equilateral** if it has all sides of equal length.

	- A triangle is called **isosceles** if it has exactly two sides of equal length.

	- A triangle is called **scalene** if all its sides are of different lengths.

Return *a string representing* *the type of triangle that can be formed **or *`"none"`* if it **cannot** form a triangle.*

 

**Example 1:**

```

Input: nums = [3,3,3]
Output: &quot;equilateral&quot;
Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.

```

**Example 2:**

```

Input: nums = [3,4,5]
Output: &quot;scalene&quot;
Explanation: 
nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3. 
Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
As all the sides are of different lengths, it will form a scalene triangle.

```

 

**Constraints:**

	- `nums.length == 3`

	- `1 <= nums[i] <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/type-of-triangle/) | [Solutions](https://leetcode.com/problems/type-of-triangle/)
