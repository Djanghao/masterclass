# Official Solution

**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solution/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solution/)

---

### Approach: Construction

#### Intuition

We start by placing the smallest $\lfloor \tfrac{n}{2} \rfloor$ positive integers and their negatives into the array. At this point, their sum is $0$.

- When $n$ is even, the array already satisfies the requirements.
- When $n$ is odd, we add $0$ to the array.

Thus, the $n$ numbers are all distinct, and their sum is $0$. This gives us an array that satisfies the requirements.

#### Implementation

<iframe src="https://leetcode.com/playground/DrszoiDR/shared" frameBorder="0" width="100%" height="310" name="DrszoiDR"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.
  
  Apart from the output array $\textit{ans}$, the extra space used is constant.

---