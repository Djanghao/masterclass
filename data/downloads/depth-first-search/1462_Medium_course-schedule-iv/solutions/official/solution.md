# Official Solution

**Link:** [https://leetcode.com/problems/course-schedule-iv/solution/](https://leetcode.com/problems/course-schedule-iv/solution/)

---

## Solution

---

### Overview

We are given a directed graph representing course dependencies. The graph consists of `numCourses` nodes (denoted as `N` for simplicity) and `E` directed edges, where each edge is represented as a pair `(u, v)`. An edge `(u, v)` indicates that course `u` is a prerequisite for course `v`.

Additionally, we are given `Q` queries. Each query is a pair `(u, v)`, and the goal is to determine if course `u` is a prerequisite for course `v`.  The answer to each query should be `true` if `u` is a prerequisite of `v`, and `false` otherwise.

---

### Approach 1: Tree Traversal - On Demand

#### Intuition

We can simplify the problem by recognizing that the answer to the query `(u, v)` is `true` if there exists a path from node `u` to node `v`. This is because the edges are directed to represent dependencies, so if we can reach node `v` from node `u`, it indicates that node `u` is a prerequisite for node `v`.

This relationship is an example of *transitive closure*. For instance, consider a path with three nodes: `u -> v -> w`.  In this case:
-  Node `u` is a prerequisite for node `v`
-  Node `v` is a prerequisite for node `w`. By transitivity, we can conclude that node `u` is also a prerequisite for node `w`.

Therefore, the problem reduces to determining whether there exists a path between two nodes. To solve this, we can use [Depth-First Search (DFS)](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/) to explore the graph. Alternatively, other traversal methods like [Breadth-First Search (BFS)](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/) can also be used. In this approach, we begin at node `u` and explore its adjacent nodes recursively until we reach node `v`. If we find node `v` during the traversal, we return `true`. If we exhaust all possible paths without reaching node `v`, we return `false`.

To efficiently track visited nodes and prevent revisiting them, we maintain a `visited` array. This array is reset for each query to ensure that each DFS traversal starts with a clean slate, avoiding interference from previous queries.

#### Algorithm

1. Define a function `isPrerequisite` that takes the adjacency list of the graph, a `visited` array, and two nodes `src` and `target`, and returns whether a path exists from `src` to `target`:
    - Mark the current node `src` as visited.
    - If `src` is the same as `target`, return `true` (we found the path).
    - For each neighboring node `adj` of `src`:
        - If `adj` has not been visited yet, recursively call the DFS to check if a path exists from `adj` to `target`.
    - Return the `true` if the result of at least one recursive call is `true` and `false` otherwise.

2. Create the adjacency list `adjList` using the prerequisite pairs `[u, v]`.

3. For each query `[u, v]`, check if there is a path from `u` to `v` using DFS:

    - Initialize a visited array with all entries as `false`
    - Call the i`sPrerequisite` function to check if there exists a path from `u` to `v`.
    - Store the result for each query in a result list `answer`.

4. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/33jKrZ6q/shared" frameBorder="0" width="100%" height="500" name="33jKrZ6q"></iframe>

#### Complexity Analysis

Let $N$ be the number of courses (`numCourses`) and let $Q$ be the size of the `queries` list. In the worst case, the size of the `prerequisites` list can grow up to $\frac{N \cdot (N - 1)}{2}$, when every course is a prerequisite for every other course, forming a complete directed graph. 

- Time complexity: $O(Q \cdot N ^2)$.

  Creating the adjacency list `adjList` takes $O(N^2)$ time as we need to iterate over the list `prerequisites`. Then we iterate over queries and for each we perform DFS that can take $O(V + E)$ which is equivalent to $O(N^2)$. Hence, the total time complexity equals $O(Q \cdot N ^2)$.

- Space complexity: $O(N^2)$

  The adjacency list requires $O(N^2)$ as it stores every edge in the list `prerequisites`. For the DFS traversal, we need a visited array of size $O(N)$ and the recursive stack for DFS calls requires $O(N)$ space in the worsts case. Therefore, the total space complexity is equal to $O(N^2)$.

---

### Approach 2: Tree Traversal - Preprocessed

#### Intuition

This approach is similar to the previous one, where we traverse the graph to determine if there is a path from node `u` to node `v`. However, the key difference here is that instead of performing DFS/BFS for each query, we precompute the reachability for all nodes. Specifically, for each node `i` in the range from `0` to `N - 1`, we perform BFS (can do DFS as well) to identify all nodes that can be reached from `i` and store this information in a 2D array `isPrerequisite`.

A value of `isPrerequisite[u][v] = true` indicates that node `u` is a prerequisite for node `v`. During the BFS, starting from node `i`, we mark all nodes `adj` in the path as `isPrerequisite[i][adj] = true`, signifying that `i` is a prerequisite for `adj`. In the BFS process, instead of using a separate visited array, we will just use an `isPrerequisite` array. This is because if `isPrerequisite[i][adj]` is `true`, then we can deduce that `adj` is already visited and skip it.

This method is particularly useful when the number of queries is much larger than the number of nodes. In contrast to the previous approach, where we performed DFS/BFS for each query, this method allows for constant-time query answers since the reachability information has already been preprocessed and stored.

#### Algorithm

1. Construct an adjacency list `adjList` from the prerequisites list where each course points to the courses that depend on it.
2. Preprocessing (BFS from each node):

    - For each node` i` (from `0` to `N - 1`):
        - Start a BFS from `i` to explore all reachable nodes.
        - Repeat the following while the queue is not empty:

            - Pop the front in the queue as `node`.
            - Iterate over the adjacent `node` and if the node `i` is not already marked as its prerequisite, mark it and add `node` to the queue.

3. For each query `[u, v]` return `isPrerequisite[u][v]`.

#### Implementation

<iframe src="https://leetcode.com/playground/Ycdpa23U/shared" frameBorder="0" width="100%" height="500" name="Ycdpa23U"></iframe>

#### Complexity Analysis

Let $N$ be the number of courses (`numCourses`) and let $Q$ be the size of the `queries` list. In the worst case, the size of the `prerequisites` list can grow up to $\frac{N \cdot (N - 1)}{2}$, when every course is a prerequisite for every other course, forming a complete directed graph.

- Time complexity: $O(N^3 + Q)$.

  Creating the adjacency list `adjList` requires $O(N^2)$ time, as we need to iterate over the `prerequisites` list. Next, we perform BFS starting from each of the $N$ nodes. Each BFS traversal takes $O(N^2)$ in the worst case, as the time complexity of BFS is $O(V + E)$. Therefore, the total preprocessing is $O(N \cdot N^2) = O(N^3)$.

  To answer each query, we can retrieve results in constant time from a precomputed map, so answering all $Q$ queries takes $O(Q)$ time. Thus, the total time complexity will be $O(N^3 + Q)$.

- Space complexity: $O(N^2)$

  The adjacency list takes $O(N^2)$ space as it will store every edge in the list `prerequisites`. For BFS, we need a 2D array `isPrerequisite` with size $O(N^2)$ to store the answer for every pair of nodes. The queue required for the BFS will take $O(N)$ size for each node, hence the total space complexity is equal to $O(N^2)$.

---

### Approach 3: Topological Sort - Kahn's Algorithm

#### Intuition

We need to find a way to process nodes in the correct order, ensuring that each node is processed only after its dependencies are handled. This is where [topological sorting](https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/) comes into play. Kahn’s algorithm is a great fit for this task because it respects the dependencies of each node, ensuring nodes are only visited once their prerequisites are completed.

> Topological sorting is an algorithm used in directed graphs to arrange nodes such that for every directed edge from node `u` to node `v`, node `u` comes before `v`. This is a natural approach when dealing with dependencies, like in project scheduling, task ordering, or handling prerequisites.

Now, to adapt Kahn's algorithm to our needs, we need to keep track of a node’s prerequisites. Instead of just processing nodes in topological order, we'll modify the algorithm to maintain a list of dependencies for each node. As we move from node `u` to node `v`, we’ll add all of `u`'s prerequisites to `v`'s prerequisites. This is important because it computes the transitive closure, meaning we’re not just tracking immediate dependencies, but also indirect ones. 

By the end of this process, each node will have a complete list of all nodes that must be visited before it. With this setup, when we need to answer a query `(u, v)`, all we have to do is check if `u` is in the list of prerequisites for `v`. 

The general structure of Kahn’s algorithm stays the same. We start by calculating the indegree of each node, which tells us how many nodes depend on it. Nodes with an indegree of zero are independent and can be processed first, so we enqueue them. Then, using a queue, we dequeue nodes, process their neighbors, update the prerequisite lists, and enqueue any neighbors whose indegree drops to zero. This continues until we’ve processed all nodes, ensuring the correct order of traversal.

!?!../Documents/1462/1462_Course_Schedule_IV.json:960,720!?! <br>

#### Algorithm

1. Create an adjacency list (`adjList`) to store the directed graph representing course dependencies.
2. Initialize an array (`indegree`) to track the number of prerequisites (in-degree) for each course.
3. Iterate over the prerequisites array to populate the adjacency list and update the indegree for each course.
4. Initialize a queue (`q`) to process courses with zero in-degree (no prerequisites).
5. While the queue is not empty:

    - Dequeue a course (`node`).
    - For each adjacent course (`adj`) in the adjacency list of nodes, add the prerequisites of `node` to the list `nodePrerequisites[adj]`.
    - Decrement the in-degree of the node `adj`, and if the in-degree becomes zero, enqueue it for further processing.

6. For each query `(u, v)`, check if course `u` is in the prerequisite list of course `v` by checking `nodePrerequisites[v]`.

#### Implementation

<iframe src="https://leetcode.com/playground/76eFh22K/shared" frameBorder="0" width="100%" height="500" name="76eFh22K"></iframe>

#### Complexity Analysis

Let $N$ be the number of courses (`numCourses`) and let $Q$ be the size of the `queries` list. In the worst case, the size of the `prerequisites` list can grow up to $\frac{N \cdot (N - 1)}{2}$, when every course is a prerequisite for every other course, forming a complete directed graph.

- Time complexity: $O(N^3 + Q)$.

  Creating the adjacency list `adjList` takes $O(N^2)$ time as we need to iterate over the list `prerequisites`. The array `indegree`  will be of size $O(N)$. In Kahn's algorithm, we iterate over each node and edge of the vertex which is $O(N^2)$ and for each edge traversed we will also add the prerequisites to the next node which is another $O(N)$. To answer each query we need constant time to retrieve from the map and hence it's $O(Q)$ to answer all queries. Hence, the total time complexity equals $O(N^3 + Q)$.

- Space complexity: $O(N^2)$

  List `adjList` takes $O(N^2)$ as it will store every edge in the list `prerequisites`. Array `indegree` will take $O(N)$ space and the queue for Kahn's algorithm will also be $O(N)$ size. Map `nodePrerequisites` will be from the node to its prerequisites and thus the total number of entries can be equal to $O(N^2)$. Hence the total space complexity equals $O(N^2)$.

---

### Approach 4: Floyd Warshall Algorithm

#### Intuition

In the first approach, we discussed the concept of transitive closure, which simplified the problem. The key insight was that the transitive closure allows us to determine if a path exists between two nodes, even indirectly. This concept is central to solving the All-Pairs Shortest Path (APSP) problem, for which the Floyd-Warshall algorithm is commonly used. This algorithm works by systematically considering every possible intermediate node and checking if a path between two nodes can be improved by going through that intermediate node. It then updates the shortest distance between the nodes.

For our problem, however, we don't need to calculate the shortest path, just whether a path exists. This leads us to a simple modification of the Floyd-Warshall algorithm: instead of keeping track of distances, we’ll use boolean values to represent whether a path exists between two nodes. 

The main idea is to check if there’s a path from `src` to `target` by looking at all possible intermediate nodes. For each intermediate node, we check if there’s a path from `src` to that node and a path from that node to `target`. If both conditions hold, then we can confirm that a path exists between `src` and `target`. We then set `isPrerequisite[src][target]` to `true`.

At the end of this process, we’ll have a 2D array, `isPrerequisite`, where each entry `isPrerequisite[u][v]` tells us whether `u` is a prerequisite for `v`.

#### Algorithm

1. Initialize a 2D boolean array `isPrerequisite` of size `numCourses x numCourses` to track direct prerequisite relationships between courses.

2. Populate the `isPrerequisite` matrix based on the `prerequisites`:
  - For each pair in `prerequisites`, mark `isPrerequisite[edge[0]][edge[1]]` as `true` to indicate that `edge[0]` is a prerequisite for `edge[1]`.

3. Compute transitive closure of the prerequisite relationships using the Floyd-Warshall algorithm:
  - For each possible intermediate course `intermediate`:
    - For each source course `src`:
      - For each target course `target`:
        - Update `isPrerequisite[src][target]` to include indirect relationships:
          - If `src` can reach `intermediate` and `intermediate` can reach `target`, then `src` can reach `target`.

4. Initialize an empty list `answer` to store the results of the queries.

5. For each query in `queries`:
  - Add the value of `isPrerequisite[query[0]][query[1]]` to the `answer` list, indicating whether `query[0]` is a prerequisite for `query[1]`.

6. Return the `answer` list containing the results for all queries.

#### Implementation

<iframe src="https://leetcode.com/playground/LU6eyzQL/shared" frameBorder="0" width="100%" height="500" name="LU6eyzQL"></iframe>

#### Complexity Analysis

Let $N$ be the number of courses (`numCourses`) and let $Q$ be the size of the `queries` list. In the worst case, the size of the `prerequisites` list can grow up to $\frac{N \cdot (N - 1)}{2}$, when every course is a prerequisite for every other course, forming a complete directed graph.

- Time complexity: $O(N^3 + Q)$.

  We iterate over each node in three nested loops, so this step takes $O(N^3)$. To answer each query we need constant time to retrieve from the map and hence it's $O(Q)$ to answer all queries. Hence, the total time complexity equals $O(N^3 + Q)$.

- Space complexity: $O(N^2)$

  We need a 2D array `isPrerequisite` with size $O(N^2)$ to store the answer for every pair of nodes, hence the total space complexity is equal to $O(N^2)$.

---