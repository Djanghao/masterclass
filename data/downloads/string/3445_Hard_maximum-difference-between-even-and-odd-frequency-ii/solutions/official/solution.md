# Official Solution

**Link:** [https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii/solution/](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii/solution/)

---

[TOC]

## Solution

---

### Approach: Enumerate Two Characters + Two Pointers

#### Intuition

Since the string $s$ only contains digit characters $[0, 4]$, we can first enumerate the characters $a$ and $b$ described in the problem, where $a$ must appear an odd number of times, $b$ must appear an even number of times, and $a$ and $b$ must be different. The parity of the number of occurrences of a character can be represented by a binary bit, where $0$ indicates an even count and $1$ indicates an odd count. We place the parity of $a$'s occurrences in front and the parity of $b$'s at the end, resulting in 4 possible cases: $[00, 01, 10, 11]$. The string we are looking for must correspond to the $10$ case.

We consider a two-pointer approach, where the right pointer $\textit{right}$ moves one step at a time, representing the right endpoint of the current substring. As it moves, we update the count of $a$ and $b$ up to index $\textit{right}$, denoted as $\textit{cnt}_a$ and $\textit{cnt}_b$, and compute the corresponding state:

$$
\textit{status}_\textit{right} = (\textit{cnt}_a \bmod 2) \times 2 + (\textit{cnt}_b \bmod 2)
$$

At the same time, the left pointer $\textit{left}$ only advances when certain conditions are met. That is, only indices less than or equal to $\textit{left}$ can serve as the left endpoint of a valid substring. We use $\textit{prev}_a$ and $\textit{prev}_b$ to record the count of $a$ and $b$ up to index $\textit{left}$, and move $\textit{left}$ only when both conditions below are satisfied:

- $\textit{right} - \textit{left} \geq k$, i.e., the substring length is at least $k$.

- $\textit{cnt}_b - \textit{prev}_b \geq 2$, meaning $b$ appears an even number of times in the substring, but zero occurrences must be excluded.

For any such valid $\textit{left}$, the corresponding result is $(\textit{cnt}_a - \textit{cnt}_b) - (\textit{prev}_a - \textit{prev}_b)$. Therefore, we maintain a length-4 array $\textit{best}$ that keeps track of the minimum value of $\textit{prev}_a - \textit{prev}_b$ for each possible state:

$$
\textit{status}_\textit{left} = (\textit{prev}_a \bmod 2) \times 2 + (\textit{prev}_b \bmod 2)
$$

We then use $\textit{prev}_a - \textit{prev}b$ to update $\textit{best}[\textit{status}\textit{left}]$.

After moving the left pointer, we compute the answer for the current right pointer. Since we are looking for substrings with state $10$, the required left endpoint must have the state $\textit{status}_\textit{right} \oplus (10)_2$, where $\oplus$ denotes the XOR operation. So the answer becomes:

$$
(\textit{cnt}_a - \textit{cnt}_b) - \textit{best}[\textit{status}_\textit{right} \oplus (10)_2]
$$

We return the maximum value among all such results as the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/FfHcYdhW/shared" frameBorder="0" width="100%" height="500" name="FfHcYdhW"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and let $|\Sigma|$ denote the size of the character set. Since $s$ contains only the digits $[0, 4]$, we have $|\Sigma| = 5$.

- Time complexity: $O(n\times|\Sigma|^2)$.
  
  Enumerating all possible pairs of characters $(a, b)$ takes $O(|\Sigma|^2)$ time. For each such pair, we apply a two-pointer approach using $\textit{left}$ and $\textit{right}$ to compute the answer. Each pointer traverses the string at most once, resulting in $O(n)$ time per pair. Hence, the total time complexity is $O(n \times |\Sigma|^2)$.

- Space complexity: $O(1)$.
  
  Only a few additional variables are needed.