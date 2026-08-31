# [Python3, Java, C++] Simple DFS O(n ^ 2)

**Author:** tojuna
**Votes:** 153
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/1821935/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/1821935/)

---

**Explanation**:
* DFS on each node `x`
* For every node `ch` that is found after node `x` in dfs, add `x` as parent of `ch`

**Steps**:
* Record the direct children of each node in a graph. Can be implemented using nested vectors or hashmap of lists.
* Run DFS for each node in graph
* For every subsequent node that is found after dfs starting from x, add x as parent of subsequent node in ans

*If dfs from x is like:*

```
                       x
					  /  \\
					 3    5
					 |    | \\
					 1    8  0 
					
```
*x is added as parent for 3, 5, 1, 8, 0*

<iframe src="https://leetcode.com/playground/JQFvFjdu/shared" frameBorder="0" width="750" height="400"></iframe>