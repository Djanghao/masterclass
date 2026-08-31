# Optimizing Shortest Paths in Weighted Graphs with Dijkstra's Algorithm (TC: O((E + V) log V))

**Author:** dev-shahadat
**Votes:** 4
**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solutions/5710232/](https://leetcode.com/problems/modify-graph-edge-weights/solutions/5710232/)

---

# Intuition
You are given an undirected weighted graph with `n` nodes. Some edges have fixed positive weights, while others have a weight of `-1`, indicating that their weights can be adjusted. The goal is to modify the `-1` edges by assigning them positive integer values such that the shortest path between two specific nodes (source and destination) equals a given target distance. If this is not possible, return an empty array. The adjusted weights must be between $$1$$ and $$2*10^9$$).

# Approach
This problem can be seen as a variation of the shortest path problem, with the added complexity of adjusting certain edge weights to achieve a specific target shortest path length. Here's a step-by-step breakdown of the intuition:

### **1. Initial Shortest Path Calculation**
- **Objective**: First, determine the shortest path between the source and destination nodes in the current graph configuration, treating all `-1` edges as if they had a minimal weight of 1.
- **Why?**: This gives us a baseline shortest path to understand whether the target is achievable. If the shortest path calculated in this step is less than the target, it\u2019s impossible to adjust the weights to meet the target because increasing weights will only increase the path length. If the shortest path is exactly the target, no modifications are needed.

### **2. Handling Different Scenarios**
- **If the Initial Shortest Path is Less than the Target**: 
  - This means the shortest possible path in the graph is already shorter than the target. Since we can only increase weights, it's impossible to reach the target distance. Therefore, return an empty array indicating that no valid solution exists.
  
- **If the Initial Shortest Path Equals the Target**: 
  - If the shortest path exactly matches the target distance with `-1` edges treated as having a weight of 1, the problem is essentially solved. Any `-1` edges that are not part of this path can be assigned any large value (like \\(2 \	imes 10^9\\)), as they do not affect the shortest path.

- **If the Initial Shortest Path Exceeds the Target**: 
  - If the shortest path exceeds the target, there is potential to modify the `-1` edges to decrease the path length. We adjust these edges iteratively, ensuring that the path length moves closer to the target without overshooting it.

### **3. Adjusting the `-1` Edges**
- **Iterative Adjustment**: 
  - In the second phase, Dijkstra's algorithm is run again, this time allowing for adjustments to the `-1` edges. Initially, these edges are assigned the smallest possible positive weight (1). As the algorithm progresses, if the current shortest path is still longer than the target, the algorithm checks whether increasing the weight of certain `-1` edges can bring the path closer to the target distance.
  
- **Ensuring Validity**: 
  - The key challenge is to ensure that any adjustments made do not cause the shortest path to fall below the target. This requires careful tracking of the distances and edge weights as the algorithm processes the nodes.

### **4. Final Check**
- **Final Path Verification**: 
  - After adjusting the weights, the algorithm checks the final shortest path. If it equals the target, the modified edge list is returned. If not, return an empty array.

### **5. Handling Edge Cases**
- **Disconnected Graphs**: The problem guarantees a connected graph, so we don\u2019t need to handle this case separately.
- **Multiple Valid Solutions**: The approach is designed to find any one valid solution. It stops as soon as a valid configuration is found, even though multiple solutions might exist.

# Complexity
## Time complexity:
1. **Dijkstra's Algorithm:**
   - The Dijkstra's algorithm runs twice:
     1. **First Run:** 
        - The initial run with all `-1` weights set to `1` involves processing all nodes and edges.
        - The priority queue operations (insertions and deletions) take \\(O(\\log V)\\), where \\(V\\) is the number of vertices (or nodes).
        - In the worst case, every edge is processed once, so the overall time complexity for the first run is \\(O((E + V) \\log V)\\), where \\(E\\) is the number of edges.
     2. **Second Run:** 
        - The second run of Dijkstra's algorithm involves updating the `-1` weights and can be slightly more costly due to potential additional operations during weight adjustments.
        - The time complexity remains \\(O((E + V) \\log V)\\), but with a larger constant factor due to the additional operations.

2. **Edge Weight Adjustments:**
   - Each edge with a `-1` weight is processed and adjusted individually, leading to a potential additional \\(O(E)\\) complexity.
   
Combining these:

- **Total Time Complexity:** \\(O((E + V) \\log V)\\), considering both runs of Dijkstra's algorithm and edge adjustments.

## Space Complexity

1. **Graph Representation:**
   - The graph is represented using an adjacency list, which takes \\(O(E + V)\\) space.
   - The `distances` array, storing distances for two runs, takes \\(O(2V) = O(V)\\) space.

2. **Priority Queue:**
   - The priority queue holds up to \\(V\\) nodes at any point, resulting in a space complexity of \\(O(V)\\).

3. **Edge List:**
   - The list of edges, with possibly updated weights, takes \\(O(E)\\) space.

- **Total Space Complexity:** \\(O(E + V)\\). 

Overall, the space complexity is primarily determined by the storage requirements of the graph and the priority queue, while the time complexity is governed by the Dijkstra's algorithm operations

# Code
```ruby []
# @param {Integer} n
# @param {Integer[][]} edges
# @param {Integer} source
# @param {Integer} destination
# @param {Integer} target
# @return {Integer[][]}
class PriorityQueue
  def initialize
    @elements = []
  end

  def enqueue(element, priority)
    @elements << { element: element, priority: priority }
    @elements.sort_by! { |e| e[:priority] }
  end

  def dequeue
    @elements.shift
  end

  def is_empty?
    @elements.empty?
  end
end

def modified_graph_edges(n, edges, source, destination, target)
  # Step 1: Build the adjacency list
  adjacency_list = Array.new(n) { [] }
  edges.each_with_index do |(nodeA, nodeB, _), i|
    adjacency_list[nodeA] << [nodeB, i]
    adjacency_list[nodeB] << [nodeA, i]
  end

  # Step 2: Initialize distances array with [Infinity, Infinity] for each node
  distances = Array.new(n) { [Float::INFINITY, Float::INFINITY] }
  distances[source] = [0, 0]

  # Step 3: Run Dijkstra's algorithm with all -1 weights set to 1
  run_dijkstra(adjacency_list, edges, distances, source, 0, 0)

  # Calculate the difference between target and initial shortest path
  difference = target - distances[destination][0]
  return [] if difference < 0

  # Step 4: Run Dijkstra's again, adjusting weights where necessary
  run_dijkstra(adjacency_list, edges, distances, source, difference, 1)
  return [] if distances[destination][1] < target

  # Step 5: Assign remaining -1 weights to 1 if needed
  edges.each do |edge|
    edge[2] = 1 if edge[2] == -1
  end

  edges
end

def run_dijkstra(adjacency_list, edges, distances, source, difference, run)
  pq = PriorityQueue.new
  pq.enqueue(source, 0)
  distances[source][run] = 0

  until pq.is_empty?
    current = pq.dequeue
    current_node = current[:element]
    current_distance = current[:priority]

    next if current_distance > distances[current_node][run]

    adjacency_list[current_node].each do |(next_node, edge_index)|
      weight = edges[edge_index][2]
      weight = 1 if weight == -1

      # Adjust the -1 edge weight to minimize the shortest path difference
      if run == 1 && edges[edge_index][2] == -1
        new_weight = difference + distances[next_node][0] - distances[current_node][1]
        if new_weight > weight
          edges[edge_index][2] = weight = new_weight
        end
      end

      # Relaxation step
      if distances[next_node][run] > distances[current_node][run] + weight
        distances[next_node][run] = distances[current_node][run] + weight
        pq.enqueue(next_node, distances[next_node][run])
      end
    end
  end
end

```
```javascript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
class CustomPriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

function modifiedGraphEdges(n, edges, source, destination, target) {
    // Step 1: Build the graph as an adjacency list
    const adjacencyList = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const [nodeA, nodeB] = edges[i];
        adjacencyList[nodeA].push([nodeB, i]);
        adjacencyList[nodeB].push([nodeA, i]);
    }

    // Step 2: Initialize distances array with [Infinity, Infinity] for each node
    const distances = Array.from({ length: n }, () => [Infinity, Infinity]);
    distances[source] = [0, 0];

    // Step 3: Run Dijkstra's algorithm with all -1 weights set to 1
    runDijkstra(adjacencyList, edges, distances, source, 0, 0);

    // Calculate the difference between target and initial shortest path
    const difference = target - distances[destination][0];
    if (difference < 0) return [];

    // Step 4: Run Dijkstra's again, adjusting weights where necessary
    runDijkstra(adjacencyList, edges, distances, source, difference, 1);
    if (distances[destination][1] < target) return [];

    // Step 5: Assign remaining -1 weights to 1 if needed
    for (const edge of edges) {
        if (edge[2] === -1) edge[2] = 1;
    }

    return edges;
}

// Function to run Dijkstra's algorithm
function runDijkstra(adjacencyList, edges, distances, source, difference, run) {
    const pq = new CustomPriorityQueue();
    pq.enqueue(source, 0);
    distances[source][run] = 0;

    while (!pq.isEmpty()) {
        const { element: currentNode, priority: currentDistance } = pq.dequeue();

        if (currentDistance > distances[currentNode][run]) continue;

        for (const [nextNode, edgeIndex] of adjacencyList[currentNode]) {
            let weight = edges[edgeIndex][2];
            if (weight === -1) weight = 1;

            // Adjust the -1 edge weight to minimize the shortest path difference
            if (run === 1 && edges[edgeIndex][2] === -1) {
                const newWeight = difference + distances[nextNode][0] - distances[currentNode][1];
                if (newWeight > weight) {
                    edges[edgeIndex][2] = weight = newWeight;
                }
            }

            // Relaxation step
            if (distances[nextNode][run] > distances[currentNode][run] + weight) {
                distances[nextNode][run] = distances[currentNode][run] + weight;
                pq.enqueue(nextNode, distances[nextNode][run]);
            }
        }
    }
}
```

## **Detailed Code Explanation**
- **Priority Queue Implementation**: This class implements a priority queue using an array. The `enqueue` method adds elements based on priority (which is the distance in this case), and the `dequeue` method removes the element with the highest priority (smallest distance).

- **Adjacency List Construction**: The graph is stored as an adjacency list, where each node points to its neighboring nodes along with the corresponding edge index. This makes it easy to look up and modify edge weights during the algorithm's execution.

- **Distances Array**: This array stores the shortest path distances from the source node. It has two entries for each node: one for the initial run of Dijkstra (without adjusting `-1` edges) and one for the second run (with adjusted weights).

- **Dijkstra's Algorithm**:
  - **Initial Run**: The first run of Dijkstra's algorithm is performed with all `-1` edges set to a weight of 1. This helps establish the baseline shortest path.
  - **Difference Calculation**: The difference between the target and this initial shortest path is calculated. If this difference is negative, it means the shortest path is already shorter than the target, making it impossible to reach the target.
  - **Second Run with Adjustments**: In the second run, the algorithm adjusts the `-1` edges. If the shortest path exceeds the target, it attempts to increase the weight of these edges so that the shortest path matches the target.

- **Final Adjustment and Return**: After adjusting the weights, if the shortest path equals the target, the modified edge list is returned. Otherwise, an empty array is returned.

## **Conclusion**
This solution combines Dijkstra's algorithm with an iterative adjustment of edge weights to achieve a specific target shortest path in a graph. The approach carefully balances the need to find the shortest path while dynamically adjusting the graph to meet the target, ensuring that the solution is both efficient and correct.