# Official Solution

**Link:** [https://leetcode.com/problems/power-grid-maintenance/solution/](https://leetcode.com/problems/power-grid-maintenance/solution/)

---

According to the problem statement, the original task can be divided into two independent sub-problems: **calculating connected components and maintaining the minimum identifier of currently online power stations**.

For these two sub-problems, we present two solution methods, which can be freely combined as needed.

### Approach 1: Union-Find + Reverse Processing Query

#### Intuition

**Calculate connected components**

Use the Union-Find data structure to calculate connected components. This method assumes the reader is already familiar with the principles, implementation, and path compression optimization of Union-Find.

Merge nodes that have a connected relationship, then use the root node of each set as a handle for the connected component. Subsequently, the query operation of the Union-Find structure can quickly determine which connected component a particular node belongs to.

**Maintaining the minimum identifier of the currently online power stations**

Consider processing the queries in reverse order. From this perspective, an offline operation effectively becomes an online operation. As each power plant comes back online, maintaining the minimum identifier among all online power plants simply requires repeatedly taking the $\min$ and updating it.

To implement reverse query processing, we first need to pre-process the final state of each power plant’s online status. It is easy to notice that a power plant may be taken offline multiple times, and once it is first taken offline, subsequent operations have no further effect on its status. Therefore, during reverse processing, we cannot immediately bring a power plant online upon encountering an offline operation. Instead, we should first check whether this is the first time the power plant was taken offline, and only then make the corresponding adjustments.

In practice, for each power plant $i$, we can count the number of times it is taken offline, denoted as $\textit{offlineCount}_i$. During the reverse processing of the queries, every time we encounter an offline operation, we decrement the corresponding $\textit{offlineCount}_i$ by one. When a power plant $s$ satisfies $\textit{offlineCount}_s = 1$, it indicates that this is the moment when the power plant was first taken offline in the original order of operations.

#### Implementation

<iframe src="https://leetcode.com/playground/i3LVoXJE/shared" frameBorder="0" width="100%" height="500" name="i3LVoXJE"></iframe>

#### Complexity Analysis

Let $m$ be the length of $\textit{connections}$, i.e., the number of edges in the graph; $q$ be the length of $\textit{queries}$; and $α$ be the inverse Ackermann function.

- Time complexity: $O((m + c + q) \times α(c))$.
  
  Assuming the disjoint set union implementation uses path compression, computing the connected components takes $O(m \times α(c))$, preprocessing the minimum number of online sites for each connected component takes $O(c \times α(c))$, and finally traversing the queries in reverse to compute the answers takes $O(q \times α(c))$.

- Space complexity: $O(c)$.
  
  Union-Find, $\textit{online}$, $\textit{offlineCounts}$ and $\textit{minimumOnlineStations}$ all require $O(c)$ space.

### Approach 2: DFS/BFS + Priority Queue

#### Intuition

**Calculate connected components**

Build a graph based on the problem information, then use $\text{DFS}$ (depth-first search) or $\text{BFS}$ (breadth-first search) to calculate connected components.

The specific approach is to traverse all nodes that are not yet part of any connected component, using an outer loop to mark each unvisited node as the entry point of a new component. All nodes that can be reached through this entry node belong to the same connected component, and maintaining this information in the graph is sufficient.

**Maintaining the minimum identifier of the currently online power stations**

It is easy to think of using a priority queue (min-heap) to maintain the indices of online power stations within a connected component. However, when a power station goes offline, performing a deletion operation on the heap can be cumbersome. One solution is to use the lazy deletion technique, where deletions are handled uniformly during the pop operation from the heap.

On the graph, maintain an $\textit{offline}$ property for each power station. If a power station needs to be taken offline, we do not process the priority queue immediately, but only change the $\textit{offline}$ property of the power station. When a query operation occurs, we first check the $\textit{offline}$ property of the queried power station. If it is online, we directly use it as the answer. Otherwise, we pop elements from the top of the priority queue until the queue is empty or the top element's $\textit{offline}$ property is false, at which point the top element is the desired one.

#### Implementation

<iframe src="https://leetcode.com/playground/Q92yih8o/shared" frameBorder="0" width="100%" height="500" name="Q92yih8o"></iframe>

#### Complexity Analysis

Let $m$ be the length of $\textit{connections}$, i.e., the number of edges in the graph; $q$ is the length of $\textit{queries}$.

- Time complexity: $O(m + c \log c + q)$.

  - Mapping requires $O(c + m)$.
  - Take DFS traversal as an example, the traversal itself requires $O(c + m)$, inserting vertices into a priority queue requires $O(c \log c)$, and the total time required for the traversal process is $O(c \log c + m)$.
  - Each vertex is popped from the priority queue at most once during the query phase, and the total query process requires $O(q + c \log c)$.

- Space complexity: $O(c + m)$.
  
  Adjacency list storage requires $O(c + m)$, and the priority queue $\textit{powerGrids}$ requires a total of $O(c)$.

---