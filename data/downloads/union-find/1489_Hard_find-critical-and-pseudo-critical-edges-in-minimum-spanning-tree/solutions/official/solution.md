# Official Solution

**Link:** [https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solution/](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solution/)

---

[TOC]

## Solution

---

### Approach 1: Kruskal's Algorithm

Before attempting this problem, please first solve [Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) and [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/). In this article, we will use Kruskal's algorithm. If you solved these problems, we assume you are familiar with this algorithm.

#### Intuition

A graph has exactly one minimum spanning tree (MST) weight, but there could be multiple MSTs with this weight.

A *critical* edge is an edge that, if removed from the graph, would increase the MST weight. It means that the edge appears in every MST.

On the other hand, a *pseudo-critical* edge is an edge that can appear in some MSTs but not all. It means that the edge isn't necessary to maintain the MST weight, but we can include it without increasing the MST weight.

Firstly, we need to sort all the edges in increasing order of their weights. It is important because we want to consider the smaller edges first when we're trying to build the MST. We can do this using any standard sorting algorithm.

Next, we need to implement [Kruskal's algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm) to find the MST weight. Kruskal's algorithm is a simple but powerful method for finding an MST in a graph. It works by repeatedly selecting the smallest edge that doesn't form a cycle with the edges already in the MST. To implement this algorithm, we also need to use a [union-find data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) which is a data structure that keeps track of a partition of a set into disjoint subsets.

Once we've got the weight of the MST, we now need to identify the critical and pseudo-critical edges.

For each edge, to identify if it's critical, we remove it from the graph and re-calculate the MST weight (again using Kruskal's algorithm). If the MST weight increases or it's impossible to connect all nodes without this edge (i.e., the graph is not connected), this edge is critical. An important hint toward this approach is that the constraints state $n \le 100$, which means performing Kruskal's many times is a feasible strategy.

To check if an edge is a pseudo-critical edge, we first check that it's not critical. Then, we run Kruskal's while forcing the edge to be part of the tree. If the final weight remains the same as the MST weight, then this edge is part of at least one MST and thus is a pseudo-critical edge.

We repeat these steps for every edge in the sorted edge list.

#### Algorithm

1. **Preprocessing.** Create a new version of the edges array that includes the original index of each edge. Sort this new array based on the edge weights.
2. **Calculate standard MST weight.** Initialize a union-find data structure, iterate over the sorted edges, and add them to the union-find. Whenever two nodes are united, add the corresponding weight to the total MST weight.
3. **Iterate over each edge.** For each edge in the sorted array, perform two operations – ignoring and forcing the edge.
	* **Ignoring the edge.** Calculate the MST weight without this edge. Initialize a new union-find and iterate over the sorted edges (excluding the current one), adding them to the union-find. If the resulting MST is disconnected or the total weight is larger than the standard MST weight, this edge is critical.
	* **Forcing the edge.** Calculate the MST weight with this edge included. Initialize a new union-find, add the current edge to it, and then iterate over the remaining edges (excluding the current one), adding them to the union-find. If the total weight of the resulting MST is the same as the standard MST weight, this edge is pseudo-critical. Note that this step is only performed if the edge is not a critical one.
4. **Record results.** Store the indices of the critical and pseudo-critical edges in two separate lists. Return these lists as the final output.

#### Implementation

<iframe src="https://leetcode.com/playground/fSWqh7uE/shared" frameBorder="0" width="100%" height="500" name="fSWqh7uE"></iframe>


#### Complexity Analysis

* Time complexity of this algorithm is $O(m^2 \cdot \alpha(n))$, where $m$ is the number of edges, $n$ is the number of nodes and $\alpha$ is the inverse Ackermann function.

	* **Sorting the edges.** The first operation in this algorithm is sorting the edges. We perform this operation once in $O(m \log m)$ time.
	* **Constructing the MST by ignoring/forcing an edge.** For each edge in our sorted list, we construct two MSTs – one where we force include the edge in the MST and one where we ignore it. To do this, we use the Union-Find data structure, performing union operations to connect the nodes in the graph. The time complexity of these union operations with union by rank and path compression optimization is nearly a constant time operation, represented as $O(\alpha(n))$, where $\alpha$ is the inverse Ackermann function. You do not have to know what exactly this function is. It suffices to know that this function grows extremely slowly, so much so that for any conceivable practical input, it does not exceed $5$. Hence for each edge, it would take $O(m \cdot \alpha(n))$ time to construct the MST.
	* **Iterating through all edges.** The previous step is repeated for each edge in the graph, meaning we perform it $m$ times. This results in a total time complexity of $O(m^2 \cdot \alpha(n))$ for constructing all the MSTs.
	
Adding these all together, we find that the total time complexity of this algorithm is $O(m \log m + m^2 \cdot \alpha(n))$, which simplifies to $O(m^2 \cdot \alpha(n))$.

* Space complexity is $O(m)$.

	* **Storing the edges.** We need to store all the edges and their information in our program, which requires $O(m)$ space.
	* **Union-Find data structure.** The Union-Find data structure uses an array to keep track of the parent of each node and another array to keep track of the size of each tree in the forest. It requires $O(n)$ space, where $n$ is the number of nodes in the graph.
	
When we add these components together, we find that the total space complexity of this algorithm is $O(m + n)$. Since the graph is connected, thus $m \ge n - 1$ and $O(m + n) = O(m)$.