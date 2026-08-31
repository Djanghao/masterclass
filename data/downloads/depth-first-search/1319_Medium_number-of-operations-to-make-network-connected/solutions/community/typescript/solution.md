# TypeScript: Depth-First Search

**Author:** reharri7
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330623/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330623/)

---

# Intuition
We need to find the minimum number of connections to connect all the computers; which is always the number of computers - 1.

We can do this by traversing through the graph in a depth-first order. Each time we start a new depth-first search, that means we have found a computer that was not connected to the previous searches.

# Approach
We start by checking to make sure there are enough connections to connect all the computers we have; which is always the number of computers - 1.

Then, we create a Set<number> to store any value we have already visited. We create a Map to store our graph of existing connections.

Since we are looking for the least amount of connections needed, we instantiate a variable of unconnectedComputers to 0.

We traverse the graph in depth-first order, and every time we do a new search, we increment the number of `unconnectedComputer`

Finally, return the amount of `unconnectedComputer - 1`.

# Complexity
- Time complexity: O(connections + computers)

- Space complexity: O(connections + computers)

# Code
```
function makeConnected(n: number, connections: number[][]): number {
    // Not enough connections possible
    // to connect all computers
    if(n - 1 > connections.length) {
        return -1;
    }
    // Instantiate visited nodes and graph
    const visited = new Set<number>();
    const graph = new Map<number, number[]>();

    // Fill the graph
    for(let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for(const [source, destination] of connections) {
        graph.get(source).push(destination);
        graph.get(destination).push(source);
    }

    // We are looking for the least amount needed
    let unconnectedComputer = 0;

    // Traverse the graph. Each time through the loop
    // We have found a computer that needs connecting
    for(let i = 0; i < n; i++) {
        if(!visited.has(i)) {
            dfs(i, graph, visited);
            unconnectedComputer++;
        }
    }

    // We need 1 less connection than computer
    return unconnectedComputer - 1;
};

function dfs(node: number, graph: Map<number, number[]>, visited: Set<number>) {
    visited.add(node);
    for(const adjacent of graph.get(node)) {
        if(!visited.has(adjacent)) {
            dfs(adjacent, graph, visited);
        }
    }
}
```