# Official Solution

**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solution/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solution/)

---

### Approach: Count the Number of Peaks and Valleys in the Array

#### Intuition

We can traverse the array $\textit{nums}$ to identify and count the number of peaks and valleys. Specifically, we examine each index $i$ (excluding the first and last elements, which cannot be peaks or valleys) to determine whether it is part of a peak or a valley. We use a variable $\textit{res}$ to keep track of this count. To avoid redundant checks, we only evaluate the first index of each potential peak or valley, so if $\textit{nums}[i] = \textit{nums}[i - 1]$, we skip index $i$.

For each index $i$ that needs evaluation, we use integers $\textit{left}$ and $\textit{right}$ to represent the relationship between $\textit{nums}[i]$ and its nearest unequal neighbors on the left and right. The value $1$ indicates that the neighbor is greater than $\textit{nums}[i]$, $-1$ indicates it is smaller, and $0$ means either no unequal neighbor was found or such a neighbor doesn't exist in that direction. Both $\textit{left}$ and $\textit{right}$ are initialized to $0$.

To compute the value of $\textit{left}$, we scan leftward from index $i - 1$ until we find the first element not equal to $\textit{nums}[i]$, at which point we assign an appropriate state to $\textit{left}$ or stop if we reach the beginning of the array. Similarly, we scan rightward from index $i + 1$ to determine the value of $\textit{right}$.

An index $i$ is part of a peak or a valley if and only if $\textit{left} = \textit{right}$ and $\textit{left} \ne 0$. If both conditions are satisfied, we increment $\textit{res}$ by 1. After traversing the array, $\textit{res}$ contains the number of peaks and valleys, which we return as the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/9ynGHWMH/shared" frameBorder="0" width="100%" height="500" name="9ynGHWMH"></iframe>

#### Complexity analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n^2)$.
  
  For each element, we may traverse up to $O(n)$ elements to the left and right in the worst case.

- Space complexity: $O(1)$.

---