# Official Solution

**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solution/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solution/)

---

[TOC]

## Solution

--- 

### Approach: Sliding Window

#### Intuition

We fix the left boundary $\textit{left}$ and use the $\textit{cnt}$ hash map to count the number of occurrences of each element in the window. When the number of different elements in the window is less than $\textit{distinct}$, we continuously shift $\textit{right}$ to expand the window; once the number of different elements in the window equals $\textit{distinct}$, it indicates that the current window $[\textit{left},\textit{right})$ is a **complete subarray**. At this point, since continuing to increase $\textit{right}$ will not reduce the number of different elements in the window, all subarrays from $\textit{right}$ to the end of the array are also valid **complete subarrays**. Therefore, we can count these solutions at once. That is, we add $n-\textit{right}+1$.

Each time we move $\textit{left}$, the count of $\textit{nums}[\textit{left}]$ in the hash table should be decreased by 1. If the count is reduced to $0$, the element should be deleted from the hash table.

Finally, return the accumulated results.

#### Implementation

<iframe src="https://leetcode.com/playground/3WiyynhU/shared" frameBorder="0" width="100%" height="500" name="3WiyynhU"></iframe>

#### Complexity Analysis

Let $n$ be the length of the $\textit{nums}$.

- Time complexity: $O(n)$

The two pointers $\textit{left}$ and $\textit{right}$ will each traverse the array once.

- Space complexity: $O(n)$

This is the space required for the hash map $\textit{cnt}$.