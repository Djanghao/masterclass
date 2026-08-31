# Official Solution

**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solution/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solution/)

---

### Approach: Reverse Traversal

#### Intuition

According to the problem statement, starting from any index $i$ in the array $\textit{energy}$, you are immediately transported to $i + k$. In this process, the indices being traversed are $[i, i + k, i + 2k, i + 3k, \cdots]$, continuing until you reach the end of the array.

The most direct approach is to enumerate all possible starting points, which requires $n$ enumerations. However, we can reverse our perspective and instead enumerate all end points $i$ of these paths. In this case, the reverse traversal of a path becomes $[i, i - k, i - 2k, \cdots]$. The corresponding sequence of prefix enumerations in this reverse path is:

$$
\begin{aligned}
& [i] \\
& [i,i-k] \\
& [i,i-k,i-2k] \\
& [i,i-k,i-2k,i-3k] \\
& \cdots
\end{aligned}
$$

By observation, the sum of all prefixes in the reverse path represents the total possible energy absorption. We then find and return the maximum of these values.

We enumerate the end points in order from $i = n - k$ to $n - 1$, where $n$ is the length of the given array $\textit{energy}$. During traversal, we maintain a running sum of elements, denoted as $\textit{sum}$, and track the maximum value, which becomes our final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/neAUY5GS/shared" frameBorder="0" width="100%" height="446" name="neAUY5GS"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given array $\textit{energy}$.

- Time complexity: $O(n)$.
  
  Each element in the array is visited exactly once during the traversal, resulting in a linear time complexity.

- Space complexity: $O(1)$.

---