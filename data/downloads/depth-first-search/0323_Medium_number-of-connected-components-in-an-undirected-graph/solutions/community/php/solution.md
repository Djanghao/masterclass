# Graph + DFS approach, Beats 100% runtime (with explanation)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/4577298/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/4577298/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can build graph and iterate over all nodes using Depth-First Search algoritm.
# Approach
<!-- Describe your approach to solving the problem. -->
Build a graph. Iterate through each node and its next nodes and put them in a "seen" array, so if a node has connections to all nodes in the graph, so then we visit all nodes in the graph during first iteration, but if we find that some node is not visited (checking for "seen" array), so we increment the counter and check next nodes of this node and put them in the "seen" array.
# Complexity
- Time complexity: O(n+e)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private $seen = [];
    private $count = 0;
    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer
     */
    function countComponents($n, $edges) {
        $graph = array_fill(0, $n, []);
        
        foreach($edges as $edge) {
            $graph[$edge[0]][] = $edge[1];
            $graph[$edge[1]][] = $edge[0];
        }

        foreach($graph as $node => $value) {
            if (!isset($this->seen[$node])) {
                $this->seen[$node] = true;
                $this->count += 1;
                $this->dfs($node, $graph);
            }
        }

        return $this->count;
    }

    private function dfs(int $node, array $graph) {
        foreach($graph[$node] as $next) {
            if (!isset($this->seen[$next])) {
                $this->seen[$next] = true;
                $this->dfs($next, $graph);
            }
        }
    }
}
```