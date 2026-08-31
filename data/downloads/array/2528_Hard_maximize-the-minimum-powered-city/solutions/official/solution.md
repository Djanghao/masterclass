# Official Solution

**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solution/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solution/)

---

### Approach: Binary Search + Difference Array

#### Intuition

According to the problem statement, we need to find the maximum possible value of the **minimum power supply**. It is intuitive to use **binary search** to determine the highest possible minimum power supply across all cities. The key is to verify whether a given power level $x$ can satisfy the problem’s requirement; that is, whether it is possible for every city’s power supply to be at least $x$ after adding $k$ additional power stations.

Since the power station in the $i$-th city covers the range $[i - r, i + r]$, we can use a **difference array** to efficiently calculate the total power for each city. The critical part is deciding where to place the $k$ additional power stations, which can be determined using a **greedy strategy**.

Suppose the target minimum power for each city is $x$. We traverse the cities from left to right:

+ If the power at index $i$ is greater than or equal to $x$, we move on to the next city ($i + 1$).

+ If the power at index $i$ is less than $x$, we theoretically need to add power stations within the interval $[i - r, i + r]$. Since we are traversing in order, by the time we reach city $i$, all cities before it already have sufficient power. Therefore, adding power stations to earlier cities would be redundant. To maximize efficiency, we should add power stations to cities *after* $i$. If we add a power station at position $i + r$, it will cover the range $[i, i + 2r]$, thereby benefiting as many cities after $i$ as possible. Hence, the optimal choice is to add a power station at $i + r$.

The actual calculation proceeds as follows:

+ For convenience, precompute the **difference array** `diff` based on the given `stations` array.
  Use binary search to find the maximum value. According to the problem statement, the lower bound of the binary search can start at $\textit{lo} = \min(\textit{stations})$, and the upper bound can be $\textit{hi} = \text{sum}(\textit{stations}) + k$, since no city’s power can exceed this limit. Then, use binary search to test the candidate value $\textit{mid}$.

+ For each binary search iteration, calculate the prefix sum of the difference array from left to right. When traversing to index $i$, if the current sum is less than `mid`, it means the city’s power is insufficient. In that case, we need to add `add = mid - sum` power stations at position `i + r` to ensure that city $i$ reaches at least `mid`. The total power `sum` increases by `add`, and the remaining number of available stations decreases by `add`. Update the difference array accordingly and continue the traversal. If all cities can reach at least `mid` power, we can try increasing `mid`. If the number of remaining power stations becomes insufficient before completing the traversal, it means `mid` is too high, and we must reduce it.

+ The final answer is the maximum value of `mid` that satisfies the condition, found through binary search.

+ The target value of binary search is the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/KbfCBptU/shared" frameBorder="0" width="100%" height="500" name="KbfCBptU"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{stations}$, $D = \text{sum}(\textit{stations}) + k$.

- Time complexity: $O(n \log D)$.
  
  Computing the difference array takes $O(n)$ time. The binary search runs in $O(\log D)$ iterations, and each iteration takes $O(n)$ time, resulting in a total complexity of $O(n \log D)$.

- Space complexity: $O(n)$.
  
  The space required for calculating the difference array is $O(n)$.

---