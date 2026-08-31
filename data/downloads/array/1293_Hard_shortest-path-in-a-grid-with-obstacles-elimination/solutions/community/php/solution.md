# BFS approach, simple solution (Beats 100% runtime) with explanations

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4597339/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4597339/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since we need to find the shortest path so we can use the BFS algorithm, but since we have the ability to cross obstacles K times, it looks like we also need to keep track of the number of K for each possible direction, and sometimes we will have to visit the same cell twice (Although we store visited cells in a "seen" array to avoid looping). because the first path is stuck as K becomes 0, but the second path (longer) still has quotas greater than 0 and can go in that direction.

I recommend drawing a table on pieces of paper and trying to go through the maze with different options and then the solution will come to your mind on its own
# Approach
<!-- Describe your approach to solving the problem. -->
Use the BFS algorithm to traverse the grid.
Store visited nodes in a "seen" array.
Check the possible direction for each node.
If the direction is valid, put it in the queue.
If it is also necessary to keep track of K for each path, if you have a cell already visited but with a smaller K, then you can visit that point again if the new move has a larger K.
If the cell contains an obstacle, reduce K for that path.
# Complexity
- Time complexity: O(N * K) in the worst case, we can visit each node k times.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N * K) in the worst case, our queue can have N nodes with K quotes.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @param Integer $k
     * @return Integer
     */
    function shortestPath($grid, $k) {
        $queue = new SplQueue();
        //row, col, steps, k
        $queue[] = [0, 0, 0, $k];
        //we need to track visited nodes to avoid cycling
        $seen[0 . '-' . 0] = $k;
        //possible directions
        $directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
        $rowsCount = count($grid);
        $colsCount = count($grid[0]);

        while(!$queue->isEmpty()) {
            $node = $queue->dequeue();
            $steps = $node[2];

            //check if current node is target
            if ($node[0] === $rowsCount - 1 && $node[1] === $colsCount - 1) {
                return $steps;
            }

            //check each direction
            foreach($directions as $dir) {
                $nextR = $node[0] + $dir[0];
                $nextC = $node[1] + $dir[1];
                $k = $node[3];

                if (!isset($grid[$nextR][$nextC])) {
                    continue;
                }

                //if we have already visited some node, but k was less than now
                //then we can give this path a second chance
                if (isset($seen[$nextR . '-' . $nextC]) && $k <= $seen[$nextR . '-' . $nextC]) {
                    continue;
                }

                if ($grid[$nextR][$nextC] === 1 && $k === 0) {
                    continue;
                }

                if ($grid[$nextR][$nextC] === 1) {
                    $k -= 1;
                }

                $queue[] = [$nextR, $nextC, $steps + 1, $k];
                $seen[$nextR . '-' . $nextC] = $k;
            }
        }

        return -1;
    }
}
```