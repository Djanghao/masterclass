# Official Solution

**Link:** [https://leetcode.com/problems/count-number-of-trapezoids-i/solution/](https://leetcode.com/problems/count-number-of-trapezoids-i/solution/)

---

### Approach: Hash Table + Geometry Mathematics

#### Intuition

The problem asks us to find the number of horizontal trapezoids. To do this, we can count how many points lie at each height, that is, at each distinct y value. Suppose there are $p_y$ points at height $y$. Then the number of horizontal edges that can be formed at this height is $\frac{p_y (p_y - 1)}{2}$.

A horizontal trapezoid can be formed by choosing one such edge from one height and another from a different height. We count all possible combinations of these edges.

#### Implementation

<iframe src="https://leetcode.com/playground/DYvWoQde/shared" frameBorder="0" width="100%" height="500" name="DYvWoQde"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{points}$.

- Time complexity: $O(n)$.

- Space complexity: $O(n)$.