# Official Solution

**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solution/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solution/)

---

### Approach: One-time Traversal

#### Intuition

If there exist two adjacent strictly increasing subarrays of length $k$, then there also exist two adjacent strictly increasing subarrays of length $k - 1$ (excluding the first and last elements). Therefore, we only need to find the largest value $k'$ that satisfies this condition. If $k \leq k'$, we return `true`; otherwise, we return `false`.

We traverse the array $\textit{nums}$ once, using $\textit{cnt}$ and $\textit{precnt}$ to record the length of the current strictly increasing subarray and the previous one, respectively.

Initially, $\textit{cnt} = 1$ and $\textit{precnt} = 0$. When traversing to $\textit{nums}[i]$, if it is greater than $\textit{nums}[i - 1]$, we increment $\textit{cnt}$ by 1; otherwise, the increasing sequence ends, so we assign $\textit{cnt}$ to $\textit{precnt}$ and reset $\textit{cnt}$ to 1.

There are two cases for two adjacent subarrays that satisfy the condition:

1. The previous subarray corresponds to $\textit{precnt}$ and the current one to $\textit{cnt}$, in which case $k' = \min(\textit{precnt}, \textit{cnt})$.

2. Both subarrays are part of the same increasing segment represented by $\textit{cnt}$, in which case $k' = \lfloor \dfrac{\textit{cnt}}{2} \rfloor$, where $\lfloor \cdot \rfloor$ denotes the floor function.

Based on these two cases, we continuously update the maximum value of $k'$. After completing the traversal, we check whether $k \leq k'$ holds.

#### Implementation

<iframe src="https://leetcode.com/playground/gwtCAUHs/shared" frameBorder="0" width="100%" height="429" name="gwtCAUHs"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

---