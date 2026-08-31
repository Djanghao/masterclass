# Official Solution

**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solution/](https://leetcode.com/problems/find-center-of-star-graph/solution/)

---

## Solution

---

### Approach 1: Degree Count

#### Intuition

We have a graph with N nodes connected by `N-1` edges in a star formation. Our task is to find the center node of this star.

The center node has a unique property: it's connected to every other node. This means it has `N-1` connections, while all other nodes have only one connection each.

In graph theory, we call the number of connections a node has its "degree". The center node has a degree of `N-1`, and all other nodes have a degree of `1`.

To find the center, we can count the degree of each node. We'll iterate through all edges, incrementing a degree counter for both nodes each edge connects. We'll store these counts in an array or map. After iterating all edges, we find the node with a degree of `N-1`. This node is our center.

#### Algorithm

1. Initialize an empty unordered hashmap `degree` to store the degree of all nodes.
2. Iterate over the edges in the list `edges` and, for each edge, increment the degree of nodes this edge connects in the map `degree`.
3. Iterate over the hash map `degree` and check if the degree is equal to $N - 1$, i.e., `edges.size()`.
4. Return the node that satisfies the above condition.
5. Return `-1`, although this is an unreachable part of the code as the input is always valid.

#### Implementation

<iframe src="https://leetcode.com/playground/H7hgLeKM/shared" frameBorder="0" width="100%" height="429" name="H7hgLeKM"></iframe>

#### Complexity Analysis

Here, $N$ is the number of nodes in the graph.

* Time complexity: $O(N)$.

  To find the degree of each node, we iterate over each of the $N - 1$ edges. Then we check the degree of each of the $N$ nodes. Hence, the total time complexity is equal to $O(N)$.

* Space complexity: $O(N)$.

  The hash map `degree` stores the degree of all $N$ nodes and hence the space complexity is equal to $O(N)$.
---

### Approach 2: Greedy

#### Intuition

We're given that the input is always a star graph, with a center node connected to all others. This simplifies our approach.

In a star graph, the center node appears on every edge, as it's connected to all other nodes. Instead of counting degrees, we can find the node present in all edges. This node must be the center.

We only need to check any two edges in the list. The common node between these edges is guaranteed to be the center. This works because, in a star graph with `N-1` edges, only the center node has a degree greater than 1.

For simplicity, we can just check the first two edges in the list. The node common to both is our center.

This approach is more efficient than counting degrees, as we only need to examine two edges regardless of the graph's size.

![fig](../Figures/1791/1791A.png)

#### Algorithm

1. Declare the `firstEdge` and `secondEdge` as the first two edges in the list `edges` respectively.
2. Check if the first node in the `firstEdge` is equal to any of the two nodes in the `secondEdge`, if yes return the first node in `firstEdge`. Otherwise, return the second node in the `secondEdge`.

#### Implementation

<iframe src="https://leetcode.com/playground/VG8T6UPi/shared" frameBorder="0" width="100%" height="242" name="VG8T6UPi"></iframe>

#### Complexity Analysis

* Time complexity: $O(1)$.

  We only compare the two nodes in the `firstEdge` with the nodes in the `secondEdge`. This is a constant operation and hence the time complexity is constant.

* Space complexity: $O(1)$.

  We don't need any extra space. Note that two edges `firstEdge` and `secondEdge` will only have two nodes irrespective of the number of nodes in the graph, and even these two declarations can be avoided but are added for better readability. Hence the space complexity is also constant.

---