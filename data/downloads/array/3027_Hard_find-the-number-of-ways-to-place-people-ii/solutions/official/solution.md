# Official Solution

**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solution/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solution/)

---

Preceding Question: [3195. Find the Minimum Area to Cover All Ones I](https://leetcode.cn/problems/find-the-minimum-area-to-cover-all-ones-i/), please make sure you understand the ideas and methods of the preceding question first. This question is an enhanced version of the preceding question in terms of data.

### Approach 1: Sort + Double Loop Enumeration

#### Intuition

This problem extends [3195. Find the Minimum Area to Cover All Ones I](https://leetcode.cn/problems/find-the-minimum-area-to-cover-all-ones-i/) with a larger data range. A straightforward triple loop would time out for this range. In the naive approach, the third loop checks whether points fall within the rectangle. The key question is: if the coordinates are ordered, can this extra loop be avoided?

To explore this, we first sort the $\textit{points}$ by their x-coordinate in ascending order. Then, we perform an ordered traversal with $0 < i < j < n$, selecting point pairs $A_i = \textit{points}[i], ; B_j = \textit{points}[j]$, where $n$ is the total number of points.

Suppose $A_i$ is the top-left point. Then $B_j$ must lie to the right and below $A_i$, so the conditions that $B_j$ must satisfy are:

$$
x_{B_j} \in [x_{A_i},\; +\infty), \; y_{B_j} \in (-\infty,\; y_{A_i}]
$$

Since the points are already sorted by $x$, the condition on $x_{B_j}$ is automatically satisfied. Moreover, as we traverse $B_j$, $x_{B_j}$ is guaranteed to be non-decreasing. This leads to an important observation: if $(A_i, B_1)$ is a valid pair and later $(A_i, B_2)$ is also valid, then

$$
x_{B_2} \ge x_{B_1}, \; y_{B_2} \ge y_{B_1}, \; B_1 \ne B_2
$$

This observation is crucial: once a legal $B_j$ is selected, the effective lower and left boundaries shrink monotonically. In other words, for the same $A_i$, the set of valid $B_j$ extends in a monotonic fashion from the lower-right and upward directions. This makes it possible to update the boundaries dynamically while selecting valid pairs.

For each specific $x_{B_j}$, only the point with the highest y-coordinate within the constraint range can be valid. Therefore, if we sort the points first by $x$ ascending and then by $y$ descending, the first valid $B_j$ encountered for a given $A_i$ will be the one with the largest $y$ on that $x$. By updating the lower-left boundary at this point, we can directly continue the search for the next valid $B_j$. Repeating this process gives an $O(n^2)$ solution.

#### Implementation

<iframe src="https://leetcode.com/playground/dLH9SNRY/shared" frameBorder="0" width="100%" height="500" name="dLH9SNRY"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{points}$.

- Time complexity: $O(n^2)$.
  
  Sorting takes $O(n \log n)$, and the double loop traversal takes $O(n^2)$. The total is $O(n^2)$.

- Space complexity: $O(n)$.
  
  $O(n)$ if sorting requires extra space, or $O(1)$ if the sorting is done in-place.
  
---

### Approach 2: 2D Prefix Sum + Discretization

This method uses a two-dimensional prefix sum and assumes the reader is already familiar with its concepts and principles.

#### Intuition

We still need to quickly determine whether any other points lie inside the rectangle formed by two candidate points. A natural idea is to use a two-dimensional prefix sum. If we treat each point as a cell with value $1$ (and empty cells as $0$), then by building a 2D prefix sum over the grid we can quickly count the number of points inside any rectangle. If this count equals $2$, and the two points are not on the main diagonal, then the pair satisfies the problem requirements.

However, the coordinate range is $[-10^9, 10^9]$, which is far too large to apply a prefix sum directly. Fortunately, since $n$ is small, we can use **discretization**. The idea is to perform **coordinate remapping**: map the sparse integer coordinates into a dense 2D grid while preserving the relative order of the points. This allows us to apply a prefix sum efficiently.

To discretize, we first collect the sorted sets of unique $x$-coordinates and $y$-coordinates. Each original coordinate is then assigned a compact index in the new grid. For example, consider the points $[[3,1],[1,3],[1,1]]$:

1. The set of $x$-coordinates is ${1, 3}$, and the set of $y$-coordinates is ${1, 3}$.
2. The mappings become $x: {1 \mapsto 1,, 3 \mapsto 2}$ and $y: {1 \mapsto 1,, 3 \mapsto 2}$.
3. Using these, the points map to the dense grid as $(3,1)\mapsto(2,1)$, $(1,3)\mapsto(1,2)$, $(1,1)\mapsto(1,1)$.

We start indexing from $1$ to simplify handling the prefix sum boundaries.

Finally, as in Approach 1, it helps to sort the points before traversal. This step is optional but can slightly reduce constant factors during iteration.

#### Implementation

<iframe src="https://leetcode.com/playground/9tZ5UWQp/shared" frameBorder="0" width="100%" height="500" name="9tZ5UWQp"></iframe>

#### Complexity Analysis

Let $n$ be the number of $\textit{points}$.

- Time complexity: $O(n^2)$.
  
  Discretization and sorting each take $O(n \log n)$. Building the prefix sum and traversing point pairs both take $O(n^2)$. Hash lookups are $O(1)$. Thus the total is $O(n^2)$.

- Space complexity: $O(n)$.

---