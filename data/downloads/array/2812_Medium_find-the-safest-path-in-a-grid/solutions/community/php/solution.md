# Maximizing safeness factor in a binary grid using BFS and Binary Search

**Author:** D4NP
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5162547/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5162547/)

---

# Intuition
The problem asks us to find the maximum safeness factor in a grid that consists of "lands" (represented by 1's) and 
"water" (represented by 0's). The term "safeness factor" here represents the furthest distance a piece of land is from 
water. At first look, we might think of solving this problem using a Breadth-First Search (BFS) approach as it allows us to 
explore the grid from a particular piece of land to all immediate pieces of water in the shortest amount of steps.

# Approach
Given the grid, we first initialize a distance array that keeps track of the shortest distances from every land square 
to a water square. These distances are calculated using a BFS approach.

1. Initialize an empty queue and a 2D distance array with the size of the grid.
2. Add all land squares to the queue.
3. Start a BFS from all lands, pop a square from the queue, and:
    - For each of its neighboring squares (up, down, left, right):
        - If it's within the grid's boundary and its distance value in dist[][] is greater than the current square's 
          distance plus one:
            - Update its distance to be the current square's distance plus one.
            - Add it to the queue.
4. At this point, we have an array (distanceArray) representing the shortest distances from each land square to water 
   squares.

Next, as we want the maximum amongst the shortest distances, we conduct a binary search in range [0, 2*totalGrids]. 
The binary search can help us optimize the finding of the maximum distance over these shortest paths.

# Complexity
- Time complexity:

The time complexity is O(n^2 log n), where n is each side's length of the grid. The BFS process costs O(n^2). It explores each item of the grid once. Inside the binary search, we execute the BFS log n times, multiplying the time complexity.

- Space complexity:

The space complexity is O(n^2), this is primarily due to the space required for storing the grid and the distanceArray. Here, we have a boolean 'visitTrack' array of size (n*n) to keep track of which cells have been visited during BFS. We also have a max heap queue storing the cells during BFS, in the worst case it may end up storing all the grid cells leading to a space complexity of O(n^2).

# Code
```php
class Solution {
    /**
     * @param Integer[][] $grids
     * @return Integer
     */
    function maximumSafenessFactor(array $grids): int {
        $output = 0;
        try {
            // Total number of grids.
            $totalGrids = count($grids);

            // Represents all four directional up, down, left and right.
            $directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

            $distanceArray = [];
            for ($gridRow = 0; $gridRow < $totalGrids; ++$gridRow) {
                for ($gridColumn = 0; $gridColumn < $totalGrids; ++$gridColumn) {
                    $distanceArray[$gridRow][$gridColumn] = $grids[$gridRow][$gridColumn] ? 0 : PHP_INT_MAX;
                }
            }

            // Queue to hold the grids.
            $queue = new SplQueue();
            for ($gridRow = 0; $gridRow < $totalGrids; ++$gridRow) {
                for ($gridColumn = 0; $gridColumn < $totalGrids; ++$gridColumn) {
                    if ($grids[$gridRow][$gridColumn]) {
                        $queue->push([$gridRow, $gridColumn]);
                    }
                }
            }

            // Calculate the shortest distance from land to water.
            while (!$queue->isEmpty()) {
                list($row, $column) = $queue->dequeue();
                foreach ($directions as $direction) {
                    $neighbourRow = $row + $direction[0];
                    $neighbourColumn = $column + $direction[1];
                    if ($neighbourRow >= 0 && $neighbourRow < $totalGrids && $neighbourColumn >= 0 && $neighbourColumn < $totalGrids) {
                        if ($distanceArray[$neighbourRow][$neighbourColumn] > $distanceArray[$row][$column] + 1) {
                            $distanceArray[$neighbourRow][$neighbourColumn] = $distanceArray[$row][$column] + 1;
                            $queue->push([$neighbourRow, $neighbourColumn]);
                        }
                    }
                }
            }

            // Binary search to find maximum distance.
            $low = 0;
            $high = 2 * $totalGrids;
            while ($low <= $high) {
                $mid = $low + intdiv($high - $low, 2);
                if ($distanceArray[0][0] < $mid) {
                    $high = $mid - 1;
                    continue;
                }

                // Two dimensional array for tracking visited nodes.
                $visitTrack = [];
                for ($gridRow = 0; $gridRow < $totalGrids; ++$gridRow) {
                    for ($gridColumn = 0; $gridColumn < $totalGrids; ++$gridColumn) {
                        $visitTrack[$gridRow][$gridColumn] = false;
                    }
                }

                // Adding reachable nodes into the queue and checking end condition.
                $queue = new SplQueue();
                $queue->push([$distanceArray[0][0], 0, 0]);
                $visitTrack[0][0] = true;
                while (!$queue->isEmpty()) {
                    list($distance, $row, $column) = $queue->dequeue();
                    if ($row == $totalGrids - 1 && $column == $totalGrids - 1) {
                        $low = $mid + 1;
                        continue 2;
                    }
                    foreach ($directions as $direction) {
                        $neighbourRow = $row + $direction[0];
                        $neighbourColumn = $column + $direction[1];
                        if ($neighbourRow >= 0 && $neighbourRow < $totalGrids && $neighbourColumn >= 0 && $neighbourColumn < $totalGrids && !$visitTrack[$neighbourRow][$neighbourColumn] && $distanceArray[$neighbourRow][$neighbourColumn] >= $mid) {
                            $visitTrack[$neighbourRow][$neighbourColumn] = true;
                            $queue->push([$distanceArray[$neighbourRow][$neighbourColumn], $neighbourRow, $neighbourColumn]);
                        }
                    }
                }
                $high = $mid - 1;
            }

            // Resultant maximum safeness factor for the grids.
            $output = $high;
        } catch (Throwable $exception) {
            print_r("Caught exception:  {$exception->getMessage()} \
");
        }
        return $output;
    }
}
```