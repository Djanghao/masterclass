# Official Solution

**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solution/](https://leetcode.com/problems/all-paths-from-source-to-target/solution/)

---

[TOC]

## Solution

---

### Overview


If a hint is ever given on the problem description, that would be _**backtracking**_.

Indeed, since the problem concerns about the *path exploration* in a *graph* data structure, it is a perfect scenario to apply the backtracking algorithm.

>As a reminder, [backtracking](https://en.wikipedia.org/wiki/Backtracking) is a general algorithm that incrementally builds candidates to the solutions, and abandons a candidate (_"backtrack"_) as soon as it determines that the candidate cannot possibly lead to a valid solution.

For more details about how to implement a backtracking algorithm, one can refer to our [Explore card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/).

In this solution, we start from an approach using backtracking and discuss another alternative approach for this problem.

---

### Approach 1: Backtracking

**Overview**


#### Intuition

>Specifically, for this problem, we could assume ourselves as an agent in a game, we can explore the graph one step at a time.

At any given node, we try out each neighbor node _recursively_ until we reach the target or there is no more node to hop on. 
By trying out, we mark the choice before moving on, and later on we reverse the choice (_i.e._ backtrack) and start another exploration.

To better demonstrate the above idea, we illustrate how an agent would explore the graph with the _backtracking_ strategy, in the following image where we mark the order that each edge is visited.

![DFS order](../Figures/797/797_DFS_order_.png)

#### Algorithm

The above idea might remind one of the Depth-First Search (**DFS**) traversal algorithm.
Indeed, often the backtracking algorithm assumes the form of DFS, but with the additional step of _backtracking_.

And for the DFS traversal, we often adopt the **recursion** as its main form of implementation.
With recursion, we could implement a backtracking algorithm in a rather intuitive and concise way. We break it down into the following steps:

- Essentially, we want to implement a recursive function called `backtrack(currNode, path)` which continues the exploration, given the current node and the path traversed so far.

    - Within the recursive function, we first define its base case, _i.e._ the moment we should terminate the recursion. Obviously, we should stop the exploration when we encounter our target node. So the condition of the base case is `currNode == target`.

    - As the body of our recursive function, we should enumerate through all the neighbor nodes of the current node.

    - For each iteration, we first mark the choice by appending the neighbor node to the path. Then we _recursively_ invoke our `backtrack()` function to explore _deeper_. At the end of the iteration, we should reverse the choice by popping out the neighbor node from the path, so that we could start all over for the next neighbor node.

- Once we define our `backtrack()` function, it suffices to add the initial node (_i.e._ node with index `0`) to the path, to _kick off_ our backtracking exploration. 

#### Implementation

<iframe src="https://leetcode.com/playground/NcZXDdG8/shared" frameBorder="0" width="100%" height="500" name="NcZXDdG8"></iframe>


#### Complexity Analysis

Let $N$ be the number of nodes in the graph.

First of all, let us estimate how many paths there are at maximum to travel from the Node `0` to the Node `N-1` for a graph with $N$ nodes.

Let us start from a graph with only two nodes. As one can imagine, there is only one single path to connect the only two nodes in the graph.

Now, let us add a new node into the previous two-nodes graph, we now have two paths, one from the previous path, the other one is bridged by the newly-added node.

![3-nodes graph](../Figures/797/797_3_nodes_graph_.png)

>If we continue to add nodes to the graph, one insight is that every time we add a new node into the graph, the number of paths would **double**.

With the newly-added node, new paths could be created by preceding all previous paths with the newly-added node, as illustrated in the following graph.

![new paths](../Figures/797/797_new_paths_.png)

As a result, for a graph with $N$ nodes, at maximum, there could be $\sum_{i=0}^{N-2}{2^i} = 2^{N-1} - 1$ number of paths between the starting and the ending nodes.


- Time Complexity: $\mathcal{O}(2^N \cdot N)$ 

    - As we calculate shortly before, there could be at most $2^{N-1} - 1$ possible paths in the graph.

    - For each path, there could be at most $N-2$ intermediate nodes, _i.e._ it takes $\mathcal{O}(N)$ time to build a path.

    - To sum up, a **loose** upper-bound on the time complexity of the algorithm would be $(2^{N-1} - 1) \cdot \mathcal{O}(N) = \mathcal{O}(2^N \cdot N)$, where we consider it takes $\mathcal{O}(N)$ efforts to build each path.

    - To estimate a lower-bound on the time complexity, you can imagine an extreme but valid input: the edge set of the graph is $\{\langle i,j\rangle| 0 \le i < j < N\}$, that is, there exists an edge from node $i$ to $j$ if and only if $i<j$. In this case, we can arbitrarily build a set of nodes from 1 to $N-1$ and construct a valid path by adding the starting point 0 and the end point $N-1$.

    - For each path of $k$ intermediate nodes, we have to take $O(k)$ time to build and deep copy the path to the result set. Thus, the total time complexity is at least $\sum_{k=0}^{N-2}{k \cdot {N-2 \choose k}} = 2^{N-3} \cdot (N-2)$, which is still $\mathcal{O}(2^N \cdot N)$.


- Space Complexity: $\mathcal{O}(N)$

    - Since we also applied _recursion_ in the algorithm, the recursion could incur additional memory consumption in the function call stack. The stack can grow up to $N$ consecutive calls. Meanwhile, along with the recursive call, we also keep the state of the current path, which could take another $\mathcal{O}(N)$ space. Therefore, in total, the recursion would require additional $\mathcal{O}(N)$ space.

    - However, apart from our algorithm, since at most we could have $2^{N-1}-1$ paths as the results and each path can contain up to $N$ nodes, we need extra $\mathcal{O}(2^N \cdot N)$ space to store and return the results.
<br/>
<br/>

---

### Approach 2: Top-Down Dynamic Programming

#### Intuition

The backtracking approach applies the paradigm of divide-and-conquer, which breaks the problem down to smaller steps.

As one knows, there is another algorithm called _**Dynamic Programming**_ (DP), which also embodies the idea of divide-and-conquer.

As it turns out, we could also apply the DP algorithm to this problem, although it is less optimal than the backtracking approach as one will see later.

>More specifically, we adopt the **Top-Down** DP approach, where we take a _laissez-faire_ strategy assuming that the target function would work out on its own.

Given a node `currNode`, our target function is `allPathsToTarget(currNode)`, which returns all the paths from the current node to the target node.

The target function could be calculated by iterating through the neighbor nodes of the current node, which we summarize with the following _recursive_ formula:

$$
\forall \text{nextNode} \in \text{neighbors}(\text{currNode}),
\\
\\
\text{allPathsToTarget}(\text{currNode}) = \{ \text{currNode} + \text{allPathsToTarget}(\text{nextNode}) \}
$$

The above formula can be read intuitively as: _"the paths from the current node to the target node consist of all the paths starting from each neighbor of the current node."_

#### Algorithm

Based on the above formula, we could implement a DP algorithm.

- First of all, we define our target function `allPathsToTarget(node)`.

    - Naturally our target function is a recursive function, whose base case is when the given `node` is the target node.

    - Otherwise, we iterate through its neighbor nodes, and we invoke our target function with each neighbor node, _i.e._ `allPathsToTarget(neighbor)`

    - With the returned results from the target function, we then prepend the current node to the downstream paths, in order to build the final paths.

- With the above defined target function, we simply invoke it with the desired starting node, _i.e._ node `0`.

Note that, there is an important detail that we left out in the above step.
In order for the algorithm to be fully-qualified as a DP algorithm, we should **reuse** the intermediate results, rather than re-calculating them at each occasion.

Specially, we should **cache** the results returned from the target function `allPathsToTarget(node)`, since we would encounter a node multiple times if there is an overlapping between paths.
Therefore, once we know the paths from a given node to the target node, we should keep it in the cache for reuse. This technique is also known as **_memoization_**.

#### Implementation

<iframe src="https://leetcode.com/playground/D8qp4Xn8/shared" frameBorder="0" width="100%" height="500" name="D8qp4Xn8"></iframe>


#### Complexity Analysis

Let $N$ be the number of nodes in the graph.
As we estimated before, there could be at most $2^{N-1}-1$ number of paths.

- Time Complexity: $\mathcal{O}(2^N \cdot N)$.

    - To estimate the overall time complexity, let us start from the last step when we prepend the starting node to each of the paths returned from the target function.
    Since we have to copy each path in order to create new paths, it would take up to $N$ steps for each final path. Therefore, for this last step, it could take us $\mathcal{O}(2^{N-1} \cdot N)$ time.

    - Right before the last step, when the maximal length of the path is $N-1$, we should have $2^{N-2}$ number of paths at this moment.

    - Deducing from the above two steps, again a **loose** upper-bound of the time complexity would be $\mathcal{O}(\sum_{i=1}^{N}{2^{i-1}\cdot i}) = \mathcal{O}(2^N \cdot N)$

    - Similar to the complexity analysis in Approach 1, we can also get a lower-bound of the time complexity as $\mathcal{O}(2^N \cdot N)$. So the time complexity should be $\mathcal{O}(2^N \cdot N)$.

    - The two approach might have the same asymptotic time complexity. However, in practice the DP approach is slower than the backtracking approach, since we copy the intermediate paths over and over.

    - Note that, the performance would be degraded further, if we did not adopt the memoization technique here.


- Space Complexity: $\mathcal{O}(2^N \cdot N)$

    - Similarly, since at most we could have $2^{N-1}-1$ paths as the results and each path can contain up to $N$ nodes, the space we need to store the results would be $\mathcal{O}(2^N \cdot N)$.

    - Since we also applied _recursion_ in the algorithm, it could incur additional memory consumption in the function call stack. The stack can grow up to $N$ consecutive calls. However, the space bottleneck in this approach is to memorize the results of intermedia calls of `allPathsToTarget(node)`. The total memory cost for that is estimated as $\sum_{i=1}^n i \cdot 2^i = \mathcal{O}(2^N \cdot N)$ like we analyzed in Approach 1.

    - Thus, the space complexity is $\mathcal{O}(2^N \cdot N)$ either with or without the space for the final returned result.