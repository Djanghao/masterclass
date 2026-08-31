# Official Solution

**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solution/](https://leetcode.com/problems/count-operations-to-obtain-zero/solution/)

---

### Approach: Euclidean Algorithm

#### Intuition

We can simulate the operation of subtracting two numbers after comparison as required, but when the difference between the two numbers is very large, there will be many consecutive and identical subtraction operations. Therefore, we can optimize this simulation process.

Let's assume $\textit{num}_1 \ge \textit{num}_2$. Then, we repeatedly subtract $\textit{num}_2$ from $\textit{num}_1$ until $\textit{num}_1 < \textit{num}_2$. After a series of such operations, the new value of $\textit{num}_1$ becomes $\textit{num}_1 \bmod \textit{num}_2$. During this process, $\lfloor \textit{num}_1 / \textit{num}_2 \rfloor$ subtraction operations are performed, where $\lfloor \dots \rfloor$ denotes the floor function.

It is easy to see that the process described in the problem is essentially the "Euclidean subtraction" method for finding the greatest common divisor (GCD) of two numbers. We can optimize it to use the "Euclidean division" method, which has lower time complexity, while also counting the number of subtraction operations as required.

Specifically, during the simulation, we use $\textit{res}$ to count the total number of subtraction operations. Before each step, we ensure that $\textit{num}_1 \ge \textit{num}_2$. In each iteration, the two numbers $(\textit{num}_1, \textit{num}_2)$ become $(\textit{num}_1 \bmod \textit{num}_2, \textit{num}_2)$, and we add $\lfloor \textit{num}_1 / \textit{num}_2 \rfloor$ to $\textit{res}$. Finally, we swap the values of $\textit{num}_1$ and $\textit{num}_2$ to maintain the initial condition for the next step. The loop terminates when at least one of $\textit{num}_1$ or $\textit{num}_2$ becomes zero, and we return $\textit{res}$ as the answer.

**Details**

Before the first iteration, we do not actually need to guarantee that $\textit{num}_1 \ge \textit{num}_2$, because we can perform an extra step to transform $(\textit{num}_1, \textit{num}_2)$ into $(\textit{num}_2, \textit{num}_1)$. This step contributes 0 to the subtraction count.

#### Implementation

<iframe src="https://leetcode.com/playground/S9ZwmuY5/shared" frameBorder="0" width="100%" height="327" name="S9ZwmuY5"></iframe>

#### Complexity Analysis

- Time complexity: $O(\log \max(\textit{num}_1, \textit{num}_2))$.
  
  That is the time complexity of simulating the Euclidean algorithm and counting the number of operations.

- Space complexity: $O(1)$.

---