# Official Solution

**Link:** [https://leetcode.com/problems/find-the-original-typed-string-ii/solution/](https://leetcode.com/problems/find-the-original-typed-string-ii/solution/)

---

### Approach: Dynamic Programming + Prefix Sum Optimization

#### Intuition

To obtain a result with a length of at least $k$, we can first calculate the total number of valid results of any length, and then subtract the number of results of lengths $1, 2, \cdots, k-1$.

For any result length, we can use the multiplication principle: if a character appears consecutively $p$ times in the string $\textit{word}$, then Alice may choose to input it $1, 2, \cdots, p$ times, giving $p$ possible choices. Multiplying all such values of $p$ gives the total number of valid results for all lengths.

> For example, if $\textit{word} = \text{abbcccaa}$, then the run lengths $p$ are $[1, 2, 3, 2]$, and the total number of results is $1 \times 2 \times 3 \times 2 = 12$.

To count the number of results with lengths less than $k$, we use dynamic programming. First, we record all the $p$ values in a frequency array $\textit{freq}$, and define $f(i, j)$ as the number of ways to construct a string using the first $i+1$ elements of $\textit{freq}$ such that the total constructed length is $j$.
          
For state transitions, we iterate over the number of times the character corresponding to $\textit{freq}[i]$ is used, from $1$ to $\textit{freq}[i]$. If it's used $j'$ times, then we must construct a string of length $j - j'$ using the first $i$ elements. This leads to the recurrence:

$$
f(i, j) = \sum_{j'=1}^{\textit{freq}[i]} f(i-1, j-j')
$$

The base case is $f(-1, 0) = 1$, indicating there is one way to construct the empty string.

If the length of $\textit{freq}$ is already $\geq k$, we don’t need this dynamic programming calculation, because the total constructed string length will necessarily be at least $k$.
          
The above DP has time complexity $O(k^3)$ because we iterate over $i$, $j$, and $j'$ — each in $O(k)$ — which is too slow when $k = 2000$.

To optimize, observe that the summation in the recurrence has consecutive indices, so we can precompute prefix sums. Let $g(i-1, j)$ be the prefix sum:

$$
g(i-1, j) = \sum_{j'=0}^j f(i-1, j')
$$

Then we can compute $f(i, j)$ in $O(1)$ time:

$$
f(i, j) = g(i-1, j-1) - g(i-1, j-\textit{freq}[i]-1)
$$

This reduces time complexity to $O(k^2)$.

For space optimization, note that we only need the previous row for state transition, so we can reduce space from $O(k^2)$ to $O(k)$ by using two 1D arrays.

#### Implementation

<iframe src="https://leetcode.com/playground/NrdgUoWJ/shared" frameBorder="0" width="100%" height="500" name="NrdgUoWJ"></iframe>

#### Complexity analysis

Let $n$ be the length of the string $\textit{words}$.

- Time complexity: $O(n + k^2)$.

  We need to traverse the string once, and the subsequent dynamic programming solution requires $O(k^2)$ time.

- Space complexity: $O(k)$.