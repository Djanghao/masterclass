# [3711. Maximum Transactions Without Negative Balance](https://leetcode.com/problems/maximum-transactions-without-negative-balance/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5 | 1 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `paytm`

## Description

You are given an integer array `transactions`, where `transactions[i]` represents the amount of the `i^th` transaction:

	- A positive value means money is **received**.

	- A negative value means money is **sent**.

The account starts with a balance of 0, and the balance **must never become negative**. Transactions must be considered in the given order, but you are allowed to skip some transactions.

Return an integer denoting the **maximum number of transactions** that can be performed without the balance ever going negative.

 

**Example 1:**

**Input:** transactions = [2,-5,3,-1,-2]

**Output:** 4

**Explanation:**

One optimal sequence is `[2, 3, -1, -2]`, balance: `0 &rarr; 2 &rarr; 5 &rarr; 4 &rarr; 2`.

**Example 2:**

**Input:** transactions = [-1,-2,-3]

**Output:** 0

**Explanation:**

All transactions are negative. Including any would make the balance negative.

**Example 3:**

**Input:** transactions = [3,-2,3,-2,1,-1]

**Output:** 6

**Explanation:**

All transactions can be taken in order, balance: `0 &rarr; 3 &rarr; 1 &rarr; 4 &rarr; 2 &rarr; 3 &rarr; 2`.

 

**Constraints:**

	- `1 <= transactions.length <= 10^5`

	- `-10^9 <= transactions[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-transactions-without-negative-balance/) | [Solutions](https://leetcode.com/problems/maximum-transactions-without-negative-balance/)
