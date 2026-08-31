# Official Solution

**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solution/](https://leetcode.com/problems/find-all-the-lonely-nodes/solution/)

---

## Solution

---

### Approach 1: Depth-First Search (DFS)

#### Intuition

The lonely nodes in the given binary tree are nodes whose parent node has only one child. We need a way to visit each node and check if it has a sibling or not. If not, then we should add the value to the answer list.

> If you are not familiar with tree traversal, check out our [Explore Card](https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/)

There are two ways to traverse the binary tree, depth-first search (DFS) and breadth-first search (BFS). In this approach, we will use DFS to recursively visit each node to check if it's lonely or not. We will assign a boolean flag `isLonely` a value of `true` if the current node has no siblings, and `false` if it does. If we are calling DFS for the right child of the current node, we will set `isLonely` to `true` if the left child of the current node is `null` and `false` otherwise. Similarly, when we are calling DFS for the left child of the current node, we will assign the value `true` to `isLonely` if the right child is `null`, and `false` otherwise. This way we can check if a node is lonely and then accordingly add it to the answer list.

![Nodes with their isLonely value](../Figures/1469/1469A.png)

#### Algorithm

1. Define the recursive function `DFS` that takes `root`, a boolean variable `isLonely`, and a list of lonely nodes `ans` as arguments.
2. Return from `DFS` if `root` is `NULL`.
3. We will call `DFS` with `isLonely` value as `false` because the root node is not lonely, as it does not have a parent node.
4. Add the `root` value to `ans` if the flag `isLonely` is `true`.
5. Recursively handle the left child of `root` and mark the flag as `true` if the right child is `NULL`.
6. Recursively handle the right child of `root` and mark the flag as `true` if the left child is `NULL`.
7. Call `DFS` with root and `false` as `isLonely`.
8. Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/7p9gCfPU/shared" frameBorder="0" width="100%" height="429" name="7p9gCfPU"></iframe>

#### Complexity Analysis

Here $N$ is the number of nodes in the tree.

* Time complexity: $O(N)$

  Visiting each node only once results in a total time complexity of $O(N)$.

* Space complexity: $O(N)$

  The main space required is the recursion stack space. The maximum number of active function calls will be equal to the height of the tree and that can be at max equal to $N$ in the case of skewed tree. This makes the space complexity $O(N)$.

---

### Approach 2: Breadth-First Search (BFS)

#### Intuition

The other way to traverse the nodes in the tree is the breadth-first search (BFS). We will implement BFS iteratively. Similar to the previous approach, we will store a boolean variable `isLonely` along with the current node in the queue, which will denote if this node has a sibling or not. When we iterate over a node, we will check the value of the boolean flag and add it to the answer list if the flag is `true`.

#### Algorithm

1. Initialize a queue of `{node, flag}` pairs and add a pair with `root` as the node and `false` as the flag value.
2. Iterate over the pairs in the queue until the queue is empty.
3. Pop the pair from the queue and store the current node as `currNode` and flag it as `isLonely`.
4. If `isLonely` is `true` then add the node's value to the list `ans`.
5. Enqueue the left and right child in the queue with the updated value of the boolean flag.
6. After iterating over all nodes return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/LP3PBmzC/shared" frameBorder="0" width="100%" height="500" name="LP3PBmzC"></iframe>

#### Complexity Analysis

Here $N$ is the number of nodes in the tree.

* Time complexity: $O(N)$

  We will be iterating over each node only once and hence the total time complexity is equal to $O(N)$.

* Space complexity: $O(N)$

  The queue can grow to size $N$. So the space complexity is $O(N)$.
---