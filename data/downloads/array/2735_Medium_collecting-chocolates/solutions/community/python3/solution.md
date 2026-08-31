# Garbage problem description is wrong.

**Author:** seafmch
**Votes:** 79
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3623904/](https://leetcode.com/problems/collecting-chocolates/solutions/3623904/)

---

EDIT: As of June 11, Leetcode has fixed their erroneous description.

From the description:

> Simultaneously change the chocolate of ith type to (i + 1)th type for all indexes i where 0 <= i < n - 1. When i == n - 1, that chocolate will be changed to type of the chocolate at index 0.

From the first example:

>Input: nums = [20,1,15], x = 5
Output: 13
Explanation: Initially, the chocolate types are [0,1,2]. We will buy the 1st type of chocolate at a cost of 1.
Now, we will perform the operation at a cost of 5, and the types of chocolates will become [2,0,1].

WRONG. The example lists the array rotating forwards, but the problem description describes it going backwards. The problem description says that the (n-1) index becomes the (0) index for example, so after the operation the array should be [1, 2, 0].

For this first example, the answer will be the same regardless of whether we rotate forwards or backwards, so we can't deduce which way we are expected to rotate. The second example is trivial (never rotate), so we still can't deduce which way we are expected to rotate. Unsolvable. So what do we believe? The example, or the description?
