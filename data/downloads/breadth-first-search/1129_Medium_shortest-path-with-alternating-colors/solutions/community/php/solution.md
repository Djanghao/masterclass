# BFS approach, beats 100% runtime (20ms)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/4605320/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/4605320/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we need to find the shortest path, then BFS is a good choice.
# Approach
<!-- Describe your approach to solving the problem. -->
- Build a graph where each node has 2 subarrays of edges for each color.
- Traversal of the graph starting from node 0 using BFS.
- Track steps for new nodes.
- Track the color of the current node to select the correct next color.
- Saving the visited node and its color in "seen" array.

# Complexity
- Time complexity: O(n + e)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + e)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    /**
     * @param Integer $n
     * @param Integer[][] $redEdges
     * @param Integer[][] $blueEdges
     * @return Integer[]
     */
    function shortestAlternatingPaths($n, $redEdges, $blueEdges) {
        $graph = array_fill(0, $n, ["red" => [], "blue" => []]);
        foreach($redEdges as $edge) {
            $graph[$edge[0]]['red'][] = $edge[1];
        }

        foreach($blueEdges as $edge) {
            $graph[$edge[0]]['blue'][] = $edge[1];
        }

        $ans = array_fill(0, $n, PHP_INT_MAX);

        $queue = new SplQueue();
        $queue[] = [0, 0, 'red'];
        $queue[] = [0, 0, 'blue'];
        $seen = [];

        while(!$queue->isEmpty()) {
            $node = $queue->dequeue(); 
            $nodeNumber = $node[0];
            $steps = $node[1];
            $prevColor = $node[2];
            $seen[$nodeNumber . '-' . $prevColor] = true;
            $ans[$nodeNumber] = min($ans[$nodeNumber], $steps);

            if ($prevColor === 'red') {
                $queue = $this->addChildrenToQueueByColor($nodeNumber, $graph, $steps, 'blue', $queue, $seen);
            } else {
                $queue = $this->addChildrenToQueueByColor($nodeNumber, $graph, $steps, 'red', $queue, $seen);
            }
        }

        foreach($ans as $i => $val) {
            if ($val === PHP_INT_MAX) {
                $ans[$i] = -1;
            }
        }

        return $ans;
    }

    private function addChildrenToQueueByColor(
        int $nodeNumber, 
        array $graph, 
        int $steps, 
        string $color, 
        SplQueue $queue,
        array $seen
        ): SplQueue
    {
        foreach($graph[$nodeNumber][$color] as $next) {
            if (isset($seen[$next . '-' . $color])) {
                continue;
            }

            $queue[] = [$next, $steps + 1, $color];
        }

        return $queue;
    }
}

```