# JS/TS Effective Solution

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/5824908/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/5824908/)

---

# Code
```javascript []
/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    const n = edges.length;
    
    // Function to perform BFS/DFS and calculate distances
    const bfs = (start) => {
        const dist = new Array(n).fill(Infinity); // Initialize distances to infinity
        let distance = 0;
        let current = start;

        while (current !== -1 && dist[current] === Infinity) {
            dist[current] = distance++;
            current = edges[current]; // Move to the next node via the edge
        }

        return dist;
    };

    // Get distances from node1 and node2
    const dist1 = bfs(node1);
    const dist2 = bfs(node2);

    let result = -1;
    let minDistance = Infinity;

    // Compare distances for all nodes
    for (let i = 0; i < n; i++) {
        // We need to ensure that both nodes can reach the current node
        if (dist1[i] !== Infinity && dist2[i] !== Infinity) {
            // Take the maximum distance for the current node
            const maxDist = Math.max(dist1[i], dist2[i]);

            // We want to minimize the maximum distance
            if (maxDist < minDistance) {
                minDistance = maxDist;
                result = i; // Update the result to the node with the smaller maximum distance
            }
        }
    }

    return result;
};

```