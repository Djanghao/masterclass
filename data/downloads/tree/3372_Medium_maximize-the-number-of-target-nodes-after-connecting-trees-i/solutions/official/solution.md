# Official Solution

**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solution/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solution/)

---

[TOC]

## Solution

--- 

### Approach: Depth-First Search

#### Intuition

According to the problem statement, for the $i$-th query, when we connect the $i$-th node of the first tree to a node $j$ of the second tree, the distances from node $i$ to nodes in the second tree decrease, so more target nodes become reachable.

We must therefore compute:

* $\textit{count}_1[i]$: the number of nodes in the **first** tree within distance $\le k$ of node $i$;
* $\textit{count}_2[j]$: the number of nodes in the **second** tree within distance $\le k-1$ of node $j$.

Because $\textit{count}_2[j]$ does not depend on the specific query, we can pre-compute it with a depth-first search (DFS) on the second tree. Afterward, we take the maximum value over all $j$, denoted $\textit{maxCount}_2 = \max_j \textit{count}_2[j]$.

For each query $i$, we run a DFS on the first tree to obtain $\textit{count}_1[i]$ and then return

$$
\textit{count}_1[i] + \textit{maxCount}_2
$$

as the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/JsYZMG3p/shared" frameBorder="0" width="100%" height="500" name="JsYZMG3p"></iframe>

#### Complexity Analysis

Let $n$ and $m$ be the numbers of nodes in the undirected trees defined by $\textit{edges}_1$ and $\textit{edges}_2$, respectively.

- Time complexity: $O(n^2 + m^2)$.
  
  We run a depth-first search (DFS) starting from every node in each tree, and each DFS visits all nodes of its tree.

- Space complexity: $O(n + m)$.
  
  We use two auxiliary arrays - one for each tree.