# Number of Operations to Make Network Connected - 100%

**Author:** luckyvyapari
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330757/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330757/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $connections
     * @return Integer
     */
function makeConnected($n, $connections) {
    // If the number of connections is less than n-1, it's impossible to connect all computers
    if (count($connections) < $n-1) {
        return -1;
    }
    
    $graph = array_fill(0, $n, []);
    // Create an adjacency list representation of the graph
    foreach ($connections as $conn) {
        $graph[$conn[0]][] = $conn[1];
        $graph[$conn[1]][] = $conn[0];
    }
    
    $visited = array_fill(0, $n, false);
    $numComponents = 0;
    // Traverse the graph using DFS to count the number of connected components
    for ($i = 0; $i < $n; $i++) {
        if (!$visited[$i]) {
            $this->dfs($graph, $visited, $i);
            $numComponents++;
        }
    }
    
    // The minimum number of cables needed is equal to the number of connected components - 1
    return $numComponents - 1;
}

function dfs(&$graph, &$visited, $node) {
    $visited[$node] = true;
    foreach ($graph[$node] as $neighbor) {
        if (!$visited[$neighbor]) {
            $this->dfs($graph, $visited, $neighbor);
        }
    }
}

/*



Explanation:
The problem requires us to connect all computers in the network, which can be modeled as finding the number of connected components in an undirected graph. We can represent the graph as an adjacency list using an array in PHP, where each element in the array is an array of its neighbors.

To count the number of connected components, we traverse the graph using depth-first search (DFS) and mark each visited node as we go. Every time we start a new DFS traversal from an unvisited node, we know that we've found a new connected component, so we increment a counter.

Finally, we return the number of connected components - 1, which represents the minimum number of cables needed to connect all computers.

Note that we first check if the number of connections is at least n-1, since this is a necessary condition for connecting all computers. If there are fewer connections than this, it's impossible to connect all computers and we return -1.
*/





}
```