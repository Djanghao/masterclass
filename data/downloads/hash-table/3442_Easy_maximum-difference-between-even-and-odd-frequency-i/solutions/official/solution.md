# Official Solution

**Link:** [https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/solution/](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/solution/)

---

[TOC]

## Solution

---

### Approach: Count The Frequency Of Each Character

#### Intuition

We use a hash map to count the number of occurrences of each character in the string $s$. In each key-value pair of the hash map, the key represents a character, and the value represents the number of times that character appears.

After the statistics are completed, we traverse the values in the hash map to find the largest odd number $\textit{maxOdd}$ and the smallest even number $\textit{minEven}$. The final answer is $\textit{maxOdd} - \textit{minEven}$.

#### Implementation

<iframe src="https://leetcode.com/playground/Zz3eC6Sz/shared" frameBorder="0" width="100%" height="412" name="Zz3eC6Sz"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and $|\Sigma|$ the size of its character set. Since $s$ contains only lowercase letters, $|\Sigma| = 26$.

- Time complexity: $O(n)$.

- Space complexity: $O(|\Sigma|)$.