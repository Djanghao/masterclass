# Official Solution

**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solution/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solution/)

---

### Approach 1: Hash Table

#### Intuition

Use a hash table to count the numbers that appear twice in $\textit{nums}$, and return the result.

#### Implementation

<iframe src="https://leetcode.com/playground/et8vnJMd/shared" frameBorder="0" width="100%" height="310" name="et8vnJMd"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.

- Space complexity: $O(n)$.

### Approach 2: Bitwise Operations

#### Intuition

We XOR all the numbers in $\textit{nums}$ with all the numbers from $0$ to $n - 1$.
The result is the XOR of the two extra numbers, denoted as $y$.

The lowest differing bit between these two numbers can be found using `lowBit = y & -y`.

Using this bit, we divide all the numbers in $\textit{nums}$ and the numbers from $0$ to $n - 1$ into two groups, then compute the XOR of each group. The results are the two missing numbers.

#### Implementation

<iframe src="https://leetcode.com/playground/bNd4P4BJ/shared" frameBorder="0" width="100%" height="500" name="bNd4P4BJ"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

### Approach 3: Mathematics

#### Intuition

Let the two extra numbers be $x_1$ and $x_2$.
Let $\textit{sum}$ and $\textit{squaredSum}$ denote the sum and the squared sum of elements in $\textit{nums}$, respectively.
The sum and squared sum of integers from $0$ to $n - 1$ are $\frac{n(n - 1)}{2}$ and $\frac{n(n - 1)(2n - 1)}{6}$, respectively.

Define:
$$
\textit{sum}_2 = \textit{sum} - \frac{n(n - 1)}{2}, \quad
\textit{squaredSum}_2 = \textit{squaredSum} - \frac{n(n - 1)(2n - 1)}{6}
$$

Then:
$$
\begin{cases}
x_1 + x_2 = \textit{sum}_2 \
x_1^2 + x_2^2 = \textit{squaredSum}_2
\end{cases}
$$

Solving gives:
$$
\begin{cases}
x_1 = \frac{\textit{sum}_2 - \sqrt{2 \times \textit{squaredSum}_2 - \textit{sum}_2^2}}{2} \
x_2 = \frac{\textit{sum}_2 + \sqrt{2 \times \textit{squaredSum}_2 - \textit{sum}_2^2}}{2}
\end{cases}
$$

#### Implementation

<iframe src="https://leetcode.com/playground/37ESBePE/shared" frameBorder="0" width="100%" height="344" name="37ESBePE"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

---