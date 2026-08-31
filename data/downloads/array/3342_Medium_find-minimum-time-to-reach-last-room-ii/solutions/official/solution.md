# Official Solution

**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solution/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solution/)

---

[TOC]

## Solution

--- 

### Approach: Shortest Path + Dijkstra

#### Intuition

This problem is an extended version of [3341. Find Minimum Time to Reach Last Room I](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/description/). The key difference is that the time required for each move alternate: the first move takes 1 second, the second move takes 2 seconds, the third move takes 1 second, and so on.

Since the movement occurs on a two-dimensional grid, each move changes the coordinates $(i, j)$ by exactly 1 in one of the four directions. As a result, the parity of $(i + j)$ changes with every move. This allows us to determine the move's parity directly based on the current coordinates.

Let $d[i][j]$ represent the shortest time required to reach $(i, j)$ from $(0, 0)$. Then, the time to move from $(i, j)$ to an adjacent cell $(u, v)$ is given by:

$$
\max(d[i][j], \textit{moveTime}[u][v]) + (i + j) \bmod 2 + 1.
$$
 
Additionally, since reaching $(n - 1, m - 1)$ is guaranteed, we can optimize the algorithm by checking within the main loop whether the current point is $(n - 1, m - 1)$. If it is, we can exit early to avoid unnecessary computations for other cells. 

#### Implementation

<iframe src="https://leetcode.com/playground/Ar24ZbDa/shared" frameBorder="0" width="100%" height="500" name="Ar24ZbDa"></iframe>

#### Complexity Analysis

Let $n$ and $m$ be the number of rows and columns in $\textit{moveTime}$, respectively.

- Time complexity: $O(nm \log(nm))$.

There are $nm$ points and $O(nm)$ edges. We implement Dijkstra's algorithm using a min-heap, performing at most $O(nm)$ insertions and deletions. Since each heap operation takes $O(\log(nm))$ time, the overall time complexity is $O(nm \log(nm))$.

- Space complexity: $O(nm)$.