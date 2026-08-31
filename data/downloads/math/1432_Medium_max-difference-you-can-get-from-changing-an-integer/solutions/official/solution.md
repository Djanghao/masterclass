# Official Solution

**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solution/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solution/)

---

[TOC]

## Solution

---

### Approach 1: Enumeration

#### Intuition

To maximize the difference between $a$ and $b$, we aim to find the largest and smallest integers that can be obtained from $\textit{num}$, to be used as $a$ and $b$, respectively.

According to the problem description, we can arbitrarily choose two digits $x$ and $y$, and replace all occurrences of $x$ in $\textit{num}$ with $y$. Since both $x$ and $y$ range from $0$ to $9$, there are at most $10 \times 10 = 100$ different replacement methods.

Therefore, we can use a double loop to enumerate all possible replacements. Among all the resulting integers, we find the maximum and minimum values and assign them to $a$ and $b$.

#### Implementation

<iframe src="https://leetcode.com/playground/kuRZqpFu/shared" frameBorder="0" width="100%" height="500" name="kuRZqpFu"></iframe>

#### Complexity Analysis

- Time complexity: $O(d^2 \log (\textit{num}))$, where $d = 10$, since $\textit{num}$ is a "decimal" number.
  
  We use a double loop to enumerate all possible replacement methods, which takes $O(d^2)$ time. For each replacement method, we convert $\textit{num}$ to a string and perform the replacement operation. The time required for this is proportional to the number of digits in $\textit{num}$, which is $O(\log (\textit{num}))$.

- Space complexity: $O(\log (\textit{num}))$.

  The algorithm stores string representations of the input number, which have length proportional to the number of digits.

### Approach 2: Greedy

#### Intuition

If we want to find the largest number, the best strategy is to find a high-order digit and change it to $9$. Similarly, if we want to find the smallest number, the best strategy is to find a high-order digit and change it to $0$.

**Finding the largest number**

To find the largest number, we iterate through each digit of $\textit{num}$ from left to right (most significant to least significant). If the digit at the current position is not $9$, we replace all occurrences of that digit with $9$ to obtain the largest possible number.

**Finding the smallest number**

To find the smallest number, we again iterate through each digit of $\textit{num}$ from left to right. If the digit at the current position is not $0$, we replace all occurrences of that digit with $0$ to obtain the smallest possible number.

Wait, if we replace digits with $0$, could we end up with leading zeros? For example, if $\textit{num} = 123$ and we replace the highest digit $1$ with $0$, the result would be $023$, which introduces a leading zero and is not a valid number. Therefore, we must handle the issue of leading zeros carefully:

- If we are enumerating the most significant digit, we can only replace it with $1$; otherwise, the result will have a leading zero.

- For all other digits:
  - If the current digit is different from the most significant digit, we can replace it with $0$.
  - If the current digit is equal to the most significant digit, we skip it. This is because when we evaluated the most significant digit, we already decided not to replace it, either due to the leading zero restriction or because we chose a different replacement. So we skip further replacement of this digit.

By greedily identifying the high-order digits to replace, we can find both the maximum and minimum values, and thereby determine the final result.

#### Implementation

<iframe src="https://leetcode.com/playground/CT7rXYgj/shared" frameBorder="0" width="100%" height="500" name="CT7rXYgj"></iframe>

#### Complexity Analysis

- Time complexity: $O(\log (\textit{num}))$.
  
  We only need to enumerate each digit of $\textit{num}$ at most once.

- Space complexity: $O(\log (\textit{num}))$.

  The algorithm stores string representations of the input number, which have length proportional to the number of digits.