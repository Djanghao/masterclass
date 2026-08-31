# Official Solution

**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solution/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solution/)

---

[TOC]

## Solution

---

### Approach: Sorting

#### Intuition

The subsequence of maximum length $K$ in the array $\textit{nums}$ must consist of the largest $K$ numbers in $\textit{nums}$. To ensure that we can still form the desired subsequence in the original order after identifying these values through sorting, we create an auxiliary array $\textit{vals}$, where each element is a pair $(i, \textit{nums}[i])$ containing the index $i$ and the corresponding value $\textit{nums}[i]$.

First, we sort the auxiliary array in descending order based on the values $\textit{nums}[i]$. The first $K$ elements after sorting represent the largest $K$ numbers in $\textit{nums}$, along with their original indices. Then, we sort these $K$ elements in ascending order based on their indices $i$. This ensures that their relative order in the original array is preserved.

Finally, we extract the values from these sorted pairs to form the resulting array i.e., the subsequence of length $K$ with the maximum possible sum, maintaining the original order. We return this array as the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/Xo6GXpbB/shared" frameBorder="0" width="100%" height="500" name="Xo6GXpbB"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n \log n)$.
  
  This is the time complexity for sorting the auxiliary array.

- Space complexity: $O(n)$.

  This is the space overhead of the auxiliary array.