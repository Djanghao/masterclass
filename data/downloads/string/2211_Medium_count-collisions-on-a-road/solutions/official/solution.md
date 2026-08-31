# Official Solution

**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solution/](https://leetcode.com/problems/count-collisions-on-a-road/solution/)

---

### Approach 1: Simulation

#### Intuition

From the problem statement, we know that stationary vehicles do not count toward collision times; only moving vehicles that collide are counted. We traverse all vehicles from left to right and use a variable $\textit{flag}$ to record the status of the vehicles on the left.

- If there are no vehicles on the left side or all vehicles on the left side are moving left, then $\textit{flag}$ is set to $-1$.
- If a collision occurs on the left and the vehicles eventually stop, then $\textit{flag}$ is set to $0$.
- If there are consecutive vehicles on the left moving to the right, then $\textit{flag}$ stores the number of such vehicles.

In this case, we can divide the behavior of the current vehicle into the following three scenarios:

1. The current vehicle moves left. If $\textit{flag} \ge 0$, the collision count increases by $\textit{flag} + 1$, and $\textit{flag}$ is set to $0$.
2. The current vehicle is stationary. If $\textit{flag} > 0$, the collision count increases by $\textit{flag}$, and $\textit{flag}$ is set to $0$.
3. The current vehicle moves right. If $\textit{flag} < 0$, set $\textit{flag}$ to $1$; otherwise, increment $\textit{flag}$ by $1$.

Finally, return the total number of collisions.

#### Implementation

<iframe src="https://leetcode.com/playground/DCXAS4ic/shared" frameBorder="0" width="100%" height="500" name="DCXAS4ic"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{directions}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.
  
  Only a constant number of variables were used in the process.

### Approach 2: Counting

#### Intuition

We define a vehicle that continuously moves outward (either left or right) without being blocked by a reversing or stationary vehicle in between as an "outward-moving vehicle."

Left-moving outward vehicles and right-moving outward vehicles will not collide with each other. All other vehicles will collide exactly once.

#### Implementation

<iframe src="https://leetcode.com/playground/7HptCrKJ/shared" frameBorder="0" width="100%" height="463" name="7HptCrKJ"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{directions}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.
  
  Only a constant number of variables were used in the process.
  
---