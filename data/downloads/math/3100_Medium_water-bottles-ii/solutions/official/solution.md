# Official Solution

**Link:** [https://leetcode.com/problems/water-bottles-ii/solution/](https://leetcode.com/problems/water-bottles-ii/solution/)

---

### Approach 1: Simulation

#### Intuition

We need to determine the total number of bottles of water that can be consumed, given that every $\textit{numExchange}$ empty bottles can be exchanged for a full one, and that this exchange rate increases by one after each trade.

We can simulate the process directly based on the problem description. As long as the number of empty bottles $\textit{empty} \geq \textit{numExchange}$, we can exchange them for one bottle of water. After consuming this new bottle, the total number of empty bottles decreases by $\textit{numExchange} - 1$ (since one new empty bottle is added back).

#### Implementation

<iframe src="https://leetcode.com/playground/GNMT6sMc/shared" frameBorder="0" width="100%" height="259" name="GNMT6sMc"></iframe>

#### Complexity Analysis

Let $\textit{numBottles}=n$ and $\textit{numExchange}=k$.

- Time complexity: $O(\sqrt{n})$.
  
  Let $t$ be the number of times we exchange empty bottles for water. Then, the total amount reduced from $\textit{empty}$ after the first $t$ exchanges is $S(t)=\sum\limits^{t-1}_{i=0}(k+i-1)=t(k-1)+\frac{t(t-1)}{2}$. Since $S(t)\leq n$, substituting into the above formula and simplifying gives $t^2+(2 \cdot k-3)t-2 \cdot n\leq 0$, therefore the upper bound of $t$ is $O(\sqrt{n})$.

- Space complexity: $O(1)$.
  
  Only a few additional variables were used.

### Approach 2: Mathematics

#### Intuition

By analyzing the time complexity in Approach 1, we can derive the result directly using an equation-based approach.

Let the number of times empty bottles are exchanged for water be $t$, the total number of exchanged empty bottles be $\textit{empty}$, and the total number of generated empty bottles be $\textit{total}$. Then, it holds that $\textit{empty} \leq \textit{total}$. We need to find the largest $t$ that satisfies the inequality.

Consider $\textit{empty}$. Since the number of empty bottles required for each exchange increases by 1, we have
$\textit{empty}=\sum\limits_{i=0}^{t-1}(\textit{numExchange}+i)$.

Using the arithmetic series formula, we get
$\textit{empty}=t \cdot \textit{numExchange} + t (t - 1) / 2$.

The total number of empty bottles generated is $\textit{total} = \textit{numBottles} + t$.
Substituting into the inequality gives
$t \cdot \textit{numExchange} + t (t - 1) / 2 - (\textit{numBottles} + t) \leq 0$.
We can then solve for $t$ using the quadratic formula.

#### Implementation

<iframe src="https://leetcode.com/playground/nrk7B5h2/shared" frameBorder="0" width="100%" height="276" name="nrk7B5h2"></iframe>

#### Complexity Analysis

- Time complexity: $O(1)$.
  
  The result is directly calculated.

- Space complexity: $O(1)$.
  
  Only a few additional variables were used.

---