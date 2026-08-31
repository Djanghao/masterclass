# O(n) Solution

**Author:** XenMars
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5083370/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5083370/)

---

# Intuition
To solve the problem of calculating the sum of distances from each node to all other nodes in an undirected connected tree with `n` nodes, we can utilize a two-pass method leveraging depth-first search (DFS). This approach is efficient and avoids the naive solution's excessive complexity, which would be computationally prohibitive given the problem's constraints.

# Approach
1. **Understand the Problem:**
You need the sum of distances from each node to every other node in the tree.
2. **Key Observations:**
The problem can be solved using dynamic programming on trees and involves decomposing the problem using subtree sizes and subtree distance sums.
3. **Steps to Solve:**
- Step 1: Calculate the number of nodes (`count[u]`) and the sum of distances from a node u to all nodes in its subtree (`dist[u]`) for every node `u`. This can be done using a DFS.
- Step 2: Using the results from Step 1, compute the answer for all nodes by propagating the distances using another DFS.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of nodes. Each node is visited exactly twice across the two DFS traversals.

- Space complexity:
$$O(n)$$, required for storing the adjacency list, recursive call stack during DFS, and auxiliary arrays for counts, distances, and answers.

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer[]
     */
    private $adj = [];
    private $count = [];
    private $dist = [];
    private $answer = [];
    
    function sumOfDistancesInTree($n, $edges) {
        $this->adj = array_fill(0, $n, []);
        $this->count = array_fill(0, $n, 0);
        $this->dist = array_fill(0, $n, 0);
        $this->answer = array_fill(0, $n, 0);
        
        foreach ($edges as $edge) {
            $this->adj[$edge[0]][] = $edge[1];
            $this->adj[$edge[1]][] = $edge[0];
        }
        
        $this->dfs1(0, -1);
        $this->dfs2(0, -1);
        
        return $this->answer;
    }
    
    private function dfs1($node, $parent) {
        $this->count[$node] = 1;
        foreach ($this->adj[$node] as $child) {
            if ($child === $parent) continue;
            $this->dfs1($child, $node);
            $this->count[$node] += $this->count[$child];
            $this->dist[$node] += $this->dist[$child] + $this->count[$child];
        }
    }
    
    private function dfs2($node, $parent) {
        if ($parent != -1) {
            $this->answer[$node] = $this->answer[$parent] - $this->count[$node] + (count($this->count) - $this->count[$node]);
        } else {
            $this->answer[$node] = $this->dist[$node];
        }
        
        foreach ($this->adj[$node] as $child) {
            if ($child === $parent) continue;
            $this->dfs2($child, $node);
        }
    }
}
```