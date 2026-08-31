# Official Solution

**Link:** [https://leetcode.com/problems/maximize-subarrays-after-removing-one-conflicting-pair/solution/](https://leetcode.com/problems/maximize-subarrays-after-removing-one-conflicting-pair/solution/)

---

### Approach: Enumeration

#### Intuition

Consider a simplified version of the problem: calculating the number of valid subarrays that do not contain any conflicting pairs, without deleting any of them.

For the simplified problem, we first enumerate the left endpoint $i$ of the subarray. Then, under the condition that no conflicting pairs are included, we determine the range of valid values for the right endpoint $j$. For each conflicting pair $\textit{conflictingPairs}[k] = [a_k, b_k]$, we assume $a_k < b_k$ (if not, we swap their positions). There are two cases:

- If $a_k < i$, then no matter how $j$ is chosen, the subarray will not include both $a_k$ and $b_k$.

- If $a_k \ge i$, then we must have $j < b_k$.

Based on this, we define $b_1 = \min_{a_k \ge i} b_k$, and the valid range for $j$ becomes:

$$
i \le j \lt \min(b_1, n + 1)
$$

Therefore, the number of valid subarrays with left endpoint $i$ is $\min(n + 1, b_1) - i$.
To compute $b_1$ efficiently, we use arrays $\textit{bMin}_1$ and $\textit{bMin}_2$ to record the smallest and second smallest values of $b$ among all conflicting pairs $(a, b)$ where $a < b$. Then, $b_1$ can be found using the suffix minimum of $\textit{bMin}_1$.

Now consider the case where we delete exactly one conflicting pair. For a subarray with left endpoint $i$, the valid range of its right endpoint $j$ is determined by $b_1$. If the deleted conflicting pair does not involve $b_1$, then the number of valid subarrays starting at $i$ remains unchanged.

Assume $b_1$ is located at index $i_{b_1}$ in $\textit{bMin}1$, i.e., $\textit{bMin}1[i{b_1}] = b_1$. We define $\textit{delCount}[i{b_1}]$ to record the number of additional valid subarrays that can be gained by deleting the conflicting pair associated with $b_1$.

Let $b_2$ be the second smallest suffix value of $\textit{bMin}_1$ starting at index $i$. After deleting $b_1$, the new $b_1'$ becomes $\min(b_2, \textit{bMin}2[i{b_1}])$. The number of additional valid subarrays gained is:

$$
\min(b_1', n + 1) - \min(b_1, n + 1)
$$

This value is then added to $\textit{delCount}[i_{b_1}]$.

Finally, the maximum number of valid subarrays after deleting exactly one conflicting pair is equal to the number of valid subarrays without any deletion, plus the maximum value in $\textit{delCount}$.

#### Implementation

<iframe src="https://leetcode.com/playground/4u9Vpqc6/shared" frameBorder="0" width="100%" height="500" name="4u9Vpqc6"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.
  
  We only need to traverse the array once.

- Space complexity: $O(n)$.
  
  We use an array to record the number of valid subarrays added after deleting conflicting pairs.
  
---