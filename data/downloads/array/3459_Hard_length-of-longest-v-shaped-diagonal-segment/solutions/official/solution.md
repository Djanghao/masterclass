# Official Solution

**Link:** [https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/solution/](https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/solution/)

---

### Approach: Memoization Search

#### Intuition

According to the problem statement, the definition of a V-shaped diagonal segment is as follows:

+ The starting element of the V-shaped diagonal segment must be $1$, and the subsequent elements must alternate according to the sequence $[2,0,2,0,\cdots]$. In other words, the **access sequence** of elements must be $[1,2,0,2,0,\cdots]$.
+ Starting from one diagonal direction (top-left to bottom-right, bottom-right to top-left, top-right to bottom-left, or bottom-left to top-right), and continuing along that same diagonal, it is allowed to make at most one clockwise $90^\circ$ turn into another diagonal direction while still maintaining the sequence pattern.

There are a total of $4$ diagonal directions: from the upper left to the lower right, from the upper right to the lower left, from the lower right to the upper left, and from the lower left to the upper right. The corresponding coordinate offsets are $(1,1), (1,-1), (-1,-1), (-1,1)$. We use subscripts $0$ to $3$ to represent these directions. If the current direction is $d$ and it is rotated counterclockwise by $90^\circ$, then the new diagonal direction is $(d+1)\bmod 4$. Careful analysis shows that once the starting position and the initial diagonal direction of a V-shaped diagonal segment are determined, the maximum possible segment length depends on the longest valid continuation from the following position. At this point, dynamic programming can be applied to compute the maximum length of a V-shaped diagonal segment starting from each point.

For convenience, we use a top-down memoization search. Let $\text{dfs}(x,y,\textit{direction},\textit{turn},\textit{target})$ represent the maximum length of a V-shaped diagonal segment starting from position $(x,y)$, where the current diagonal direction is $\textit{direction}$, the expected element value is $\textit{target}$, and the current rotation state is $\textit{turn}$. We maintain $\textit{memo}$ to record the maximum values of all substates, and initialize all states to $-1$ for ease of calculation. Since adjacent elements must follow the V-shaped sequence pattern, we also need to verify whether the current element’s value is valid given the previous one. This is an important detail in the search.

The calculation process of $\text{dfs}(x,y,\textit{direction},\textit{turn},\textit{target})$ is as follows:

+ From the previous position $(x,y)$, the next position $(nx,ny)$ is computed using the offset corresponding to $\textit{direction}$. We then check whether $(nx,ny)$ is within bounds and whether $\textit{grid}[nx][ny]$ equals $\textit{target}$. If it goes out of bounds or does not match the target, the path is invalid and we return $0$.

+ If the path continues without rotation, the next call is $\text{dfs}(nx,ny,\textit{direction},\textit{false},2-\textit{target})$. If the path rotates, the next call is $\text{dfs}(nx,ny,(\textit{direction}+1)\bmod 4,\textit{false},2-\textit{target})$. The maximum length starting from $(x,y)$ is the maximum of these two cases, plus $1$. Thus, the recurrence is:

  $$
  \text{dfs}(x,y,\textit{direction},\textit{turn},\textit{target}) = \max\big(\text{dfs}(nx,ny,\textit{direction},\textit{false},2-\textit{target}), \text{dfs}(nx,ny,(\textit{direction}+1)\bmod 4,\textit{false},2-\textit{target})\big) + 1
  $$

Since the target value of each element can be derived directly from its position relative to the previous element, we do not need to store the target in the memoization state. This simplifies the recurrence to:

$$
\text{dfs}(x,y,\textit{direction},\textit{turn}) = \max\big(\text{dfs}(nx,ny,\textit{direction},\textit{turn}), \text{dfs}(nx,ny,(\textit{direction}+1)\bmod 4,\textit{turn})\big) + 1
$$

Finally, since the starting element of any valid V-shaped diagonal segment must be $1$, we iterate through the grid, launch DFS from every position where the element equals $1$, and compute the maximum length among all V-shaped diagonal segments.

#### Implementation

<iframe src="https://leetcode.com/playground/8K9TWGcK/shared" frameBorder="0" width="100%" height="500" name="8K9TWGcK"></iframe>

#### Complexity Analysis

Let $m,n$ be the number of rows and columns of the given matrix $\textit{grid}$.

- Time complexity: $O(m \cdot n)$.

  There are $O(m \cdot n)$ substates in the memoization search, and each state takes $O(1)$ time to compute.

- Space complexity: $O(mn)$.

  Both the memoization table and the recursion stack require $O(m \cdot n)$ space.

---