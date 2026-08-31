# [3206. Alternating Groups I](https://leetcode.com/problems/alternating-groups-i/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 161 | 9 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `samsara`

## Description

There is a circle of red and blue tiles. You are given an array of integers `colors`. The color of tile `i` is represented by `colors[i]`:

	- `colors[i] == 0` means that tile `i` is **red**.

	- `colors[i] == 1` means that tile `i` is **blue**.

Every 3 contiguous tiles in the circle with **alternating** colors (the middle tile has a different color from its **left** and **right** tiles) is called an **alternating** group.

Return the number of **alternating** groups.

**Note** that since `colors` represents a **circle**, the **first** and the **last** tiles are considered to be next to each other.

 

**Example 1:**

**Input:** colors = [1,1,1]

**Output:** 0

**Explanation:**

![image](./images/0.png)

**Example 2:**

**Input:** colors = [0,1,0,0,1]

**Output:** 3

**Explanation:**

![image](./images/1.png)

Alternating groups:

**![image](./images/2.png)**![image](./images/3.png)**![image](./images/4.png)**

 

**Constraints:**

	- `3 <= colors.length <= 100`

	- `0 <= colors[i] <= 1`

---

**Links:** [Submissions](https://leetcode.com/problems/alternating-groups-i/) | [Solutions](https://leetcode.com/problems/alternating-groups-i/)
