# Official Solution

**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solution/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solution/)

---

### Approach: Enumeration

#### Intuition

Since the given range of $n$ is $[2, 10000]$, which is relatively small, we can directly enumerate possible values of $A$ in the range $[1, n)$. For each $A$, we compute $B = n - A$ and check whether both $A$ and $B$ contain no zero in their decimal representation.

#### Implementation

<iframe src="https://leetcode.com/playground/9dXw3fci/shared" frameBorder="0" width="100%" height="344" name="9dXw3fci"></iframe>

#### Complexity Analysis

- Time complexity: $O(n \log n)$.
  
  We enumerate all possible values of $A$ in $O(n)$. For each pair $(A, B)$, we check whether their decimal representations contain a zero. This check takes $O(\log n)$ time, since the number of digits in $A$ and $B$ is $O(\log n)$.

- Space complexity: $O(1)$.

---