# Official Solution

**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solution/](https://leetcode.com/problems/min-cost-to-connect-all-points/solution/)

---

[TOC]

## Solution

--- 

### Overview

After reading the problem description, we can say we need to connect some points (the connection between any two points will be an edge whose weight is the Manhattan distance between those points) such that all points become connected and the sum of the weights of the chosen edges is minimized.

We can say this problem is a variant of graph problems. More precisely, it is a [Minimum Spanning Tree (MST)](https://leetcode.com/explore/featured/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3884/) problem, where we are given **nodes** (points) and **weighted edges** (distance between two points) and we have to form an MST using them.

<br />

**How do we know that this is an MST problem?**    

> Given a connected, weighted, and undirected graph, a minimum spanning tree is a subset of edges that connect all vertices while the total weights of these edges are minimum among all possible subsets.
    
We can draw some similarities between the above definition and the problem here. We can consider our input as a complete graph (each point has an edge to every other point), and in this complete graph, we have to connect each point with minimum cost (sum of edge weights). Thus, we can rephrase the problem as "Find the Minimum Spanning Tree for the given set of points." 

![graph to mst](../Figures/1584/Slide1.PNG)

Concerning the MST problem, there exist several classic algorithms. In particular, we will demonstrate two of them, namely [Kruskal's algorithm](https://leetcode.com/explore/featured/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3856/) and [Prim's algorithm](https://leetcode.com/explore/featured/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3859/), which are the most popular ones and feasible to implement during an interview.

> **Note:** If you are not familiar with either of the above algorithms, we highly recommend you to visit the [Graph Explore Card](https://leetcode.com/explore/featured/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3884/) and watch the video explanations to gain a general understanding of these algorithms as these are standard graph algorithms which are used frequently in MST problems. <br /> 
> We will focus on their implementation in the given problem rather than going into detail that how these algorithms work.

</br>

---

### Approach 1: Kruskal's Algorithm

**Intuition**

[Kruskal's algorithm](https://leetcode.com/explore/featured/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3856/) is a greedy algorithm for building a minimum spanning tree in a *weighted* and *undirected* graph.        

> The algorithm operates by identifying the **lowest-weighted** edge that is not part of the MST. Then, if the nodes that belong to the edge are not connected, the edge is added to the MST. This process is repeated until **all nodes** are connected. Since we do not add an edge when its nodes are already connected, **no cycles** are formed.

![kruskal](../Figures/1584/kruskal.gif) 

<br />

First, we sort all the edges in increasing order of weight to prioritize adding the lowest-weighted edges first. We will continue to include edges in our MST until all nodes are connected, but **how can we determine if including an edge will form a cycle or not?**

For this purpose, we can use a disjoint set data structure also called a union-find data structure.             
If this data structure is new to you, we encourage you to visit the [disjoint set explore card](https://leetcode.com/explore/featured/card/graph/618/disjoint-set/3881/). The explore card will help you gain a basic understanding of the data structure and practice using it before proceeding.

The union-find data structure has two primary functions:
- $$find(a)$$: Function which returns the ID of the group in which node $$a$$ belongs.
- $$union(a, b)$$: Function to merge the groups of node $$a$$ and $$b$$. If they already belong to the same group, we don't do anything and return $$false$$ to signify the edge between $$a$$ and $$b$$ was not added. Otherwise, we return $$true$$.            

While there are several ways to implement union-find, in this approach, we will implement union-find by rank with path compression.  

So, after sorting all the edges in increasing order, we will try to connect the end nodes of each edge one by one.               
First, we need to check if these two nodes are already connected. To do so, we can use the $$find$$ function. If they are already connected by some other path, then adding this edge will form a cycle; thus, we will omit this edge from the MST. If the nodes are not connected, we can use the $$union$$ function to connect them. We will perform the $$find$$ check inside the $$union$$ function to keep our code clean.         


![union](../Figures/1584/Slide2.PNG)    


We can make a small optimization here. Instead of iterating over the whole array, when we connect $$(n-1)$$ edges, we can skip the remaining edges because the MST is complete. The MST becomes complete as soon as it contains $$(n-1)$$ edges because a tree with $$n$$ nodes will always have $$(n-1)$$ edges.

We will be given coordinate points in our input array, so we will name each point something unique such that working with them is easy. In the union-find data structure, representing each node with an integer will simplify our implementation, so we will represent each point as its index in the input array. 


**Algorithm**

1. Create a class $$UnionFind$$:
    - $$ group, \space rank $$ - Arrays to store the group (also known as root) and rank of each node.
    - $$find(a)$$ - Function to find the group of node $$a$$ using path compression.
    - $$union(a, b)$$ - Function to merge groups of nodes $$a$$ and $$b$$ by rank.

2. Initialize some variables:
    - $$n$$ - Number of nodes in the graph.
    - $$mstCost$$ - Cost to build the MST.
    - $$edgesUsed$$ - Number of edges included in the MST.
    - $$uf$$ - UnionFind object of size $$n$$ to connect $$n$$ nodes.
    - $$allEdges$$ - Array to store all the edges of our graph.

3. Iterate over all coordinate points, and for each coordinate point, create an edge to all other coordinate points. Store the edges in the $$allEdges$$ array. Each element of $$allEdges$$ contains three values: **edge weight, node1, node2**.

4. Sort the elements in $$allEdges$$ in increasing order of their edge weights.

5. Iterate over each edge in $$allEdges$$ until $$edgesUsed$$ becomes equal to $$n-1$$. For each edge:
    - Try joining both the nodes of the current edge. 
    - If the nodes are already connected, we discard the current edge because including this edge would create a cycle. Otherwise, we add the weight of the current edge to the $$mstCost$$ variable and increment $$edgesUsed$$ by $$1$$.

6. Return the total cost of MST, $$mstCost$$.

!?!../Documents/1584/slideshow1.json:960,540!?! 

<br />

**Implementation**


<iframe src="https://leetcode.com/playground/SrXxUCof/shared" frameBorder="0" width="100%" height="500" name="SrXxUCof"></iframe>


**Complexity Analysis**

If $$N$$ is the number of points in the input array.


* Time complexity: $$O(N^2 \cdot \log(N))$$.

  - First, we store $$N \cdot (N-1) / 2 \approx N^2$$ edges of our complete graph in the $$allEdges$$ array which will take $$O(N^2)$$ time, and sorting this array will take $$O(N^2 \cdot \log(N^2))$$ time.

  - Then, we iterate over the $$allEdges$$ array, and for each element, we perform a union-find operation. The amortized time complexity for union-find by rank and path compression is $$O(\alpha(N))$$, where $$\alpha(N)$$ is [Inverse Ackermann Function](https://en.wikipedia.org/wiki/Ackermann_function#:~:text=Inverse%5Bedit%5D,is%20primitive%20recursive.), which is nearly constant, even for large values of $$N$$.

  - Thus, the overall time complexity is $$O(N^2 + N^2 \cdot \log(N^2) + N^2 \cdot \alpha(N)) \approx O(N^2 \cdot \log(N^2)) \approx O(N^2 \cdot \log(N))$$.


* Space complexity: $$O(N^2)$$.
    
  - We use an array $$allEdges$$ to store all $$N \cdot (N-1) / 2 \approx N^2$$ edges of our graph.
  - UnionFind object $$uf$$ uses two arrays each of size $$N$$ to store the group id and rank of all the nodes. 
  - Thus, the overall space complexity is $$O(N^2 + N) \approx O(N^2)$$.

<br/>

---

### Approach 2: Prim's Algorithm

**Intuition**

[Prim's algorithm](https://leetcode.com/explore/featured/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3859/) is also a greedy algorithm for building a minimum spanning tree in a *weighted* and *undirected* graph.        

> In this algorithm, we include an arbitrary node in the MST and keep on adding the **lowest-weighted** edges of the nodes present in the MST until all nodes are included in the MST and **no cycles** are formed.           

![prims](../Figures/1584/prims.gif) 

<br />

Just like the previous approach, we will use the input array indices to represent the nodes.       

In this algorithm, we can pick any node to start with. Then we will choose the **lowest-weighted edge** that connects a node present in the MST to a node not present in the MST. We could keep all of the edges in an array and then sort them. But then, for each new node that we add to the MST, we would have to add the new node's edges to the array and sort the array again. This would be a costly operation when done repeatedly.

A more efficient way to track which edges are available and which of these edges has the lowest weight is to use a [min-heap data structure](https://leetcode.com/explore/featured/card/heap/). A **min-heap** is a tree-like data structure that always stores the minimum valued element (edge weight here) at the root and where insertion and removal of elements (edges) take logarithmic time.

Now, we know how to greedily pick the lowest-weighted edge, but **how can we check if including an edge will form a cycle in the MST?**      
Consider the example below. We can say, for the node $$0$$ of the MST there exists an edge that is greedily best to choose and it connects to node $$4$$. If node $$4$$ is already present in the MST it means there already exists a path from node $$0$$ to $$4$$ and hence adding this edge would form a loop.

![include edge](../Figures/1584/Slide2.PNG)    

Thus, we can use one boolean array to record which nodes are already present in the MST. If both of an edge's nodes are already present in the MST, we will discard the edge. Otherwise, we will include this edge and mark the newly added node as present in the MST.

Since an MST can only have $$n - 1$$ edges, we can use it as an early exit condition to stop iterating over heap elements.


**Algorithm**

1. Initialize some variables:
    - $$n$$ - Number of nodes of the graph.
    - $$mstCost$$ - Cost to build the MST.
    - $$edgesUsed$$ - Number of edges included in the MST.
    - $$inMST$$ - Array to track if a node was already included in MST or not.
    - $$heap$$ - A min-heap to pick minimum weight edge, each element of heap is a pair of $$(edge \space weight, \space node)$$.

2. Initially, we start with node $$0$$ and the cost to include this node will be $$0$$, thus we push all adjacent edges of node $$0$$ in $$heap$$ with their respective $$weights$$ using a for-loop. However, to make the code implementation cleaner, we will simply initialize the $$heap$$ with the pair $$(0, \space 0)$$, which represents a temporary edge to node $$0$$ with a weight of $$0$$. 

3. We pop elements from the $$heap$$ and attempt to add them to the tree until $$edgesUsed$$ becomes equal to $$n$$. We initially added one temporary edge, thus we stop when $$n$$ edges are added in the MST.
    - We get the minimum weighted edge and the node from the top of $$heap$$ and pop it.
    - If this node is already present in our MST $$ ( inMST[node] == true ) $$ we discard this edge. 
    - Otherwise, we include this node in our MST, increment $$edgesUsed$$ by $$1$$, add the edge's weight to the $$mstCost$$, and push the edges of this node into the $$heap$$.

4. We return the total cost of MST, $$mstCost$$.

!?!../Documents/1584/slideshow2.json:960,540!?! 

<br />

**Implementation**


<iframe src="https://leetcode.com/playground/ZaovuKZE/shared" frameBorder="0" width="100%" height="500" name="ZaovuKZE"></iframe>


**Complexity Analysis**

If $$N$$ is the number of points in the input array.


* Time complexity: $$O(N^2 \cdot \log(N))$$.

  - In the worst-case, we push/pop $$N \cdot (N-1) / 2 \approx N^2$$ edges of our graph in the heap. Each push/pop operation takes $$O(\log(N^2)) \approx \log(N)$$ time.
  - Thus, the overall time complexity is $$ O(N^2 \cdot \log(N)) $$.


* Space complexity: $$O(N^2)$$.
    
  - In the worst-case, we push $$N \cdot (N-1) / 2 \approx N^2$$ edges into the heap.
  - We use an array $$inMST$$ of size $$N$$ to mark which nodes are included in MST.
  - Thus, the overall space complexity is $$O(N^2 + N) \approx O(N^2)$$.
    

<br/>

---

### Approach 3: Prim's Algorithm (Optimized)

**Intuition**

Although the min-heap method is often used to implement Prim's algorithm (as it's fairly easy to understand), due to its use of a heap to store the edges, its time complexity is suboptimal.
Thus, we will present a more efficient way of implementing Prim's algorithm, which eliminates the use of min-heap to find the next lowest-weighted edge.
 
In this approach, we use one $$minDist$$ array, where $$minDist[i]$$ stores the weight of the smallest weighted edge to reach the $$i^{th}$$ node from any node in the current tree. 
We will iterate over the $$minDist$$ array and greedily pick the node that is not in the MST and has the smallest edge weight. We will add this node to the MST, and for all of its neighbors, we will try to update the value in $$minDist$$.  
We will repeat this process until all nodes are part of the MST.

Initially, we can start with any node, say node $$0$$. Thus we mark$$minDist[0] = 0$$, and for the remaining nodes, the min distance to reach them is $$\infty$$.         
Just like in the previous approach, we assume a $$0$$ weighted temporary edge is used to reach the first node.

Thus in this method, we will use this new way of selecting the min weight edges (instead of using a heap). Just like the previous method, we will use the $$inMST$$ array to determine if adding the current edge will result in a cycle, and we can stop as soon as $$n$$ edges are included in MST (including our imaginary zero-weight edge to node 0).

**Algorithm**

1. Initialize some variables:
    - $$n$$ - Number of nodes of the graph.
    - $$mstCost$$ - Cost to build the MST.
    - $$edgesUsed$$ - Number of edges included in the MST.
    - $$inMST$$ - Array to track which nodes are already part of the MST.
    - $$minDist$$ - Array to track the minimum edge weight to reach the $$i^{th}$$ node from any node that is already in the tree.

2. Initially, we start with node $$0$$, and the cost to reach this node will be $$0$$. To signify this, we set $$minDist[0]$$ equal to $$0$$.

3. We will try adding nodes to our MST until $$edgesUsed$$ becomes equal to $$n$$.
    - We pick the node which uses the lowest weight edge and is not present in the MST.
    - We increment $$edgesUsed$$ by $$1$$, mark this node as included in the MST, and add the edge weight used to reach this node to the $$mstCost$$.
    - Try updating the minimum distance to all adjacent nodes in $$minDist$$. 

4. We return the total cost of the MST, $$mstCost$$.

!?!../Documents/1584/slideshow3.json:960,540!?! 

<br />

**Implementation**


<iframe src="https://leetcode.com/playground/Y38jZ9gQ/shared" frameBorder="0" width="100%" height="500" name="Y38jZ9gQ"></iframe>


**Complexity Analysis**

If $$N$$ is the number of points in the input array.

* Time complexity: $$O(N^2)$$.

  - We pick all $$N$$ nodes one by one to include in the MST. Picking each node takes $$O(N)$$ time and after picking a node, we iterate over all of its adjacent nodes, which also takes $$O(N)$$ time.
  - Thus, the overall time complexity is $$ O(N \cdot (N + N)) = O(N^2) $$.


* Space complexity: $$O(N)$$.
    
  - We use two arrays each of size $$N$$, $$inMST$$ and $$minDist$$.
  - Thus, the overall space complexity is $$O(N + N) = O(N)$$.