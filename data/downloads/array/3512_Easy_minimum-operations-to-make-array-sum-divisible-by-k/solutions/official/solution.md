# Official Solution

**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/solution/](https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/solution/)

---

### Approach: Sum Modulo

#### Intuition

The problem requires the sum of the elements and $\textit{sum}$ to be divisible by $k$. Since each operation can only decrease an element $x$ in the array by 1, which reduces the total sum by 1 each time, at least $\textit{sum} \bmod k$ reductions are needed to make the sum divisible by $k$. Therefore, the minimum number of operations required is $\textit{sum} \bmod k$.

#### Implementation

<iframe src="https://leetcode.com/playground/AeeTgEFS/shared" frameBorder="0" width="100%" height="225" name="AeeTgEFS"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n)$.
  
  The algorithm traverses the array once.

- Space complexity: $O(1)$.

---