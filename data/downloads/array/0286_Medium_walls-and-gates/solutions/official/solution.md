# Official Solution

**Link:** [https://leetcode.com/problems/walls-and-gates/solution/](https://leetcode.com/problems/walls-and-gates/solution/)

---

[TOC]

## Solution

---
### Approach #1 (Brute Force) [Time Limit Exceeded]

The brute force approach is simple, we just implement a breadth-first search from each empty room to its nearest gate.

While we are doing the search, we use a 2D array called `distance` to keep track of the distance from the starting point. It also implicitly tell us whether a position had been visited so it won't be inserted into the queue again.

<iframe src="https://leetcode.com/playground/4aSKL2xH/shared" frameBorder="0" name="4aSKL2xH" width="100%" height="515"></iframe>

**Complexity analysis**

* Time complexity : $$O(m^2n^2)$$.
For each point in the $$m \times n$$ size grid, the gate could be at most $$m \times n$$ steps away.

* Space complexity : $$O(mn)$$.
The space complexity depends on the queue's size. Since we won't insert points that have been visited before into the queue, we insert at most $$m \times n$$ points into the queue.

---
### Approach #2 (Breadth-first Search) [Accepted]

Instead of searching from an empty room to the gates, how about searching the other way round? In other words, we initiate breadth-first search (BFS) from all gates at the same time. Since BFS guarantees that we search all rooms of distance *d* before searching rooms of distance *d* + 1, the distance to an empty room must be the shortest.

<iframe src="https://leetcode.com/playground/rDRFjuqK/shared" frameBorder="0" name="rDRFjuqK" width="100%" height="515"></iframe>

**Complexity analysis**

* Time complexity : $$O(mn)$$.

    If you are having difficulty to derive the time complexity, start simple.

    Let us start with the case with only one gate. The breadth-first search takes at most $$m \times n$$ steps to reach all rooms, therefore the time complexity is $$O(mn)$$. But what if you are doing breadth-first search from $$k$$ gates?

    Once we set a room's distance, we are basically marking it as visited, which means each room is visited at most once. Therefore, the time complexity does not depend on the number of gates and is $$O(mn)$$.

* Space complexity : $$O(mn)$$.
The space complexity depends on the queue's size. We insert at most $$m \times n$$ points into the queue.