# Official Solution

**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solution/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a binary tree `root` and an integer `target`. Our objective is to delete all the leaf nodes of the binary tree with the value `target`. 

> Note: Leaf nodes are the nodes in the tree that do not have children.

**Key Observations:**

1. While deleting nodes, it's important to maintain the structure of the binary tree. Deleting a leaf node may require updating its parent's pointer to null, potentially affecting the entire structure of the tree.
2. Deleting a leaf node will alter the binary tree, potentially causing the parent node to become a leaf node. 

---

### Approach 1: Recursion (Postorder Traversal)

#### Intuition

Since deleting a child node might transform a parent node into a new leaf node, we should start checking and removing qualifying leaf nodes from the bottom of the tree. We will examine each level as we ascend the tree to ensure we identify all nodes requiring removal. This process of checking from the bottom to the top sets our traversal order.

Postorder traversal efficiently deletes targeted nodes in a binary tree by starting at the deepest leaves and moving upward. This ensures that each node is assessed for deletion only after its descendants, recursively capturing any new leaf nodes created by prior deletions. The process continues until the entire tree is covered, systematically eliminating all nodes with the target value.

The following is an illustration demonstrating the postorder traversal approach:  

!?!../Documents/1325/slideshow.json:960,540!?!

#### Algorithm

1. Base Case: If `root` is `null`, return `null`, to handle the conditions of an empty tree or traversing beyond the leaf nodes.
2. Recursive Traversal: Perform a postorder traversal to ensure that we process all descendant nodes before the current node (`root`):
    - Recursively call `removeLeafNodes` for the left child of the `root` and update the left child with the return value.
    - Similarly, recursively call `removeLeafNodes` for the right child of `root` and update the right child with the return value.
3. Node Evaluation: 
    - Check if the current `root` node is a leaf node and if its value equals the `target`. If both conditions are satisfied, return `null` to effectively delete the node by not reconnecting it to its parent.
    - If the node is neither a leaf nor matches `target`, return the `root` itself.

#### Implementation

<iframe src="https://leetcode.com/playground/Wk6ubdQn/shared" frameBorder="0" width="100%" height="497" name="Wk6ubdQn"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the binary tree `root`.  

- Time Complexity: $O(n)$ 

    We recursively visit each node of the binary tree exactly once, which takes $O(n)$ time.

    At each node, operations such as checking if the node is a leaf, verifying if its value matches the target, and potentially setting the node to `null` are executed in constant time.

    Since each node in the tree is visited exactly once, and a constant amount of work is done per node, the overall time complexity remains $O(n)$.

- Space Complexity: $O(n)$

    For each recursive call to the `removeLeafNodes` function, a frame is allocated on the call stack. This frame is used to store function parameters, local variables, and the return address.  

    The maximum number of frames on the call stack depends on the height of the binary tree. The height of a binary tree is defined as the maximum distance from the root to any leaf node. 

    In an unbalanced tree, such as a linear tree where each node has only one child, the height of the tree is equal to the number of nodes, denoted as $n$. Consequently, the call stack may grow to a depth of $n$ frames, leading to a space complexity of $O(n)$.  

    Beyond the recursive call stack, the algorithm uses a constant amount of auxiliary space for local variables, adding an extra space complexity of $O(1)$.  
    
--- 

### Approach 2: Iterative (PostOrder Traversal)

#### Intuition

In the previous approach, we traversed the nodes of the binary tree `root` recursively using the postorder traversal algorithm. Alternatively, we can use an iterative approach. While the recursive approach is simpler to implement, understanding the iterative method is advantageous, as it avoids the need for numerous recursive function calls. 

Notice that we need a data structure to keep track of the nodes encountered on our path to the leaf nodes. This is essential because in the postorder traversal algorithm, we must visit the children before visiting the parents.

The stack's LIFO property makes it a suitable choice for this task. Nodes encountered earlier can be stored on the stack and later accessed as we ascend from leaf nodes toward the root during processing.   

We can leverage the stack by continuously pushing the leftmost nodes of the tree onto it. Once a node with no left child is encountered, we then explore any right children, pushing these onto the stack as well. This method ensures that we visit all child nodes before their parent node, aligning with the requirements of postorder traversal.

The stack's role is to store nodes during the exploration of their subtrees to the left and right, facilitating revisiting as we ascend towards the `root`. 

To prevent revisiting right subtrees and potentially causing infinite loops, we use a variable to track whether a right subtree has been recently visited. This check is performed before moving to a right child and prevents re-entry into subtrees that have already been processed.

When revisiting a node from the stack, we can be certain that both its left and right subtrees have been fully explored. If, at this point, the node is a leaf and its value matches the target, it is removed by updating the parent's reference to it to nullptr. We can access the parent of any current node immediately by querying the top of the stack at that instant.

#### Algorithm

1. Initialize an empty `stack` to hold nodes during traversal.
2. Set `currentNode` to `root` to start traversal from the `root`.
3. Use `lastRightNode` as a marker to remember the last right subtree visited to avoid revisiting and potential infinite loops.
4. Continuously push the left children of `currentNode` onto the `stack` until a `null` is reached, ensuring that the traversal reaches the leftmost node first.
5. At each node, after popping from the stack, check if there is an unexplored right subtree that has not been recently visited, using `lastRightNode` for comparison. If there is, move to the right subtree and repeat the left push process for this subtree.
6. After ensuring no unexplored right subtrees are left, consider the current node for removal: 
7. Determine if the current node is a leaf and check if the leaf node's value equals `target`.
    - If both conditions are met, disconnect the node from the tree by updating its parent's child reference to `null`:
        - If `stack` is empty, it means `root` itself is a target leaf node. Return `null` to indicate the entire tree should be removed.
        - Otherwise, identify the parent of `currentNode` (the next node in the stack) and set the appropriate child reference (left or right) to `null` to disconnect the leaf.
8. Continue the loop until both `stack` is empty and `currentNode` is `null`, which indicates that all nodes have been processed.
9. Finally, return `root`, representing the modified tree with the target leaves removed.


#### Implementation

<iframe src="https://leetcode.com/playground/QJ7ZvGXX/shared" frameBorder="0" width="100%" height="500" name="QJ7ZvGXX"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the binary tree `root`.

- Time Complexity: $O(n)$

    Each of the above operations—such as pushing, popping, checking node conditions, updating references, and managing the `prev` variable—is executed at a constant time for each node. 
    
    Since every node in the tree undergoes these operations exactly once, the dominant factor in the time complexity is the number of nodes $n$. Therefore, the combined time complexity of all these operations is $O(n)$.

- Space Complexity: $O(n)$

    The stack is used to simulate the depth-first traversal of the tree, specifically mimicking a postorder traversal in this case.

    A few auxiliary variables (such as `cur`, `prev`, and `parent`) are used, but they occupy constant space, $O(1)$.

    In an unbalanced tree, like a skewed tree where each node has only one child, the height of the tree equals the number of nodes, denoted as $n$. Therefore, the call stack may grow to a depth of $n$ frames, resulting in a space complexity of $O(n)$.
    
---