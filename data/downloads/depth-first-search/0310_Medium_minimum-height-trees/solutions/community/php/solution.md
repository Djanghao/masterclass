# Solution in PHP

**Author:** mukhila
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/5062866/](https://leetcode.com/problems/minimum-height-trees/solutions/5062866/)

---


# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findMinHeightTrees($n, $edges) {
        if ($n <= 1) {
        return [0];
    }

    // Construct the adjacency list representation of the graph
    $adjList = [];
    foreach ($edges as $edge) {
        $adjList[$edge[0]][] = $edge[1];
        $adjList[$edge[1]][] = $edge[0];
    }

    // Initialize an array to keep track of the degree of each node
    $degrees = array_fill(0, $n, 0);

    // Initialize a queue for BFS traversal
    $queue = new SplQueue();

    // Initialize the queue with leaf nodes (nodes with degree 1)
    foreach ($adjList as $node => $neighbors) {
        $degrees[$node] = count($neighbors);
        if ($degrees[$node] == 1) {
            $queue->enqueue($node);
        }
    }

    // Perform BFS traversal to find the minimum height trees
    while ($n > 2) {
        $size = $queue->count(); // Number of leaf nodes at this level

        for ($i = 0; $i < $size; $i++) {
            $leaf = $queue->dequeue(); // Dequeue a leaf node
            $n--; // Decrement the total number of nodes

            foreach ($adjList[$leaf] as $neighbor) {
                // Reduce the degree of each neighbor and enqueue if it becomes a leaf node
                if (--$degrees[$neighbor] == 1) {
                    $queue->enqueue($neighbor);
                }
            }
        }
    }

    // Return the remaining nodes in the queue as minimum height trees
    $result = [];
    while (!$queue->isEmpty()) {
        $result[] = $queue->dequeue();
    }

    return $result;
    }
}
```