# Official Solution

**Link:** [https://leetcode.com/problems/count-number-of-balanced-permutations/solution/](https://leetcode.com/problems/count-number-of-balanced-permutations/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Memoization Search

#### Intuition

According to the problem, in a balanced permutation, the sum of the numbers at odd index positions is equal to the sum of the numbers at even index positions. For the given string $\textit{num}$, we need to find the number of different permutations of $\textit{num}$ that are balanced permutations. Let the sum of all digits in $\textit{num}$ be $\textit{tot}$. According to the definition of a balanced permutation, the total sum $\textit{tot}$ must be divisible by 2. This means the sum of the digits at even positions and the sum at odd positions must both equal $\dfrac{\textit{tot}}{2}$. If $\textit{tot}$ is odd and cannot be evenly divided, then it is impossible to form a balanced permutation, and we return $0$ immediately.

Since the digits in $\textit{num}$ range from $0$ to $9$, there may be repeated digits. Let the length of $\textit{num}$ be $n$, and let the number of occurrences of digit $i$ be $\textit{cnt}[i]$. Using the principle of "multiset permutations," the total number of distinct permutations that can be formed from $\textit{num}$ is:

$$
S = \dfrac{n!}{\prod_{i=0}^{9}\textit{cnt}[i]!}
$$

There are $m = \lceil \dfrac{n}{2} \rceil$ odd positions and $\lfloor \dfrac{n}{2} \rfloor$ even positions. Suppose that in some permutation, the number of times digit $i$ appears in odd positions is $k_i$, so it appears $\textit{cnt}[i] - k_i$ times in even positions. We aim to enumerate all valid assignments where the sum of digits in odd positions equals that in even positions. We fill in digits $0$ to $9$ sequentially, with the enumeration process as follows:

* Consider digit $0$. Let $k_0$ be the number of zeros in odd positions. There are $m$ positions available for odd placements, and the number of zeros in even positions is $\textit{cnt}[0] - k_0$, with $n - m$ positions available. The number of such combinations is:

  $$
  T_0 = \binom{m}{k_0} \times \binom{n-m}{\textit{cnt}[0]-k_0}
  $$

* Next, consider digit $1$. Let $k_1$ be the number of ones in odd positions. There are $m - k_0$ positions left for odd placements, and the number of ones in even positions is $\textit{cnt}[1] - k_1$, with $n - m - (\textit{cnt}[0] - k_0)$ positions left for even placements. The number of combinations is:

  $$
  T_1 = \binom{m-k_0}{k_1} \times \binom{n-m-(\textit{cnt}[0] - k_0)}{\textit{cnt}[1]-k_1}
  $$

* For a general digit $i$, let $k_i$ be the number of times it appears in odd positions. The remaining odd positions are $m - \sum_{j=0}^{i-1}k_j$, and remaining even positions are $n - m - \sum_{j=0}^{i-1}(\textit{cnt}[j] - k_j)$. The number of arrangements is:

  $$
  T_i = \binom{m - \sum_{j=0}^{i-1}k_j}{k_i} \times \binom{n - m - \sum_{j=0}^{i-1}(\textit{cnt}[j] - k_j)}{\textit{cnt}[i]-k_i}
  $$

From these observations, the total number of arrangements for a valid $(k_0, \dots, k_9)$ configuration is:

$$
\begin{aligned}
T &= \binom{m}{k_0} \cdot \binom{n-m}{\textit{cnt}[0]-k_0} \cdot \binom{m-k_0}{k_1} \cdot \binom{n-m-(\textit{cnt}[0] - k_0)}{\textit{cnt}[1]-k_1} \cdots \\\\
&\quad \cdot \binom{m - \sum_{j=0}^{8}k_j}{k_9} \cdot \binom{n - m - \sum_{j=0}^{8}(\textit{cnt}[j] - k_j)}{\textit{cnt}[9]-k_9}
\end{aligned}
$$

To compute this efficiently, we use a memoized search. Let $\text{dfs}(i, \textit{curr}, \textit{oddCnt})$ represent the number of valid ways to fill digits from $i$ to $9$, where $\textit{oddCnt}$ positions remain for odd indices, and the sum needed in those positions is $\textit{curr}$.

We try distributing digit $i$ by placing $j$ copies in the odd positions. Then:

* The number of ways to choose these $j$ odd positions is $\binom{\textit{oddCnt}}{j}$.
* The remaining $\textit{cnt}[i] - j$ copies go to even positions, with:

  $$
  \sum_{k=i}^{9}\textit{cnt}[k] - \textit{oddCnt}
  $$

  slots available.

The number of combinations for this step is:

$$
\binom{\textit{oddCnt}}{j} \cdot \binom{\sum_{k=i}^{9}\textit{cnt}[k] - \textit{oddCnt}}{\textit{cnt}[i] - j}
$$

We recurse on:

* Digits $[i+1, 9]$
* $\textit{oddCnt} - j$ remaining odd slots
* New target sum $\textit{curr} - j \cdot i$

The recursive formula becomes:

$$
\text{dfs}(i, \textit{curr}, \textit{oddCnt}) = \sum_{j=0}^{\textit{cnt}[i]}\binom{\textit{oddCnt}}{j} \cdot \binom{\sum_{k=i}^{9}\textit{cnt}[k] - \textit{oddCnt}}{\textit{cnt}[i] - j} \cdot \text{dfs}(i + 1, \textit{curr} - j \cdot i, \textit{oddCnt} - j)
$$

We start with: $\text{dfs}(0, \dfrac{\textit{tot}}{2}, m)$. The recursion ends when $i = 10$; if both $\textit{curr} = 0$ and $\textit{oddCnt} = 0$, we return $1$, otherwise $0$.

We apply pruning during memoization:

* For valid $k_i$ (the number of digit $i$ in odd positions), we must have:

  $$
  \textit{cnt}[i] - \left(\sum_{j=i}^{9}\textit{cnt}[j] - \textit{oddCnt}\right) \le k_i \le \min(\textit{cnt}[i], \textit{oddCnt})
  $$

* If the total number of remaining digits is less than $\textit{oddCnt}$, the configuration is invalid, and we terminate the branch early.

To speed things up further, we can simplify the total permutation count:

$$
T = \dfrac{m!}{\prod_{i=0}^{9}k_i!} \cdot \dfrac{(n-m)!}{\prod_{i=0}^{9}(\textit{cnt}[i] - k_i)!}
$$

At this point, since the numerator is fixed, it is possible to avoid calculating the combination number and only the denominator needs to be calculated. At this time, the "Multiplicative Inverse" can be used to quickly calculate it, and no further description is provided.

#### Implementation

<iframe src="https://leetcode.com/playground/7GbKh3dp/shared" frameBorder="0" width="100%" height="500" name="7GbKh3dp"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{num}$, and let $S$ be half the sum of the digits of $\textit{num}$. Since each digit has a value in the range $[0, 9]$, the possible range of $S$ is $[0, \dfrac{9n}{2}]$.

- Time complexity: $O(n^2 \cdot S)$. Computing the combination numbers requires $O(n^2)$ time. Enumerating each digit and the number of times it appears requires $O(n)$ time. Additionally, we need to compute values for $nS$ substates. Therefore, the total time complexity is $O(n^2 \cdot S)$.

- Space complexity: $O(n \cdot s)$. Since we are not precomputing and storing combination values and are instead using the built-in `comb`, the space required for calculating combinations is $O(1)$. We are using memoization, where the number of unique states is determined by the parameters `(i, d, s)` - where `i` ranges over `n`, `d` over `D = 10`, and `s` over `S` - giving us at most $O(n \cdot D \cdot S)$ memoization entries. However, since the maximum recursion depth is only `D = 10` (a constant), the stack space used is $O(D) = O(1)$. Thus, the total space complexity is dominated by the memoization table: $O(n \cdot s)$. (since `D = 10` is constant and gets absorbed).

---

### Approach 2: Dynamic Programming

#### Intuition

Similarly, we can also use bottom-up dynamic programming to define $f[i][\textit{curr}][\textit{oddCnt}]$ as the number of schemes when the digits from $0$ to $i$ have been allocated, and the number of digits allocated to odd positions is $\textit{oddCnt}$, with the sum of elements on odd positions being $\textit{curr}$. At this time, since the number of digits allocated to the odd positions is $\textit{oddCnt}$, the number of digits allocated to the even positions is $\sum_{k=0}^{i}\textit{cnt}[k] - \textit{oddCnt}$.

Assuming that the current digit $i$ is allocated $j$ times to the odd positions and $\textit{cnt}[i] - j$ times to the even positions, the number of filling schemes for the digit $i$ is then $\binom{\textit{oddCnt}}{j} \cdot \binom{\sum_{k=0}^{i}\textit{cnt}[k] - \textit{oddCnt}}{\textit{cnt}[i]-j}$. The recursive formula can be obtained as follows:

$$
f[i][\textit{curr}][\textit{oddCnt}] = \sum_{j=0}^{\textit{cnt}[i]}\binom{\textit{oddCnt}}{j} \cdot \binom{\sum_{k=0}^{i}\textit{cnt}[k] - \textit{oddCnt}}{\textit{cnt}[i]-j} \cdot f[i -1][\textit{curr} - j \cdot i][\textit{oddCnt} - j] 
$$
 
At initialization: $f[0][0][0] = 1$. According to the recursive formula, we can calculate the final result step by step. The final result is $f[9][\frac{\textit{tot}}{2}][m]$. In actual calculation, we can use the 0-1 knapsack technique to remove one dimension, since $j$ cannot exceed $\textit{oddCnt}$. This allows us to eliminate invalid states from the calculation.

#### Implementation

<iframe src="https://leetcode.com/playground/HaGJDMJA/shared" frameBorder="0" width="100%" height="500" name="HaGJDMJA"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{num}$, and let $S$ be half the sum of the digits of $\textit{num}$. Since each digit has a value range of $[0, 9]$, the value range of $S$ is $[0, \dfrac{9n}{2}]$.

- Time complexity: $O(n^2 \cdot S)$.

The time required to calculate the combination values is $O(n^2)$. Enumerating each digit and the number of times it appears takes $O(n)$ time. Additionally, we need to calculate $n \cdot S$ substates. Therefore, the total time complexity is $O(n^2 \cdot S)$.

- Space complexity: $O(n^2 + nS)$.

The space required to compute the combination values is $O(n^2)$. The dynamic programming substates number $n \cdot S$, requiring $O(nS)$ space. Thus, the total space complexity is $O(n^2 + nS)$.