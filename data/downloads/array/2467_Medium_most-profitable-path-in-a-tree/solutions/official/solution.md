# Official Solution

**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solution/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a tree with `n` nodes, where `n - 1` edges define its structure. The tree is rooted at node `0`. Additionally, we are provided with an array `amount` of size `n`, where each element represents the value of a node. All values in `amount` are even integers. Finally, we are given an integer `bob`, which indicates the starting node for Bob.

The two players Alice and Bob, traverse the tree simultaneously under the following conditions:

1. Alice starts at node `0` and moves towards a leaf node (a node with only one connection).
2. Bob starts at node `bob` and moves towards node `0` along the shortest path.

For each node visited, the income calculations follow these rules:
- If a player reaches a node first, they collect the full value of that node.
- If both players arrive at the same node at the same time, they split the value equally.
- If a node was previously visited by the other player, no income is collected.

Our goal is to find the largest (maximum) income Alice can collect by choosing an optimal path toward a leaf node.

Let's look at an example of finding the maximum income that Alice can achieve:

!?!../Documents/2467/slideshow.json:960,540!?! 

In the given example, Bob’s path is fixed since he must travel toward node 0, while Alice has multiple choices for reaching a leaf. Some paths might yield higher income than others due to how Bob’s movements impact the node values. The key is to strategically choose a path that maximizes Alice’s total earnings.

---

### Approach 1: Depth-First Search and Breadth-First Search

#### Intuition

We need to find Bob’s path to node `0` and then find the best path Alice can take to maximize her collected amount. Since Bob only has one possible path to node `0` — the unique path from his starting position to the root — we can take advantage of this structure to track Bob’s travel time across each node. 

To find Bob’s path, we use [Depth-First Search (DFS)](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/). DFS is a natural choice because it fully explores each path before backtracking, allowing us to efficiently find the path Bob follows to the root. As we traverse, we record how long it takes Bob to reach each node along his path. Nodes not on this path are ignored since Bob never visits them.

Once Bob’s path is established, our next goal is to find Alice’s optimal path to a leaf node. Unlike Bob, Alice has multiple choices since a tree can have multiple leaves. This means we need an approach that considers all possible paths efficiently.

For this, we use [Breadth-First Search (BFS)](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/). BFS systematically explores all nodes level by level, making it ideal for finding optimal paths. We start at the root node (`0`) and explore all adjacent nodes before moving deeper into the tree. This ensures that every possible path Alice can take is considered.

As Alice traverses, we use Bob’s path information to determine how much of the amount Alice can collect from each node. If Alice reaches a node before Bob, she takes the **full amount**. If Alice and Bob arrive at the same time, Alice only takes **half**. If Alice arrives after Bob, she gets **nothing** from that node.

Whenever Alice reaches a leaf node, we check her accumulated income along that path. If it is greater than the maximum recorded income, we update our maximum. By the end of the BFS traversal, we will have explored all valid paths for Alice and can return the highest income she can achieve.

#### Algorithm

- Initialize `tree` as an adjacency list to store the tree structure.
- Initialize `bobPath` as a hashmap to track how long it takes Bob to traverse from one node to another.
- Initialize `visited` as an array of boolean values to track the explored nodes.
- Store the number of nodes `n`.

- Define a Depth-First Search (DFS) function `findBobPath`:
    - Set `bobPath[sourceNode]` to `time` and `visited[sourceNode]` to `true` to mark the current node as explored.
    - If `sourceNode` is 0, return `true`.
    - Iterate through `adjacentNode` of `sourceNode`:
        - If `visited[adjacentNode]` is set to `false`, recursively call `findBobPath` for the child node and return `true`.
    - Remove `sourceNode`  from `bobPath` and return `false`, indicating that `sourceNode` is not part of Bob's path.

- Define `mostProfitablePath` function:
    - Initialize `maxIncome` to 0 to track the maximum income path.
    - Initialize `nodeQueue` as a queue of integer arrays of size `3`, starting with an initial element `{0,0,0}`.
    - Set `n` as the number of nodes.
    - Resize `tree` to store `n` empty lists.
    - Resize `visited` to store `n` boolean values and set each value to `false`.
    - Iterate through `edges` and build the adjacency list representation of the tree.
    - Call `findBobPath(bob, 0)` to build Bob's path.
    - Set the values of `visited` back to `false`.
    - Iterate through the elements in `nodeQueue`. For each element:
        - Initialize `sourceNode`, `time`, and `income` to the values of the top element of `nodeQueue`.
        - If Alice reaches the node first (`sourceNode` is not in `bobPath` or `bobPath[sourceNode] > time`), add `amount[sourceNode]` to `income`.
        - If Alice and Bob reach the node at the same time (`bobPath[sourceNode] == time`), add half of `amount[sourceNode]` to `income`.
        - If Alice reached a leaf node (`tree[sourceNode]` only has one value and `sourceNode` is not `0`), set `maxIncome` to the maximum of `maxIncome` and `income`.
        - Iterate through `adjacentNode` of `sourceNode`:
            - If `visited[adjacentNode]` is set to `false`:, push an array consisting of `adjacentNode`, `time + 1`, and `income` into `nodeQueue`.
        - Set `visited[sourceNode]` as `true` to mark the current node as explored.
        - Remove the current element from `nodeQueue`.
    - Return `maxIncome`.

#### Implementation

<iframe src="https://leetcode.com/playground/NTXgC95P/shared" frameBorder="0" width="100%" height="500" name="NTXgC95P"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

* Time Complexity: $O(n)$

    To begin, to add all the edges to `tree`, we have to iterate through all the elements of `edges`, which is of size $n - 1$. This leads to a time complexity of $O(n - 1)$, which can be simplified to $O(n)$.

    Next, we have to figure out how long it takes Bob to find the optimal path to node 0. In the worst case, a depth-first search for Bob's path takes $O(n)$ time if Bob traverses through every node to reach node `0`. This leads to a time complexity of $O(n)$.

    Finally, we need to calculate the time it takes for Alice to find the optimal path to a leaf node. Here, a breadth-first search traverses each node until every node has been explored. This leads to a time complexity of $O(n)$.

    Combining these time complexities, the overall time complexity of this solution is $O(3 \cdot n)$, which can be simplified to $O(n)$.

* Space Complexity: $O(n)$
    
    The space complexity is determined by the `bobPath` hashmap, `visited` and `tree` arrays,  `nodeQueue` queue, and the recursive stack.

    Firstly, `bobPath` stores the nodes that bob traverses to reach node 0. In the worst case, Bob has to traverse through every node to reach his destination, leading to a space complexity of $O(n)$.

    The `visited` array is initialized to hold `n` boolean values corresponding to each node, leading to a space complexity of $O(n)$.

    The `tree` 2D array is initialized to hold $n$ nodes and $n - 1$ edges. Across all the nodes, the total number of elements stored in the array is $2 \cdot (n - 1)$, since each edge is stored twice, once for each node. This leads to a space complexity of $O(2 \cdot (n - 1))$, which simplifies to $O(n)$.

    The `nodeQueue` queue tracks all the nodes being traversed in the breadth-first search. In the worst case, `nodeQueue` holds all the nodes in the tree if all other nodes are directly adjacent to node 0. This leads to a space complexity of $O(n)$.

    Finally, the recursive stack stores the recursive calls performed in the depth-first search to find Bob's path. Its space is determined by the height of the tree. In the worst case, Bob has to linearly traverse through every node to reach his destination, leading to a space complexity of $O(n)$.

    Combining these space complexities, the overall space complexity of this solution is $O(5 \cdot n)$, which can be simplified to $O(n)$.

---

### Approach 2: Two Depth-First Searches

#### Intuition

In the previous approach, we used BFS to explore all possible paths Alice could take. However, BFS requires maintaining a queue to track nodes at each level, which can introduce overhead when dealing with large trees. Each node needs to be added and removed from the queue multiple times, leading to additional memory usage.

To optimize this, we can replace BFS with DFS for Alice’s traversal. DFS naturally fits the problem because we can reuse the recursive call stack instead of an explicit queue, reducing memory overhead. This makes the approach more space-efficient while still ensuring that all paths are explored.

We start with a **DFS traversal to find Bob’s path** to node `0`. This step remains unchanged from the previous approach. We record the time Bob takes to reach each node along his path. This information will be used later to determine how much Alice can collect from each node.

Once Bob’s path is identified, we initiate **another DFS traversal for Alice**. During this traversal, we recursively explore each path from node `0` to a leaf, keeping track of Alice’s time and accumulated income. At each node, we compare Alice’s arrival time with Bob’s recorded time:
- If Alice arrives **before** Bob, she collects the full amount.
- If Alice and Bob arrive **at the same time**, she collects half.
- If Alice arrives **after** Bob, she collects nothing.

Since DFS explores one path at a time before backtracking, when Alice reaches a leaf node, we record her total collected income and compare it to the current maximum. We repeat this process until all paths are explored. 

By the end of the traversal, we will have determined the largest income Alice can achieve and return this value as the result.

#### Algorithm

- Initialize `maxIncome` to 0 to track the maximum income path.
- Initialize `tree` as an adjacency list to store the tree structure.
- Initialize `bobPath` as a hashmap to track how long it takes Bob to traverse from one node to another.
- Initialize `visited` as an array of boolean values to track the explored nodes.
- Store the number of nodes `n`.

- Define a Depth-First Search (DFS) function `findBobPath`:
    - Set `bobPath[sourceNode]` to `time` and `visited[sourceNode]` to `true` to mark the current node as explored.
    - If `sourceNode` is 0, return `true`.
    - Iterate through `adjacentNode` of `sourceNode`:
        - If `visited[adjacentNode]` is set to `false`, recursively call `findBobPath` for the child node and return `true`.
    - Remove `sourceNode`  from `bobPath` and return `false`, indicating that `sourceNode` is not part of Bob's path.

- Define a Depth-First Search (DFS) function  `findAlicePath`:
    - Set `visited[sourceNode]` to `true` to mark the current node as explored.
    - If Alice and Bob reach the node at the same time (`bobPath[sourceNode] == time`), add half of `amount[sourceNode]` to `income`.
    - If Alice reached a leaf node (`tree[sourceNode]` only has one value and `sourceNode` is not `0`), set `maxIncome` to the maximum of `maxIncome` and `income`.
    - If Alice reached a leaf node (`tree[sourceNode]` only has one value and `sourceNode` is not `0`), set `maxIncome` to the maximum of `maxIncome` and `income`.
    - Iterate through `adjacentNode` of `sourceNode`:
        - If `visited[adjacentNode]` is set to `false`, recursively call `findAlicePath` for the child node.

- Define `mostProfitablePath` function:
    - Set `n` as the number of nodes.
    - Resize `tree` to store `n` empty lists.
    - Resize `visited` to store `n` boolean values and set each value to `false`.
    - Iterate through `edges` and build the adjacency list representation of the tree.
    - Call `findBobPath(bob, 0)` to build Bob's path.
    - Set the values of `visited` back to `false`.
    - Call `findAlicePath(0, 0, 0, amount)` to find Alice's optimal path, starting from the root node.
    - Return `maxIncome`.

#### Implementation

<iframe src="https://leetcode.com/playground/UjEiiB3w/shared" frameBorder="0" width="100%" height="500" name="UjEiiB3w"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

* Time Complexity: $O(n)$

    To begin, to add all the edges to `tree`, we have to iterate through all the elements of `edges`, which is of size $n - 1$. This leads to a time complexity of $O(n - 1)$, which can be simplified to $O(n)$.

    Next, we have to figure out how long it takes Bob to find the optimal path to node 0. In the worst case, a depth-first search for Bob's path takes $O(n)$ time if Bob traverses through every node to reach node 0. This leads to a time complexity of $O(n)$.

    Finally, the recursive stack stores the recursive calls performed in the depth-first search to find Bob's path. Its space is determined by the height of the tree. In the worst case, Bob has to linearly traverse through every node to reach his destination, leading to a space complexity of $O(n)$.

    Combining these time complexities, the overall time complexity of this solution is $O(3 \cdot n)$, which can be simplified to $O(n)$.

* Space Complexity: $O(n)$
    
    The space complexity is determined by the hashmap `bobPath`, arrays `visited` and `tree`, queue `nodeQueue`, and recursive stack.

    Firstly, `bobPath` stores the nodes that Bob traverses to reach node `0`. In the worst case, Bob has to traverse through every node to reach his destination, leading to a space complexity of $O(n)$.

    The `visited` array is initialized to hold `n` boolean values, leading to a space complexity of $O(n)$.

    The `tree` 2D array is initialized to hold $n$ nodes and $n - 1$ edges. Across all the nodes, the total number of elements stored in the array is $2(n - 1)$, since each edge is stored twice, once for each node. This leads to a space complexity of $O(2(n - 1))$, which simplifies to $O(n)$.

    Finally, the recursive stack stores the recursive calls performed in the depth-first search to find Bob's path. Its space is determined by the height of the tree. In the worst case, Bob has to linearly traverse through every node to reach his destination, leading to a space complexity of $O(n)$.

    Combining these space complexities, the overall space complexity of this solution is $O(4 \cdot n)$, which can be simplified to $O(n)$.

---

### Approach 3: Depth-First Search 

#### Intuition

The previous solution used two separate DFS traversals: one to determine Bob’s path and another to explore Alice’s optimal path. However, this causes redundancy, as each node may be visited twice. Instead, we can optimize the process by combining both tasks into a **single DFS traversal**, ensuring that we only explore each node once.

Our strategy is to use DFS to simultaneously track Bob’s path and compute Alice’s best possible income. Here, we first establish Bob’s travel time to each node. We initialize all node distances to `n`, a value greater than any possible travel time. As we traverse the tree, if a node is part of Bob’s path to `0`, we update its distance to reflect how long it takes for Bob to reach it. Nodes not on Bob’s path retain their initial value, ensuring that they are always considered as being reached **after** Alice.

With Bob’s travel times recorded, we can now determine how much Alice collects from each node while recursively traversing the tree. As Alice moves, we compare her arrival time at each node to Bob’s recorded time. If she reaches a node before Bob, she collects the **full amount**. If she and Bob arrive at the same time, she gets **half**. If she arrives after Bob, she receives **nothing**. By structuring the traversal this way, Alice's maximum income is updated dynamically as she moves deeper into the tree. This ensures that we efficiently compute the highest possible income while keeping the traversal to just one DFS pass.

#### Algorithm

- Initialize `tree` as an adjacency list to store the tree structure.
- Initialize `distanceFromBob` as an array to store the shortest distance of each node from Bob.
- Store the number of nodes `n`.

- Define a Depth-First Search (DFS) function `findPaths`:
  - Initialize `maxIncome` to 0 and `maxChild` to `INT_MIN` to track the maximum income path.
  - If `sourceNode` is `bob`, set its distance to 0; otherwise, set it to `n` (a large value).
  - Iterate through `adjacentNode` of `sourceNode`:
    - If `adjacentNode` is not `parentNode`, recursively call `findPaths` for the child node.
    - Update `distanceFromBob[sourceNode]` as the minimum of its current value and the child's distance plus one.
  - If Alice reaches the node first (`distanceFromBob[sourceNode] > time`), add the node’s `amount` to `maxIncome`.
  - If Alice and Bob reach the node at the same time (`distanceFromBob[sourceNode] == time`), add half of `amount[sourceNode]` to `maxIncome`.
  - If `maxChild` remains `INT_MIN`, return `maxIncome` (indicating a leaf node).
  - Otherwise, return `maxIncome + maxChild` (adding the best income from child nodes).

- Define `mostProfitablePath` function:
  - Set `n` as the number of nodes.
  - Resize `tree` to store `n` empty lists.
  - Iterate through `edges` and build the adjacency list representation of the tree.
  - Resize `distanceFromBob` to store `n` distances.
  - Return the result of `findPaths(0, 0, 0, bob, amount)`, starting from the root node.

#### Implementation

<iframe src="https://leetcode.com/playground/XuZtsRQF/shared" frameBorder="0" width="100%" height="500" name="XuZtsRQF"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

* Time Complexity: $O(n)$

    To begin, to add all the edges to `tree`, we have to iterate through all the elements of `edges`, which is size $n - 1$. This leads to a time complexity of $O(n - 1)$, which can be simplified to $O(n)$.

    Then, we have to figure out how long it takes for Bob to find the path to node `0` and Alice to find an optimal path to a leaf node. Here, a depth-first search visits each node once to process Alice's maximum income based on Bob's distance from his starting point at each node. This leads to a time complexity of $O(n)$.

    Combining these time complexities, the overall time complexity of this solution is $O(2 \cdot n)$, which can be simplified to $O(n)$.

* Space Complexity: $O(n)$
    
    The space complexity is determined by the `distanceFromBob` and `tree` arrays and the recursive stack.

    Firstly, `distanceFromBob` checks every node in the tree, checking if they were traversed by Bob and, if so, how far they are from Bob's starting point. This leads to a space complexity of $O(n)$.

    Next, the `tree` 2D array is initialized to hold $n$ nodes and $n - 1$ edges. Across all the nodes, the total number of elements stored in the array is $2 \cdot (n - 1)$, since each edge is stored twice, once for each node. This leads to a space complexity of $O(2 \cdot (n - 1))$, which simplifies to $O(n)$.

    Finally, the recursive stack stores the recursive calls performed in the depth-first search to find Bob's path. Its space is determined by the height of the tree. In the worst case, Bob has to linearly traverse through every node to reach his destination, leading to a space complexity of $O(n)$.

    Combining these space complexities, the overall space complexity of this solution is $O(3 \cdot n)$, which can be simplified to $O(n)$.

---