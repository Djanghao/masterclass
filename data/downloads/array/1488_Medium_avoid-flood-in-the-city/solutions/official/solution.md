# Official Solution

**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solution/](https://leetcode.com/problems/avoid-flood-in-the-city/solution/)

---

### Approach: Greedy + Binary Search

#### Intuition

We need to consider how to selectively drain lakes when a flood is about to occur. To do this, we use an ordered set $\textit{st}$ to store days without rain. These sunny days can be used to drain lakes selectively when a flood is imminent, thus preventing it. The ordered set $\textit{st}$ maintains sunny days in increasing order of their indices, ensuring that we always perform the drainage operation on the earliest possible sunny day to maximize flood prevention.

For the remaining sunny days at the end, we can drain any arbitrary lake; for convenience, we choose lake $1$.

We initialize an answer array $\textit{ans}$ of the same size as $\textit{rains}$ and set all values to $1$. Then we traverse the $\textit{rains}$ array from left to right:

- If $\textit{rains}[i] = 0$, we add $i$ to the ordered set $\textit{st}$.
- If $\textit{rains}[i] > 0$, this means that lake $\textit{rains}[i]$ receives rain on day $i$, so we set $\textit{ans}[i] = -1$ to indicate that no drainage is performed that day.
  - If $\textit{rains}[i]$ is raining for the first time, then there is no risk of flooding.
  - Otherwise, we must find the smallest index $\textit{idx}$ in $\textit{st}$ that is greater than the last day it rained on this lake. This can be implemented using binary search. If no such $\textit{idx}$ exists (i.e., there are no available sunny days for drainage), then a flood is unavoidable, and we should return an empty array as required by the problem. Otherwise, we set $\textit{ans}[\textit{idx}] = \textit{rains}[i]$ and remove $\textit{idx}$ from $\textit{st}$, indicating that we will drain lake $\textit{rains}[i]$ on day $\textit{idx}$ to prevent flooding on day $i$.

#### Implementation

<iframe src="https://leetcode.com/playground/WaXpRGHP/shared" frameBorder="0" width="100%" height="500" name="WaXpRGHP"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{rains}$.

- Time complexity: $O(n \times \log n)$.
  
  Each insertion or lookup operation in the ordered set takes $O(\log n)$ time. Since we may perform up to $n$ such operations in total, the overall time complexity is $O(n \log n)$.

- Space complexity: $O(n)$.
  
  This accounts for the additional space used by the hash table and the ordered set.

---