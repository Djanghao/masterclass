# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/5977103/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/5977103/)

---

# Intuition
Finding the best route through a graph, maximizing the quality of the path while staying within a specified travel time. Each node has a value that contributes to the total quality, and the goal is to visit nodes strategically to collect the highest possible quality without exceeding the time limit.

# Approach
Use a backtracking technique to explore all possible paths from the starting node, keeping track of the current travel time and quality, and updating the maximum quality whenever you return to the starting node.

# Complexity
- Time complexity:
O(2^N), where N is the number of nodes, because each node can either be included in a path or not, creating many combinations.

- Space complexity:
O(N), due to the storage required for the recursive call stack and tracking visited nodes.

# Code
```typescript []
// Define a type for the graph node structure
type TGraphNode = {
    aNodes: number[]; // Array of connected nodes
    aTimes: number[];  // Array of times to reach connected nodes
};

/**
 * Builds a graph represented as an array of nodes from given edges.
 * @param {number} n - The number of nodes in the graph.
 * @param {[number, number, number?][]} edges - An array of edges, where each edge is defined by [u, v, t].
 * @returns {TGraphNode[]} - An array of graph nodes where each node contains its connections and travel times.
 */
function buildGraph(n: number, edges: [number, number, number?][]): TGraphNode[] {
    // Initialize the nodes array
    const nodes: TGraphNode[] = [];
    for (let i = 0; i < n; i++) {
        nodes.push({ aNodes: [], aTimes: [] });
    }

    // Loop through each edge to build the graph
    const m = edges.length;
    for (let i = 0; i < m; i++) {
        const [u, v, t] = edges[i]; // Destructure the edge
        nodes[u].aNodes.push(v);   // Add node v to u's adjacency list
        nodes[u].aTimes.push(t!);   // Add travel time to u's adjacency list (using '!' for undefined)
        nodes[v].aNodes.push(u);   // Add node u to v's adjacency list
        nodes[v].aTimes.push(t!);   // Add travel time to v's adjacency list (using '!' for undefined)
    }

    return nodes; // Return the constructed graph
}

// Array to track the number of times each node is visited
const curUseds = new Uint8Array(1000);

/**
 * Calculates the maximum path quality of a graph within a given time limit.
 * @param {number[]} values - An array of values associated with each node.
 * @param {[number, number, number][]} edges - An array of edges representing connections and their travel times.
 * @param {number} maxTime - The maximum allowed time for a path.
 * @returns {number} - The maximum quality of a valid path.
 */
var maximalPathQuality = function (values: number[], edges: [number, number, number][], maxTime: number): number {
    const n = values.length; // Number of nodes
    const g = buildGraph(n, edges); // Build the graph

    let curTime = 0; // Current travel time
    let curQual = 0; // Current path quality
    let res = 0; // Resulting maximum quality
    curUseds.fill(0, 0, n); // Reset usage tracker

    // Backtracking function to explore paths
    function bt(u: number) {
        if (!curUseds[u]) curQual += values[u]; // Add value if it's the first visit
        ++curUseds[u]; // Increment visit count

        if (u === 0) res = Math.max(res, curQual); // Update result if back at start

        const { aNodes, aTimes } = g[u]; // Get neighbors and travel times

        // Explore all connected nodes
        for (let i = 0; i < aNodes.length; ++i) {
            if (aTimes[i] + curTime <= maxTime) { // Check if the path is within time limit
                curTime += aTimes[i]; // Update current time
                bt(aNodes[i]); // Recur for the next node
                curTime -= aTimes[i]; // Backtrack time
            }
        }

        --curUseds[u]; // Decrement visit count
        if (!curUseds[u]) curQual -= values[u]; // Remove value if it was the last visit
    }

    bt(0); // Start backtracking from node 0
    return res; // Return the maximum quality found
};


```