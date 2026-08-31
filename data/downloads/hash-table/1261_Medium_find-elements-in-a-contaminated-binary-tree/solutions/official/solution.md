# Official Solution

**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solution/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solution/)

---

[TOC]

## Solution

---

### Overview 

We are given a binary tree `root` which follows the following 3 rules:

1. The value of the root node `root` is always 0
2. Given a node in the tree with value `x`, the value of its left child (if it exists) is always `x * 2 + 1`
3. Given a node in the tree with value `x`, the value of its right child (if it exists) is always `x * 2 + 2`

This tree is then "contaminated", which means the values of all nodes are overwritten to `-1`. We now have to find out what values existed in the tree before it was contaminated. We do this by implementing two functions:

1. `FindElements(TreeNode* root)` is our constructor that gives us the contaminated binary tree `root`
2. `bool find(int target)` should return whether or not `target` is one of the original values in `root` before contamination

### Approach 1: Tree Traversal (DFS)

#### Intuition

Our goal is to restore the original values of the tree before it was contaminated. The problem gives us three key rules that define how values are assigned to nodes based on their parent. If we carefully analyze these rules, we can see that the root node always has a value of `0`. From this starting point, we can apply the second rule to determine that the left child (if it exists) must have a value of `0 * 2 + 1 = 1`, and the third rule tells us that the right child must have a value of `0 * 2 + 2 = 2`. Once we establish these values, we can continue applying the same logic to the children of these nodes, propagating the correct values throughout the tree.

This observation naturally leads to a recursive approach. Since each node's value is determined by its parent, we can traverse the tree while applying these rules at every step, ensuring that each node is assigned its correct value. To keep track of the values we recover, we store them in a set called `seen`. This allows us to efficiently check whether a given value exists in the tree whenever needed.

The best way to traverse the tree in this scenario is [depth-first search (DFS)](https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/). DFS is particularly useful here because it allows us to fully process one branch of the tree before moving to the next, making it a straightforward way to assign values as we traverse. The DFS process follows a simple structure:  

1. If we reach a `null` node, we stop and return immediately, as there’s nothing left to explore.  
2. For each valid node, we store its recovered value in our `seen` set.  
3. We then move to the left child, using rule 2 (`currentValue * 2 + 1`) to compute its value before making a recursive DFS call.  
4. We move to the right child next, using rule 3 (`currentValue * 2 + 2`) before making another recursive DFS call.  

To implement this, we define a function `DFS(currentNode, currentValue)`, where `currentNode` represents the node we are currently processing, and `currentValue` is its correct original value. This function will handle the recursive traversal and ensure each node gets assigned its correct value.

Since we always know the parent’s value, we can immediately compute the child's values and pass them into the next recursive call. By the end of this process, we will have fully reconstructed the tree’s original values, and since all recovered values are stored in `seen`, checking for the existence of a number in the tree becomes a simple lookup operation.

#### Algorithm

- Declare a HashSet `seen` as a  member of the `FindElements` class
- For `FindElements(root)` constructor:
    - Initialize `seen` to an empty set.
    - Call the helper function `dfs(root, 0)`.
- For helper function `dfs(currentNode, currentValue, seen)`:
    - If the `currentNode` is `null`, then we return.
    - Otherwise, we process the value of `currentNode` by adding `currentValue` to `seen`.
    - We then recurse to the left and right children:
        - For left child, we call `dfs(currentNode.left, currentValue * 2 + 1, seen)`.
        - For right child, we call `dfs(currentNode.right, currentValue * 2 + 2, seen)`.
- For `find(target)` function:
    - We return whether or not `seen` contains `target`: return `seen.contains(target)`.

#### Implementation

<iframe src="https://leetcode.com/playground/LSchxPfd/shared" frameBorder="0" width="100%" height="412" name="LSchxPfd"></iframe>

#### Complexity Analysis

Let $N$ be the number of nodes in `root`.

* Time Complexity: $O(N)$ for `FindElements`, $O(1)$ for `find`

    For the `FindElements` constructor, traversing through `root` and processing all nodes takes $O(N)$ time. Afterwards, each call of `find` looks up a value in our set, which takes $O(1)$ time.

* Space Complexity: $O(N)$

    After the `FindElements` constructor is called, our set contains the values of all the nodes of `root`, which takes $O(N)$ space. 

---

### Approach 2: Tree Traversal (BFS)

#### Intuition

In our previous approach, we used depth-first search (DFS) to traverse the tree, assigning the correct values to nodes and storing these values in a set. Now, we will take a different approach using [breadth-first search (BFS)](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/), which follows a different traversal pattern but ultimately achieves the same goal.

To understand the difference, recall that DFS explores a tree by going as deep as possible along one branch before backtracking to explore others. BFS, on the other hand, processes nodes **level by level**, meaning it explores all nodes at a given depth before moving to the next level. This fundamental difference in traversal order leads to a different way of structuring our solution.

To implement BFS, we use a queue, which allows us to control the flow of traversal systematically. We start by inserting the root node into the queue, using it as our initial entry point. Then, as long as the queue is not empty, we repeatedly take the front node, determine its correct original value, and store it in a set for quick lookups later.

Once a node has been processed, we compute the values of its children based on the given rules. If the node has a left child, we use **rule 2** (`n.val * 2 + 1`) to compute its value and enqueue it for future processing. Similarly, if the node has a right child, we use **rule 3** (`n.val * 2 + 2`) and enqueue it as well. This ensures that by the time these children are processed, they already hold their correct recovered values.

Unlike DFS, where we explicitly pass the recovered value through recursive calls, BFS allows us to overwrite the node values directly as we process them. This means that when we remove a node from the queue, its left and right children already have their correct values assigned.

Since BFS naturally ensures that nodes are visited in level order, this guarantees a systematic reconstruction of the entire tree. By the end of the traversal, every node will hold its correct original value, and checking whether a number exists in the tree becomes a simple lookup operation in our set.

#### Algorithm

- Declare a HashSet `seen` as a member of the `FindElements` class
- For `FindElements(root)` constructor:
    - Initialize `seen` to an empty set.
    - Call the helper function `bfs(root)`.
- For helper function `bfs(TreeNode root)`:
    - Initialize a queue which first contains `root`. `root.val` should be set to `0`.
    - While the queue is not empty:
        - Pop the front element of the queue: `currentNode = queue.pop()`.
        - Save the recovered value by adding `currentNode.val` into `seen`.
        - If left child exists, overwrite its value `currentNode.left.val = currentNode.val * 2 + 1` and then enqueue it.
        - If right child exists, overwrite its value `currentNode.right.val = currentNode.val * 2 + 2` and then enqueue it.
- For `find(target)` function:
    - We return whether or not `seen` contains `target`: return `seen.contains(target)`.

#### Implementation

<iframe src="https://leetcode.com/playground/aUjXxUTe/shared" frameBorder="0" width="100%" height="500" name="aUjXxUTe"></iframe>

#### Complexity Analysis

Let $N$ be the number of nodes in `root`.

* Time Complexity: $O(N)$ for `FindElements`, $O(1)$ for `find`

    For the `FindElements` constructor, traversing through `root` and processing all nodes takes $O(N)$ time. Afterwards, each call of `find` looks up a value in our set, which takes $O(1)$ time.

* Space Complexity: $O(N)$

    After the `FindElements` constructor is called, our set contains the values of all the nodes of `root`, which takes $O(N)$ space. 

---