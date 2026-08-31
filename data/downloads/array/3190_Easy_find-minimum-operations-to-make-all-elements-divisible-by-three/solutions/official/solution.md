# Official Solution

**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solution/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solution/)

---

### Approach: Traversal

#### Intuition

For any integer $x$, there are two possible ways to make it divisible by $3$:

1. The number of operations required to increase $x$ to the next multiple of $3$ is $3 - (x \bmod 3)$.
2. The number of operations required to decrease $x$ to the nearest multiple of $3$ is $x \bmod 3$.

Choose the option that requires fewer operations.

For each number in $\textit{nums}$, calculate the minimum number of operations and sum them up to obtain the result.

#### Implementation

<iframe src="https://leetcode.com/playground/9eiXdFrf/shared" frameBorder="0" width="100%" height="242" name="9eiXdFrf"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$. 

- Time complexity: $O(n)$.
- Space complexity: $O(1)$.