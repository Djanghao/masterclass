# Official Solution

**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solution/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solution/)

---

### Approach: Dynamic Programming

#### Intuition

According to the definition of a valid subsequence, all elements at odd indices in the subsequence must be congruent modulo $k$, and all elements at even indices must also be congruent modulo $k$. This means that, considering the remainders modulo $k$ of the last two elements of the subsequence, there are a total of $k^2$ possible combinations. We use a two-dimensional array $\textit{dp}$ to represent the maximum length of such subsequences, where $\textit{dp}[i][j]$ denotes the maximum length of a valid subsequence whose last two elements have remainders $i$ and $j$ modulo $k$, respectively.

We traverse through $\textit{nums}$ to update $\textit{dp}$. For each number $\textit{num}$, we try to append it to existing subsequences. Specifically, we calculate $\textit{curr} = \textit{num} \bmod k$ and then iterate over all possible values of $\textit{prev}$ modulo $k$, updating $\textit{dp}[\textit{prev}][\textit{curr}]$ to $\textit{dp}[\textit{curr}][\textit{prev}] + 1$. Finally, we return the maximum value found in the $\textit{dp}$ array.

#### Implementation

<iframe src="https://leetcode.com/playground/F8L3Us9K/shared" frameBorder="0" width="100%" height="310" name="F8L3Us9K"></iframe>

#### Complexity analysis

Let $n$ be the length of the array $\textit{nums}$.

* Time Complexity: $O(n \times k)$

  For each element in $\textit{nums}$, we iterate over all possible values of the previous remainder modulo $k$. This leads to $O(k)$ work per element, resulting in a total of $O(n \times k)$. The initialization of the $k \times k$ DP table takes $O(k^2)$ time, but this is negligible compared to the main loop when $n \gg k$, so we typically report the overall time complexity as $O(n \times k)$.

- Space complexity: $O(k^2)$.
  
  We need a two-dimensional array for dynamic programming.

---