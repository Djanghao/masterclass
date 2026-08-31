# Official Solution

**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solution/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solution/)

---

### Approach 1: Iteration

#### Intuition

The general idea of this problem is the same as that of "[Find the K-th Character in String Game I](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/)," with the only difference being that we need to determine which operation the current $k$ is located in.

Let $k = 2^t + a$. If $a = 0$, then the current $k$ is in the $(t - 1)$-th operation; if $a \neq 0$, then the current $k$ is in the $t$-th operation.

This conclusion can be easily derived by simulating with small amounts of data.

After determining the number of operations corresponding to the current $k$, we can decide whether to accumulate the answer using the `operations` array provided in the problem. If `operations[t] = 1`, we perform the accumulation; otherwise, we do not.

#### Implementation

<iframe src="https://leetcode.com/playground/KpQUBwLn/shared" frameBorder="0" width="100%" height="361" name="KpQUBwLn"></iframe>

#### Complexity analysis

- Time complexity: $O(\log k)$.
  
  Only related to the binary digits of $k$.

- Space complexity: $O(1)$.

### Approach 2: Mathematics

#### Intuition

Change the way of thinking: if you start counting from the character after the original string, reaching the $k$-th character is equivalent to moving forward $k - 1$ characters.

Write $k - 1$ in binary. When the $t$-th bit is $1$, it corresponds to shifting forward by $2^{t - 1}$ characters, which is equivalent to applying the $(t - 1)$-th operation.

Therefore, we only need to pay attention to the positions of the binary number representing $k - 1$ where the bit is $1$. If the corresponding value in the `operations` array at that position is $1$, we add it to the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/4gsvjvkL/shared" frameBorder="0" width="100%" height="276" name="4gsvjvkL"></iframe>

#### Complexity analysis

- Time complexity: $O(\log k)$.
  
  This depends only on the number of binary digits in $k$.

- Space complexity: $O(1)$.