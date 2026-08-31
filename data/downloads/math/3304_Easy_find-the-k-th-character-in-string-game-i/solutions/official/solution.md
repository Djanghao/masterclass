# Official Solution

**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solution/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solution/)

---

### Approach: Iteration

#### Intuition

Initially, there is a string $\text{"a"}$ of length $1$. In each operation, every character in the current string is changed to the next character in the alphabet, and the modified string is appended to the original string.

It is easy to observe that after each operation, the length of the string doubles. Each character in the appended half is formed by applying a "+1 modulo 26" operation on the corresponding character in the original string.

Our goal is to find the character at the $k$-th position. To do this, we ask: which character in the previous version of the string (let's call this position $k'$) contributed to the character at position $k$?

Let $k = 2^t + a$ (i.e., find the largest power of $2 \leq k$).

- If $a = 0$, then $k$ lies in the $t$-th operation, and we set $k' = k - 2^{t + 1}$.
- If $a \ne 0$, then $k$ lies in the $(t + 1)$-th operation, and we set $k' = k - 2^t = a$.

By iterating this process, we eventually reduce $k'$ to $1$, which corresponds to the $0$-th operation where the character is $\text{"a"}$.

Each iteration represents a single "+1" transformation, so we only need to count how many such steps are taken.

Since the constraint is $1 \leq k \leq 500$, we don't need to worry about performing modulus 26 operations explicitly.

#### Implementation

<iframe src="https://leetcode.com/playground/gXrdpLXW/shared" frameBorder="0" width="100%" height="327" name="gXrdpLXW"></iframe>

#### Complexity analysis

- Time complexity: $O(\log k)$.
  
  It only depends on the binary digits of $k$.

- Space complexity: $O(1)$.