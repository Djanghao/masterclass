# Official Solution

**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solution/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Brute-force enumeration

#### Intuition

Enumerate all triples $(i, j, k)$ satisfying $i < j < k$, and return the maximum value of all triples with values greater than or equal to $0$.

#### Implementation

<iframe src="https://leetcode.com/playground/aZWHLQrh/shared" frameBorder="0" width="100%" height="310" name="aZWHLQrh"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n^3)$.

Since we need to enumerate all triplets, we need a triple loop to traverse the entire array.

- Space complexity: $O(1)$.

Only a few additional variables are needed.

---

### Approach 2: Greedy

#### Intuition

When $j$ and $k$ of the triplet $(i, j, k)$ are fixed, it can be known from the value formula $(\textit{nums}[i] - \textit{nums}[j]) \times \textit{nums}[k]$ that $(\textit{nums}[i] - \textit{nums}[j]) \times \textit{nums}[k]$ is maximized when $\textit{nums}[i]$ takes the maximum value in the interval $[0, j)$. Use two nested loops to enumerate $k$ and $j$ respectively, while using $m$ to maintain the maximum value of $[0, j)$. Return the maximum value of all $(m - \textit{nums}[j]) \times \textit{nums}[k]$ (if all values are negative, return $0$).

#### Implementation

<iframe src="https://leetcode.com/playground/h857EJ5G/shared" frameBorder="0" width="100%" height="327" name="h857EJ5G"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n^2)$.

Since we used a variable to maintain the maximum value of $\textit{nums}[i]$, we saved one layer of loop.

- Space complexity: $O(1)$.

Only a few additional variables are needed.

---

### Approach 3: Greedy + Prefix Suffix Array

#### Intuition

Let the length of the array $\textit{nums}$ be $n$. According to the value formula $(\textit{nums}[i] - \textit{nums}[j]) \times \textit{nums}[k]$, it can be known that when $j$ is fixed, the maximum value of the triplet is achieved when $\textit{nums}[i]$ and $\textit{nums}[k]$ respectively take the maximum values from $[0, j)$ and $[j + 1, n)$. We use $\textit{leftMax}[j]$ and $\textit{rightMax}[j]$ to maintain the maximum value of the prefix $[0, j)$ and the maximum value of the suffix $[j + 1, n)$, respectively. We then enumerate $j$ in order, calculate the value $(\textit{leftMax}[j] - \textit{nums}[j]) \times \textit{rightMax}[j]$, and return the maximum value (if all values are negative, return $0$).

#### Implementation

<iframe src="https://leetcode.com/playground/J8woioax/shared" frameBorder="0" width="100%" height="344" name="J8woioax"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.

  The algorithm traverses the array three times: once to compute the prefix maximums (`leftMax`), once to compute the suffix maximums (`rightMax`), and once to compute the result. Each traversal takes $O(n)$ time, so the overall time complexity remains $O(n)$.

- Space complexity: $O(n)$.

  Two additional arrays of size $n$ are used to store the prefix and suffix maximum values. Therefore, the space complexity is $O(n)$.

### Approach 4: Greedy

#### Intuition

Similar to approach 3, if we fix $k$, then the value of the triplet is maximized when $\textit{nums}[i] - \textit{nums}[j]$ takes the maximum value. We can use $\textit{imax}$ to maintain the maximum value of $\textit{nums}[i]$ and $\textit{dmax}$ to maintain the maximum value of $\textit{nums}[i] - \textit{nums}[j]$. During the enumeration of $k$, update $\textit{dmax}$ and $\textit{imax}$.

#### Implementation

<iframe src="https://leetcode.com/playground/jm2gkLgh/shared" frameBorder="0" width="100%" height="276" name="jm2gkLgh"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.

We perform a single traversal of the array, maintaining the maximum value seen so far and the best difference.

- Space complexity: $O(1)$.

We only need two variables to maintain the maximum and minimum values.

---