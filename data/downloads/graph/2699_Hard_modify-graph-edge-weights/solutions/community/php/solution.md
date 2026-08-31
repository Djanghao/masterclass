# ✨ Solution with Explanation Beats 100% | PHP 🐘

**Author:** mohamed_amin_hajbi
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solutions/5709272/](https://leetcode.com/problems/modify-graph-edge-weights/solutions/5709272/)

---

# Intuition
The problem involves modifying certain edges in a graph to ensure that the shortest path from a source node to a destination node matches a specific target distance. My initial thought was to use Dijkstra's algorithm, as it is well-suited for finding the shortest paths in graphs with non-negative weights. The challenge is to adjust the edges with a weight of -1 such that the total path length equals the target.

# Approach
**1. Graph Representation:**

- The graph is represented using an adjacency list for efficient traversal and edge management.

**2. First Dijkstra's Run:**

- Run Dijkstra's algorithm to compute the shortest path from the source to all nodes, treating -1 weights as a minimal positive weight (e.g., 1). This helps in establishing the baseline shortest path distance.
- If the computed shortest path from the source to the destination is greater than the target, return an empty array as it is impossible to adjust the graph to meet the target.

**3. Second Dijkstra's Run:**

- Execute Dijkstra's algorithm a second time to adjust the weights of -1 edges to precisely match the target distance. This adjustment is done dynamically based on the computed distances.

**4. Edge Modification:**
- After the second run, if the adjusted shortest path matches the target distance, return the modified edge list. If not, return an empty array.

# Complexity
- **Time complexity:**
    - The time complexity is **O((E+V)logV)**, where **E** is the number of edges and **V** is the number of vertices. This complexity results from running Dijkstra's algorithm twice.


- **Space complexity:**
    - The space complexity is **O(V+E)**, which includes the storage for the adjacency list and distance arrays.

# Code
```php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @param Integer $source
     * @param Integer $destination
     * @param Integer $target
     * @return Integer[][]
     */
    function modifiedGraphEdges($n, $edges, $source, $destination, $target) {
        $adjacencyList = array_fill(0, $n, []);

        for ($i = 0; $i < $n; $i++) {
            $adjacencyList[$i] = [];
        }

        for ($i = 0; $i < count($edges); $i++) {
            $nodeA = $edges[$i][0];
            $nodeB = $edges[$i][1];
            $adjacencyList[$nodeA][] = [$nodeB, $i];
            $adjacencyList[$nodeB][] = [$nodeA, $i];
        }

        $distances = array_fill(0, $n, [PHP_INT_MAX, PHP_INT_MAX]);
        $distances[$source] = [0, 0];

        $this->runDijkstra($adjacencyList, $edges, $distances, $source, 0, 0);
        $difference = $target - $distances[$destination][0];
        if ($difference < 0) return [];

        $this->runDijkstra($adjacencyList, $edges, $distances, $source, $difference, 1);
        if ($distances[$destination][1] < $target) return [];

        foreach ($edges as &$edge) {
            if ($edge[2] == -1) $edge[2] = 1;
        }
        return $edges;
    }

    private function runDijkstra($adjacencyList, &$edges, &$distances, $source, $difference, $run) {
        $n = count($adjacencyList);
        $priorityQueue = new SplPriorityQueue();
        $priorityQueue->setExtractFlags(SplPriorityQueue::EXTR_BOTH);
        $priorityQueue->insert([$source, 0], 0);

        while (!$priorityQueue->isEmpty()) {
            $current = $priorityQueue->extract();
            $currentNode = $current['data'][0];
            $currentDistance = $current['data'][1];

            if ($currentDistance > $distances[$currentNode][$run]) continue;

            foreach ($adjacencyList[$currentNode] as $neighbor) {
                $nextNode = $neighbor[0];
                $edgeIndex = $neighbor[1];
                $weight = $edges[$edgeIndex][2];

                if ($weight == -1) $weight = 1; // Initially consider -1 as 1

                if ($run == 1 && $edges[$edgeIndex][2] == -1) {
                    $newWeight = $difference + $distances[$nextNode][0] - $distances[$currentNode][1];
                    if ($newWeight > $weight) {
                        $edges[$edgeIndex][2] = $weight = $newWeight;
                    }
                }

                if ($distances[$nextNode][$run] > $distances[$currentNode][$run] + $weight) {
                    $distances[$nextNode][$run] = $distances[$currentNode][$run] + $weight;
                    $priorityQueue->insert([$nextNode, $distances[$nextNode][$run]], -$distances[$nextNode][$run]);
                }
            }
        }
    }
}

```
