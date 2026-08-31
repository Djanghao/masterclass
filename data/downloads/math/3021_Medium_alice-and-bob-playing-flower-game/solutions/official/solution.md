# Official Solution

**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solution/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solution/)

---

### Approach: Mathematics

#### Intuition

From the problem statement, we can see that Alice can only win the game when $x + y$ is an odd number. There are two cases:

- $x$ is odd and $y$ is even. The number of pairs $(x, y)$ that satisfy the conditions of the problem is $\lceil \tfrac{n}{2} \rceil \times \lfloor \tfrac{m}{2} \rfloor$.

- $x$ is even and $y$ is odd. The number of such pairs $(x, y)$ is $\lfloor \tfrac{n}{2} \rfloor \times \lceil \tfrac{m}{2} \rceil$.

Thus, the total number of pairs $(x, y)$ that meet the conditions is

$$
\lceil \tfrac{n}{2} \rceil \times \lfloor \tfrac{m}{2} \rfloor + \lfloor \tfrac{n}{2} \rfloor \times \lceil \tfrac{m}{2} \rceil.
$$

Now, let us simplify this formula:

- When both $n$ and $m$ are even, the expression simplifies to $\tfrac{nm}{2}$.

- When both $n$ and $m$ are odd, the expression simplifies to 
  $$
  \tfrac{n + 1}{2} \times \tfrac{m - 1}{2} + \tfrac{n - 1}{2} \times \tfrac{m + 1}{2} = \tfrac{nm - 1}{2}.
  $$

- When one of $n$ or $m$ is odd (say $n$ is odd), the expression simplifies to 
  $$
  \tfrac{n + 1}{2} \times \tfrac{m}{2} + \tfrac{n - 1}{2} \times \tfrac{m}{2} = \tfrac{nm}{2}.
  $$

Therefore, the simplified formula can be summarized as $\lfloor \tfrac{nm}{2} \rfloor$.

#### Implementation

<iframe src="https://leetcode.com/playground/Bnqd8bDn/shared" frameBorder="0" width="100%" height="157" name="Bnqd8bDn"></iframe>

#### Complexity Analysis

- Time complexity: $O(1)$.
  
  The result can be calculated directly.

- Space complexity: $O(1)$.
  
  No additional space is needed.