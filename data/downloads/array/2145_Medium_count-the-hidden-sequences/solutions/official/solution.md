# Official Solution

**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solution/](https://leetcode.com/problems/count-the-hidden-sequences/solution/)

---

[TOC]

## Solution

--- 

### Approach: Determine the Difference Between the Hidden Array's Upper and Lower Bounds

#### Intuition

Let $a_0, a_1, \cdots, a_n$ be the final array. We can find that if the array $a$ meets the requirements, then:

$$
a_0 + k, a_1 + k, \cdots, a_n + k
$$

also meets the requirements. The term "requirement" here refers to the difference between adjacent elements corresponding to the given array $\textit{differences}$.

We can arbitrarily specify $a_0$. For convenience, let's directly set $a_0 = 0$, and then we can restore the array $a_0, a_1, \cdots, a_n$. If we continue to consider the requirement that all array elements are within the range $[\textit{lower}, \textit{upper}]$, let's denote the smallest element of the array as $a_i$, and the largest element as $a_j$. It is obviously necessary to satisfy:

$$
\textit{lower} \leq a_i \leq a_j \leq \textit{upper}
$$

Then the lower bound of the value of $a_i$ is $\textit{lower}$, and the upper bound is $\textit{upper} - (a_j - a_i)$, which means that the maximum value $a_j$ must not exceed $\textit{upper}$. Here, $a_j - a_i$ is actually unrelated to the actual values of $a_i, a_j$, and it is equal to:

$$
\sum_{k=i}^{j-1} \textit{differences}[k]
$$

Therefore, the number of hidden arrays that meet the requirements is $\textit{upper} - (a_j - a_i) - \textit{lower} + 1$, and after arrangement, we get:

$$
(\textit{upper} - \textit{lower}) - (a_j - a_i) + 1
$$

In fact, it is the length of the interval of the specified array elements, minus the difference between the maximum and minimum values of the array elements, plus $1$. We can consider it as the number of positions where a small window of length $a_j - a_i$ can be placed while sliding within a large window of length $\textit{upper} - \textit{lower}$.

During the process of restoring the array $a$, we do not need to record the entire array, but only need to record the maximum and minimum values. If at any moment the difference between the maximum and minimum values is greater than $\textit{upper} - \textit{lower}$, we can directly return $0$.

#### Implementation

<iframe src="https://leetcode.com/playground/7xSFXU84/shared" frameBorder="0" width="100%" height="480" name="7xSFXU84"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.

We only need to traverse the $\textit{differences}$ array once.

- Space complexity: $O(1)$.

Only a few additional variables are needed.