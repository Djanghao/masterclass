# 🔥 🐍  BFS Bit Masking extremly simple solution Pyton, Java, Scala   🐍 🔥

**Author:** niyodilxwes
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/5892850/](https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/5892850/)

---

# Intuition
The problem requires finding the shortest path that visits all nodes in an undirected graph. This can be viewed as a variant of the Traveling Salesman Problem (TSP), where we need to visit all nodes at least once and return the minimum steps required to do so. My first thought was to use Breadth-First Search (BFS) combined with bitmasking to efficiently track the visited nodes and paths.

# Approach
1. **Bitmasking**: Since the graph is small (n \u2264 12), we can use a bitmask to represent which nodes have been visited. Each node corresponds to a bit in the bitmask. For example, if node 1 and node 3 are visited, the bitmask would be `0101` (binary representation).
   
2. **Breadth-First Search (BFS)**: We use BFS to explore all possible paths from each node. We enqueue states, where each state is represented by a tuple `(node, bitmask, cost)`:
   - `node`: the current node.
   - `bitmask`: tracks which nodes have been visited.
   - `cost`: the number of steps taken so far.

3. **Termination Condition**: The BFS terminates when the bitmask indicates that all nodes have been visited, i.e., when the bitmask equals `(1 << n) - 1` (where `n` is the number of nodes). This means all bits are set to `1`, representing that all nodes have been visited.

4. **Avoiding Repetition**: To avoid revisiting the same node with the same bitmask multiple times, we maintain a `visited` array that keeps track of whether a particular state (node, bitmask) has been encountered.

5. **Initial States**: We initialize the BFS with all nodes, each starting with only itself visited. This allows us to explore all paths in parallel, ensuring the shortest path is found.

# Complexity
- Time complexity:
  The time complexity is $$O(n \\cdot 2^n)$$, where `n` is the number of nodes. The bitmask can have `2^n` different values, and for each bitmask, we can visit up to `n` nodes, leading to `n \\cdot 2^n` possible states.

- Space complexity:
  The space complexity is $$O(n \\cdot 2^n)$$ due to the `visited` array and the queue used for BFS. We store whether each node has been visited with a particular bitmask, leading to a space usage proportional to `n \\cdot 2^n`.
# Code
```python
## Python
import collections

class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        n = len(graph)
        if n == 0 or n == 1:
            return 0  # No path needed if there's 0 or 1 node
        
        # Target bitmask when all nodes have been visited
        target = (1 << n) - 1
        
        # Queue to store (node, bitmask of visited nodes, steps taken)
        q = collections.deque()
        
        # Visited set to track if (node, bitmask) has been visited
        visited = [[False] * (1 << n) for _ in range(n)]
        
        # Initialize the queue with each node as the starting point
        for i in range(n):
            initial_mask = 1 << i  # Only the i-th node is visited initially
            q.append((i, initial_mask, 0))  # (starting node, bitmask, initial cost)
            visited[i][initial_mask] = True  # Mark the state as visited
        
        # Perform BFS
        while q:
            node, mask, cost = q.popleft()
            
            # If all nodes are visited, return the cost (steps taken)
            if mask == target:
                return cost
            
            # Explore neighbors of the current node
            for neighbor in graph[node]:
                new_mask = mask | (1 << neighbor)  # Mark the neighbor as visited in the bitmask
                
                # If this state hasn't been visited before, enqueue it
                if not visited[neighbor][new_mask]:
                    visited[neighbor][new_mask] = True
                    q.append((neighbor, new_mask, cost + 1))
        
        # If we reach here, no solution exists (though the problem guarantees one)
        return -1


```

```java
## java

import java.util.*;

class Solution {
    public int shortestPathLength(int[][] graph) {
        int n = graph.length;
        if (n == 0 || n == 1) {
            return 0;  // No path needed if there's 0 or 1 node
        }

        // Target bitmask when all nodes have been visited
        int target = (1 << n) - 1;

        // Queue to store (node, bitmask of visited nodes, steps taken)
        Queue<int[]> q = new LinkedList<>();

        // Visited set to track if (node, bitmask) has been visited
        boolean[][] visited = new boolean[n][1 << n];

        // Initialize the queue with each node as the starting point
        for (int i = 0; i < n; i++) {
            int initialMask = 1 << i;  // Only the i-th node is visited initially
            q.offer(new int[]{i, initialMask, 0});  // (starting node, bitmask, initial cost)
            visited[i][initialMask] = true;  // Mark the state as visited
        }

        // Perform BFS
        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int node = curr[0], mask = curr[1], cost = curr[2];

            // If all nodes are visited, return the cost (steps taken)
            if (mask == target) {
                return cost;
            }

            // Explore neighbors of the current node
            for (int neighbor : graph[node]) {
                int newMask = mask | (1 << neighbor);  // Mark the neighbor as visited in the bitmask

                // If this state hasn't been visited before, enqueue it
                if (!visited[neighbor][newMask]) {
                    visited[neighbor][newMask] = true;
                    q.offer(new int[]{neighbor, newMask, cost + 1});
                }
            }
        }

        // If we reach here, no solution exists (though the problem guarantees one)
        return -1;
    }
}
```


```scala []
import scala.collection.mutable

object Solution {
    def shortestPathLength(graph: Array[Array[Int]]): Int = {
        val n = graph.length
        if (n == 0 || n == 1) {
            return 0  // No path needed if there's 0 or 1 node
        }
        
        // Target bitmask when all nodes have been visited
        val target = (1 << n) - 1

        // Queue to store (node, bitmask of visited nodes, steps taken)
        val q = mutable.Queue[(Int, Int, Int)]()

        // Visited array to track if (node, bitmask) has been visited
        val visited = Array.fill(n, 1 << n)(false)
        
        // Initialize the queue with each node as the starting point
        for (i <- 0 until n) {
            val initialMask = 1 << i  // Only the i-th node is visited initially
            q.enqueue((i, initialMask, 0))  // (starting node, bitmask, initial cost)
            visited(i)(initialMask) = true  // Mark the state as visited
        }

        // Perform BFS
        while (q.nonEmpty) {
            val (node, mask, cost) = q.dequeue()

            // If all nodes are visited, return the cost (steps taken)
            if (mask == target) {
                return cost
     
