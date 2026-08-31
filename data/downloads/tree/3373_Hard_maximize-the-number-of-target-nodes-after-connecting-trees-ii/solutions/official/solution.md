# Official Solution

**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solution/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solution/)

---

[TOC]

## Solution

--- 

### Approach: Depth-First Search

#### Intuition

For the $i$-th query, after joining the two trees, the answer has two parts:

1. The number of nodes in the first tree that are an even distance from node $i$.
2. The number of nodes in the second tree that are an even distance from node $i$.

Suppose a tree contains $\textit{count}$ "target" nodes for node $u$, and node $v$ itself is a target of $u$. Then node $v$ also has exactly $\textit{count}$ target nodes.

To retrieve these counts quickly, we first color each tree with depth-first search: assign the root color 0 (white); every node at an even distance from the root also gets color 0, and every node at an odd distance gets color 1 (black). We record the total number of white and black nodes. For any node, the number of its target nodes equals the number of nodes that share its color.

This yields two arrays, $\textit{color}_1$ and $\textit{color}_2$, storing the colors of the nodes in the two trees, along with the counts of white and black nodes in each tree. Then, for the $i$-th query:

1. Look up $\textit{color}_1[i]$; the count of nodes with that color in the first tree gives the first part of the answer.
2. Regardless of how the trees are connected, node $i$ "sees" only one color in the second tree, so the second part is simply $\max(\text{white}_2,\ \text{black}_2)$.

#### Implementation

<iframe src="https://leetcode.com/playground/gypTT525/shared" frameBorder="0" width="100%" height="500" name="gypTT525"></iframe>

#### Complexity Analysis

Let $n$ and $m$ be the numbers of nodes in the undirected trees represented by $\textit{edges}_1$ and $\textit{edges}_2$, respectively.

- Time complexity: $O(n + m)$.
  
  Coloring all nodes in both trees takes $O(n + m)$ time, and each query can then be answered in $O(1)$.

- Space complexity: $O(n + m)$.
  
  Two arrays are required to store the colors of the nodes in each tree.