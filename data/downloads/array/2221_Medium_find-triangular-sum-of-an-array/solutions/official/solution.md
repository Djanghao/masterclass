# Official Solution

**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solution/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solution/)

---

### Approach: Simulation

#### Intuition

We need to simulate the operations as described in the problem statement.

First, record the length of the array $\textit{nums}$ as $n$. We perform $n-1$ iterations. In the $i^{\text{th}}$ iteration ($0 \leq i < n$), we compute $(\textit{nums}[i] + \textit{nums}[i+1]) \bmod 10$ and store it in a new array $\textit{new_nums}$. After completing the iteration, we overwrite $\textit{nums}$ with $\textit{new_nums}$.

When $n = 1$, the operations end, and we can return $\textit{nums}[0]$.

#### Implementation

<iframe src="https://leetcode.com/playground/TEhMDyx3/shared" frameBorder="0" width="100%" height="361" name="TEhMDyx3"></iframe>

#### Complexity Analysis

- Time complexity: $O(n^2)$.

- Space complexity: $O(n)$.

  The space required for the array $\textit{new\_nums}$.

---

### Approach 2: Combinatorics with Modular Arithmetic

#### Intuition

Each number in the array contributes to the final triangular sum according to "Pascal’s triangle coefficients".

After performing all reductions, the resulting single number can be expressed as:

[
\text{result} = \sum_{i=0}^{n-1} C(n-1, i) \times \text{nums}[i]
]

Here, $C(n-1, i)$ is the binomial coefficient — the number of ways element `nums[i]` reaches the top of the triangle.

Since the problem only requires the **last digit** of the result, we compute everything **mod 10**.

However, directly computing $C(n-1, i)$ can cause overflow(In cpp it caused overflow) for large $n$.

To avoid that, we use **Lucas’ theorem** to compute $C(n-1, i) \bmod 2$ and $C(n-1, i) \bmod 5$ separately, and then combine them using the Chinese Remainder Theorem (CRT).

Because $10 = 2 \times 5$, this combination works perfectly.

##### Mathematical Foundation

**Lucas’ Theorem**:
  [
  C(n, k) \bmod p = \prod C(n_j, k_j) \bmod p
  ]
  where $n_j, k_j$ are digits of $n$ and $k$ in base $p$.

* For modulus **2**, $C(n, k) \bmod 2 = 1$ iff every bit of $k$ ≤ corresponding bit of $n$.

* For modulus **5**, we use precomputed small Pascal coefficients mod 5.

* Then combine:
  [
  C(n, k) \bmod 10 = (5 \cdot a_2 + 6 \cdot a_5) \bmod 10
  ]
  where $a_2 = C(n, k) \bmod 2$, $a_5 = C(n, k) \bmod 5$.

This avoids big integers and runs in $O(n)$ time safely.

#### Implementation

<iframe src="https://leetcode.com/playground/iPqXoNSE/shared" frameBorder="0" width="100%" height="500" name="iPqXoNSE"></iframe>

### Complexity Analysis

* Time Complexity: $O(n \times \log n)$

    For each index, we compute binomial coefficients via digit decomposition (base 2 and base 5), taking $O(\log n)$ per combination.

* Space Complexity: $O(1)$

    We only store a small 5×5 Pascal triangle for mod 5 computations.

---