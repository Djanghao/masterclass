# Official Solution

**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solution/](https://leetcode.com/problems/find-the-original-typed-string-i/solution/)

---

### Approach: One-time Traversal

#### Intuition

If a character in $\textit{word}$ appears consecutively $k$ times (where $k > 1$), and Alice makes a mistake in this part, then in the actual original string, this character could have appeared $1, 2, \dots, k - 1$ times. That is, there are $k - 1$ possible variations.

For the case $k = 1$, Alice will not make a mistake, so there are $0$ possibilities, which is consistent with the formula $k - 1$.

Therefore, we can traverse the string once: let the current traversal position be $l$, and suppose the characters in $\textit{word}$ from positions $[l, r]$ are the same, while the character at position $r + 1$ is different (or does not exist). In this case, we increase the answer by $r - l$, and continue traversing from position $r + 1$.

This further implies that the total contribution of the interval $[l, r]$ to the answer is $r - l$. We can interpret this as position $l$ not contributing to the answer, while each of the positions $[l + 1, r]$ contributes $1$. Therefore, for any position $i$ in the string $\textit{word}$ (where $i > 0$), if $\textit{word}[i - 1] = \textit{word}[i]$, we can increase the answer by $1$.

#### Implementation

<iframe src="https://leetcode.com/playground/5mH4GiBv/shared" frameBorder="0" width="100%" height="259" name="5mH4GiBv"></iframe>

#### Complexity analysis

Let $n$ be the length of the string $\textit{word}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.