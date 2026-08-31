# Easy to understand code with detailed explanation

**Author:** emmakuen
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3331840/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3331840/)

---

# Approach
The problem requires us to determine the minimum number of cables that need to be added to an existing network of computers to make all the computers connected. If this is not possible, we need to return -1.

The solution follows a simple algorithmic approach:

1. Check if the number of cables in the network is less than the minimum required to connect all the computers. If yes, return -1 since it is not possible to connect all computers.

2. Create a graph data structure from the existing network by iterating through the connections and creating an adjacency list of neighbors for each computer. Since the connections are bi-directional, we add each computer to the other computer's adjacency list.

3. Use Depth First Search (DFS) to traverse the graph and count the number of separate networks. We initialize a count variable `networkCount` to 0, and we traverse the graph starting from each unvisited computer node. For each unvisited node, we mark it as visited, then traverse its neighbors recursively using DFS. The DFS traversal will cover all the connected nodes in **a particular network**. After the traversal is complete, we increment `networkCount` to indicate that we have discovered a separate network.

4. Return `networkCount - 1` since the minimum number of cables required to connect all the computers equals the number of networks in the graph minus one. This is because each cable connects two computers, and we need to have a single network, so we need `networkCount - 1` cables to connect all the separate networks.

## JavaScript Code
```
var makeConnected = function (n, connections) {
  // If number of connections is less than required to connect all the nodes
  // then it's not possible to connect all computers
  if (connections.length < n - 1) return -1;

  // create an empty object to store the neighbors of each node
  let neighbors = {};

  // create an array to track whether each node has been visited during traversal
  let isVisited = Array(n).fill(false);

  // initialize each node's neighbors array to be empty
  for (let node = 0; node < n; node++) neighbors[node] = [];

  // Loop through each connection and add each node to the other's list of neighbors
  for (const connection of connections) {
    neighbors[connection[0]].push(connection[1]);
    neighbors[connection[1]].push(connection[0]);
  }

  // initialize a counter for the number of separate networks in the network
  let networkCount = 0;

  // loop through each node in the network
  for (let node = 0; node < n; node++) {
    // if the node has not been visited yet, traverse its network of connected nodes
    if (!isVisited[node]) {
      traverseNetwork(node);
      // increment the network count because we have found another separate network
      networkCount++;
    }
  }

  // The number of additional connections needed to connect all computers is equal to the
  // number of networks found minus 1 (since one connection connects 2 networks)
  return networkCount - 1;

  // This is a recursive function that performs a depth-first search traversal of the network
  // starting at the given source node. It marks each visited node as visited in the isVisited array.
  // The purpose of this function is to find all the nodes that are connected to the same network.
  function traverseNetwork(sourceNode) {
    isVisited[sourceNode] = true;

    // For each neighbor of the source node, if the neighbor has not been visited,
    // perform a recursive traversal from the neighbor node.
    for (const neighborNode of neighbors[sourceNode]) {
      if (!isVisited[neighborNode]) {
        traverseNetwork(neighborNode);
      }
    }
  }
};
```