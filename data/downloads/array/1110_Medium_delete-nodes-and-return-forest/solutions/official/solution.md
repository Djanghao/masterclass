# Official Solution

**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solution/](https://leetcode.com/problems/delete-nodes-and-return-forest/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a binary tree `root` where each node has a unique value, and an array `to_delete` containing values of nodes to delete. The goal is to delete all nodes with values in `to_delete` and return all the remaining root nodes.  

> Note: As a reminder, a root node is a node that does not have a parent. 

Handling the children first prevents premature removal of nodes and ensures that all nodes are correctly added to the forest. This principle is crucial to solving the problem effectively.  

!?!../Documents/1110/slideshow.json:960,540!?!

To optimize lookup time for deletions, `to_delete` is converted into a set. Using a set allows constant time $O(1)$ checks to determine if a node should be deleted, which is more efficient compared to linear time array lookups.

---

### Approach 1: Recursion (Postorder Traversal)

#### Intuition

We mentioned the need to process each node's children before the node itself. One traversal method that aligns with this requirement is postorder traversal. In postorder traversal, we visit the left child, then the right child, and finally the parent node. This sequence ensures that by the time we reach a node, its entire subtree has already been processed, allowing us to safely delete the node if necessary.

In contrast, preorder and inorder traversals do not meet this requirement. In preorder traversal, we visit the parent node before its children, risking deletion of a node before its children are handled, potentially losing subtrees. In inorder traversal, we first visit the left child, then the parent node, and finally the right child, partially processing the subtree before addressing the parent node, which can lead to incomplete handling of nodes and subtree loss.

To solve this problem, we recursively traverse each node's left and right children before processing the node itself. If the current node needs deletion, we check its children. If they are not null, we add them to the forest as new roots. Finally, we delete the current node by returning null to its parent.

Special handling is required for the root node. After processing the entire tree, if the root is not null and hasn't been deleted, it should be added to the forest as well.

#### Algorithm

1. Initialization:
    - Convert the `to_delete` array to a set for efficient lookups and store it as `toDeleteSet`.
    - Create an empty list `forest` to store the roots of the resulting forest.

2. Recursive Traversal: Perform a postorder traversal to ensure that we process all descendant nodes before the current node (`node`):
    - Recursively call `processNode` for the left child of `node` and update the left child with the return value.
    - Similarly, recursively call `processNode` for the right child of `node` and update the right child with the return value.

3. Node Evaluation:
    - Check if the current `node` needs to be deleted by checking if its value exists in the `toDeleteSet`. If the node needs to be deleted:
        - If `node` has a left child that is not `null`, add the left child to the `forest`.
        - If `node` has a right child that is not `null`, add the right child to the `forest`.
        - Delete the current `node` and return `null` to effectively remove the node by not reconnecting it to its parent.
    - If the node is not to be deleted, return the `node` itself.

#### Implementation

<iframe src="https://leetcode.com/playground/JJn3hfWR/shared" frameBorder="0" width="100%" height="500" name="JJn3hfWR"></iframe>

#### Complexity Analysis

Let $n$ denote the number of nodes in the binary tree `root`.

- Time Complexity: $O(n)$

    Recursive traversal of each node in the binary tree takes $O(n)$ time.
    
    Initializing and converting the `to_delete` list into a set takes $O(m)$ time, where $m$ is the number of elements in `to_delete`. Since $m \leq n$, this operation is bounded by $O(n)$.
    
    The `processNode` function recursively visits each node exactly once. Operations such as checking if the node's value is in `toDeleteSet`, adding the node's children to `forest` if it's to be deleted, and deleting the node are constant time operations, $O(1)$.
    
    Therefore, the overall time complexity is $O(n)$.

- Space Complexity: $O(n)$ 

    Each recursive call to `processNode` allocates a stack frame. In the worst-case scenario of an unbalanced tree, the maximum number of stack frames could be $n$, leading to $O(n)$ space complexity due to the call stack.
    
    The `toDeleteSet` uses $O(m)$ space, where $m$ is the number of elements in `to_delete`. Since $m \leq n$, the space complexity is $O(n)$.
    
    The `forest` list could potentially store up to $n$ nodes if each deleted node becomes a separate tree, resulting in $O(n)$ space.
    
    Apart from these data structures, the algorithm uses a constant amount of space for local variables, contributing $O(1)$ additional space complexity.

  Thus, the overall space complexity is $O(n)$.

--- 

### Approach 2: BFS Forest Formation

#### Intuition

In the previous approach, we recursively traversed the nodes of the binary tree `root` using the postorder traversal algorithm. An alternative is applying an iterative approach, using a queue for breadth-first search (BFS). This allows us to process each node level by level. Starting with the root node in the queue, we handle each node and its children iteratively, disconnecting nodes marked for deletion and adding any remaining nodes to the forest.

BFS explores all nodes at the current depth before progressing to nodes at deeper levels. We use a queue for BFS to manage traversal order, ensuring nodes are visited level by level.

Starting BFS with the root node, we systematically process the tree from the top down. As each node is processed, we assess if it needs deletion. If so, we disconnect it from its parent and potentially treat its children as new roots for the forest by enqueuing them.

We have to make sure we are not losing any nodes in the subtree while disconnecting a node, by pushing its children to the queue before deleting that node. This way, the children can be handled as potential new roots for the forest.

If a node's children need to be deleted, we disconnect them as well. Finally, after processing all nodes, we check the root node separately. If the root was not deleted, we will add it to the forest as well.

#### Algorithm

1. Check if the root is null. If so, return an empty list.
2. Create an unordered set `toDeleteSet` from the `to_delete` list for efficient lookup.
3. Initialize an empty list `forest` to store the roots of the resulting trees.
4. Create a queue `nodesQueue` and push the root node into it.
5. While the queue is not empty:
   a. Dequeue the front node as `currentNode`.
   b. If `currentNode` has a left child:
      - Push the left child to the queue.
      - If the left child's value is in `toDeleteSet`, set `currentNode->left` to null.
   c. If `currentNode` has a right child:
      - Push the right child to the queue.
      - If the right child's value is in `toDeleteSet`, set `currentNode->right` to null.
   d. If `currentNode`'s value is in `toDeleteSet`:
      - If `currentNode` has a non-null left child, add it to `forest`.
      - If `currentNode` has a non-null right child, add it to `forest`.
6. After processing all nodes, check if the root's value is not in `toDeleteSet`:
   - If true, add the root to `forest`.
7. Return the `forest` list containing the roots of the resulting trees.

#### Implementation

<iframe src="https://leetcode.com/playground/X3L8prPo/shared" frameBorder="0" width="100%" height="500" name="X3L8prPo"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the binary tree `root`.

- Time Complexity: $O(n)$

    We visit each node of the binary tree exactly once using a BFS traversal, which takes $O(n)$ time.

    The set initialization, converting the `to_delete` list to a set, takes $O(m)$ time, where $m$ is the number of elements in `to_delete`. Since $m \leq n$, this operation is bounded by $O(n)$.

    During the BFS traversal, operations such as checking if a node's value is in the `toDeleteSet`, adding the node's children to the `forest` if the node is to be deleted, and disconnecting child nodes are performed in constant time, $O(1)$.

    Thus, the overall time complexity is $O(n)$.

- Space Complexity: $O(n)$

    The space complexity of the queue used for BFS is $O(n)$ in the worst case, where all nodes are stored in the queue simultaneously.

    The `toDeleteSet` uses $O(m)$ space, where $m$ is the number of elements in `to_delete`. Since $m \leq n$, this is bounded by $O(n)$.

    The `forest` list could store up to $n$ nodes in the worst case where each node becomes a separate tree, resulting in $O(n)$ space.

    Beyond the queue, the `toDeleteSet`, and the `forest` list, the algorithm uses a constant amount of auxiliary space for local variables, adding an extra space complexity of $O(1)$.

    Thus, the overall space complexity is $O(n)$.

---