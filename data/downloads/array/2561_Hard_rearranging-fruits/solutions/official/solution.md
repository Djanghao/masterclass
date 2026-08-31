# Official Solution

**Link:** [https://leetcode.com/problems/rearranging-fruits/solution/](https://leetcode.com/problems/rearranging-fruits/solution/)

---

### Approach: Greedy

#### Intuition

According to the problem, the cost $x$ of any fruit must appear an even number of times across the two fruit baskets; otherwise, it is impossible to evenly distribute the fruit with cost $x$ between the two baskets. To compute the imbalance in fruit costs between the two baskets, we can use two hash tables, $\textit{count}_1$ and $\textit{count}_2$, to count the number of times each fruit cost appears in $\textit{basket}_1$ and $\textit{basket}_2$, respectively. For a given fruit cost $x$:

1. If $\textit{count}_1[x] + \textit{count}_2[x]$ is odd, we return $-1$ immediately, since balancing is impossible.

2. If $\textit{count}_1[x] > \textit{count}_2[x]$, then $\frac{\textit{count}_1[x] - \textit{count}_2[x]}{2}$ fruits with cost $x$ must be moved from $\textit{basket}_1$ to $\textit{basket}_2$, and vice versa.

Following point 2, we enumerate all such costs $x$ and add each to a list called $\textit{merge}$ with a count equal to the number of excess fruits that need to be exchanged. We then sort $\textit{merge}$ in increasing order. According to the greedy strategy, we pair the smallest values from the first half of the list with the largest from the second half to minimize the overall exchange cost. For each pair of costs $x_1$ and $x_2$ ($x_1 \lt x_2$), there are two possible exchange strategies:

1. Direct exchange: Swap $x_1$ with $x_2$, with a cost of $x_1$.

2. Indirect exchange: Both $x_1$ and $x_2$ are exchanged through the minimum fruit cost $m$ across both baskets, with a total cost of $2 \times m$.

We iterate over the first half of the $\textit{merge}$ list, and for each element $x$, we accumulate the cost $\min(x, 2 \times m)$ into the final result.

#### Implementation

<iframe src="https://leetcode.com/playground/Y3GLF3KY/shared" frameBorder="0" width="100%" height="500" name="Y3GLF3KY"></iframe>

#### Complexity Analysis

Let $n$ be the length of the arrays $\textit{basket1}$ and $\textit{basket2}$.

- Time complexity: $O(n \log n)$.
  
  Sorting the $\textit{merge}$ array requires $O(n \log n)$ time.

- Space complexity: $O(n)$.
  
  The hash tables and the $\textit{merge}$ array each require $O(n)$ space.
  
---