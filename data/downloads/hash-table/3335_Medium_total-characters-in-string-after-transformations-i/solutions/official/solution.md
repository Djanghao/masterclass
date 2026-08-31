# Official Solution

**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solution/](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solution/)

---

[TOC]

## Solution

--- 

### Approach: Recurrence

#### Intuition

We define $f(i, c)$ as the number of occurrences of the character $c$ in the string after $i$ transformations. For sake of clarity and ease of notation, we let $c$ = $[0, 26)$, which corresponds to the 26 characters from $a$ to $z$ in sequence.

Initially, each $f(0, c)$ represents the number of occurrences of $c$ in the given string $s$. As we iterate from $f(i-1, \cdots)$ to $f(i, \cdots)$:

- If $c = 0$, corresponding to $a$, it can be converted from $z$, therefore:
    $$
    f(i, 0) = f(i - 1, 25)
    $$
- If $c = 1$, corresponding to $b$, it can be converted from $z$ or $a$, therefore:
    $$
    f(i, 1) = f(i - 1, 25) + f(i - 1, 0)
    $$
- If $c \geq 2$, it can come from the last character conversion, therefore:
    $$
    f(i, c) = f(i - 1, c - 1)
    $$

So we obtain the recursive formula, which can be calculated from $f(1, \cdots)$ all the way to $f(t, \cdots)$. The sum of all $f(t, c)$ is the final answer.

#### Optimize

Notice that in this recurrence formula, the calculation of $f(i, \cdots)$ only depends on the value of $f(i - 1, \cdots)$, therefore we can use two one-dimensional arrays instead of the entire two-dimensional array $f$ for recursion, as can be seen in the arrays $\textit{cnt}$ and $\textit{nxt}$ in the following code.

#### Implementation

<iframe src="https://leetcode.com/playground/2PiowyMJ/shared" frameBorder="0" width="100%" height="497" name="2PiowyMJ"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and let $|\Sigma|$ be the size of the character set, which is 26 in this question.

- Time complexity: $O(n + t|\Sigma|)$.
  
  We first traverse the string to obtain the count of all characters, and then use the recurrence formula to calculate the count of each character over $t$ transformations.

- Space complexity: $O(|\Sigma|)$.
  
  This is the space required for two one-dimensional arrays in the recursion.