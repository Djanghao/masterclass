# Official Solution

**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solution/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solution/)

---

[TOC]

## Solution

--- 

### Approach: Shortest Path + Dijkstra

#### Intuition

We are given a two-dimensional array of size $n \times m$, and the task is to find the shortest time required to move from position $(0, 0)$ to position $(n - 1, m - 1)$. While moving, one can go to any of the four adjacent positions (up, down, left, right), and each position has an associated earliest move time, meaning one can only move to that position after that time.

Therefore, the two-dimensional array can be regarded as an undirected graph of size $n \times m$, where the position $(i, j)$ has undirected edges connecting it to $(i - 1, j)$, $(i + 1, j)$, $(i, j - 1)$, and $(i, j + 1)$. We are required to find the shortest path from $(0, 0)$ to $(n - 1, m - 1)$.

There are many algorithms for finding the shortest path, and here we choose Dijkstra's algorithm. You can refer to the editorial of [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/editorial/) to understand the basic process of Dijkstra's algorithm.

Unlike the standard Dijkstra algorithm, in this problem we define $d[i][j]$ to represent the shortest time required to reach $(i, j)$ from $(0, 0)$. The time to move from $(i, j)$ to an adjacent coordinate $(u, v)$ is given by $\max(d[i][j], \textit{moveTime}[u][v]) + 1$. The rest of the process is consistent with Dijkstra's algorithm.

#### Implementation

<iframe src="https://leetcode.com/playground/3gwDjz6F/shared" frameBorder="0" width="100%" height="500" name="3gwDjz6F"></iframe>

#### Complexity Analysis

Let $n$ and $m$ be the number of rows and columns in $\textit{moveTime}$, respectively.

- Time complexity: $O(nm \log(nm))$.

There are $nm$ points and $O(nm)$ edges. We implement Dijkstra's algorithm using a min-heap, performing at most $O(nm)$ insertions and deletions. Each heap operation takes $O(\log(nm))$ time, so the overall time complexity is $O(nm \log(nm))$.

- Space complexity: $O(nm)$.