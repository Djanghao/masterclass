# Official Solution

**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solution/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Two pointers

#### Intuition

According to the definition of **good array** in the question, if $\textit{nums}[i..j]$ is a good array, then for all $j' > j$, the number of identical values in $\textit{nums}[i..j']$ will be at least as many, so $\textit{nums}[i..j']$ is also a good array.

This suggests that we can use the two pointers method to solve this problem. We enumerate the left pointer $\textit{left}$ to represent the left boundary of the subarray, with its initial value being $0$, and use the right pointer $\textit{right}$ to represent the right boundary of the subarray, with its initial value being $-1$. For the currently enumerated $\textit{left}$, we need to keep moving the $\textit{right}$ pointer to the right until $\textit{nums}[\textit{left}..\textit{right}]$ is a good array.

During the process of moving to the right, we can incrementally calculate the number of identical elements: we can use a hash map $\textit{cnt}$ to record each element in each subarray and the number of times it appears. When $\textit{right}$ moves to the right, the number of identical elements increases by $\textit{cnt}[\textit{right}]$, and then $\textit{cnt}[\textit{right}]$ needs to be increased by $1$. After the $\textit{right}$ shift is completed, according to the above deduction, the number of good subarrays with $\textit{left}$ as the left boundary is $n - \textit{right}$, where $n$ is the length of the array $\textit{nums}$. We add this value to the final answer.

After this, the current left boundary $\textit{left}$ is enumerated, the number of identical elements will decrease by $\textit{cnt}[\textit{left}] - 1$, and then $\textit{cnt}[\textit{left}]$ also needs to be reduced by $1$.

After all the left boundaries have been enumerated, the final answer can be obtained.

#### Implementation

<iframe src="https://leetcode.com/playground/9wJEyTb9/shared" frameBorder="0" width="100%" height="500" name="9wJEyTb9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.

The pointers $\textit{left}$ and $\textit{right}$ will each traverse the array once.

- Space complexity: $O(n)$.

The hash map $\textit{cnt}$ requires $O(n)$ space.