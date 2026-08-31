# JS/TS Effective and Efficient Solution

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/5833319/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/5833319/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
## Time complexity: O(N)
- The time complexity of this function is O(n), where n is the number of edges in the input array. This is because the function iterates through the edges array twice, once to calculate the edge scores and once to find the node with the maximum edge score.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity: O(N)
- The space complexity of this function is O(n), where n is the number of edges in the input array. This is because the function creates an array of size n to store the edge scores for each node.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
    let inDegree = new Array(edges.length).fill(0); // Array for storing edge scores
    let node = 0;  // To track the node with the highest score

    // Calculate the edge score for each node
    for (let label = 0; label < edges.length; label++) {
        inDegree[edges[label]] += label;
    }

    // Find the node with the maximum edge score (with smallest index if tied)
    for (let label = 1; label < edges.length; label++) {
        if (inDegree[label] > inDegree[node] || (inDegree[label] === inDegree[node] && label < node)) {
            node = label;
        }
    }

    return node;
};
;
```