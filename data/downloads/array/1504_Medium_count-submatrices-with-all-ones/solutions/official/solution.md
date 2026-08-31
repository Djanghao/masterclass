# Official Solution

**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solution/](https://leetcode.com/problems/count-submatrices-with-all-ones/solution/)

---

### Approach 1: Enumeration

#### Intuition

A straightforward idea is to enumerate each position $(i,j)$ in the matrix and count how many submatrices with this position as the bottom-right corner have all elements equal to $1$. By doing this, we can count the number of submatrices that meet the condition without repetition or omission. After enumeration, the question is: how do we count the number of submatrices that meet the condition?

We preprocess a $\textit{row}$ array, where $\textit{row}[i][j]$ represents the number of consecutive $1$s extending to the left from position $(i,j)$ in the matrix. The recursive formula is straightforward:

$$
row[i][j]=\begin{cases}
0, & \quad mat[i][j]= 0 \\
row[i][j-1]+1, & \quad mat[i][j]= 1
\end{cases}
$$

Once we have the $\textit{row}$ array, if we want to count the number of subrectangles with $(i,j)$ as the bottom-right corner that satisfy the condition, we can enumerate the height of the subrectangles and check how many of them are valid. We start this enumeration from the $i$-th row and move upward. For the $i$-th row, there are $\textit{row}[i][j]$ subrectangles that satisfy the condition. For the $i-1$-th row, there are $\texttt{min}(\textit{row}[i][j], \textit{row}[i-1][j])$ subrectangles, because both rows must consist entirely of $1$s to satisfy the condition. The same logic applies to higher rows, where we continuously take the minimum value to ensure the condition holds. Enumerating from bottom to top allows us to update the minimum in constant time.

Following this idea, for each bottom-right point $(i,j)$, the number of valid subrectangles can be calculated in linear time. After traversing all points, we obtain the total number of subrectangles that satisfy the condition.

#### Implementation

<iframe src="https://leetcode.com/playground/G6ziSppd/shared" frameBorder="0" width="100%" height="500" name="G6ziSppd"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows of the matrix and $n$ be the number of columns.

- Time complexity: $O(m^2\times n)$.
  
  The code involves a triple loop.

- Space complexity: $O(m\times n)$.
  
  An $m \times n$ matrix is needed for enumeration.

---

### Approach 2: Monotonic Stack

#### Intuition

The goal is to count the number of submatrices in which all elements are $1$. Similar to the first approach, we can still **enumerate the bottom-right corner of each submatrix**, but here we use a more efficient counting method with a monotonic stack. The method works as follows:

1. **Process each row as the base.**
   Convert each row of the matrix into a histogram height array $\textit{heights}$, where $\textit{heights}[j]$ represents the number of consecutive $1$s extending upward in column $j$, with the current row as the bottom.
   For example, if the current row is treated as the base, then $\textit{heights}[j]$ tells us how tall the column of $1$s is at position $j$.

2. **Enumerate each column as the right boundary.**
   For each row, once the heights are calculated, we use a monotonic stack to find the nearest column on the left of each $\textit{heights}[j]$ that has a smaller height. This gives us the left boundary for rectangles ending at $j$.

3. **Count subrectangles using the left and right boundaries.**
   Suppose the right boundary is at $j$, and the nearest smaller height on the left is at $i$ (found using the monotonic stack). Then:
  - If the left boundary is less than or equal to $i$, the subrectangles ending at $i$ have already been counted. Extending them to $j$ adds no new subrectangles.
  - If the left boundary is greater than $i$, then it can range from $i+1$ to $j$, giving $(j - i)$ possible positions. Each position can form $\textit{heights}[j]$ subrectangles of different heights, so in total we add $(j-i) \times \textit{heights}[j]$ subrectangles.

4. **Accumulate the result.**
   By summing over all right boundaries in each row, we obtain the total number of submatrices in the matrix with all elements equal to $1$.

#### Implementation

<iframe src="https://leetcode.com/playground/HQpwvjNm/shared" frameBorder="0" width="100%" height="500" name="HQpwvjNm"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows of the matrix and $n$ be the number of columns.

- Time complexity: $O(m\times n)$.
  
  For each row, we update the $\textit{heights}$ array in $O(n)$ time, so processing all $m$ rows takes $O(m \times n)$.
  
  Within each row, we use a monotonic stack to find the left and right boundaries of each column. Since every element enters and leaves the stack at most once, the stack operations for one row take $O(n)$ time. Repeating this across all $m$ rows gives a total of $O(m \times n)$.
  
  Combining both parts, the overall time complexity is $O(m \times n)$.

- Space complexity: $O(n)$.