# Official Solution

**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solution/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solution/)

---

[TOC]

## Solution

--- 

### Approach: Matrix Multiplication + Matrix Exponentiation By Squaring

#### Intuition

We use $f(i, c)$ to represent the number of occurrences of the character $c$ in the string after $i$ transformations. For convenience, we let the value range of $c$ be $[0, 26)$, corresponding to the 26 characters from $a$ to $z$ in sequence.

Initially, all $f(0, c)$ values are equal to the number of occurrences of $c$ in the given string $s$. When we iterate from $f(i-1, \cdots)$ to $f(i, \cdots)$, we use the recurrence:

$$
f(i, c) = \sum_{c'=0}^{25} \left[ f(i-1, c') \times T(c, c') \right]
$$

Here, the value of $T(c, c')$ is either 0 or 1. If $c'$ is included in the substitution set of $c$ during a single transformation, the value is 1; otherwise, it is 0. The values of $T(c, c')$ can be obtained from the given array $\textit{nums}$.

The time complexity of directly using the recurrence is high, so optimization is necessary. Notice that $T(c, c')$ is independent of $i$; it remains fixed in each round of iteration. Therefore, if we express $f(i, c)$ and $f(i-1, c')$ as $n \times 1$ column vectors, and $T(c, c')$ as an $n \times n$ matrix, the recurrence becomes a matrix multiplication:

$$
\begin{pmatrix}
f(i, 0) \\
f(i, 1) \\
\vdots \\
f(i, 25)
\end{pmatrix}
=\begin{pmatrix}
T(0, 0) & T(0, 1) & \cdots & T(0, 25) \\
T(1, 0) & T(1, 1) & \cdots & T(1, 25) \\
\vdots & \vdots & \ddots & \vdots \\
T(25, 0) & T(25, 1) & \cdots & T(25, 25)
\end{pmatrix}
\begin{pmatrix}
f(i-1, 0) \\
f(i-1, 1) \\
\vdots \\
f(i-1, 25)
\end{pmatrix}
$$

So, after $t$ iterations:

$$
\begin{pmatrix}
f(t, 0) \\
f(t, 1) \\
\vdots \\
f(t, 25)
\end{pmatrix}
=\begin{pmatrix}
T(0, 0) & T(0, 1) & \cdots & T(0, 25) \\
T(1, 0) & T(1, 1) & \cdots & T(1, 25) \\
\vdots & \vdots & \ddots & \vdots \\
T(25, 0) & T(25, 1) & \cdots & T(25, 25)
\end{pmatrix}^t
\begin{pmatrix}
f(0, 0) \\
f(0, 1) \\
\vdots \\
f(0, 25)
\end{pmatrix}
$$

Thus, we can first compute the $t$-th power of the matrix corresponding to $T(c, c')$, and then multiply it by the initial column vector $f(0, \cdots)$ to obtain all values $f(t, \cdots)$. The sum of these values gives the final answer.

The exponentiation of the transformation matrix can be efficiently performed using [matrix exponentiation by squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring), which we will not elaborate on here.

#### Implementation

<iframe src="https://leetcode.com/playground/QRSezZjn/shared" frameBorder="0" width="100%" height="500" name="QRSezZjn"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and let $|\Sigma|$ denote the size of the character set, which is 26 in this case.

- Time complexity: $O(n + \log t \times |\Sigma|^3)$.
  
  We first traverse the string to count the occurrences of each character. Then, we apply matrix exponentiation by squaring to compute repeated matrix multiplication.
  
- Space complexity: $O(|\Sigma|^2)$.
  
  This is the space required to store the transformation matrix.