# [3733. Minimum Time to Complete All Deliveries](https://leetcode.com/problems/minimum-time-to-complete-all-deliveries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 155 | 9 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`binary-search`](https://leetcode.com/tag/binary-search)

**Companies:** `amazon`

## Description

You are given two integer arrays of size 2: `d = [d_1, d_2]` and `r = [r_1, r_2]`.

Two delivery drones are tasked with completing a specific number of deliveries. Drone `i` must complete `d_i` deliveries.

Each delivery takes **exactly** one hour and **only one** drone can make a delivery at any given hour.

Additionally, both drones require recharging at specific intervals during which they cannot make deliveries. Drone `i` must recharge every `r_i` hours (i.e. at hours that are multiples of `r_i`).

Return an integer denoting the **minimum** total time (in hours) required to complete all deliveries.

 

**Example 1:**

**Input:** d = [3,1], r = [2,3]

**Output:** 5

**Explanation:**

	- The first drone delivers at hours 1, 3, 5 (recharges at hours 2, 4).

	- The second drone delivers at hour 2 (recharges at hour 3).

**Example 2:**

**Input:** d = [1,3], r = [2,2]

**Output:** 7

**Explanation:**

	- The first drone delivers at hour 3 (recharges at hours 2, 4, 6).

	- The second drone delivers at hours 1, 5, 7 (recharges at hours 2, 4, 6).

**Example 3:**

**Input:** d = [2,1], r = [3,4]

**Output:** 3

**Explanation:**

	- The first drone delivers at hours 1, 2 (recharges at hour 3).

	- The second drone delivers at hour 3.

 

**Constraints:**

	- `d = [d_1, d_2]`

	- `1 <= d_i <= 10^9`

	- `r = [r_1, r_2]`

	- `2 <= r_i <= 3 * 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-time-to-complete-all-deliveries/) | [Solutions](https://leetcode.com/problems/minimum-time-to-complete-all-deliveries/)
