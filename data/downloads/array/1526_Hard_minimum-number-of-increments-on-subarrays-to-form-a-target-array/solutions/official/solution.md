# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solution/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solution/)

---

### Preface

Readers who have seen various reference solutions to this problem may feel a complex mix of emotions. This problem was the last one in the 31st Biweekly Contest, labeled as $\text{hard}$, yet it can be solved in only five lines of code:

> Calculate the difference between adjacent elements in the array $\textit{target}$, keep only the positive parts, and sum them up as the answer.

**But how can we prove that this approach is correct?**
A more intuitive proof is to consider each number in the array $\textit{target}$ from left to right, similar to the concept of a “monotonic stack.” For $\textit{target}[0]$, the minimum number of operations required is simply $\textit{target}[0]$. For two adjacent numbers $\textit{target}[i]$ and $\textit{target}[i+1]$:

* If $\textit{target}[i] \geq \textit{target}[i+1]$, then when we increase $\textit{target}[i]$ by 1, we can simultaneously increase $\textit{target}[i+1]$ by 1 as well. Therefore, $\textit{target}[i+1]$ does not require any additional operations.
* If $\textit{target}[i] < \textit{target}[i+1]$, then even after increasing both by 1, we still need an additional $\textit{target}[i+1] - \textit{target}[i]$ operations to reach the correct result.

Thus, we can obtain the minimum number of operations as:

$$
\textit{target}[0] + \sum_{i=0}^{n-2} \max \big{ \textit{target}[i+1] - \textit{target}[i], 0 \big}
$$

The problem is completed.

However, there is also a rigorous proof that derives an explicit operational plan using the concept of a “difference array.” The following explanation introduces this method from first principles.

---

### Approach: Difference Array

#### Intuition

For convenience, let us denote the array $\textit{target}$ as $a$.

The “difference array” $d[0..n-1]$ of an array $a[0..n-1]$ of length $n$ is defined as:

$$
d[i] = \begin{cases}
a[i], & i = 0 \
a[i] - a[i-1], & i > 0
\end{cases}
$$

For example, when $a = [1, 2, 3, 2, 1]$, the difference array is $d = [1, 1, 1, -1, -1]$.

> **Conclusion 1**: Any non-empty prefix sum of the array $d$ is greater than or equal to zero.
>
> **Proof**: The “difference array” and “prefix sum” array are closely related. In fact, “difference” and “prefix sum” are inverse operations. The prefix sum array of $d$ is precisely $a$:

$$
\begin{aligned}
a[i] &= (a[i] - a[i-1]) + (a[i-1] - a[i-2]) + \cdots + (a[1] - a[0]) + a[0] \
&= d[i] + d[i-1] + \cdots + d[1] + d[0] \
&= \sum_{k=0}^i d[k]
\end{aligned}
$$

> Since all elements of array $a$ are positive integers in this problem, the conclusion follows.

> **Inference 1**: The sum of all elements in array $d$ is greater than or equal to zero.
>
> **Proof**: Take $i = n-1$ in Conclusion 1 to complete the proof.

---

The problem requires performing several operations on an initially all-zero array to obtain the array $a$, where each operation increases the elements of a contiguous subarray by 1.
This is equivalent to performing operations on array $a$ to transform it into an all-zero array, where each operation decreases the elements of a contiguous subarray by 1.

What effect does operating on the array $a$ have on its difference array $d$?
Suppose we select a subarray range $[L, R]$. Then according to the definition of $d$:

* If $L = 0$, since $a[0]$ decreases by 1, we need to decrease $d[0]$ by 1.
* If $L > 0$, since $a[L]$ decreases by 1 and $a[L-1]$ remains unchanged, we need to decrease $d[L]$ by 1.
* If $R + 1 < n$, since $a[R]$ decreases by 1 and $a[R+1]$ remains unchanged, we need to increase $d[R+1]$ by 1.
* If $R + 1 = n$, we do not need to perform any operation.

The elements outside $[L, R]$ remain unchanged, so their corresponding difference values stay the same. The elements inside $[L, R]$ are all reduced by 1, and their difference values also remain the same.
The changed difference values occur only at the boundaries, so **the array $d$ has at most two elements that change**—one decreases by 1, and the other increases by 1.
We can summarize this as:

* $d[L]$ decreases by 1;
* $d[R+1]$ increases by 1. When $R + 1 = n$, $d[n]$ is a “virtual” element that acts like a black hole, absorbing all increments of 1.

Let’s continue with the example $a = [1, 2, 3, 2, 1]$ and $d = [1, 1, 1, -1, -1]$.
When $[L, R] = [1, 3]$, the arrays become:

* $a = [1, 1, 2, 1, 1]$
* $d = [1, 0, 1, -1, 0]$

That is, $d[L] = d[1]$ decreases by 1, and $d[R+1] = d[4]$ increases by 1.

When $[L, R] = [2, 4]$, the arrays become:

* $a = [1, 2, 2, 1, 0]$
* $d = [1, 1, 0, -1, -1]$

That is, $d[L] = d[2]$ decreases by 1, and $d[R+1] = d[5]$—this “black hole” element—absorbs an increase of 1.

At this point, **we have perfectly transformed operations on contiguous subarrays of $a$ into operations on at most two elements of $d$**.
Since each operation can decrease at most one element of $d$ by 1, and our goal is to make all elements of $d$ zero, we must at least reduce all positive elements of $d$ to zero.
Therefore, **the lower bound of the number of operations is equal to the sum of all positive elements in $d$**:

$$
T = \sum_{i=0}^{n-1} \max \big{ d[i], 0 \big}
$$

Can this lower bound be achieved? We can construct a method that uses exactly $T$ operations to reduce all elements of $d$ to zero.

> **Conclusion 2**: If there exists a negative element $d[R+1]$ in the array $d$, then there must exist $0 \le L \le R$ such that $d[L]$ is positive.
>
> **Proof**: Suppose, for contradiction, that for all $0 \le L \le R$, we have $d[L] \le 0$. Then the prefix sum $\sum_{k=0}^{R+1} d[k] < 0$, which contradicts Conclusion 1.

Following this, we can perform several operations. In each operation, we find a position $R+1$ such that $d[R+1] < 0$, and a position $L$ such that $d[L] > 0$ and $L \le R$. Then we decrease $d[L]$ by 1 and increase $d[R+1]$ by 1, repeating until there are no negative elements in $d$.

According to **Inference 1**, there are still some positive elements remaining in $d$.
We continue performing operations: each time, we find a position $L$ such that $d[L] > 0$, take $R+1 = n$, decrease $d[L]$ by 1, and increase the virtual element $d[n]$ by 1, until no positive elements remain in $d$.

At this point, all elements of $d$ are zero. Since each operation decreases an integer by 1, the total number of operations is exactly $T$.
Therefore, the minimum number of operations is:

$$
\text{ans} = \sum_{i=0}^{n-1} \max \big{ d[i], 0 \big}
$$

#### Implementation

<iframe src="https://leetcode.com/playground/Z9trmqn4/shared" frameBorder="0" width="100%" height="242" name="Z9trmqn4"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{target}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

---