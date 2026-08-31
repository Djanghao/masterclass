# Official Solution

**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solution/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solution/)

---

### Approach: Greedy

#### Intuition

For convenience, let $k = \textit{value}$.
An integer $x$ can be transformed into any integer in the set
$\dots, x - m\times k, x - (m - 1)\times k, \dots, x + (m - 1)\times k, x + m\times k, \dots$
after several operations. Therefore, we can group the numbers in $\textit{nums}$ according to their remainders when divided by $k$. All numbers within the same group can be transformed into the same set of values.

We aim to maximize the $\textit{MEX}$ of the array, so we start traversing from $0$ and continue as long as we can use the remaining numbers to form the current number. If the current number is $\textit{mex}$, we check whether the remainder set $\textit{mex} \bmod k$ is empty. If it is empty, $\textit{mex}$ is the answer. Otherwise, we decrement the count of that remainder by $1$ and increment $\textit{mex}$ by $1$.

#### Implementation

<iframe src="https://leetcode.com/playground/gMmspzgB/shared" frameBorder="0" width="100%" height="327" name="gMmspzgB"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n)$.

- Space complexity: $O(value)$.
  
  We use an array $\textit{mp}$ of size $\textit{value}$ to record the count of each remainder.

---