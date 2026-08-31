# Official Solution

**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solution/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solution/)

---

[TOC]

## Solution

---

### Approach 1: Minimum Spanning Tree (Using Kruskal's algorithm)

**Intuition**

If we model the cities and connections as a graph, each connection is an edge (undirected) and each city is a node of the graph. We need to find a subset of edges which connects all the nodes of the graph with the minimum possible total weight. This is by definition the Minimum Spanning Tree or [MST](https://en.wikipedia.org/wiki/Minimum_spanning_tree) of a graph.

**Algorithm**

There are a [variety of algorithms](https://en.wikipedia.org/wiki/Minimum_spanning_tree#Algorithms) that we can use to obtain the MST of a graph. We will use Kruskal's algorithm here, which is implemented using the [Disjoint set](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) Union-Find data structure.

In order to obtain the MST using Kruskal's algorithm, we first sort all the connections (edges) present in the graph based on their weights (in increasing order) and will iterate over them one by one. The objective here is to greedily pick edges that will help us to connect more nodes in the graph. Each time we find a new edge which *does not* result in a cycle with the edges selected so far, we add that edge in the final MST. We keep doing this till we have obtained the MST which connects all the nodes in the graph (i.e. connects all the cities using the connections).

Disjoint-set union find can be implemented in a couple of ways. A plain union find is shown below which keeps the track of the parent of each node (initially parent of `i` is set to itself, i.e. `i`) and performs the union and find using a helper method `getRoot`.

<iframe src="https://leetcode.com/playground/ZaY6J4zF/shared" frameBorder="0" width="100%" height="500" name="ZaY6J4zF"></iframe>

The above implementation can be made faster by incorporating **Path compression**. Here, while obtaining the root, we compress the path by assigning the grandparent of the node as the parent (thereby skipping connections and moving nodes closer to the root). We modify the `Find` method to implement path compression.

<iframe src="https://leetcode.com/playground/ULvhJfSL/shared" frameBorder="0" width="100%" height="208" name="ULvhJfSL"></iframe>

This can be made even faster using a technique known as **Weighted Union**. In this technique, in addition to the parent nodes, we also keep the weights of each of the nodes. Every time we take union, the root node with more weight (i.e. having more elements in the corresponding set) is used as the parent node of the other node. We initialize the weight corresponding to each node as 1 initially, as each element belongs to it's own set in the beginning. Below is the implementation of this idea (we modify `Union` method).

<iframe src="https://leetcode.com/playground/W79aeaps/shared" frameBorder="0" width="100%" height="500" name="W79aeaps"></iframe>

If we combine both **Path compression** and **Weighted Union**, it takes $$\log^{\ast} N$$ for the union and find operations in case of Disjoint-set union [link](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Proof_of_O(log*(n))_time_complexity_of_Union-Find).
Here $$\log^{\ast} N$$ is an extremely slow-growing inverse Ackermann function a.k.a [Iterated logarithm](https://en.wikipedia.org/wiki/Iterated_logarithm) and practically does not exceed 5. Hence it can be treated as a constant for implementation purposes.

We can combine all the concepts we have seen above in order to implement Kruskal's algorithm for obtaining MST of a graph. Below is the implementation of this.

<iframe src="https://leetcode.com/playground/HjfRjVQL/shared" frameBorder="0" width="100%" height="500" name="HjfRjVQL"></iframe>

**Complexity Analysis**

* Time complexity: Assuming $$N$$ to be the total number of nodes (cities) and $$M$$ to be the total number of edges (connections). Sorting all the $$M$$ connections will take $$O(M \cdot \log M)$$. Performing union find each time will take $$\log^{\ast} N$$ (Iterated logarithm). Hence for M edges, it's $$O(M \cdot \log^{\ast} N)$$ which is practically $$O(M)$$ as the value of iterated logarithm, $$\log^{\ast} N$$ never exceeds 5.

* Space complexity: O(N), space required by `parents` and `weights`.