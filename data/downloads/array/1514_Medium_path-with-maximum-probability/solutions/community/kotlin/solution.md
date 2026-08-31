# ✅ Best Solution in Kotlin | Beats 100% ✅📈🔥

**Author:** Malaia
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/5699657/](https://leetcode.com/problems/path-with-maximum-probability/solutions/5699657/)

---

# Approach
1. **Graph Representation:**
    - We'll represent the graph as an adjacency list, where each node points to a list of its neighboring nodes along with the edge success probability.
2. **Priority Queue:**
    - We'll use a max heap (priority queue) to always expand the node with the highest probability first. The queue will store pairs of (current probability, node).
3. **Algorithm:**
    - Initialize a probability array to keep track of the maximum probability of reaching each node. Set the probability of the start node to 1 (100%).
    - Push the start node into the priority queue with a probability of 1.
    - While the queue is not empty, pop the top element (node with the highest probability). If this node is the end node, return its probability.
    - Otherwise, for each neighboring node, calculate the new probability by multiplying the current probability with the edge probability. If this new probability is greater than the recorded probability for the neighbor, update it and push the neighbor into the queue.
    - If the queue is empty and we haven't reached the end node, return 0 as there's no path.
4. **Edge Cases:**
    - If there is no path between the start and end nodes, return 0.

# Complexity
![image.png](./images/0.png)


# Code
```kotlin []
class Solution {
    fun maxProbability(n: Int, edges: Array<IntArray>, succProb: DoubleArray, start_node: Int, end_node: Int): Double {start_node
        // Graph representation
        val graph = Array<MutableList<Pair<Int, Double>>>(n) { mutableListOf() }
        
        // Building the graph
        for (i in edges.indices) {
            val (a, b) = edges[i]
            graph[a].add(Pair(b, succProb[i]))
            graph[b].add(Pair(a, succProb[i]))
        }
        
        // Probability array to store max probabilities to reach each node
        val probabilities = DoubleArray(n) { 0.0 }
        probabilities[start_node] = 1.0
        
        // Priority queue to explore the most probable path first (max heap)
        val pq = PriorityQueue<Pair<Double, Int>>(compareByDescending { it.first })
        pq.add(Pair(1.0, start_node))
        
        while (pq.isNotEmpty()) {
            val (currentProb, currentNode) = pq.poll()
            
            // If we reached the end node
            if (currentNode == end_node) {
                return currentProb
            }
            
            // Explore neighbors
            for ((neighbor, prob) in graph[currentNode]) {
                val newProb = currentProb * prob
                if (newProb > probabilities[neighbor]) {
                    probabilities[neighbor] = newProb
                    pq.add(Pair(newProb, neighbor))
                }
            }
        }
        
        // If there's no path from start to end
        return 0.0
    }
}
```