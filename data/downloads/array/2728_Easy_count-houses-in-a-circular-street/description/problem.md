# [2728. Count Houses in a Circular Street](https://leetcode.com/problems/count-houses-in-a-circular-street/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 59 | 12 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`interactive`](https://leetcode.com/tag/interactive)

**Companies:** `google`

## Description

You are given an object `street` of class `Street` that represents a circular street and a positive integer `k` which represents a maximum bound for the number of houses in that street (in other words, the number of houses is less than or equal to `k`). Houses' doors could be open or closed initially.

Initially, you are standing in front of a door to a house on this street. Your task is to count the number of houses in the street.

The class `Street` contains the following functions which may help you:

	- `void openDoor()`: Open the door of the house you are in front of.

	- `void closeDoor()`: Close the door of the house you are in front of.

	- `boolean isDoorOpen()`: Returns `true` if the door of the current house is open and `false` otherwise.

	- `void moveRight()`: Move to the right house.

	- `void moveLeft()`: Move to the left house.

Return `ans` *which represents the number of houses on this street.*

 

**Example 1:**

```

Input: street = [0,0,0,0], k = 10
Output: 4
Explanation: There are 4 houses, and all their doors are closed. 
The number of houses is less than k, which is 10.
```

**Example 2:**

```

Input: street = [1,0,1,1,0], k = 5
Output: 5
Explanation: There are 5 houses, and the doors of the 1st, 3rd, and 4th house (moving in the right direction) are open, and the rest are closed.
The number of houses is equal to k, which is 5.

```

 

**Constraints:**

	- `n == number of houses`

	- `1 <= n <= k <= 10^3`

---

**Links:** [Submissions](https://leetcode.com/problems/count-houses-in-a-circular-street/) | [Solutions](https://leetcode.com/problems/count-houses-in-a-circular-street/)
