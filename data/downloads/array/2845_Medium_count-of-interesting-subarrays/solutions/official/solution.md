# Official Solution

**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solution/](https://leetcode.com/problems/count-of-interesting-subarrays/solution/)

---

[TOC]

## Solution

--- 

### Approach: Prefix Sum

#### Intuition

According to the description, given the array $\textit{nums}$ and integers $\textit{modulo}$ and $k$, if the element $x$ in the subarray $\textit{nums}[l..r]$ satisfies $x \bmod \textit{modulo} = k$ and appears $\textit{cnt}$ times, then the subarray $\textit{nums}[l..r]$ is called an **interesting subarray** if $\textit{cnt} \bmod \textit{modulo} = k$.

Since we need to count the number of occurrences of special elements in the array interval, we can consider using prefix sums. We define $\textit{sum}[i]$ as the number of special elements that satisfy $x \bmod \textit{modulo} = k$ in the array $\textit{nums}$ from index $0$ to $i$. The number of special elements in the subarray $\textit{nums}[l..r]$ is then $\textit{sum}[r] - \textit{sum}[l-1]$. According to the description, it can be deduced that at this time, in order to satisfy:

$$
(\textit{sum}[r] - \textit{sum}[l-1]) \bmod \textit{modulo} = k
$$

The transformation of the above equation yields:

$$
(\textit{sum}[r]  - k +  \textit{modulo}) \bmod \textit{modulo} = \textit{sum}[l-1] \bmod \textit{modulo}
$$

According to the above formula, it can be known that for index $r$, if there exists an index $l$ such that $l \leq r$, and which satisfies $(\textit{sum}[r] - k + \textit{modulo}) \bmod \textit{modulo} = \textit{sum}[l-1] \bmod \textit{modulo}$, then the subarray $\textit{nums}[l..r]$ is an **interesting subarray**.

We use a hash table $\textit{cnt}$ to store the number of occurrences of $\textit{sum}[i] \bmod \textit{modulo}$ in the current prefix that has been traversed. Each time we enumerate the index $r$ from small to large, we expect to be able to quickly find the number of "interesting subarrays" with $r$ as the right endpoint, i.e., the number of left boundaries $l$ that satisfy the condition. According to the above inference, it can be known that at this time, it is only necessary to find the number of elements equal to $(\textit{sum}[r] - k + \textit{modulo}) \bmod \textit{modulo}$ in the hash table $\textit{cnt}$, which is the number of elements satisfying the left boundary condition. Add this to the result, and finally return the total accumulated result. To optimize the calculation, the prefix sum of the special elements can be represented by a single variable $\textit{prefix}$ at this time.

#### Implementation

<iframe src="https://leetcode.com/playground/MbE3mGux/shared" frameBorder="0" width="100%" height="500" name="MbE3mGux"></iframe>

#### Complexity Analysis

Let $n$ be the length of the $\textit{nums}$.

- Time complexity: $O(n)$.

We only need to traverse the array once, and the time required is $O(n)$.

- Space complexity: $O(\min(n, \textit{modulo}))$

It is necessary to use a hash map to store the frequency of each element's modulo result in the array. There can be at most $O(\min(n, \textit{modulo}))$ different modulo results, so the required space is $O(\min(n, \textit{modulo}))$.