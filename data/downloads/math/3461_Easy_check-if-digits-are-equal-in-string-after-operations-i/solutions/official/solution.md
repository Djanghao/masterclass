# Official Solution

**Link:** [https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/solution/](https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/solution/)

---

### Approach: Simulation

#### Intuition

Since the data size in this problem is very small, we can directly simulate the operations described in the problem.

Each time an operation is performed, the string length decreases by one. Because the problem asks whether the final two digits of the string are the same, we need to perform a total of $n - 2$ operations, where $n$ is the initial string length.

In each operation, we start from the beginning of the string, add two adjacent digits (say, the characters at positions $j$ and $j + 1$), take the result modulo 10, and store the obtained value at position $j$. This process does not affect the remaining parts of the current operation and prepares the string for the next iteration.

#### Implementation

<iframe src="https://leetcode.com/playground/LDkQZGmJ/shared" frameBorder="0" width="100%" height="310" name="LDkQZGmJ"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string.

- Time complexity: $O(n ^ 2)$.
  
  A total of $n - 2$ operations are performed, each taking on average $O(n)$ time, resulting in an overall complexity of $O(n^2)$.

- Space complexity: $O(1)$.
  
  No additional storage space was used.

---