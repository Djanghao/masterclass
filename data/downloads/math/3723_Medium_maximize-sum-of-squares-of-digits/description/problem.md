# [3723. Maximize Sum of Squares of Digits](https://leetcode.com/problems/maximize-sum-of-squares-of-digits/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 60 | 2 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`greedy`](https://leetcode.com/tag/greedy)


## Description

You are given two **positive** integers `num` and `sum`.

A positive integer `n` is **good** if it satisfies both of the following:

	- The number of digits in `n` is **exactly** `num`.

	- The sum of digits in `n` is **exactly** `sum`.

The **score** of a **good** integer `n` is the sum of the squares of digits in `n`.

Return a **string** denoting the **good** integer `n` that achieves the **maximum** **score**. If there are multiple possible integers, return the **maximum **​​​​​​​one. If no such integer exists, return an empty string.

 

**Example 1:**

**Input:** num = 2, sum = 3

**Output:** "30"

**Explanation:**

There are 3 good integers: 12, 21, and 30.

	- The score of 12 is `1^2 + 2^2 = 5`.

	- The score of 21 is `2^2 + 1^2 = 5`.

	- The score of 30 is `3^2 + 0^2 = 9`.

The maximum score is 9, which is achieved by the good integer 30. Therefore, the answer is `"30"`.

**Example 2:**

**Input:** num = 2, sum = 17

**Output:** "98"

**Explanation:**

There are 2 good integers: 89 and 98.

	- The score of 89 is `8^2 + 9^2 = 145`.

	- The score of 98 is `9^2 + 8^2 = 145`.

The maximum score is 145. The maximum good integer that achieves this score is 98. Therefore, the answer is `"98"`.

**Example 3:**

**Input:** num = 1, sum = 10

**Output:** ""

**Explanation:**

There are no integers that have exactly 1 digit and whose digits sum to 10. Therefore, the answer is `""`.

 

**Constraints:**

	- `1 <= num <= 2 * 10^5`

	- `1 <= sum <= 2 * 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-sum-of-squares-of-digits/) | [Solutions](https://leetcode.com/problems/maximize-sum-of-squares-of-digits/)
