# Official Solution

**Link:** [https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/solution/](https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/solution/)

---

### Approach 1: Sliding Window + Dynamic Programming

#### Intuition

The problem asks us to split the array $\textit{nums}$ into one or more **non-empty** contiguous subarrays such that, in every subarray, the difference between the **maximum** and **minimum** elements is at most $k$. We need to compute the total number of such valid partitioning schemes. Let $n$ be the length of $\textit{nums}$. We can enumerate each index $i$ and calculate the number of valid partitions for the prefix $\textit{nums}[0\cdots i]$. Since the number of partitions at index $i$ depends on the starting index $j$ of the last subarray and the number of partitions for the prefix $\textit{nums}[0\cdots j-1]$, dynamic programming is suitable.

Define $\textit{dp}[i+1]$ as the number of valid partitions for $\textit{nums}[0\cdots i]$. When $i=0$, the prefix is empty and is considered a valid base case, so we set $\textit{dp}[0] = 1$. Suppose the last subarray starts at index $j$. To compute $\textit{dp}[i]$, we need the number of partitions for the prefix $\textit{nums}[0\cdots j-1]$, which is $\textit{dp}[j]$. Since multiple starting positions may be valid, if the set of valid $j$ values is ${j_0,j_1,\dots,j_{m-1}}$, we obtain the recurrence

$
\textit{dp}[i+1] = \sum_{s=0}^{m-1}\textit{dp}[j_s].
$

Enumerating all such $j$ values yields an $O(n^2)$ algorithm, so we need further optimization.

Next, consider the range of valid $j$. Fix the right endpoint $i$. As we extend the window leftward, the subarray grows and the max-min difference might exceed $k$. Hence the valid starting indices form a continuous interval $[L,i]$, giving:

$
\textit{dp}[i+1] = \sum_{j=L}^{i} \textit{dp}[j].
$

We can compute this using prefix sums. Let

$
\textit{prefix}[i+1] = \sum_{j=0}^{i} \textit{dp}[j].
$

Then

$
\textit{dp}[i+1] = \textit{prefix}[i] - \textit{prefix}[L-1].
$

The key step is to find the smallest valid $L$. If the max-min difference for $\textit{nums}[j\cdots i]$ is within $k$, then all subarrays contained inside it also satisfy the condition. Thus we only need to maintain the smallest valid $j$. We can do this using the sliding window technique from problem 239, maintaining the max and min values within the window using an ordered set or a priority queue. When the difference exceeds $k$, we move the left boundary to restore validity. The final answer is $\textit{dp}[n]$.

The computation proceeds as follows:

* Initialize $\textit{dp}$ and $\textit{prefix}$ with $\textit{dp}[0]=1$ and $\textit{prefix}[0]=1$.
* For each index $i$, insert $\textit{nums}[i]$ into the ordered set. If the current max-min difference exceeds $k$, increment $j$ and remove $\textit{nums}[j]$ until the window becomes valid again.
* Compute $\textit{dp}[i+1] = \textit{prefix}[i] - \textit{prefix}[j-1]$ and update $\textit{prefix}[i+1]$, applying the modulus as needed.
* After the loop finishes, return $\textit{dp}[n]$.

#### Implementation

<iframe src="https://leetcode.com/playground/AKnsR6jk/shared" frameBorder="0" width="100%" height="500" name="AKnsR6jk"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

- Time complexiy: $O(n \log n)$.
  
  Each element is inserted into and removed from an ordered multiset at most once. Each operation costs $O(\log n)$, and there are $O(n)$ such operations.

- Space complexity: $O(n)$.
  
  The ordered multiset can contain up to $n$ elements, and the DP and prefix arrays each hold $n+1$ entries.

---

### Approach 2: Monotonic Queue Optimization

#### Intuition

When maintaining the sliding window, we can again refer to the ideas used in problem [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/). Instead of using an ordered set, we can further optimize the solution with monotonic queues. These queues maintain the maximum and minimum values in the current window, ensuring that the difference between them never exceeds $k$. Once this condition is met, the dynamic programming transitions follow the same structure described in the first approach.

#### Implementation

<iframe src="https://leetcode.com/playground/94EDoPaz/shared" frameBorder="0" width="100%" height="500" name="94EDoPaz"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given array.

- Time complexity: $O(n)$.
  
  Each index is pushed and popped from the monotonic queues at most once, so all queue operations together take linear time. The remaining work is also linear, giving a total of $O(n)$.

- Space complexity: $O(n)$.
  
  The monotonic queues can each hold up to $n$ elements, and we store the DP and prefix arrays of size $n+1$, resulting in $O(n)$ total space usage.

---