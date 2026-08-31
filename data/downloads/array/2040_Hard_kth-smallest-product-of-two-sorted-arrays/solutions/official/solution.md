# Official Solution

**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solution/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solution/)

---

### Approach 1: Binary Search + Binary Search

#### Intuition

According to the problem's constraints, the value range of $\textit{nums}_1[i] \times \textit{nums}_2[j]$ is $[-10^{10}, 10^{10}]$. We perform a binary search over this product range to find the $k$-th smallest product. Let the current binary search value be $v$. We need to compute the number of products less than or equal to $v$, denoted as $\textit{count}$. If $\textit{count} \lt k$, then $v$ is too small; otherwise, it is too large or just right.

To calculate the number of products less than or equal to $v$, we use another binary search. For each element $x_1$ in $\textit{nums}_1$, we proceed as follows:

- If $x_1 \ge 0$, then $\textit{nums}_2[j] \times x_1$ forms a non-decreasing sequence. We use binary search to count how many products are $\le v$.

- If $x_1 \lt 0$, then $\textit{nums}_2[j] \times x_1$ forms a non-increasing sequence. In this case, we use binary search to find how many products are greater than $v$, denoted as $t$. Then, the number of products $\le v$ is $n_2 - t$, where $n_2$ is the length of $\textit{nums}_2$.

Summing these counts for all elements in $\textit{nums}_1$ gives the total number of products less than or equal to $v$.

#### Implementation

<iframe src="https://leetcode.com/playground/dNprwCon/shared" frameBorder="0" width="100%" height="500" name="dNprwCon"></iframe>

#### Complexity analysis

Let $n_1$ be the length of the array $\textit{nums}_1$, and $n_2$ be the length of the array $\textit{nums}_2$.

- Time complexity: $O(n_1 \log n_2 \log C)$.
  
  $C = 2 \times 10^{10} + 1$ is the size of the range of the product of the two array elements required by the problem.

- Space complexity: $O(1)$.

### Approach 2: Binary Search + Divide and Conquer

#### Intuition

Similar to Approach 1, we want to compute the number of products less than or equal to a given value $v$, but here we use a divide and conquer method. Let the lengths of $\textit{nums}_1$ and $\textit{nums}_2$ be $n_1$ and $n_2$, respectively. We divide $\textit{nums}_1$ into two segments: $[0, \textit{pos}_1)$ for values less than $0$, and $[\textit{pos}_1, n_1)$ for values greater than or equal to $0$. Likewise, we divide $\textit{nums}_2$ into $[0, \textit{pos}_2)$ for values less than $0$, and $[\textit{pos}_2, n_2)$ for values greater than or equal to $0$. This results in four combinations of subarrays whose element-wise products we need to consider.

For example, take the product of the interval $[0, \textit{pos}_1)$ from $\textit{nums}_1$ and the interval $[0, \textit{pos}_2)$ from $\textit{nums}_2$, and count how many resulting products are less than or equal to $v$. Repeat this process for the other three combinations.

Each product combination forms a two-dimensional matrix where each cell is defined as $q(i, j) = \textit{nums}_1[i] \times \textit{nums}_2[j]$. In this matrix, $q(i, j)$ is non-increasing as either $i$ or $j$ increases (since both sequences are sorted). To efficiently count the number of elements in the matrix that are $\le v$, we traverse from the upper-right corner of the matrix. We initialize pointers $i_1 = 0$ and $i_2 = \textit{pos}_2 - 1$, and we stop when either index goes out of bounds:

- If $q(i_1, i_2) > v$, then all elements in the current row to the left of $(i_1, i_2)$ are also greater than $v$, so we move down to the next row by setting $i_1 = i_1 + 1$.

- If $q(i_1, i_2) \le v$, then all elements in the current column above $(i_1, i_2)$ are also $\le v$. There are $\textit{pos}_1 - i_1$ such elements, so we add that count and move left by setting $i_2 = i_2 - 1$.

We repeat this process and sum all such counts. This gives the total number of products less than or equal to $v$ for the given combination of subarrays.

#### Implementation

<iframe src="https://leetcode.com/playground/CueD8RNL/shared" frameBorder="0" width="100%" height="500" name="CueD8RNL"></iframe>

#### Complexity analysis

Let $n_1$ be the length of the array $\textit{nums}_1$, and $n_2$ be the length of the array $\textit{nums}_2$.

- Time complexity: $O((n_1 + n_2)\log C)$
  
  $C = 2 \times 10^{10} + 1$ is the size of the range of the product of the two array elements required by the problem.

- Space complexity: $O(1)$.