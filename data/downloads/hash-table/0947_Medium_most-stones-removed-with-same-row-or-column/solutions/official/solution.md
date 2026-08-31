# Official Solution

**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solution/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a 2-D plane with `n` stones placed at integer coordinates, where a stone can be removed only if another stone shares either its row or column. Our task is to determine the maximum number of stones that can be removed from the plane under these conditions.

---

### Approach 1: Depth First Search

#### Intuition

Two stones are considered "connected" if they share a row or column, but this connection extends beyond just pairs of stones. If stone A is connected to stone B and stone B is connected to stone C, then all three stones form part of the same group, even if A and C don’t directly share a row or column. This concept is akin to connected components in graph theory, where a connected component is a group of nodes where you can reach any node from any other node in the group. Take a look at the illustration below to visualize the components:

![connected components](../Figures/947_re/components.png)

Since every stone in a connected component shares a row or column with at least one other stone, we can remove all but one stone. The remaining stone cannot be removed as it no longer shares coordinates with any other stone, having eliminated all others in its component.

Therefore, if our 2-D plane contains multiple connected components, each can be reduced to a single stone. The maximum number of stones that can be removed can be mathematically expressed as:

```
Max removable stones = Total stones - Number of connected components
```

<details>
  <summary>Proof that in a connected component of stones, we can remove all but one stone.</summary>
  
Base case: For $n \leq 2$, the statement is trivially true.

- For $n = 1$, we can't remove any stones.
- For $n = 2$, we can remove one stone, leaving the other.

Inductive hypothesis: Assume the statement holds for all connected components of size $k$ or less, where $k \geq 2$.

Inductive step: Consider a connected component $C$ of size $k + 1$.

1. Choose an arbitrary stone $S$ to keep.
2. The remaining $k$ stones form $m$ connected sub-components $C_1$, $C_2$, ..., $C_m$, where $1 ≤ m ≤ k$.
3. Let $s_1$, $s_2$, ..., $s_m$ be the sizes of these sub-components. We know that: $s_1 + s_2 + ... + s_m = k$
4. For each sub-component $C_i$:
    1. By the inductive hypothesis, we can remove all but one stone from $C_i$.
    2. Choose to keep the stone in $C_i$ that is connected to $S$ in the original component $C$.
5. After applying step 4 to all sub-components, we have removed: $(s_1 - 1) + (s_2 - 1) + ... + (s_m - 1) = (s_1 + s_2 + ... + s_m) - m = k - m$ stones
6. We are now left with $m + 1$ stones: the $m$ stones we kept from each sub-component, plus our original chosen stone $S$.
7. Each of these $m$ stones shares either a row or column with $S$ (by our choice in step 4(ii)). Therefore, we can remove these $m$ stones one by one.
8. In total, we have removed $(k - m) + m = k$ stones, leaving only the originally chosen stone $S$.

Conclusion: By the principle of mathematical induction, we've proved that for any connected component of size $n$, we can remove $n - 1$ stones, leaving just one stone.
</details>
<br>

So, our implementation boils down to two parts:
1. Represent the stones as a graph.
2. Count the number of connected components in this graph.

For the first part, we can utilize an adjacency list, where for each stone, we maintain a list of all other stones it's connected to (i.e., shares a row or column with). 

For the second part, we can apply a graph traversal algorithm, such as Depth-First Search (DFS). We start a DFS from an unvisited stone, marking all reachable stones as visited, and count this as one connected component. We repeat this process until all stones are visited. The number of DFS executions will give us the total number of connected components in the grid, after which we can apply the formula above to determine the maximum number of stones that can be removed.

> Note: While we've discussed using depth-first search to explore each connected component, breadth-first search is an equally valid alternative, offering similar time and space complexities.

#### Algorithm

Main method `removeStones`:

- Set `n` as the length of the input array `stones`.
- Initialize a list of lists `adjacencyList`  with `n` empty lists.
- Iterate over each stone `i`:
  - For each stone `i`, iterate over stones `j` from `i+1` to `n-1`:
    - If `stone[i]` shares the same row (`stones[i][0] == stones[j][0]`) or column (`stones[i][1] == stones[j][1]`) as `stone[j]`:
      -  Add `j` to the adjacency list of `i` and `i` to the adjacency list of `j`.
- Initialize a variable `numOfConnectedComponents` to `0`, to keep track of the number of connected components in the graph.
- Create a boolean array `visited` of length `n` initialized to `false`, to track which stones have been visited during the DFS.
- Iterate over each stone `i`:
  - If stone `i` has not been visited, perform a DFS starting from stone `i` to visit all stones in the same connected component.
  - After the DFS completes, increment `numOfConnectedComponents` by `1`.
- Return `n - numOfConnectedComponents` as our answer.

Helper method `depthFirstSearch`:

- Define a method `depthFirstSearch` with parameters: `adjacencyList`, `visited`, and the current `stone`.
- Mark the current `stone` as visited by setting `visited[stone]` to `true`.
- For each `neighbor` of `stone` in the `adjacencyList`:
  - If the neighbor has not been visited:
    - Recursively call `depthFirstSearch` on `neighbor` to visit all stones in the connected component.

#### Implementation

<iframe src="https://leetcode.com/playground/2KezyDco/shared" frameBorder="0" width="100%" height="500" name="2KezyDco"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `stones` array.

- Time complexity: $O(n^2)$

    The graph is built by iterating over all pairs of stones `(i,j)` to check if they share the same row or column, resulting in $O(n^2)$ time complexity.

    In the worst case, the depth-first search will traverse all nodes and edges. Since each stone can be connected to every other stone, the algorithm can visit all $O(n^2)$ edges across all DFS calls.

    Thus, the overall time complexity of the algorithm is $2 \cdot O(n^2) = O(n^2)$.

- Space complexity: $O(n^2)$

    In the worst case, any two stones could share the same row or column. So, the `adjacencyList` could store up to $n^2$ edges, taking $O(n^2)$ space.

    The `visited` array takes an additional linear space.

    The recursive DFS call stack can go as deep as the number of stones in a single connected component. In the worst case, this depth could be $n$, leading to $O(n)$ additional space for the stack.

    Thus, the space complexity of the algorithm is $2 \cdot O(n) + O(n^2) = O(n^2)$.

---

### Approach 2: Disjoint Set Union

#### Intuition

A Disjoint Set Union (or Union-Find) is an efficient data structure for identifying connected components in a graph. It helps us group elements into disjoint sets, determine which set an element belongs to, and efficiently merge sets—exactly what we need here. If you are unfamiliar with DSU, have a look at this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/) for in-depth explanation.

We begin by treating each stone as a separate set, meaning every stone starts off in its own connected component. Then, we iterate over each pair of stones and merge (union) them if they share a common row or column.

In our Union-Find data structure, we also maintain a `count`, which keeps track of the total number of separate connected components in the graph. This `count` is initially set to `n`, the total number of stones. Each successful union operation indicates that two separate components have merged into one, so we decrement the `count`.

After processing all possible pairs of stones, the value of `n - count` gives us the maximum number of stones that can be removed.

#### Algorithm

Main method `removeStones`:
 
- Set `n` as the length of the input array `stones`.
- Initialize a `UnionFind` object `uf` with `n` as the size.
- Iterate over each stone `i`:
  - For each `i`, iterate over stones `j` from `i+1` to `n-1`:
    - If stone `i` shares the same row (`stones[i][0] == stones[j][0]`) or column (`stones[i][1] == stones[j][1]`) as stone `j`:
      - Perform a `union` operation on `i` and `j`.
- Return `n - uf.count`.

Helper class `UnionFind`:

- Define a class `UnionFind` with fields: an integer array `parent` and a variable `count`.
- Override the default constructor:
  - Initialize `parent` to size `n` with all elements set to `-1`.
  - Set `count` to `n`, representing the initial number of connected components.
  
Helper method `find(node)` [`UnionFind`]:

- If the parent of `node` is `-1`, return `node` as it is its own root.
- Otherwise, recursively call `find` on `parent[node]`, set its result to `parent[node]` and return it.

Helper method `union(n1, n2)` [`UnionFind`]:

- Find the roots of `n1` and `n2` using the `find` method and store it in `root1` and `root2`, respectively.
- If `root1` is equal to `root2`, both stones are already in the same connected component, so return.
- If `root1` and `root2` are different, merge the two components by setting `parent[root1]` to `root2`.
- Decrement `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/FFRQ5ohm/shared" frameBorder="0" width="100%" height="500" name="FFRQ5ohm"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `stones` array. 

* Time complexity: $O(n^2 \cdot \alpha(n))$

    Initializing the `parent` array with `-1` takes $O(n)$ time.

    The nested loops iterate through each pair of stones `(i, j)`. The number of pairs is $\frac{n(n-1)}{2}$, which is $O(n^2)$.

    For each pair, if the stones share the same row or column, the `union` operation is performed. The `union` (and subsequent `find`) operation takes $O(\alpha(n))$, where $\alpha$ is the [inverse Ackermann function](https://www.gabrielnivasch.org/fun/inverse-ackermann).

    Thus, the overall time complexity of the algorithm is $O(n^2 \cdot \alpha(n))$.

* Space complexity: $O(n)$

    The only additional space used by the algorithm is the `parent` array, which takes $O(n)$ space.

---

### Approach 3: Disjoint Set Union (Optimized)

#### Intuition

The most time-consuming part of our previous algorithms has been iterating through every possible pair of stones, but can we do better? 

In our earlier approach, each stone was treated as a distinct entity. In this improved method, we'll break each stone down into two entities: a row index and a column index. Although this effectively doubles the total number of nodes in the graph, it doesn't affect our solution since our goal is to find the number of connected components, not the number of nodes within each component.

When we treat the row and column indices as separate entities, all stones that share the same row or column index become implicitly connected, eliminating the need to manually connect these stones. However, we do need to connect the row and column indices of a stone since they were originally part of the same element.

This optimization condenses our algorithm into a single step: looping through the input array `stones` and unioning the row and column indices of each element. However, this approach introduces two challenges:

1. Differentiating Between Row and Column Elements: 
    If a row and column share the same value, how do we distinguish between them? For instance, consider two stones positioned at (x, y) and (y, z). If we union x with y, and y with z, the Disjoint Set Union (DSU) might incorrectly consider the two stones as connected, which is not necessarily true. To address this, we differentiate between row and column elements by offsetting the column value by a large constant that places it beyond the range of valid row values. We use 10,001 for this purpose, as the range of row indices is [0, 10,000].

2. Counting the Number of Connected Components:
    Initially, we assumed the number of connected components was `n` since each stone was treated as a separate node. However, in this approach, a stone is no longer the basic unit in the graph. While it might seem logical to consider the number of nodes as twice the number of stones, this assumption is incorrect because row and column indices are likely to be repeated among stones and thus will not form separate nodes in the graph. 
    
    To accurately track the number of nodes, we maintain a set called `uniqueNodes`. Before performing a union operation, we check if the nodes (row and column) have been encountered before. If not, these are new nodes in the graph and can initially be considered separate components, so we increment our count. If the union operation is successful, we subsequently decrease the count.

After all operations are complete, the count will store the number of connected components in the graph.

#### Algorithm

Main method `removeStones`:
 
- Set `n` as the length of the input array `stones`.
- Create an instance of the `UnionFind` class `uf` with a size of `20002` to handle the coordinate range.
- Loop through each stone `i` in `stones`:
  - Call `uf.union()` to union the x-coordinate (`stones[i][0]`) and the y-coordinate offset by `10001` (`stones[i][1] + 10001`).
- Return `n - uf.componentCount` as our result.

Helper class `UnionFind`:
- Define a class `UnionFind` with fields: an integer array `parent`, a variable `componentCount`, and a set `uniqueNodes`.
- Override the default constructor:
  - Initialize `parent` to size `n` with all elements set to `-1`.
  - Set `componentCount` to `0` to track the number of connected components.
  - Initialize `uniqueNodes` to track which nodes have been processed.

Helper method `find(node)` [`UnionFind`]:

- If `node` is not in `uniqueNodes`:
  - Increment `componentCount` and add the node to `uniqueNodes`.
- If the parent of the `node` is `-1`:
  - Return `node` itself as it is its own parent.
- Otherwise, recursively call `find` on `parent[node]`, set its result to `parent[node]` and return it.

Helper method `union(n1, n2)` [`UnionFind`]:

- Find the root of `n1` and `n2` using the `find` method and store it in `root1` and `root2`, respectively.
- If the roots are the same, they are already in the same component, so return.
- Otherwise, merge the two components by setting `parent[root1]` to `root2`.
- Decrement `componentCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/65v9h49d/shared" frameBorder="0" width="100%" height="500" name="65v9h49d"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `stones` array.

* Time complexity: $O(n)$

    Since the size of the `parent` array is constant (`20002`), initializing it takes constant time. 
    
    The `union` operation is called `n` times, once for each stone. All `union` and `find` operations take $O(\alpha(20002)) = O(1)$ time, where $\alpha$ is the inverse Ackermann function.

    Thus, the overall time complexity is $O(n)$.

* Space complexity: $O(n + 20002)$

    The `parent` array takes a constant space of `20002`.

    The `uniqueNodes` set can have at most $2 \cdot n$ elements, corresponding to all unique $x$ and $y$ coordinates. The space complexity of this set is $O(n)$.

    Thus, the overall space complexity of the approach is $O(n + 20002)$.

    > While constants are typically excluded from complexity analysis, we've included it here due to its substantial size.

---