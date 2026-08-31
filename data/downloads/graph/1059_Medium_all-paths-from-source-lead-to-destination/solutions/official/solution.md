# Official Solution

**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solution/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/846416890" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview

Let's try to boil the problem down to simpler, more commonly understandable terms.

* We are given a directed graph.
* Also, as inputs we are provided a `source` and a `destination`.
* We need to tell if all the paths from the `source` lead to the `destination` and and we can split this into a few criteria.
    - If a path exists from the `source` node to a node with no outgoing edges, then that node must be equal to `destination`. Here, we simply need to see that if a node does not have any neighbors in the `adjacency list` structure, then it has to be the `destination` or else we return `false`.
    - The number of possible paths from `source` to `destination` is a finite number. This simply means that the graph is actually a `tree`. Or in other words, there are no cycles in the graph. If there is a cycle in the graph, there would be an infinite number of paths from the source to the destination, as each would go around the cycle a different number of times.

> Thus, the problem simply boils down to two things which we need to check during our graph traversal algorithm. We need to detect any cycles in the traversal and return false if there are any. Also, we need to ensure that if there is a leaf node encountered during the traversal, it is the destination node.

The common strategies to traverse a graph are Breadth-First Search (a.k.a. BFS) and Depth-First Search (a.k.a. DFS). If one is not familiar with the concepts of BFS and DFS, we have an Explore card called [Queue & Stack](https://leetcode.com/explore/learn/card/queue-stack/) where we cover the [BFS traversal](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/) as well as the [DFS traversal](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/). In this article, we'll be assuming that you're already familiar with these concepts.

### Approach: Depth First Search

**Intuition**

This is one of the most common graph traversal techniques out there which makes use of the _stack_ data structure. As mentioned in the overview section above, we simply need to run a graph traversal algorithm and check for two basic conditions. It is easy enough to check for a leaf node since the adjacency list entry for that node would not contain any neighbors. So our first condition can be easily checked i.e. if we encounter a leaf node, we check its equality to the _destination_ node.

As for cycle detection, there are multiple ways one can go about modifying the standard DFS algorithm. We will be following the _node-coloring variant_ of the algorithm which is explained in the [Introduction to Algorithms (CLRS)](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) book. The idea is to do DFS of a given graph and while doing traversal, assign one of the below three colors to every vertex. According to the algorithm mentioned in the book, there are three different colors we can assign a node:

***WHITE*** ~ Vertex is not processed yet. Initially, all vertices are `WHITE`.

***GRAY*** ~ Vertex is being processed (DFS for this vertex has started, but not finished which means that all descendants (in DFS tree) of this vertex are not processed yet (or this vertex is in the function call stack).

![](../Figures/1059/img2.png)


*Figure 1. Highlighting an edge to a GRAY node thus creating a cycle in the graph.*


***BLACK*** ~ Vertex and all its descendants are processed. 

![](../Figures/1059/img1.png)


*Figure 2. Highlighting an edge to a BLACK node.*


> While doing DFS, if an edge is encountered from current vertex to a GRAY vertex, then this edge is a back edge and hence there is a cycle. A GRAY node represents a node whose processing is still ongoing. Thus, if a descendent eventually leads back to a node whose processing is ongoing, it ends up creating a cycle in the directed graph and we call the edge leading back to a GRAY node as a backward edge.

**Algorithm**

1. Create a recursive function `leadsToDest` that takes the current node that needs to be processed and the `color array`.
2.  We check if this node has any neighbors or not. If it doesn't then we return `true` or `false` based on whether this node equals the `destination` node.
3. There are three possibilities for the color of this current node. 
    - If it is `BLACK`, do nothing; we've already processed it.
    - If it is `WHITE`, then mark it as `GRAY` since we are starting the processing of the graph rooted at this node.
    - Otherwise, if it is `GRAY`, then return `false` as we have discovered a backward edge, and hence a cycle. 
4. Traverse all the adjacent nodes and for each of them call the recursive function for that node. If the function returns false, return `false`.
5. Mark the current Node as `BLACK` and return `true`.

<iframe src="https://leetcode.com/playground/mt5oXGZA/shared" frameBorder="0" width="100%" height="500" name="mt5oXGZA"></iframe>

**Complexity Analysis**

* Time Complexity: Typically for an entire DFS over an input graph, it takes $$\mathcal{O}(V + E)$$ where $$V$$ represents the number of vertices in the graph and likewise, $$E$$ represents the number of edges in the graph. In the worst case $$E$$ can be $$\mathcal{O}(V^2)$$ in case each vertex is connected to every other vertex in the graph. However even in the worst case, we will end up discovering a cycle very early on and prune the recursion tree. If we were to traverse the entire graph, then the complexity would be $$\mathcal{O}(V^2)$$ as the $$\mathcal{O}(E)$$ part would dominate. However, due to pruning and backtracking in case of cycle detection, we end up with an overall time complexity of $$\mathcal{O}(V)$$.
* Space Complexity: $$\mathcal{O}(V + E)$$ where $$\mathcal{O}(E)$$ is occupied by the adjacency list and $$\mathcal{O}(V)$$ is occupied by the recursion stack and the color states.

**Why not Breadth-First Search?**

From this [Stack Overflow](https://stackoverflow.com/questions/2869647/why-dfs-and-not-bfs-for-finding-cycle-in-graphs) answer:

>A BFS could be reasonable if the graph is undirected (be my guest at showing an efficient algorithm using BFS that would report the cycles in a directed graph!), where each _cross edge_ defines a cycle (edge going from a node to an already visited node). If the cross edge is `{v1, v2}`, and the root (in the BFS tree) that contains those nodes is `r`, then the cycle is `r ~ v1 - v2 ~ r` (~ is a path, - a single edge), which can be reported almost as easily as in DFS.

>The only reason to use a BFS would be if you know your (undirected) graph is going to have long paths and small path cover (in other words, deep and narrow). In that case, BFS would require proportionally less memory for its queue than DFS' stack (both still linear of course).

> In all other cases, DFS is clearly the winner.

There are some approaches mentioned in the discussion section that make use of BFS and Topological sorting. However, they don't cover all the test cases and also, they involve a lot of modification to these standard algorithms. Therefore, they aren't sensible approaches to take in an interview setting.

<br/>
<br/>
---