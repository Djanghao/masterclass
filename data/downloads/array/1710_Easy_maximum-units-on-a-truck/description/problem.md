# [1710. Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 3999 | 235 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`, `google`, `ibm`, `salesforce`, `arista-networks`

## Description

You are assigned to put some amount of boxes onto **one truck**. You are given a 2D array `boxTypes`, where `boxTypes[i] = [numberOfBoxes_i, numberOfUnitsPerBox_i]`:

	- `numberOfBoxes_i` is the number of boxes of type `i`.

	- `numberOfUnitsPerBox_i` is the number of units in each box of the type `i`.

You are also given an integer `truckSize`, which is the **maximum** number of **boxes** that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed `truckSize`.

Return *the **maximum** total number of **units** that can be put on the truck.*

 

**Example 1:**

```

Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

```

**Example 2:**

```

Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
Output: 91

```

 

**Constraints:**

	- `1 <= boxTypes.length <= 1000`

	- `1 <= numberOfBoxes_i, numberOfUnitsPerBox_i <= 1000`

	- `1 <= truckSize <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-units-on-a-truck/) | [Solutions](https://leetcode.com/problems/maximum-units-on-a-truck/)
