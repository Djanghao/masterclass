# PHP solution || Beats 100% at runtime and memory

**Author:** TendoRonin
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3257797/](https://leetcode.com/problems/jump-game-iv/solutions/3257797/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use a Breadth-First Search (BFS) algorithm.

# Approach
<!-- Describe your approach to solving the problem. -->
The idea behind using BFS is to consider the indices of the array as nodes in a graph and the valid jumps between indices as edges in the graph. We can start the BFS from index 0 and keep track of the minimum number of steps required to reach each index. We can terminate the BFS as soon as we reach the last index, since that will give us the minimum number of steps required to reach the end.

During the BFS, we need to consider three types of jumps: forward jumps to the next index, backward jumps to the previous index, and jumps to indices with the same value. We can use a queue to keep track of the nodes to be visited, and a visited array to avoid visiting the same node multiple times.

One optimization we can make is to pre-process the input array and create a mapping of each value to its indices. This will allow us to quickly identify the indices that can be reached by jumping to a value, without having to search the entire array every time.

# Complexity
- Time complexity: O(n + v), where n is the length of the input array `arr` and v is the number of distinct values in `arr`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + v)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function minJumps($arr) {
        $n = count($arr);
        if ($n == 1) {
            return 0;
        }
        // Create a mapping of each value to its indices
        $valueToIndices = [];
        for ($i = 0; $i < $n; $i++) {
            $value = $arr[$i];
            if (!isset($valueToIndices[$value])) {
                $valueToIndices[$value] = [];
            }
            $valueToIndices[$value][] = $i;
        }
        // Perform BFS starting from index 0
        $queue = new SplQueue();
        $queue->enqueue([0, 0]); // [index, steps]
        $visited = array_fill(0, $n, false);
        $visited[0] = true;
        while (!$queue->isEmpty()) {
            [$index, $steps] = $queue->dequeue();
            if ($index == $n - 1) {
                return $steps;
            }
            // Try jumping to the next index
            if ($index + 1 < $n && !$visited[$index + 1]) {
                $queue->enqueue([$index + 1, $steps + 1]);
                $visited[$index + 1] = true;
            }
            // Try jumping to the previous index
            if ($index - 1 >= 0 && !$visited[$index - 1]) {
                $queue->enqueue([$index - 1, $steps + 1]);
                $visited[$index - 1] = true;
            }
            // Try jumping to indices with the same value
            $value = $arr[$index];
            if (isset($valueToIndices[$value])) {
                foreach ($valueToIndices[$value] as $nextIndex) {
                    if ($nextIndex != $index && !$visited[$nextIndex]) {
                        $queue->enqueue([$nextIndex, $steps + 1]);
                        $visited[$nextIndex] = true;
                    }
                }
                unset($valueToIndices[$value]); // optimization to avoid redundant checks
            }
        }
        return -1; // unreachable
    }
}
```