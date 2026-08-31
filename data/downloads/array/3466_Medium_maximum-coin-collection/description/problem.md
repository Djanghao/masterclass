# [3466. Maximum Coin Collection ](https://leetcode.com/problems/maximum-coin-collection/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 14 | 10 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)


## Description

Mario drives on a two-lane freeway with coins every mile. You are given two integer arrays, `lane1` and `lane2`, where the value at the `i^th` index represents the number of coins he *gains or loses* in the `i^th` mile in that lane.

	- If Mario is in lane 1 at mile `i` and `lane1[i] > 0`, Mario gains `lane1[i]` coins.

	- If Mario is in lane 1 at mile `i` and `lane1[i] < 0`, Mario pays a toll and loses `abs(lane1[i])` coins.

	- The same rules apply for `lane2`.

Mario can enter the freeway anywhere and exit anytime after traveling **at least** one mile. Mario always enters the freeway on lane 1 but can switch lanes **at most** 2 times.

A **lane switch** is when Mario goes from lane 1 to lane 2 or vice versa.

Return the **maximum** number of coins Mario can earn after performing **at most 2 lane switches**.

**Note:** Mario can switch lanes immediately upon entering or just before exiting the freeway.

 

**Example 1:**

**Input:** lane1 = [1,-2,-10,3], lane2 = [-5,10,0,1]

**Output:** 14

**Explanation:**

	- Mario drives the first mile on lane 1.

	- He then changes to lane 2 and drives for two miles.

	- He changes back to lane 1 for the last mile.

Mario collects `1 + 10 + 0 + 3 = 14` coins.

**Example 2:**

**Input:** lane1 = [1,-1,-1,-1], lane2 = [0,3,4,-5]

**Output:** 8

**Explanation:**

	- Mario starts at mile 0 in lane 1 and drives one mile.

	- He then changes to lane 2 and drives for two more miles. He exits the freeway before mile 3.

He collects `1 + 3 + 4 = 8` coins.

**Example 3:**

**Input:** lane1 = [-5,-4,-3], lane2 = [-1,2,3]

**Output:** 5

**Explanation:**

	- Mario enters at mile 1 and immediately switches to lane 2. He stays here the entire way.

He collects a total of `2 + 3 = 5` coins.

**Example 4:**

**Input:** lane1 = [-3,-3,-3], lane2 = [9,-2,4]

**Output:** 11

**Explanation:**

	- Mario starts at the beginning of the freeway and immediately switches to lane 2. He stays here the whole way.

He collects a total of `9 + (-2) + 4 = 11` coins.

**Example 5:**

**Input:** lane1 = [-10], lane2 = [-2]

**Output:** -2

**Explanation:**

	- Since Mario must ride on the freeway for at least one mile, he rides just one mile in lane 2.

He collects a total of -2 coins.

 

**Constraints:**

	- `1 <= lane1.length == lane2.length <= 10^5`

	- `-10^9 <= lane1[i], lane2[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-coin-collection/) | [Solutions](https://leetcode.com/problems/maximum-coin-collection/)
