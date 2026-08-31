# Official Solution

**Link:** [https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/solution/](https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/solution/)

---

### Approach: Brain Teaser

#### Intuition

The password complexity of the computer with index $0$ is denoted as $T = \textit{complexity}[0]$.

If there exists a computer with an index greater than $0$ whose password complexity is less than or equal to $T$, then we should pick the one with the smallest password complexity. Since no computer has a smaller complexity than that, it can never be unlocked, so the answer is $0$.

If no such computer exists, then every computer can be unlocked by computer $0$ at the start, and the rest can be unlocked in any order. Thus, the answer is $(n-1)!$.

#### Implementation

<iframe src="https://leetcode.com/playground/HLA8wDi5/shared" frameBorder="0" width="100%" height="361" name="HLA8wDi5"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

---