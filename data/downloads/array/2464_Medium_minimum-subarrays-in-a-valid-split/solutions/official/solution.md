# Official Solution

**Link:** [https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solution/](https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solution/)

---

### Approach: Dynamic Programming

#### Intuition

The problem requires splitting the integer array $\textit{nums}$ into subarrays such that the subarrays maintain their original order, and each subarray’s first and last elements have a greatest common divisor (GCD) greater than 1. The goal is to find the minimum number of splits required for $\textit{nums}$.

Suppose the elements in the array $\textit{nums}$ are $[a_0, a_1, a_2, \cdots, a_{n-1}]$, and the minimum number of splits required for this array is $k$, i.e.,
$[a_0, \cdots, a_{l_0}], [a_{l_0+1}, \cdots, a_{l_1}], \cdots, [a_{l_{k-2}}, \cdots, a_{n-1}]$.
For the last subarray, let its first and last elements be $\textit{nums}[j]$ and $\textit{nums}[i]$, respectively. At this point, we have $\text{gcd}(\textit{nums}[i], \textit{nums}[j]) > 1$. It is easy to see that the minimum number of splits for the array $[a_0, a_1, a_2, \cdots, a_{j-1}]$ is $k - 1$ (by contradiction). Therefore, this problem exhibits an optimal substructure and can be solved using dynamic programming.

Let $\textit{dp}[i]$ represent the minimum number of splits for the first $i$ elements. If the interval $[j, i]$ can form a valid subarray, then the minimum number of splits for the first $i$ elements may be $\textit{dp}[j-1] + 1$. By iterating through all possible $j$, we can determine the minimum number of splits for the first $i$ elements. The recurrence relation is given as follows:

$$
\textit{dp}[i] = \min(\textit{dp}[i], \textit{dp}[j-1] + 1)，\quad if \ \text{gcd}(\textit{nums}[i],\textit{nums}[j]) > 1
$$

We calculate the optimal substate for each index $i$ according to the above recurrence relation, and the optimal state for the first $n$ elements represents the minimum number of partitions for the entire array.

#### Implementation

<iframe src="https://leetcode.com/playground/9zqsTSoe/shared" frameBorder="0" width="100%" height="500" name="9zqsTSoe"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given array, and let $\text{MAXVAL}$ denote the maximum value in the array.

- Time complexity: $O(n^2)$.

  For each index $i$, we iterate over all possible $j$ values to check whether the subarray ending at $i$ can form a valid split. This results in $O(n^2)$ pairs. For each pair, computing the greatest common divisor (`gcd`) takes $O(\log(\text{MAXVAL}))$ time using the Euclidean algorithm. Hence, the overall time complexity is $O(n^2 \cdot \log(\text{MAXVAL}))$.

- Space complexity: $O(n)$.
  
  The dynamic programming array stores the optimal state for each prefix of the array, which requires $O(n)$ space.

---