# Official Solution

**Link:** [https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/solution/](https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/solution/)

---

### Approach: Dynamic Programming

#### Intuition

Let the length of the array $\textit{nums}$ be $n$. According to the problem statement, we need to sequentially pick indices from $0$ to $n - 1$ to form a sequence $\textit{seq}$. Suppose the index $t$ is picked $r_t$ times. Then, the total number of chosen elements is:

$$
\sum_{t=0}^{n - 1} r_t = m
$$

Since elements picked from the same index are indistinguishable, the number of distinct arrangements of such a sequence is:

$$
\frac{m!}{\prod_{t=0}^{n - 1} r_t!}
$$

Each arrangement contributes a product value of $\prod_{t=0}^{n - 1}\textit{nums}[t]^{r_t}$, so the overall contribution from all such arrangements can be expressed as:

$$
\frac{m!}{\prod_{t=0}^{n - 1}r_t!} \times \prod_{t=0}^{n - 1}\textit{nums}[t]^{r_t}
= m! \times \prod_{t=0}^{n - 1}\frac{\textit{nums}[t]^{r_t}}{r_t!}
$$

To model this process, note that each sequence corresponds to a binary-like number $T$ defined as:

$$
T = \sum_{t=0}^{n - 1} r_t \times 2^t
$$

Our goal is to compute the sum of all weighted products where the number of set bits in $T$ is exactly $k$.

To simulate how $T$ forms, we can use dynamic programming to capture how bits accumulate as we move through the indices of $\textit{nums}$.
Suppose we have processed elements from index $0$ to $i$, and a total of $j$ elements have been picked so far. The current “binary contribution” can be represented by a value $p$, which encodes how many carry values are still pending to be propagated to higher bits.

Let $f(i, j, p)$ denote the cumulative sum of all valid picking schemes that lead to this state. Each such configuration represents all possible ways to choose elements among indices $0$ to $i$ while contributing the multiplicative factor:

$$
\prod_{t=0}^{i}\frac{\textit{nums}[t]^{r_t}}{r_t!}
$$

Now, when we consider the next index $i+1$, suppose it is picked $r_{i+1}$ times.
This affects both the total number of elements chosen and the binary representation we are building.
Each previous state $f(i, j, p)$ contributes to a new state $f(i + 1, j + r_{i+1}, p + 2^{i+1} \times r_{i+1})$ with the weight:

$$
f(i, j, p) \times \frac{\textit{nums}[i + 1]^{r_{i + 1}}}{r_{i + 1}!}
$$

To make this process more manageable, notice that when we pick the number at index $i + 1$, it only affects the higher bits of the binary representation and not the lower $i$ bits that are already finalized.
We can therefore separate the binary value $p$ into two parts:

* the **lower $i$ bits**, which represent bits already resolved, and
* the **remaining higher bits**, which still carry forward.

Let the finalized lower bits be represented by $q$. Then, the DP state can be extended to $f(i, j, p, q)$, which now records both the carry value and the finalized bit count.
When choosing $r_{i+1}$ copies of index $i + 1$, we update the state as:

$$
f(i + 1, j + r_{i + 1}, \lfloor \tfrac{p}{2} \rfloor + r_{i + 1}, q + (p \bmod 2))
$$

and the contribution from the current state $f(i, j, p, q)$ is:

$$
f(i, j, p, q) \times \frac{\textit{nums}[i + 1]^{r_{i + 1}}}{r_{i + 1}!}
$$

This recurrence captures how carries are propagated to higher bits and how finalized bits are accumulated at each stage.

**Base Case:**

When $i = 0$, we are only dealing with index $0$, so no lower bits exist yet and $q = 0$.
The base state is therefore initialized as:

$$
f(0, j, j, 0) = \frac{\textit{nums}[0]^{j}}{j!}
$$

**Final Computation:**

After processing all indices up to $n - 1$, each DP state $(p, q)$ represents a possible configuration of the binary number $T$.
The total number of set bits in $T$ is the sum of:

* the bits that remain set in $p$, and
* the finalized bits accumulated in $q$.

Therefore, the total sum of all valid magic sequences is obtained by summing all DP states where this total equals $k$:

$$
\sum_{b_p + q = k} \left(m! \times f(n-1, m, p, q)\right)
$$

where $b_p$ denotes the number of set bits in $p$ (i.e., $\text{popcount}(p)$).

#### Implementation

<iframe src="https://leetcode.com/playground/iy866ECz/shared" frameBorder="0" width="100%" height="500" name="iy866ECz"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$, $m$ be the length of the sequence $\textit{seq}$, and $k$ be the limit on the number of set bits.

- Time complexity: $O(nm^3k)$. 
  
    Here, $f(i, j, p, q)$ has parameter ranges $i < n$, $j \leq m$, $p \leq 2m$, and $q \leq k$.

- Space complexity: $O(nm^2k)$.

---