# Official Solution

**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solution/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Enumerate

#### Intuition

We can enumerate all index pairs $(i, j)$ and determine whether $\textit{nums}[j] = \textit{key}$ and $|i - j| \le k$. At the same time, we use the array $\textit{res}$ to maintain all indices of the $k$ nearest neighbors. If both conditions are satisfied, we add $i$ to the array $\textit{res}$.

To ensure that $\textit{res}$ does not contain duplicate indices and is in ascending order, we can first enumerate $i$ in ascending order, then enumerate $j$, and terminate the inner loop each time $i$ is added to $\textit{res}$, proceeding to the next $i$. Finally, the array $\textit{res}$ will contain the indices of all the $k$ nearest neighbors that meet the requirements, and we can return it as the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/NzZoDHBG/shared" frameBorder="0" width="100%" height="412" name="NzZoDHBG"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n^2)$.
  
  This is the time complexity for traversing indices $i$ and $j$ to find the target index.

- Space complexity: $O(1)$.

  The output array is not counted in the space complexity.


### Approach 2: One-time Traversal

#### Intuition

Let's assume the length of the array $\textit{nums}$ is $n$. Then, for any index $j$ that satisfies $\textit{nums}[j] = \textit{key}$, all indices within the closed interval $[\max(0, j - k), \min(n - 1, j + k)]$ are $K$-neighbor indices (the maximum and minimum functions are used here to ensure the indices are valid).

So, we can find all indices $j$ such that $\textit{nums}[j] = \textit{key}$ by traversing the array $\textit{nums}$ once, and then adding the integers within the corresponding interval to $\textit{res}$. However, this can still lead to the possibility of duplicate indices being added to the answer array. To avoid this, we can use $r$ to represent the smallest index that has not yet been determined to be a $K$-nearest neighbor index. Before the traversal begins, let $r = 0$. Whenever we reach an index $j$ that satisfies the condition, we just need to add all indices within the closed interval $[\max(0, j - k), \min(n - 1, j + k)]$ in order to $\textit{res}$, starting from $r$, and at the same time, update $r$ to $\min(n - 1, j + k) + 1$. After the traversal is complete, $\textit{res}$ will contain all $K$-nearest neighbor indices, sorted in ascending order and without duplicates.

#### Implementation

<iframe src="https://leetcode.com/playground/gmq5ssqs/shared" frameBorder="0" width="100%" height="361" name="gmq5ssqs"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.
  
  We only need to traverse the array once.

- Space complexity: $O(1)$.

  The output array is not counted in the space complexity.