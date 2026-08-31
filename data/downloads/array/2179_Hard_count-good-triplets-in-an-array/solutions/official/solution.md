# Official Solution

**Link:** [https://leetcode.com/problems/count-good-triplets-in-an-array/solution/](https://leetcode.com/problems/count-good-triplets-in-an-array/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Binary Indexed Tree

#### Intuition

If $i, j, k$ satisfy $0 \leq i < j < k < n$ and $0 \leq \textit{pos2}_{\textit{nums1}[i]} < \textit{pos2}_{\textit{nums1}[j]} < \textit{pos2}_{\textit{nums1}[k]} < n$, then $\textit{nums1}[i]$, $\textit{nums1}[j]$, $\textit{nums1}[k]$ form a good triplet. Because both $\textit{nums1}$ and $\textit{nums2}$ are permutations of $0$ to $n-1$, we can count the number of good triplets by calculating the number of triplets $i, j, k$ that meet the conditions.

An array $\textit{indexMapping}$ is used to express the above relationship, where $\textit{indexMapping}[i] = \textit{pos2}_{\textit{nums1}[i]}$, and $\textit{indexMapping}$ is also a permutation of $0$ to $n-1$. When calculating the number of triplets $i, j, k$ that meet the conditions, we can first fix $j$, then count how many numbers are less than $\textit{indexMapping}[j]$ in the $\textit{indexMapping}$ array to the left of index $j$, and denote it as $\textit{left}$. Next, count how many numbers are greater than $\textit{indexMapping}[j]$ to the right of index $j$, and denote it as $\textit{right}$. Thus, $\textit{left}\times\textit{right}$ represents the number of triplets with the middle element as $j$. By traversing all $j$, the answer can be calculated.

The above calculation process can be referred to [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/), using a binary indexed tree to solve. The binary indexed tree can complete increment and prefix sum operations for a certain index in $O(\log{n})$ time. When applying the binary indexed tree, we need to traverse the values in $\textit{indexMapping}$ from small to large, and calculate the prefix sum for the current index $\textit{pos}$, which represents how many numbers are less than $\textit{indexMapping}[pos]$ to the left of index $pos$. We can also calculate how many numbers are greater than $\textit{indexMapping}[pos]$ to the right of index $pos$, and then add $1$ to the value of the current index. Since we are traversing according to the value size, we need another array $\textit{reversedIndexMapping}$ to save the indices of each value in $\textit{indexMapping}$. In the code, the variable $\textit{indexMapping}$ can be omitted. The result can be returned after the traversal is completed.

#### Implementation

<iframe src="https://leetcode.com/playground/CL98TQtb/shared" frameBorder="0" width="100%" height="500" name="CL98TQtb"></iframe>

#### Complexity Analysis

- Time complexity: $O(n\times\log{n})$.

The binary indexed tree requires $O(\log{n})$ for each query and update operation, and we need to perform query and update operations on each index of the array during traversal.

- Space complexity: $O(n)$.

The binary indexed tree requires $O(n)$ space.