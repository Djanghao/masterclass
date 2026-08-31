# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solution/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solution/)

---

### Approach: Greedy

#### Intuition

First, if the $\textit{gcd}$ of all numbers in $\textit{nums}$ is greater than 1, then it is impossible to make all elements in the array equal to 1.
Second, if there is already a 1 in $\textit{nums}$, we can perform operations between that 1 and its adjacent non-1 numbers, requiring at most $n - \textit{num}_1$ operations, where $\textit{num}_1$ represents the number of 1s in $\textit{nums}$.

If neither of the above cases applies, we find the smallest interval where the $\textit{gcd}$ of all numbers in the interval equals 1. Suppose the length of this interval is $\textit{minLen}$. Then, the number of operations required to obtain a 1 from these numbers is $\textit{minLen} - 1$. After obtaining a 1, the number of operations required to convert the remaining elements into 1s using this 1 is $\textit{n} - 1$. Therefore, the total number of operations needed is $\textit{minLen} + n - 2$.

We can enumerate all intervals in order of increasing interval length and calculate their $\textit{gcd}$ sequentially.

#### Implementation

<iframe src="https://leetcode.com/playground/6SvQiR4J/shared" frameBorder="0" width="100%" height="500" name="6SvQiR4J"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$ and $M$ be the maximum value in $\textit{nums}$.

- Time complexity: $O(n^2\log M)$.
  
  Enumerating all intervals requires $O(n^2)$, and computing the $\textit{gcd}$ takes $O(\log M)$ time.

- Space complexity: $O(1)$.
  
  Only a few additional variables are needed.

---