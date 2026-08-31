# Official Solution

**Link:** [https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solution/](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solution/)

---

[TOC]

## Solution

--- 

### Approach: One-Time Traversal

#### Intuition

Let $n$ be the length of the array $\textit{nums}$, and perform a traversal of the indices in the range $[1, n-2]$. When traversing to index $i$, if $\textit{nums}[i]$ is equal to $(\textit{nums}[i-1] + \textit{nums}[i+1]) \times 2$, then the answer increases by $1$.

#### Implementation

<iframe src="https://leetcode.com/playground/QVCDT5Ev/shared" frameBorder="0" width="100%" height="276" name="QVCDT5Ev"></iframe>

#### Complexity Analysis

Let $n$ be the length of the $\textit{nums}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.