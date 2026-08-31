# Official Solution

**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solution/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solution/)

---

### Approach 1: Double $\text{DFS}$ to Partition Connected Components

#### Intuition

The problem asks us to remove two edges from the tree, calculate the XOR value of each of the three connected components formed, and then compute the minimum score using a given scoring method.

We begin by using depth-first search ($\text{DFS}$) to traverse the entire tree. Suppose we have traversed to node $x$. After deleting the edge between $x$ and its parent node $f$, the subtree rooted at $x$ becomes one of the three final parts. Next, we treat $f$ as the root and run another $\text{DFS}$ on the remaining part. In this remaining tree, we can try deleting another edge and obtain the resulting three parts. But how do we calculate the XOR value for each of these parts?

1. For the first part, the XOR value of the subtree rooted at $x$ can be computed during the first $\text{DFS}$.
2. For the second part, during the second $\text{DFS}$ (with $f$ as the root), we traverse down to a node $x'$. The XOR of the subtree rooted at $x'$ can also be computed while backtracking.
3. For the third part, we can simply take the XOR of the entire tree and remove the contributions from the first and second parts. This is computed as:
   $\text{Total XOR} \oplus \text{Part 1 XOR} \oplus \text{Part 2 XOR}$

Enumerate all the edge deletion plans and find the minimum score.

#### Implementation

<iframe src="https://leetcode.com/playground/o3EZXVQP/shared" frameBorder="0" width="100%" height="500" name="o3EZXVQP"></iframe>

#### Complexity analysis

Let $n$ be the number of nodes in the tree.

- Time complexity: $O(n^2)$.
  
  The initial $\text{DFS}$ runs in $O(n)$ time. Then, for each pair of nodes, we check their ancestor-descendant relationship and compute XOR values. This takes $O(n^2)$ time overall.

- Space complexity: $O(n)$.
  
  We use $O(n)$ space to store the tree structure, DFS traversal order arrays, and subtree XOR values.

---

### Approach 2: Enumerate Based on $\text{DFS}$ Order

#### Intuition

In Approach 1, we used a double $\text{DFS}$ strategy to enumerate all possible ways to partition the tree into three parts and compute the XOR of each. In Approach 2, we only need a single $\text{DFS}$. The key observation is that a preorder DFS traversal has a useful property: the subtree of any node is traversed immediately after that node itself.

We use two arrays:
- $\textit{in}[x]$ records the time when the traversal first enters node $x$.
- $\textit{out}[x]$ records the time when the entire subtree rooted at $x$ has been completely visited.

With this structure, we can determine ancestor-descendant relationships:
If node $x$ is an ancestor of node $y$, then it must satisfy $\textit{in}[x] < \textit{in}[y] < \textit{out}[x].$

We also compute an array $\textit{sum}[x]$ to store the XOR value of the entire subtree rooted at node $x$. Once we have completed this DFS and recorded all necessary information, we can simply enumerate all pairs of non-root nodes $u$ and $v$ and remove the edges between each and its parent.

Then, based on the relative position of $u$ and $v$ in the tree (i.e., ancestor-descendant or independent), we calculate the XOR values of the three resulting parts as follows:

1. If $u$ is an ancestor of $v$:

- First part: $\textit{sum}[0] \oplus \textit{sum}[u]$
- Second part: $\textit{sum}[u] \oplus \textit{sum}[v]$
- Third part: $\textit{sum}[v]$

2. If $v$ is an ancestor of $u$:

- First part: $\textit{sum}[0] \oplus \textit{sum}[v]$
- Second part: $\textit{sum}[v] \oplus \textit{sum}[u]$
- Third part: $\textit{sum}[u]$

3. If $u$ and $v$ are not ancestors of each other:

- First part: $\textit{sum}[0] \oplus \textit{sum}[u] \oplus \textit{sum}[v]$
- Second part: $\textit{sum}[u]$
- Third part: $\textit{sum}[v]$

We evaluate the score for each such division and return the minimum one.

#### Implementation

<iframe src="https://leetcode.com/playground/ZwCHac4U/shared" frameBorder="0" width="100%" height="500" name="ZwCHac4U"></iframe>

#### Complexity analysis

Let $n$ be the number of nodes in the tree.

- Time complexity: $O(n^2)$.
  
  The depth-first search ($\text{DFS}$) traversal takes $O(n)$ time. After the DFS, we enumerate all pairs of nodes, which requires $O(n^2)$ time. Therefore, the overall time complexity is $O(n^2)$.

- Space complexity: $O(n)$.
  
  We use $O(n)$ space to store the adjacency list of the graph, as well as auxiliary arrays such as `in`, `out`, and `sum` used during DFS traversal.