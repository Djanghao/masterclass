# Official Solution

**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solution/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solution/)

---

[TOC]

## Solution

---

### Approach: Brute-force Enumeration

#### Intuition

According to the problem statement, the task is to find the longest subsequence of characters that appears at least $k$ times and is lexicographically largest. Therefore, the characters that make up this subsequence must appear at least $k$ times in $s$. Characters that appear fewer than $k$ times in $s$ can be filtered out directly.

Let the length of $s$ be $n$. We only consider characters in $s$ that appear at least $k$ times. The longest valid subsequence can only be composed of these characters, and their count cannot exceed $\left\lfloor \dfrac{n}{k} \right\rfloor$. Since the problem states that $n < 8k$, the length of the longest valid subsequence must be at most $7$, and the number of qualifying characters is also at most $7$. Therefore, the number of candidate subsequences does not exceed $2^7 = 128$, making it feasible to use brute-force enumeration to find the correct answer.

We start by counting the frequency of each character to identify those that meet the required threshold. Then, we enumerate all possible permutations formed from any combination of these characters. For each such permutation $\textit{permutation}_i$, we check whether it appears in $s$ at least $k$ times. Among all valid permutations, we return the one with the maximum length and the greatest lexicographical order.

To generate all permutations, we can use a queue. Each time, we pop the current valid subsequence $\textit{curr}$ from the queue and attempt to append a valid character $c$ to form a new string $\textit{next}$. If $\textit{next}$ appears in $s$ at least $k$ times, we push it into the queue to continue expanding it. By enumerating characters in reverse lexicographical order (from largest to smallest), we ensure that the largest lexicographical string is generated first. This allows us to return the longest and lexicographically largest valid subsequence efficiently.

#### Implementation

<iframe src="https://leetcode.com/playground/DmwxQ3yf/shared" frameBorder="0" width="100%" height="500" name="DmwxQ3yf"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given string, and let $k$ be the given number.

- Time complexity: $O(n \cdot {\lfloor \dfrac{n}{k} \rfloor}!)$.
  
  According to the analysis, the length of the subsequence does not exceed $m = \lfloor \frac{n}{k} \rfloor$. At this point, there are $i!$ combinations of strings of length $i$, so the total number of possible string combinations is

$$S = \sum_{i=1}^{m} \binom{m}{i} \cdot i! = \sum_{i=1}^{m} \frac{m!}{i! \cdot (m-i)!} \cdot i! = \sum_{i=1}^{m} \frac{m!}{(m-i)!} = m! \sum_{i=1}^{m} \frac{1}{(m-i)!}.$$

  Therefore, there are at most $2m!$ candidate subsequences. After generating the candidate subsequences, it still takes $O(n)$ time to match and check them, so the total time complexity is $O(n \cdot \lfloor \frac{n}{k} \rfloor!)$.

- Space complexity: $O(\lfloor \dfrac{n}{k} \rfloor!)$.

  There can be at most $\lfloor \dfrac{n}{k} \rfloor!$ candidate subsequences, and at most $\lfloor \dfrac{n}{k} \rfloor!$ elements can exist in the queue. Thus, the space complexity is $O(\lfloor \dfrac{n}{k} \rfloor!)$.