# Official Solution

**Link:** [https://leetcode.com/problems/minimum-height-trees/solution/](https://leetcode.com/problems/minimum-height-trees/solution/)

---

[TOC]

## Solution

---
### Overview

As the hints suggest, this problem is related to the [graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) data structure.
Moreover, it is closely related to the problems of [Course Schedule](https://leetcode.com/problems/course-schedule/) and [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/).
This relationship is not evident, yet it is the key to solve the problem, as one will see later.

First of all, as a **_straight-forward_** way to solve the problem, we can simply follow the requirements of the problem, as follows:

- Starting from each node in the graph, we treat it as a **_root_** to build a tree. Furthermore, we would like to know the distance between this root node and the rest of the nodes. The maximum of the distance would be the **_height_** of this tree.

- Then according to the definition of **Minimum Height Tree** (MHT), we simply filter out the roots that have the minimal height among all the trees.

The first step we describe above is actually the problem of [Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/), which is to find the maximum distance from the root to the leaf nodes.
For this, we can either apply the [Depth-First Search](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/) (**DFS**) or [Breadth-First Search](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/) (**BFS**) algorithms.

Without a rigid proof, we can see that the above straight-forward solution is _correct_, and it would work for most of the test cases.

However, this solution is not efficient, whose time complexity would be $$\mathcal{O}(N^2)$$ where $$N$$ is the number of nodes in the tree.
As one can imagine, it will result in **_Time Limit Exceeded_** exception in the online judge.

As a spoiler alert, in this article, we will present a **_[topological sorting](https://en.wikipedia.org/wiki/Topological_sorting)_** alike algorithm with time complexity of $$\mathcal{O}(N)$$, which is also the algorithm to solve the well-known course schedule problems. 


---
### Approach 1: Topological Sorting

**Intuition**

First of all, let us clarify some concepts.

>The **_distance_** between two nodes is the number of edges that connect the two nodes.

Note, normally there could be multiple paths to connect nodes in a graph.
In our case though, since the input graph can form a tree from any node, as specified in the problem, there could only be **_one path_** between any two nodes.
In addition, there would be no cycle in the graph.
As a result, there would be no ambiguity in the above definition of _distance_.

>The **_height_** of a tree can be defined as the _maximum distance_ between the root and all its leaf nodes.

With the above definitions, we can rephrase the problem as finding out the nodes that are _overall_ close to all other nodes, especially the leaf nodes.

>If we view the graph as an _area of circle_, and the leaf nodes as the _peripheral_ of the circle, then what we are looking for are actually the **_[centroids](https://en.wikipedia.org/wiki/Centroid)_** of the circle, _i.e._ nodes that is close to all the peripheral nodes (leaf nodes).

![example of graph](../Figures/310/310_example.png)

For instance, in the above graph, it is clear that the node with the value `1` is the _centroid_ of the graph.
If we pick the node `1` as the root to form a tree, we would obtain a tree with the _minimum height_, compared to other trees that are formed with any other nodes.

Before we proceed, here we make one assertion which is essential to the algorithm. 

>For the tree-alike graph, the number of centroids is no more than 2.

If the nodes form a chain, it is intuitive to see that the above statement holds, which can be broken into the following two cases:

- If the number of nodes is even, then there would be two centroids.
- If the number of nodes is odd, then there would be only one centroid.

![example of centroids](../Figures/310/310_1_2_centroids.png)

For the rest of cases, we could prove by **_contradiction_**. 
Suppose that we have 3 centroids in the graph, if we remove all the non-centroid nodes in the graph, then the 3 centroids nodes must form a _triangle_ shape, as follows:

![triangle](../Figures/310/310_triangle.png)

Because these centroids are equally important to each other, and they should equally close to each other as well.
If any of the edges that is missing from the triangle, then the 3 centroids would be reduced down to a single centroid.

However, the triangle shape forms a _cycle_ which is **_contradicted_** to the condition that there is no cycle in our tree-alike graph.
Similarly, for any of the cases that have more than 2 centroids, they must form a cycle among the centroids, which is contradicted to our condition.

Therefore, there cannot be more than 2 centroids in a tree-alike graph.


**Algorithm**

>Given the above intuition, the problem is now reduced down to looking for all the _**centroid**_ nodes in a tree-alike graph, which in addition are no more than two.

The idea is that we _trim_ out the leaf nodes layer by layer, until we reach the _core_ of the graph, which are the centroids nodes.

![trim](../Figures/310/310_trim.png)

Once we trim out the first layer of the leaf nodes (nodes that have only one connection), some of the non-leaf nodes would become leaf nodes.

The trimming process continues until there are only two nodes left in the graph, which are the _centroids_ that we are looking for.

The above algorithm resembles the _topological sorting_ algorithm which generates the order of objects based on their dependencies.
For instance, in the scenario of course scheduling, the courses that have the least dependency would appear first in the order.

In our case, we trim out the leaf nodes first, which are the **farther** away from the centroids.
At each step, the nodes we trim out are closer to the centroids than the nodes in the previous step.
At the end, the trimming process terminates at the __centroids__ nodes.

**Implementation**

Given the above algorithm, we could implement it via the _Breadth First Search_ (BFS) strategy, to trim the leaf nodes layer by layer (_i.e._ level by level).

- Initially, we would build a graph with the _[adjacency list](https://en.wikipedia.org/wiki/Adjacency_list)_ from the input.

- We then create a queue which would be used to hold the leaf nodes.

- At the beginning, we put all the current leaf nodes into the queue.

- We then run a loop until there is only two nodes left in the graph.

- At each iteration, we remove the current leaf nodes from the queue. While removing the nodes, we also remove the edges that are linked to the nodes. As a consequence, some of the non-leaf nodes would become leaf nodes. And these are the nodes that would be trimmed out in the next iteration.

- The iteration terminates when there are no more than two nodes left in the graph, which are the desired _centroids_ nodes.

Here are some sample implementations that are inspired from the post of [dietpepsi](https://leetcode.com/problems/minimum-height-trees/discuss/76055/Share-some-thoughts) in the discussion forum.


<iframe src="https://leetcode.com/playground/hoMGGKRK/shared" frameBorder="0" width="100%" height="500" name="hoMGGKRK"></iframe>



**Complexity Analysis**

Let $$|V|$$ be the number of nodes in the graph, then the number of edges would be $$|V| - 1$$ as specified in the problem.

- Time Complexity: $$\mathcal{O}(|V|)$$

    - First, it takes $$|V|-1$$ iterations for us to construct a graph, given the edges.

    - With the constructed graph, we retrieve the initial leaf nodes, which takes $$|V|$$ steps.

    - During the BFS trimming process, we will trim out _almost_ all the nodes ($$|V|$$) and edges ($$|V|-1$$) from the edges.
    Therefore, it would take us around $$|V| + |V| - 1$$ operations to reach the centroids.

    - To sum up, the overall time complexity of the algorithm is $$\mathcal{O}(|V|)$$.


- Space Complexity: $$\mathcal{O}(|V|)$$

    - We construct the graph with adjacency list, which has $$|V|$$ nodes and $$|V|-1$$ edges.
    Therefore, we would need $$|V| + |V|-1$$ space for the representation of the graph.

    - In addition, we use a queue to keep track of the leaf nodes.
    In the worst case, the nodes form a star shape, with one centroid and the rest of the nodes as leaf nodes.
    In this case, we would need $$|V|-1$$ space for the queue.

    - To sum up, the overall space complexity of the algorithm is also $$\mathcal{O}(|V|)$$.