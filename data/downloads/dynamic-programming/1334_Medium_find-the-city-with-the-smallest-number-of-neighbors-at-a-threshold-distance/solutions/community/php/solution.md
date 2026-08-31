# Floyd-Warshall algorithm (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5537354/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5537354/)

---

# Approach
The approach of this solution is to use Floyd-Warshall algorithm. The algorithm works by iteratively improving the estimates of the shortest paths between cities.

1. In the findTheCity method, the grid is initialized with the distances between cities obtained from the buildGrid method. 
2. Then, for each intermediate city, the algorithm updates the distances between cities by considering all possible paths that go through the intermediate city. 
- This is done by iterating over all pairs of cities (i, j) and updating the distance grid[i][j] to be the minimum of the current distance and the sum of the distances grid[i][via] + grid[via][j].
3. After updating the distances for all intermediate cities, the algorithm counts the number of cities that are within the given distance threshold. 
4. The city with the minimum number of cities within the threshold is returned as the answer.

The buildGrid method initializes the grid with the distances between cities obtained from the given edges. The distances are set to the weights of the edges between cities.

# Complexity
- Time complexity:
$$O(n^3)$$, $where n is the number of nodes in the graph. This is because the solution performs a nested loop over all pairs of nodes.

- Space complexity:
$$O(n^2)$$, where n is the number of nodes in the graph. This is because the solution uses a 2D grid to store the distances between nodes.

# Code
``` python3 []
class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        grid = self.buildGrid(n, edges)
        # Calculate all pairs shortest paths using Floyd-Warshall algorithm
        for intermediate_city in range(n):
            for i in range(n):
                for j in range(n):
                    grid[i][j] = min(grid[i][j], grid[i][intermediate_city] + grid[intermediate_city][j])
        # Find the city with the smallest number of neighbors
        poss_index = 0
        final_count = float('inf')
        for i in range(n):
            count = 0
            for j in range(n):
                if grid[i][j] != 0 and grid[i][j] <= distanceThreshold:
                    count += 1
            if count <= final_count:
                final_count = count
                poss_index = i
        return poss_index

    def buildGrid(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        """
        Builds a grid representation of the graph, where grid[i][j] represents the distance
        between nodes i and j.
        """
        # Initialize the grid with infinite distances between all nodes
        grid = [[float('inf')] * n for _ in range(n)]

        # Set the distance between each node and itself to 0
        for i in range(n):
            grid[i][i] = 0

        # Set the distances between nodes based on the edges
        for edge in edges:
            src, target, weight = edge
            grid[src][target] = weight
            grid[target][src] = weight

        return grid
```
``` javascript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    let grid = buildGrid(n, edges);
    // Calculate all pairs shortest paths using Floyd-Warshall algorithm
    for (let intermediate_city = 0; intermediate_city < n; intermediate_city++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                grid[i][j] = Math.min(grid[i][j], grid[i][intermediate_city] + grid[intermediate_city][j]);
            }
        }
    }
    // Find the city with the smallest number of neighbors
    let poss_index = 0;
    let final_count = Number.POSITIVE_INFINITY;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0 && grid[i][j] <= distanceThreshold) {
                count++;
            }
        }
        if (count <= final_count) {
            final_count = count;
            poss_index = i;
        }
    }
    return poss_index;
};

var buildGrid = function(n, edges) {
    /**
    * Builds a grid representation of the graph, where grid[i][j] represents the distance
    * between nodes i and j.
    */
    // Initialize the grid with infinite distances between all nodes
    let grid = Array(n).fill().map(() => Array(n).fill(Number.POSITIVE_INFINITY));

    // Set the distance between each node and itself to 0
    for (let i = 0; i < n; i++) {
        grid[i][i] = 0;
    }

    // Set the distances between nodes based on the edges
    for (let edge of edges) {
        let [src, target, weight] = edge;
        grid[src][target] = weight;
        grid[target][src] = weight;
    }

    return grid;
}
```
``` php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @param Integer $distanceThreshold
     * @return Integer
     */
    function findTheCity($n, $edges, $distanceThreshold) {
        $grid = $this->buildGrid($n, $edges);
        // Calculate all pairs shortest paths using Floyd-Warshall algorithm
        for ($intermediate_city = 0; $intermediate_city < $n; $intermediate_city++) {
            for ($i = 0; $i < $n; $i++) {
                for ($j = 0; $j < $n; $j++) {
                    $grid[$i][$j] = min($grid[$i][$j], $grid[$i][$intermediate_city] + $grid[$intermediate_city][$j]);
                }
            }
        }
        // Find the city with the smallest number of neighbors
        $poss_index = 0;
        $final_count = PHP_INT_MAX;
        for ($i = 0; $i < $n; $i++) {
            $count = 0;
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] !== 0 && $grid[$i][$j] <= $distanceThreshold) {
                    $count++;
                }
            }
            if ($count <= $final_count) {
                $final_count = $count;
                $poss_index = $i;
            }
        }
        return $poss_index;
    }

    function buildGrid($n, $edges) {
        /**
         * Builds a grid representation of the graph, where grid[$i][$j] represents the distance
         * between nodes $i and $j.
         */
        // Initialize the grid with infinite distances between all nodes
        $grid = array_fill(0, $n, array_fill(0, $n, PHP_INT_MAX));

        // Set the distance between each node and itself to 0
        for ($i = 0; $i < $n; $i++) {
            $grid[$i][$i] = 0;
        }

        // Set the distances between nodes based on the edges
        foreach ($edges as $edge) {
            list($src, $target, $weight) = $edge;
            $grid[$src][$target] = $weight;
            $grid[$target][$src] = $weight;
        }

        return $grid;
    }
}
```