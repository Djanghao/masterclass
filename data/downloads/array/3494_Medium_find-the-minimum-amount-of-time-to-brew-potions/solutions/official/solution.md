# Official Solution

**Link:** [https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/solution/](https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/solution/)

---

### Approach: Dynamic Programming

#### Intuition

The requirement is that each potion must be brewed by every wizard, and each wizard can brew only one potion at a time. Once the brewing of a potion begins, it cannot be paused midway and must be completed continuously by all wizards.

First, the brewing of the first potion begins at time $0$, so the time each wizard takes to brew it is fixed and easy to calculate. However, the starting time for subsequent potions is not immediately clear.

We may allow the brewing process of the $j$-th potion to be non-continuous (while the first $j - 1$ potions still require continuity) and let the time for the $i$-th wizard to finish brewing the $j$-th potion be $\textit{times}[i][j]$. Then we have:

$$
\textit{times}[i][j] = max(\textit{times}[i-1][j], \textit{times}[i][j-1]) + \textit{skill}[i] \times \textit{mana}[j]
$$

After one round of recursion, we obtain the completion time of the $j$-th potion, $\textit{times}[n - 1][j]$. At this point, we traverse backwards to update the completion times of the $j$-th potion for the previous wizards, eliminating the gaps introduced by the earlier allowance of discontinuous brewing.

During implementation, $\textit{times}$ can be optimized to a one-dimensional array.

#### Implementation

<iframe src="https://leetcode.com/playground/BAVPMFGj/shared" frameBorder="0" width="100%" height="429" name="BAVPMFGj"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{skill}$ and $m$ be the length of $\textit{mana}$.

- Time complexity: $O(nm)$.
  
  The dynamic programming approach requires $O(nm)$ time.

- Space complexity: $O(n)$.
  
  We use a one-dimensional array to store intermediate results.

---