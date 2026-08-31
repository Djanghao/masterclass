# Official Solution

**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solution/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solution/)

---

### Approach: Enumeration

#### Intuition

For the elements $\textit{nums}[i]$ in the array, their range is $[0, 10^9]$, and they can contain up to $31$ binary bits.

For the $\textit{bit}$-th binary digit:

- If it is $1$, then after performing a bitwise OR operation with any number, this binary bit remains $1$, so it has no effect.

- If it is $0$, then we need to find the smallest $j$ such that $j > i$ and the $\textit{bit}$-th binary digit of $\textit{nums}[j]$ is $1$. This way, we can achieve the maximum value through bitwise OR operations. Note that such a $j$ may not exist.

Therefore, we can traverse the array $\textit{nums}$ in descending order of index, while using an array $\textit{pos}$ to record the most recent position where each binary bit was set to $1$ (if no such position exists, it is initialized to $-1$). When we reach $\textit{nums}[i]$, for its $\textit{bit}$-th binary digit:

- If it is $1$, we update $\textit{pos}[\textit{bit}]$ to $i$.

- If it is $0$ and $\textit{pos}[\textit{bit}]$ is not $-1$, then to obtain the maximum bitwise OR value with $i$ as the left boundary, the right boundary must be at least $\textit{pos}[\textit{bit}]$.

In this way, we can sequentially determine the minimum right boundary for each $i$ as the left boundary, and thus obtain the minimum length of the subarray.

#### Implementation

<iframe src="https://leetcode.com/playground/MtQ225Fj/shared" frameBorder="0" width="100%" height="446" name="MtQ225Fj"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$, and let $C$ be the range of elements in the array $\textit{nums}$.

- Time complexity: $O(n \times \log C)$.
  
  We enumerate the binary bits of each element, and each element has $\log C$ binary bits.

- Space complexity: $O(\log C)$
  
  This is the space required for the array $\textit{pos}$.