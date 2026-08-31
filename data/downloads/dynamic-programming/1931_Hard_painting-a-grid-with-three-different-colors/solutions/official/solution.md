# Official Solution

**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solution/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solution/)

---

[TOC]

## Solution

--- 

### Approach: State Compression Dynamic Programming

#### Hint

To ensure that the colors of any two adjacent cells are different, we need to guarantee the following:

- Any two adjacent cells in the same row have different colors.

- For adjacent rows, the colors of the cells in the same column are different.

Therefore, we can proceed as follows:

- First, use enumeration to find all valid coloring schemes for a single row.

- Then, use dynamic programming to calculate the number of ways to color the entire $m \times n$ grid.

In this problem, the maximum values of $m$ and $n$ are $5$ and $1000$, respectively. Since $m$ is smaller, we treat it as the row length and $n$ as the column length to make row enumeration feasible.

#### Intuition

We begin by enumerating the number of ways to color a row.

Given the three available colors, red, green, and blue, we can represent them as $0$, $1$, and $2$. In this way, a coloring scheme corresponds to a ternary number of length $m$, with a decimal range of $[0, 3^m)$.

Thus, we can enumerate all integers in the range $[0, 3^m)$, convert them into ternary strings of length $m$, and check whether any two adjacent digits are different.

Next, we use dynamic programming to compute the total number of coloring schemes. Let $f[i][\textit{mask}]$ represent the number of ways to color rows $0$ through $i$, where the $i$-th row's coloring scheme corresponds to the ternary value $\textit{mask}$. For the state transition, we consider all valid coloring schemes $\textit{mask}'$ for the $(i - 1)$-th row:

$$
f[i][\textit{mask}] = \sum_{\text{\textit{mask} and \textit{mask}' have different numbers on the same digit}} f[i-1][\textit{mask}']
$$

As long as the digits at corresponding positions in $\textit{mask}$ and $\textit{mask}'$ are different, the two rows can be adjacent, and we can perform the state transition.

The final answer is the sum of all $f[n - 1][\textit{mask}]$ for $\textit{mask} \in [0, 3^m)$.

The base case shown above for the dynamic programming is based on the first row. When $i = 0$, the state $f[i - 1][..]$ is undefined, so we must handle it separately: if all adjacent digits in a given $\textit{mask}$ differ, then we set $f[0][\textit{mask}] = 1$; otherwise, $f[0][\textit{mask}] = 0$.

For all other transitions, given a current $\textit{mask}$, we need to find all $\textit{mask}'$ from the previous row that satisfy the condition (i.e., no overlapping digits at the same positions). Since this can be expensive to compute repeatedly, we can preprocess all valid transitions ahead of time. The implementation code below reflects this optimization.

It’s also worth noting that since $f[i][..]$ only depends on $f[i - 1][..]$, we can use two one-dimensional arrays of length $3^m$ and alternate between them to save space.

#### Implementation

<iframe src="https://leetcode.com/playground/6LVhv3Lt/shared" frameBorder="0" width="100%" height="500" name="6LVhv3Lt"></iframe>

#### Complexity Analysis

- Time complexity: $O(3^{2m} \cdot n)$.

    The time complexity of preprocessing $\textit{mask}$ is $O(m \cdot 3^m)$.
    
    The time complexity of preprocessing all valid $(\textit{mask}, \textit{mask}')$ pairs is $O(3^{2m})$.
    
    The time complexity of the dynamic programming step is $O(3^{2m} \cdot n)$, which dominates the previous two in terms of asymptotic growth.

- Space complexity: $O(3^{2m})$.

    The space required to store all valid $\textit{mask}$ values is $O(m \cdot 3^m)$.
    
    The space required to store all valid $(\textit{mask}, \textit{mask}')$ pairs is $O(3^{2m})$, which is asymptotically larger than the others.
    
    The space required to store the dynamic programming states is $O(3^m)$.

    However, it should be noted that in actual situations, when $m=5$, there are only 48 $\textit{mask}$ that meet the requirements, which is much less than $3^m=324$; there are only 486 pairs of $(\textit{mask}, \textit{mask}')$ that meet the requirements, which is much less than $3^{2m}=59049$. Therefore, the actual running time of the algorithm will be faster.