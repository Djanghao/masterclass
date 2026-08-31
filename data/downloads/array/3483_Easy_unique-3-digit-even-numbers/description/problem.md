# [3483. Unique 3-Digit Even Numbers](https://leetcode.com/problems/unique-3-digit-even-numbers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 112 | 33 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`recursion`](https://leetcode.com/tag/recursion), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `amazon`

## Description

You are given an array of digits called `digits`. Your task is to determine the number of **distinct** three-digit even numbers that can be formed using these digits.

**Note**: Each *copy* of a digit can only be used **once per number**, and there may **not** be leading zeros.

 

**Example 1:**

**Input:** digits = [1,2,3,4]

**Output:** 12

**Explanation:** The 12 distinct 3-digit even numbers that can be formed are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432. Note that 222 cannot be formed because there is only 1 copy of the digit 2.

**Example 2:**

**Input:** digits = [0,2,2]

**Output:** 2

**Explanation:** The only 3-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because it appears twice in the array.

**Example 3:**

**Input:** digits = [6,6,6]

**Output:** 1

**Explanation:** Only 666 can be formed.

**Example 4:**

**Input:** digits = [1,3,5]

**Output:** 0

**Explanation:** No even 3-digit numbers can be formed.

 

**Constraints:**

	- `3 <= digits.length <= 10`

	- `0 <= digits[i] <= 9`

---

**Links:** [Submissions](https://leetcode.com/problems/unique-3-digit-even-numbers/) | [Solutions](https://leetcode.com/problems/unique-3-digit-even-numbers/)
