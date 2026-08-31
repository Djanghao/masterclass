# Official Solution

**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solution/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solution/)

---

[TOC]

## Solution

--- 

### Approach: Sliding Window

#### Intuition

According to the definition of array scores in the question, and given that $\textit{nums}$ is an array of positive integers, for a subarray $[i, j]$, as the right endpoint $j$ is fixed, the sum of the subarray decreases and its length shortens with the increase of the left endpoint $i$, so the score of the subarray monotonically decreases. If the score of the subarray $[i, j]$ is less than $k$, since the score is monotonically decreasing, then the score of the subarray $[p, j], i < p \leq j$ is also less than $k$.

Based on the above properties, we can use the sliding window method to solve the question. Starting from $j = 0$, enumerate the right endpoint of the subarray and maintain a left endpoint $i$ (initially set to $0$). For each $j$:

- Expand window: Add $\textit{nums}[j]$ to the subarray sum corresponding to the current window $\textit{total}$.

- Shrink window: If the score of the corresponding subarray in the current window, $\textit{total} \times (j - i + 1)$, is greater than or equal to $k$, it indicates that the subarray does not meet the requirements, and therefore, the left endpoint $i$ needs to be moved to the right until the score is less than $k$.

- Count the number of subarrays: At this moment, the number of subarrays with $j$ as the right endpoint and a score less than $k$ is $j - i + 1$, and it is accumulated into the final result $\textit{res}$.

After the enumeration, return the final result $\textit{res}$.

#### Implementation

<iframe src="https://leetcode.com/playground/5CroPzAm/shared" frameBorder="0" width="100%" height="344" name="5CroPzAm"></iframe>

#### Complexity Analysis

Let $n$ be the length of the $\textit{nums}$.

- Time complexity: $O(n)$.

We only need to traverse the array once.

- Space complexity: $O(1)$.

Only a few additional variables are needed.