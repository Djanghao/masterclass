# Official Solution

**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks-with-discounts/solution/](https://leetcode.com/problems/maximum-profit-from-trading-stocks-with-discounts/solution/)

---

### Approach: Tree Dynamic Programming

#### Intuition

This method assumes that the reader is already familiar with the ideas and solutions of the $0$-$1$ knapsack problem.

First, we prove that under the given conditions, the input must be a tree.

Because the input graph is guaranteed to be acyclic and employee $1$ is the direct or indirect superior of all employees, the graph is not only connected but also a directed acyclic graph with employee $1$ as the single source (the only node with an in-degree of $0$).

Since the graph has no self-loops ($u_i \neq v_i$) or multiple edges, and the number of edges equals the number of nodes minus one, it is straightforward to prove that the graph is a tree based on the properties of trees.

It is observed that the problem statement holds for subtrees, and the information of the current node can be derived from that of the subtree. Therefore, tree dynamic programming can be used to solve the problem.

For the current node $u$, define the state $\textit{dp}(u, \textit{state}, b)$ as follows:

1. $\textit{state} = 0$: the maximum profit of the subtree rooted at $u$ with budget $b$ when the discount is not available (that is, when the parent node is not purchased).

2. $\textit{state} = 1$: the maximum profit of the subtree rooted at $u$ with budget $b$ when the discount is available (the parent node must be purchased).

The state transition follows the idea of the $0$-$1$ knapsack problem. We divide the subtree of node $u$ into two parts: node $u$ itself and its children. We compute their contributions separately.

First, we compute the optimal profit contributed by all children of $u$ under budget $b$. To do this, we compute an auxiliary state $\textit{subProfit}(\textit{state}, b)$. Since we are solving for the optimal profit of the subtree rooted at child node $v$, here the variable $\textit{state}$ represents the **influence of the purchase state of $u$ on the transition of child node $v$**, rather than whether discounts for node $u$ are available.

1. $\textit{state} = 0$: node $u$ is not purchased. All child nodes $v$ cannot enjoy discounts and the transition uses $\textit{dp}(v, 0, \cdots)$.

2. $\textit{state} = 1$: node $u$ is purchased. All child nodes $v$ can enjoy discounts and the transition uses $\textit{dp}(v, 1, \cdots)$.

Each subtree rooted at child node $v$ is treated as an item in a knapsack. For each child $v$, we enumerate the subtree budget $\textit{sub}$ as the weight, and $\textit{dp}(v, \textit{state}, \textit{sub})$ as the value, which allows us to perform a knapsack computation.

Alternatively, each child node $v$ can be considered as a group containing the maximum obtainable value for budgets from $0$ to $\textit{sub}$. When traversing the children, we essentially perform the transition of the **grouped knapsack** problem:

$$ 
\textit{subProfit}(\textit{state}, i) = \max_{0 \le \textit{sub} \le i} \left{ \textit{subProfit}(\textit{state}, i - \textit{sub}) + \textit{dp}(v, \textit{state}, \textit{sub}) \right}
$$ 

After merging all child information, we compute $\textit{dp}(u, \textit{state}, b)$ based on whether node $u$ itself is purchased. Again, we treat node $u$ as an item in a knapsack. Note that here the variable $\textit{state}$ indicates whether the parent of $u$ must be purchased, which differs from the meaning of $\textit{state}$ in $\textit{subProfit}$.

1. Decision one: Do not purchase node $u$. Its children cannot enjoy discounts and the profit is $\textit{subProfit}(0, b)$.

2. Decision two: Purchase node $u$.

   * If $\textit{state} = 0$, discounts are not available. The profit is
     $\textit{subProfit}(1, b - \textit{present}_u) + \textit{future}_u - \textit{present}_u$.

   * If $\textit{state} = 1$, discounts are available. The profit is
     $\textit{subProfit}(1, b - \lfloor \textit{present}_u / 2 \rfloor) + \textit{future}_u - \lfloor \textit{present}_u / 2 \rfloor$.

We take the maximum of the two decisions.

Finally, $\textit{dp}(0, 0, \textit{budget})$ gives the maximum obtainable profit for the root node. Since the root has no parent, it can only choose the state where discounts are not available.

Some implementation details can reduce time and space usage.

* Since the state array $\textit{dp}$ transitions between parent and child nodes, it can be handled like a rolling array by passing it upward during recursion without storing node states globally.

* The upper bound of the subtree budget may be lower than the global budget. Increasing the subtree budget beyond this point provides no benefit. A simple upper bound estimate is the sum of present values in the subtree, which can be used to cap the search space.

#### Implementation

<iframe src="https://leetcode.com/playground/L2ghpXhu/shared" frameBorder="0" width="100%" height="500" name="L2ghpXhu"></iframe>

#### Complexity Analysis

- Time complexity: $O(n \times \textit{budget}^{2})$.
  
  Traversing all nodes takes $O(n)$, and the state transition for each node takes $O(\textit{budget}^{2})$. 

- Space complexity: $O(n \times \textit{budget})$.
  
  Storing the states for all nodes requires $O(n \times \textit{budget})$, and the traversal uses the same order of space. 

---