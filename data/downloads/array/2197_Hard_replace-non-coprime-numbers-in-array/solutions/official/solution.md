# Official Solution

**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solution/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solution/)

---

### Approach: Stack

#### Intuition

Since the problem statement asserts, without proof, that "any order of replacing adjacent non-coprime numbers will result in the same outcome," we can perform replacements from the beginning to the end.

We can use a stack to perform the replacement operation. Specifically, we traverse the array $\textit{nums}$. For each element $\textit{nums}[i]$, we repeatedly perform the replacement operation until $\textit{nums}[i]$ and the element at the top of the stack are coprime, or until the stack becomes empty. We then place the resulting $\textit{nums}[i]$ on top of the stack.

The sequence of elements in the stack, from bottom to top, forms the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/MzgUPWCw/shared" frameBorder="0" width="100%" height="463" name="MzgUPWCw"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$ and $C$ be the maximum value in $\textit{nums}$.

- Time complexity: $O(n \log C)$.
  
  Each element is pushed onto the stack at most once, and in the worst case, it may be combined with previous elements through repeated GCD calculations. Since a single GCD computation takes $O(\log C)$ time, the overall time complexity is $O(n \log C)$.

- Space complexity: $O(1)$.
  
  Apart from the stack used to construct the result, no additional space is required. By convention, the space used for the return value is not counted toward the auxiliary space complexity.

---