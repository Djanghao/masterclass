# Official Solution

**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solution/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solution/)

---

### Approach: Dynamic Programming

#### Intuition

Let $\textit{dp}[i][j]$ ($j \geq i+2$) denote the minimum score obtainable by triangulating the convex polygon formed by vertices $i, i+1, \dots, j-1, j$. When $i+2 = j$, the convex polygon degenerates into a triangle. In other cases, triangulation is required.  

Assume that in the triangulation, there is a triangle with vertices $i, j,$ and another vertex $k$ ($i < k < j$). This triangle $i k j$ divides the convex polygon into three parts:

1. The vertices $i, i+1, \dots, k-1, k$ form a convex polygon with $k-i+1$ sides. When $k=i+1$, this part does not exist.  
2. The triangle formed by vertices $i, k, j$.  
3. The vertices $k, k+1, \dots, j-1, j$ form a convex polygon with $j-k+1$ sides. When $j=k+1$, this part does not exist.  

The value of the convex polygon is the sum of these three parts. The minimum value can be found by considering all possible values of $k$. Similarly, the minimum values of the first and third parts can also be obtained recursively using the same approach.  

In terms of implementation, this can be efficiently computed through memoized recursion. Finally, return $\textit{dp}[0][n-1]$ as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/Nvpwf2tV/shared" frameBorder="0" width="100%" height="500" name="Nvpwf2tV"></iframe>


#### Complexity Analysis

- Time complexity: $O(n^3)$. There are $O(n^2)$ DP states, and computing each state takes $O(n)$.

- Space complexity: $O(n^2)$, corresponding to the number of DP states.

---