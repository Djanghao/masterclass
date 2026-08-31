# [3317. Find the Number of Possible Ways for an Event](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 72 | 15 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`combinatorics`](https://leetcode.com/tag/combinatorics)

**Companies:** `amazon`

## Description

You are given three integers `n`, `x`, and `y`.

An event is being held for `n` performers. When a performer arrives, they are **assigned** to one of the `x` stages. All performers assigned to the **same** stage will perform together as a band, though some stages *might* remain **empty**.

After all performances are completed, the jury will **award** each band a score in the range `[1, y]`.

Return the **total** number of possible ways the event can take place.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

**Note** that two events are considered to have been held **differently** if **either** of the following conditions is satisfied:

	- **Any** performer is *assigned* a different stage.

	- **Any** band is *awarded* a different score.

 

**Example 1:**

**Input:** n = 1, x = 2, y = 3

**Output:** 6

**Explanation:**

	- There are 2 ways to assign a stage to the performer.

	- The jury can award a score of either 1, 2, or 3 to the only band.

**Example 2:**

**Input:** n = 5, x = 2, y = 1

**Output:** 32

**Explanation:**

	- Each performer will be assigned either stage 1 or stage 2.

	- All bands will be awarded a score of 1.

**Example 3:**

**Input:** n = 3, x = 3, y = 4

**Output:** 684

 

**Constraints:**

	- `1 <= n, x, y <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/) | [Solutions](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/)
