# [3782. Last Remaining Integer After Alternating Deletion Operations](https://leetcode.com/problems/last-remaining-integer-after-alternating-deletion-operations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 17 | 3 |




## Description

You are given an integer `n`.

We write the integers from 1 to `n` in a sequence from left to right. Then, **alternately** apply the following two operations until only one integer remains, starting with operation 1:

	- **Operation 1**: Starting from the left, delete every second number.

	- **Operation 2**: Starting from the right, delete every second number.

Return the last remaining integer.

 

**Example 1:**

**Input:** n = 8

**Output:** 3

**Explanation:**

	- Write `[1, 2, 3, 4, 5, 6, 7, 8]` in a sequence.

	- Starting from the left, we delete every second number: `[1, 2, 3, 4, 5, 6, 7, 8]`. The remaining integers are `[1, 3, 5, 7]`.

	- Starting from the right, we delete every second number: `[1, 3, 5, 7]`. The remaining integers are `[3, 7]`.

	- Starting from the left, we delete every second number: `[3, 7]`. The remaining integer is `[3]`.

**Example 2:**

**Input:** n = 5

**Output:** 1

**Explanation:**

	- Write `[1, 2, 3, 4, 5]` in a sequence.

	- Starting from the left, we delete every second number: `[1, 2, 3, 4, 5]`. The remaining integers are `[1, 3, 5]`.

	- Starting from the right, we delete every second number: `[1, 3, 5]`. The remaining integers are `[1, 5]`.

	- Starting from the left, we delete every second number: `[1, 5]`. The remaining integer is `[1]`.

**Example 3:**

**Input:** n = 1

**Output:** 1

**Explanation:**

	- Write `[1]` in a sequence.

	- The last remaining integer is 1.

 

**Constraints:**

	- `1 <= n <= 10^15`

---

**Links:** [Submissions](https://leetcode.com/problems/last-remaining-integer-after-alternating-deletion-operations/) | [Solutions](https://leetcode.com/problems/last-remaining-integer-after-alternating-deletion-operations/)
