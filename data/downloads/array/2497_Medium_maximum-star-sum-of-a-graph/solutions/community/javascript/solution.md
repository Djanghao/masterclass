# JS/TS Iterative Solution

**Author:** giogokul13
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5844287/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5844287/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
## Time complexity:
- The time complexity of this function is O(nlogn), where n is the number of nodes in the graph. This is because we iterate through each node in the graph and sort its neighbors in descending order, which takes O(logn) time for each node
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity:
- The space complexity is O(n), where n is the number of nodes in the graph. This is because we use a map to store the adjacency list of the graph, which takes up O(n) space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
    let maxSum = -Infinity;

    let adjList = new Map();

    for (let [a, b] of edges) {
        if (!adjList.has(a)) adjList.set(a, []);
        if (!adjList.has(b)) adjList.set(b, []);

        adjList.get(a).push(vals[b]);
        adjList.get(b).push(vals[a]);
    }

    for (let i = 0; i < vals.length; i++) {
        let neighbours = adjList.get(i) || [];

        neighbours.sort((a, b) => b - a);
        let sum = vals[i];

        for (let j = 0; j < Math.min(k, neighbours.length); j++) {
            if (neighbours[j] > 0) sum += neighbours[j];
        }

        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
};
```