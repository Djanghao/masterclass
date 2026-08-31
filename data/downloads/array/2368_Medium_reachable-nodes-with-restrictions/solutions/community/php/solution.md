# Graph + Depth-First Search approach (Beats 100% runtime)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/4582807/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/4582807/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Build the graph and then use DFS (in this example) or BFS to traverse all child nodes (except restricted). Returns the number of children you have visited. I use a "seen" array to avoid visiting the same node twice.

I converted the "restricted" array to a "restrictedMap" to avoid the linear search for a specific node.
# Complexity
- Time complexity: O(V+E)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private $graph = [];
    private $seen = [];
    private $restrictedMap = [];
    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @param Integer[] $restricted
     * @return Integer
     */
    function reachableNodes($n, $edges, $restricted) {
        $this->graph = array_fill(0, $n, []);
        foreach($edges as $edge) {
            $this->graph[$edge[0]][] = $edge[1];
            $this->graph[$edge[1]][] = $edge[0];
        }

        $this->restrictedMap = [];
        foreach($restricted as $node) {
            $this->restrictedMap[$node] = true;
        }

        $this->seen = [0];
        return $this->getCountAllowedNodes(0);
    }

    private function getCountAllowedNodes(int $node, int $count = 1): int
    {
        $children = $this->graph[$node];
        foreach($children as $child) {
            if (!isset($this->seen[$child]) && !isset($this->restrictedMap[$child])) {
                $count++;
                $this->seen[$child] = true;
                $count = $this->getCountAllowedNodes($child, $count);
            }
        }

        return $count;
    }
}
```