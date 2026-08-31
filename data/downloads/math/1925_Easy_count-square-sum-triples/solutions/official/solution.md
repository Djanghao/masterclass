# Official Solution

**Link:** [https://leetcode.com/problems/count-square-sum-triples/solution/](https://leetcode.com/problems/count-square-sum-triples/solution/)

---

### Approach: Enumeration

#### Intuition

We can enumerate integer triples $(a, b, c)$ and check whether $a^2 + b^2$ is a perfect square, and whether $\sqrt{a^2 + b^2}$ is an integer not exceeding $n$.

To determine whether $a^2 + b^2$ is a perfect square, we can compute $\left\lfloor \sqrt{a^2 + b^2} \right\rfloor^2$ and verify that it equals $a^2 + b^2$. At the same time, we must ensure that $\left\lfloor \sqrt{a^2 + b^2} \right\rfloor \le n$.

While enumerating, we maintain a counter for valid triples and increment it whenever the conditions are met. In the end, we return this count.

When computing $\left\lfloor \sqrt{a^2 + b^2} \right\rfloor$, to avoid potential floating point inaccuracies, and using the fact that the gap between consecutive perfect squares is always greater than $1$, we can safely use $\sqrt{a^2 + b^2 + 1}$ instead of $\sqrt{a^2 + b^2}$.

#### Implementation

<iframe src="https://leetcode.com/playground/3QMWd9QG/shared" frameBorder="0" width="100%" height="344" name="3QMWd9QG"></iframe>

#### Complexity Analysis

Let $n$ be the upper bound of the triplet elements.

- Time complexity: $O(n^2)$.
  
  It is the time complexity of traversing $a$ and $b$.

- Space complexity: $O(1)$.

---