# Official Solution

**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solution/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solution/)

---

### Approach: Dynamic Programming

#### Intuition

After selecting a spell, you cannot use any spell whose absolute damage difference is 1 or 2 from the selected one. Since the result depends only on the set of selected spells and not on their order, we can process them in ascending order and treat spells with the same damage value as belonging to the same type.

Let the number of spells with damage value $\textit{power}_i$ be $\textit{count}_i$.
Define $f(i)$ as the maximum total damage achievable by choosing spells from the $0$th to the $i$th spell and including the $i$th spell. Then:

$$
f(i)=\max \limits _{\textit{power}_j<\textit{power}_i-2}f(j)+\textit{power}_i \times \textit{count}_i
$$

Since we traverse the spells in increasing order of damage, we can use a monotonic pointer to maintain $\max_{\textit{power}_j < \textit{power}_i - 2} f(j)$ during the traversal, which represents the best previous state for transition.

The final answer is the maximum value among all $f(i)$.

#### Implementation

<iframe src="https://leetcode.com/playground/X8w3yYvv/shared" frameBorder="0" width="100%" height="500" name="X8w3yYvv"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{power}$.

- Time complexity: $O(n \log n)$.
  
  Sorting requires $O(n \log n)$, and the dynamic programming traversal requires $O(n)$.

- Space complexity: $O(n)$.
  
  The hash table and dynamic programming arrays both require $O(n)$ space.

---