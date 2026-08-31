# Official Solution

**Link:** [https://leetcode.com/problems/largest-plus-sign/solution/](https://leetcode.com/problems/largest-plus-sign/solution/)

---

[TOC]

### Approach #1: Brute Force [Time Limit Exceeded]

**Intuition and Algorithm**

For each possible center, find the largest plus sign that could be placed by repeatedly expanding it.
We expect this algorithm to be $$O(N^3)$$, and so take roughly $$500^3 = (1.25) * 10^8$$ operations.  This is a little bit too big for us to expect it to run in time.

<iframe src="https://leetcode.com/playground/SHU2mAAJ/shared" frameBorder="0" width="100%" height="412" name="SHU2mAAJ"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^3)$$, as we perform two outer loops ($$O(N^2)$$), plus the inner loop involving `k` is $$O(N)$$.

* Space Complexity: $$O(\text{mines.length})$$.

---

### Approach #2: Dynamic Programming [Accepted]

**Intuition**

How can we improve our bruteforce?  One way is to try to speed up the inner loop involving `k`, the order of the candidate plus sign.
If we knew the longest possible arm length $$L_u, L_l, L_d, L_r$$ in each direction from a center, we could know the order $$\min(L_u, L_l, L_d, L_r)$$ of a plus sign at that center.  We could find these lengths separately using dynamic programming.

**Algorithm**

For each (cardinal) direction, and for each coordinate `(r, c)` let's compute the `count` of that coordinate: the longest line of `'1'`s starting from `(r, c)` and going in that direction.
With dynamic programming, it is either 0 if `grid[r][c]` is zero, else it is `1` plus the count of the coordinate in the same direction.
For example, if the direction is left and we have a row like `01110110`, the corresponding count values are `01230120`, and the integers are either 1 more than their successor, or 0.
For each square, we want `dp[r][c]` to end up being the minimum of the 4 possible counts.  At the end, we take the maximum value in `dp`.

<iframe src="https://leetcode.com/playground/WJcZbPFJ/shared" frameBorder="0" width="100%" height="500" name="WJcZbPFJ"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2)$$, as the work we do under two nested for loops is $$O(1)$$.

* Space Complexity: $$O(N^2)$$, the size of `dp`.