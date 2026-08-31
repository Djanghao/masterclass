# Official Solution

**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solution/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Digital Dynamic Programming

#### Intuition

The question requires us to find the number of positive integers within a given range whose suffix is $s$.

Since the range of the interval is very large, the brute-force approach of enumerating numbers one by one would not only exceed the time limit but also perform many unnecessary computations. In fact, we can fix the suffix $s$, and only consider how many prefixes can be combined with it to form numbers within a certain range. This satisfies the conditions for applying digit $\textit{dp}$.

The function $\text{dfs}(i,\textit{limitLow},\textit{limitHigh})$ represents the number of valid numbers that can be formed starting from the $i$-th digit, and:

- $\textit{limitLow}$ indicates whether the current value is constrained by $\textit{start}$. If it is $\textit{true}$, it means that the first $i-1$ digits are the same as $\textit{start}$, and the range of digits that can be filled in the $i$-th position is $[\textit{start}[i],9]$. If the current position is constrained and $\textit{start}[i]$ is filled in, then the next position is still constrained. Denote this digit as $\textit{lo}$.
- $\textit{limitHigh}$ is similar to the $\textit{limitLow}$, indicating whether the current state is constrained by $\textit{finish}$. If it is $\textit{true}$, it means that the first $i-1$ digits are the same as $\textit{finish}$. The range of digits that can be filled in the $i$th position is $[0,\min(\textit{finish}[i],\textit{limit})]$. Denote this digit as $\textit{hi}$.
- If the $i$-th digit is not constrained, it can be filled with any digit in $[0,\textit{limit}]$. Note that each digit must not exceed $\textit{limit}$, as required by the problem.

We use recursive enumeration for the digits filled in the $i$th position, so the transfer equations for the prefix and suffix parts are as follows, where $|s|$ denotes the length of $s$:

$$
\text{dfs}(i,\textit{limitLow},\textit{limitHigh}) =
\begin{cases}
1, & i = n \\
\sum\limits_{d=\textit{lo}}^{\min(\textit{hi}, \textit{limit})} \text{dfs}(i+1,\textit{limitLow} \land (d =\textit{lo}),\textit{limitHigh} \land (d = \textit{hi})), & i < n-|s| \\
\text{dfs}(i+1,\textit{limitLow} \land (d = \textit{lo}),\textit{limitHigh} \land (d = \textit{hi})), & i \geq n-|s|, d = s[i - (n-|s|)]
\end{cases}
$$

At first, we start from $\text{dfs}(0,\textit{true},\textit{true})$, indicating that we start from the highest position and are constrained by $\textit{start}$ and $\textit{finish}$. According to the description, we can fill in any number that meets the constraints in the prefix part, but each digit in the suffix part is fixed.

After enumerating the digits that can be filled in for the $i$-th digit, the subsequent digits will not change the result, so we can use a memoization method to avoid redundant calculations. Note that for states constrained by $\textit{limitLow}$ or $\textit{limitHigh}$, they will only be traversed once. This is because if the current position is constrained, then all the preceding positions are also constrained, which results in only one case. Therefore, we only need to memorize the unconstrained states.

#### Implementation

<iframe src="https://leetcode.com/playground/RgvbYR7J/shared" frameBorder="0" width="100%" height="500" name="RgvbYR7J"></iframe>

#### Complexity Analysis

- Time complexity: $O(\log (\textit{finish})\times 10)$.

We enumerate the numbers we can fill in for each digit, the length of the number of digits is $\log (\textit{finish})$, and there is only $[0,9]$ with a total of $10$ digits.

- Space complexity: $O(\log (\textit{finish}))$.

We need an array with the same length as the number of digits to memoize the result of each digit.

### Approach 2: Combinatorial mathematics

#### Intuition

We can implement a counting function $\textit{calculate}(x)$ to directly calculate the numbers less than or equal to $x$ that satisfy $\textit{limit}$, and then the answer is $\textit{calculate}(\textit{finish})-\textit{calculate}(\textit{start}-1)$.

Firstly, consider the suffix part of $x$ that has the same length as $s$ (if the length of $x$ is less than $s$, then the answer is $0$). If the suffix of $x$ is greater than or equal to $s$, then the suffix part contributes $1$ to the answer.

Next, consider the remaining prefix part. Let $\textit{preLen}$ represent the length of the prefix, that is, $|x|-|s|$. For each digit $x[i]$ of the prefix:

- If it exceeds $\textit{limit}$, it means that the current digit can only reach up to $\textit{limit}$, and the number formed by any combination of the remaining digits will not exceed $x$. Therefore, including the $i$-th bit, all the following bits (a total of $\textit{preLen}-i$ bits) can take values from $[0,\textit{limit}]$ (a total of $\textit{limit}+1$ numbers), and their contribution to the answer is $(\textit{limit}+1)^{\textit{preLen}-i}$.
- If $x[i]$ does not exceed $\textit{limit}$, then the current digit can take at most $x[i]$, and all the following digits can take $[0,\textit{limit}]$, contributing to the answer as $x[i]\times(\textit{limit}+1)^{\textit{preLen}-i-1}$.

#### Implementation

<iframe src="https://leetcode.com/playground/kwgxD4dg/shared" frameBorder="0" width="100%" height="500" name="kwgxD4dg"></iframe>

#### Complexity Analysis

- Time complexity: $O(\log(\textit{finish}))$.

Traverse each digit of $\textit{finish}$ to accumulate the combination numbers.

- Space complexity: $O(\log(\textit{finish}))$.

We need an array of the same digit length to store the suffixes.