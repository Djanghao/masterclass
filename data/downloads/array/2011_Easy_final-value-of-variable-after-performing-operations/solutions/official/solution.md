# Official Solution

**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solution/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solution/)

---

### Approach: Simulation

#### Intuition

Initially, set $x = 0$. Traverse the array of strings $\textit{operations}$. When encountering $\text{"++X"}$ or $\text{"X++"}$, add $1$ to $x$; otherwise, subtract $1$ from $x$.

#### Implementation

<iframe src="https://leetcode.com/playground/Q9VCsFYh/shared" frameBorder="0" width="100%" height="293" name="Q9VCsFYh"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string array $\textit{operations}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.
  
  Only a few additional variables are used.

---