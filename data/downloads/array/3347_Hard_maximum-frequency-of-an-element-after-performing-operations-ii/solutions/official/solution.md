# Official Solution

**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solution/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solution/)

---

### Approach: Sort + Enumerate + Binary Search

#### Intuition

Preceding question: [3346. Maximum Frequency of an Element After Performing Operations I](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/). Please ensure that you have understood and mastered the methods discussed in the preceding question.

This problem is a data-enhanced version of the previous one, with the ranges of $k$ and $\textit{nums}[i]$ extended from $1e5$ to $1e9$. Therefore, it can no longer be directly enumerated using the range $[\textit{nums}[i]{\min}, \textit{nums}[i]{\max}]$, as in [3346. Maximum Frequency of an Element After Performing Operations I](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/).

We still consider enumerating $m_i$ as the target mode and then derive the calculation formula for $f_i$, the maximum number of elements that can be transformed into $m_i$, as in the previous problem:

$f_i = \min(r - l + 1, \textit{numOperations} + \textit{count}_i)$.

Since $\textit{numOperations}$ is constant during enumeration, and $\textit{count}_i$ is always 0 if $m_i$ is not in $\textit{nums}$ (which is precisely why we cannot directly enumerate), it is clear that the value of $f_i$ depends only on $l$ and $r$. In other words, it depends solely on whether the upper and lower boundary elements of $\textit{nums}$ corresponding to this $m_i$ are consistent.

Then, for those $m_i$ with identical $l$ and $r$, can they be enumerated only once?

Let’s consider one side, for example, only the $r_i$ corresponding to $m_i$. The meaning of $r_i$ is the index of the last element less than or equal to $m_i + k$ in the sorted $\textit{nums}$.

Assume that the value of $m_i + k$ is exactly $\textit{nums}[r_i]$. If the next element $\textit{nums}[r_i + 1]$ has the value $m_j + k$ (corresponding to another element $m_j$), then we can conclude that:

For any $m_k \in [m_i, m_j)$, we have:

$$
m_i + k \le m_k + k \lt m_j + k
$$

Since $m_i + k = \textit{nums}[r_i]$ and $m_j + k = \textit{nums}[r_i + 1]$:

$$
\textit{nums}[r_i] \le m_k + k \lt \textit{nums}[r_i + 1]
$$

That is:

$$
\textit{nums}[r_i] - k \le m_k \lt \textit{nums}[r_i + 1] - k
$$

This means that for any $m_k \in [\textit{nums}[r_i] - k, \textit{nums}[r_i + 1] - k)$, we only need to count the answer once, because all such $m_k$ correspond to the same right boundary $r_i$. In other words, for any $\textit{nums}[i] - k$, if it lies within the interval $[\textit{nums}[i]{\min}, \textit{nums}[i]{\max}]$ and is not present in $\textit{nums}$, it should be added to the candidate values. Similarly, we also need to add $\textit{nums}[i] + k$ that meet the same conditions to the candidate list.

The above concept can also be understood more intuitively: imagine $l$ and $r$ as a sliding window whose midpoint is $m_i$, and the right boundary $m_i + k$ moves rightward as $m_i$ increases. Every time the window’s right boundary passes over a number in $\textit{nums}$, $r_i$ increases by 1. Similarly, every time the left boundary leaves a number, $l_i$ increases by 1. As analyzed above, only when $l$ or $r$ changes do these $m_i$ values (not present in $\textit{nums}$) contribute to the answer. Therefore, by counting the answer only once when the sliding window reaches a critical state, we ensure that all possible $m_i$ are considered.

In summary, for each $\textit{nums}[i]$, it is sufficient to enumerate $\textit{nums}[i]$, $\textit{nums}[i] - k$, and $\textit{nums}[i] + k$.

#### Implementation

<iframe src="https://leetcode.com/playground/eWKJbRTx/shared" frameBorder="0" width="100%" height="500" name="eWKJbRTx"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n \log n)$.
  
  Sorting takes $O(n \log n)$ time, preprocessing takes $O(n)$, and enumerating the mode also takes $O(n \log n)$. Therefore, the overall time complexity is $O(n \log n)$.

- Space complexity: $O(n)$.

---