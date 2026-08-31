# [2532. Time to Cross a Bridge](https://leetcode.com/problems/time-to-cross-a-bridge/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 123 | 225 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `linkedin`

## Description

There are `k` workers who want to move `n` boxes from the right (old) warehouse to the left (new) warehouse. You are given the two integers `n` and `k`, and a 2D integer array `time` of size `k x 4` where `time[i] = [right_i, pick_i, left_i, put_i]`.

The warehouses are separated by a river and connected by a bridge. Initially, all `k` workers are waiting on the left side of the bridge. To move the boxes, the `i^th` worker can do the following:

	- Cross the bridge to the right side in `right_i` minutes.

	- Pick a box from the right warehouse in `pick_i` minutes.

	- Cross the bridge to the left side in `left_i` minutes.

	- Put the box into the left warehouse in `put_i` minutes.

The `i^th` worker is **less efficient** than the j`^th` worker if either condition is met:

	- `left_i + right_i > left_j + right_j`

	- `left_i + right_i == left_j + right_j` and `i > j`

The following rules regulate the movement of the workers through the bridge:

	- Only one worker can use the bridge at a time.

	- When the bridge is unused prioritize the **least efficient** worker (who have picked up the box) on the right side to cross. If not, prioritize the **least efficient** worker on the left side to cross.

	- If enough workers have already been dispatched from the left side to pick up all the remaining boxes, **no more** workers will be sent from the left side.

Return the **elapsed minutes** at which the last box reaches the **left side of the bridge**.

 

**Example 1:**

**Input:** n = 1, k = 3, time = [[1,1,2,1],[1,1,3,1],[1,1,4,1]]

**Output:** 6

**Explanation:**

```

From 0 to 1 minutes: worker 2 crosses the bridge to the right.
From 1 to 2 minutes: worker 2 picks up a box from the right warehouse.
From 2 to 6 minutes: worker 2 crosses the bridge to the left.
From 6 to 7 minutes: worker 2 puts a box at the left warehouse.
The whole process ends after 7 minutes. We return 6 because the problem asks for the instance of time at which the last worker reaches the left side of the bridge.

```

**Example 2:**

**Input:** n = 3, k = 2, time = [[1,5,1,8],[10,10,10,10]]

**Output:** 37

**Explanation:**

```



```

The last box reaches the left side at 37 seconds. Notice, how we **do not** put the last boxes down, as that would take more time, and they are already on the left with the workers.

 

**Constraints:**

	- `1 <= n, k <= 10^4`

	- `time.length == k`

	- `time[i].length == 4`

	- `1 <= left_i, pick_i, right_i, put_i <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/time-to-cross-a-bridge/) | [Solutions](https://leetcode.com/problems/time-to-cross-a-bridge/)
