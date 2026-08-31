# Official Solution

**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solution/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Traverse number pairs

#### Intuition

We use $n$ to represent the length of the array $\textit{nums}$. To count the number of pairs that meet the requirements, we can use two nested loops to traverse all pairs (i, j) that satisfy $0 \leq i < j < n$, and check individually whether $i \times j \bmod k$ is equal to $0$ and whether $\textit{nums}[i]$ is equal to $\textit{nums}[j]$.

At the same time, we use $\textit{res}$ to count the number of pairs of numbers that meet the requirements. If a pair of numbers $(i, j)$ meets the requirements, we add $1$ to $\textit{res}$. Finally, we return $\textit{res}$ as the number of pairs of numbers that meet the requirements.

#### Implementation

<iframe src="https://leetcode.com/playground/dLafBV9u/shared" frameBorder="0" width="100%" height="310" name="dLafBV9u"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n^2)$.

This is the time complexity for traversing number pairs and counting the number of pairs that meet the requirements.

- Space complexity: $O(1)$.

Only a few additional variables are needed.