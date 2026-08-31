# BFS (beats 100.00%)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6089734/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6089734/)

---

# Approach
This solution uses a breadth-first search (BFS) algorithm.

- The adjacency list is used to store the roads and the BFS is used to update the depth of cities when a new road is added. 
- The depth array represents the shortest path from city 0 to each city, and it is updated in a way that reflects the new road connections introduced by the queries.

- The outer loop iterates over the number of queries, and the inner loop iteratesover the number of nodes in the graph. 
- In each iteration, the new road is added to the adjacency list, and if the depth of the end city is greater than the depth of the start city + 1, the depth of the end city is updated and the BFS is performed from the end city.

# Complexity
- Time complexity:
$$O(n + m)$$, where n is the number of cities and m is the number of queries. This is because the BFS is only being performed m times. Each BFS operation is called when a new road is added between a start and end city, and it takes O(n) time to update the depth of each node. 

- Space complexity:
$$O(n)$$, where n is the number of cities. The adjacency list and depth_array use O(n) space.

# Code
```python3 []
class Solution:
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        adj_list = [[] for _ in range(n)]
        # depth of each node
        depth_array = [i for i in range(n)]

        # initially, there is a unidirectional road from city i to city i + 1
        for i in range(n - 1):
            adj_list[i].append(i + 1)

        result = []
        for start, end in queries:
            # add the new road from city start to city end
            adj_list[start].append(end)
            if depth_array[end] > depth_array[start] + 1:
                # update the depth of city end
                depth_array[end] = depth_array[start] + 1
                # perform BFS from city end
                self.bfs(end, adj_list, depth_array)
            # append the length of the shortest path
            result.append(depth_array[-1])

        return result
    
    def bfs(self, node, adj_list, depth_array):
        """
        Performs a breadth-first search (BFS) starting at the given node to update
        the shortest path lengths in the depth_array.
        """
        queue = deque([node])
        while queue:
            current_node = queue.popleft()
            # Explore all neighbors of the current node
            for neighbor in adj_list[current_node]:
                # Update the depth if a shorter path is found
                if depth_array[neighbor] > depth_array[current_node] + 1:
                    depth_array[neighbor] = depth_array[current_node] + 1
                    queue.append(neighbor)
```
``` javascript []
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const adjList = Array.from({ length: n }, () => []);
    const depthArray = Array.from({ length: n }, (_, i) => i);
    const result = [];

    for (let i = 0; i < n - 1; i++) {
        adjList[i].push(i + 1);
    }

    for (const [start, end] of queries) {
        adjList[start].push(end);

        if (depthArray[end] > depthArray[start] + 1) {
            depthArray[end] = depthArray[start] + 1;
            bfs(end, adjList, depthArray);
        }

        result.push(depthArray[n - 1]);
    }

    return result;
};

function bfs(node, adjList, depthArray) {
    const queue = [node];

    while (queue.length) {
        const current = queue.shift();

        for (const neighbor of adjList[current]) {
            if (depthArray[neighbor] > depthArray[current] + 1) {
                depthArray[neighbor] = depthArray[current] + 1;
                queue.push(neighbor);
            }
        }
    }
}
```
``` php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function shortestDistanceAfterQueries($n, $queries) {
        $adj_list = array_fill(0, $n, []);
        $depth_array = range(0, $n - 1);

        for ($i = 0; $i < $n - 1; $i++) {
            $adj_list[$i][] = $i + 1;
        }

        $result = [];
        foreach ($queries as $query) {
            $start = $query[0];
            $end = $query[1];

            $adj_list[$start][] = $end;
            if ($depth_array[$end] > $depth_array[$start] + 1) {
                $depth_array[$end] = $depth_array[$start] + 1;
                $this->bfs($end, $adj_list, $depth_array);
            }

            $result[] = $depth_array[$n - 1];
        }

        return $result;
    }

    private function bfs(int $node, array &$adj_list, array &$depth_array): void {
        $queue = new SplQueue();
        $queue->enqueue($node);

        while (!$queue->isEmpty()) {
            $current_node = $queue->dequeue();
            foreach ($adj_list[$current_node] as $neighbor) {
                if ($depth_array[$neighbor] > $depth_array[$current_node] + 1) {
                    $depth_array[$neighbor] = $depth_array[$current_node] + 1;
                    $queue->enqueue($neighbor);
                }
            }
        }
    }
}
```