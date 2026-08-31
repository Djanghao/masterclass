# Official Solution

**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solution/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Dynamic Programming

#### Intuition

The task is to find the **longest subsequence** in `groups` where adjacent elements are different. We can use dynamic programming, where $\textit{dp}[i]$ represents the length of the longest valid subsequence ending at index $i$. Specifically, if an element before $i$ (say, at index $j$) satisfies $\textit{groups}[i] \neq \textit{groups}[j]$ and $j < i$, then appending the $i$-th string after the $j$-th string yields $\textit{dp}[i] = \textit{dp}[j] + 1$. Based on this, we derive the following recurrence relation:

$$
\textit{dp}[i] = \max(\textit{dp}[i], \textit{dp}[j] + 1) \quad \text{if} \quad \textit{groups}[i] \neq \textit{groups}[j]
$$

By this, for index $i$, we can enumerate all indices before $i$, thereby calculating the length of the **longest subsequence** ending with $i$, at which point we can find the **longest subsequence** in the entire array. To facilitate calculation, we use $\textit{prev}[i]$ to record the index $j$ of the previous element in the **longest subsequence** for index $i$. When we find the ending index $i$ of the **longest subsequence**, we can find the entire sequence of indices by moving forward along $i$, and then add the string corresponding to each index to the array. The reversed result of the entire array is the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/YyvoYqJd/shared" frameBorder="0" width="100%" height="500" name="YyvoYqJd"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given array.

- Time complexity: $O(n^2)$.
  
  Finding the length of the **longest subsequence** ending with index $i$ requires $O(n)$ time, and calculating the length of the **longest subsequence** ending with each index requires $O(n^2)$ time at this point.

- Space complexity: $O(n)$.
  
  The required space is $O(n)$, which needs to store the length of the longest subsequence ending with each index.

### Approach 2: Greedy

#### Intuition

The task is to find the **longest subsequence** in `groups` where adjacent elements are different. Since the array `groups` contains only two possible values, `0` and `1`, the problem simplifies to removing consecutive duplicates. In other words, we can construct the longest valid subsequence by selecting just one representative element from each group of consecutive identical values. For example, given the input:

$$
[0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1]
$$

we can break it into segments of consecutive identical elements:

$$
[[0, 0, 0], [1, 1, 1], [0], [1], [0], [1, 1, 1]]
$$

To ensure adjacent elements in the resulting subsequence are different, we select a single index from each segment. In order to maximize the subsequence length, we must select exactly one index from every segment of identical elements. At the same time, we append the corresponding string from `words` to the result.

For ease of implementation, we can simply select either the leftmost or the rightmost index from each segment. For the array above, the index groups of identical values are:

$$
[[0,1,2], [3,4,5], [6], [7], [8], [9,10,11]]
$$

From these, we can construct two valid sets of indices by picking either:

* The leftmost index of each segment:
  $[0, 3, 6, 7, 8, 9]$

* Or the rightmost index of each segment:
  $[2, 5, 6, 7, 8, 11]$

Here we choose the **leftmost** index from each segment and add the corresponding string from `words` to the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/gUabjZSW/shared" frameBorder="0" width="100%" height="276" name="gUabjZSW"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given array.

- Time complexity: $O(n)$.
  
  We only need to traverse the array once.

- Space complexity: $O(1)$.
  
  In addition to the return value, no extra space is required.