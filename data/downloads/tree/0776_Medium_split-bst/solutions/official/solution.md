# Official Solution

**Link:** [https://leetcode.com/problems/split-bst/solution/](https://leetcode.com/problems/split-bst/solution/)

---

[TOC]

## Solution 

---

### Overview

We need to split a binary search tree (BST) into two subtrees based on a given integer `target`. The goal is to create one subtree with nodes that are all less than or equal to the `target` value, and another subtree with nodes that are greater than the `target` value. The input may not necessarily include a node with the exact `target` value and both subtrees should be BSTs.

To solve this problem, we need to understand the properties of a Binary Search Tree (BST). For any parent node in a BST, all values in the left subtree are less than the value of the parent node, and all values in the right subtree are greater. 

Given this property, if we find a node with a value less than or equal to the `target`, we know this node and its left subtree should belong to the subtree containing nodes less than or equal to the `target`. We then recursively adjust its right subtree to ensure it is correctly split according to the `target`. This means the right subtree may contain nodes that are both less than and greater than the `target`, ensuring the binary search tree property is maintained throughout.

Conversely, if a node's value is greater than the `target`, this node and its right subtree should be in the subtree with nodes greater than the `target`. In this case, we recursively adjust the left subtree to separate the nodes correctly.

The recursive process involves visiting each node and deciding how to split its left or right subtree, maintaining the original parent-child relationship as much as possible. When we reach a null node, which is our base case, we return a pair of null nodes, indicating the end of that branch.

Therefore, for each node, we return a pair:

1. The first element is the root of the subtree with nodes less than or equal to the `target`.
2. The second element is the root of the subtree with nodes greater than the `target`.

So now we can think, "What if we start from the root and recursively split the tree into two subtrees based on the `target` value? That way, we can maintain the BST property in each subtree."

This leads us to the idea of using a depth-first search (DFS) approach with recursion.

---

### Approach 1: Recursive Traversal (DFS)

#### Intuition

We want to split BST into two separate BSTs based on a `target` value and we are going to use the DFS approach. 

In our problem statement, we have three conditions:
1. Base case.
2. If the current node's value is less than or equal to the `target`.
3. If the current node's value is greater than the `target`.`

Let's discuss each one of them in detail:

1. If the current node is `null` (base case), it means we've reached the end of a branch, so we can just return a pair of `null` nodes.

2. Now, let's consider the case where the current node's value is less than or equal to the `target`. In this case, we realize that all the nodes in the left subtree are guaranteed to be less than or equal to the `target` (because of the BST property). So, we only need to worry about splitting the right subtree.
    - We recursively call DFS on the right subtree, which will give us two new roots: one for the nodes less than or equal to the `target`, and one for the nodes greater than the `target`.
    - Since the current node and its left subtree are all less than or equal to the `target`, we can update the current node's right child to the root of the subtree with nodes less than or equal to the `target` (from the recursive call).
    - Finally, we return the current node as the root of the subtree with values less than or equal to the `target`, and the root of the subtree with values greater than the `target` (from the recursive call).

3. Now, consider the case where the current node's value is greater than the `target`. In this case, we realize that all the nodes in the right subtree are guaranteed to be greater than the `target` (because of the BST property). So, we only need to worry about splitting the left subtree.
    - We recursively call dfs on the left subtree, which will give us two new roots: one for the nodes less than or equal to the `target`, and one for the nodes greater than the `target` (up to this point).
    - Since the current node and its right subtree are all greater than the `target`, we can update the current node's left child to the root of the subtree with nodes greater than the `target` (from the recursive call).
    - Finally, we return the root of the subtree with values less than or equal to the `target` (from the recursive call), and the current node as the root of the subtree with values greater than the `target`.

As the recursion unwinds, each node processes its left or right subtrees depending on its value relative to the `target`, while maintaining the BST property in each subtree.

The algorithm is visualized below:

!?!../Documents/776/approach1.json:975,555!?!

#### Algorithm

- Base case: If the `root` is `null`, return an array containing two null pointers.
- Check if the root's value is greater than the `target` value:
  - If true, recursively split the left subtree by calling `splitBST(root->left, target)`.
  - Attach the right part of the split (`result[1]`) to the root's left subtree (`root->left = result[1]`).
  - Return an array containing the left part of the split (`result[0]`) and the current root.
- If the root's value is less than or equal to the `target` value:
  - Recursively split the right subtree by calling `splitBST(root->right, target)`.
  - Attach the left part of the split (`result[0]`) to the root's right subtree (`root->right = result[0]`).
  - Return an array containing the left part of the split (`result[0]`) and the current root.

<iframe src="https://leetcode.com/playground/oVNZbmqw/shared" frameBorder="0" width="100%" height="463" name="oVNZbmqw"></iframe>

#### Complexity Analysis

Let $h$ be the height of the tree. 

- Time complexity: $O(h)$

    The time complexity is $O(h)$ because each recursive call performs a constant amount of work, and the number of recursive calls corresponds to the height of the tree.

- Space complexity: $O(h)$

    The space complexity is $O(h)$ because this includes the space used by the recursive call stack, which can grow up to the height of the tree. Additionally, constant space is used to store the output array in each recursive call.

---

### Approach 2: Iterative Traversal

#### Intuition

Since the concept of recursion winding/unwinding is based on a stack, there is a thumb rule that every recursive solution can be converted to an iterative approach by using a stack.

Now recall that in a BST, all the nodes in the left subtree of a node have values less than or equal to the node's value, and all the nodes in the right subtree have values greater than the node's value. This property gives us an idea.

What if we traverse the tree in an in-order fashion (left subtree, current node, right subtree)? 
The nodes will be visited in increasing order of their values. If we keep track of the nodes as we traverse, we can separate them based on the `target` value.

So, we start by pushing the root node onto the stack. If the current node's value is greater than the `target`, we move to the left subtree because all nodes there will be less than or equal to the `target` (by the BST property). If vice-versa, we move to the right subtree.

At this point, the stack will contain all the nodes in increasing order of their values. We can observe that the nodes with values less than or equal to the `target` will be at the bottom of the stack, and the nodes with values greater than the `target` will be at the top.

Now, if we pop the nodes from the stack one by one, we can update their left and right pointers based on the `target` value, effectively separating them into two BSTs i.e., 
1. If the node's value is greater than the `target`, we set its left child to the previously popped node (which will be the root of the right BST), and update the root of the right BST.
2. If the node's value is less than or equal to the `target`, we set its right child to the previously popped node (which will be the root of the left BST), and update the root of the left BST.

#### Algorithm

- Initialize an array `ans` with two `null` pointers to store the split trees.
- Base case: If the root is `null`, return `ans`.
- Create a stack to traverse the tree and find the split point.
- Traverse the tree using a loop:
  - Push the current node onto the stack.
  - If the current node's value is greater than the `target` value, move to the left subtree.
  - Otherwise, move to the right subtree.
- Process nodes in reverse order from the stack to perform the split:
  - Pop a node from the stack.
  - If the node's value is greater than the `target` value:
     - Assign the node's left child to the subtree containing nodes greater than the target (`curr->left = ans[1]`).
     - Update the root of the subtree containing nodes greater than the target (`ans[1] = curr`).
  - Otherwise:
     - Assign the node's right child to the subtree containing nodes less than or equal to the target (`curr->right = ans[0]`).
     - Update the root of the subtree containing nodes less than or equal to the target (`ans[0] = curr`).
- Return the array `ans` containing the split trees.

#### Implementation

<iframe src="https://leetcode.com/playground/VhdLuMV7/shared" frameBorder="0" width="100%" height="500" name="VhdLuMV7"></iframe>

#### Complexity Analysis

Let $h$ be the height of the tree. 

- Time complexity: $O(h)$

    The time complexity is $O(h)$ because of the iterative traversal of the tree using a stack, where each node is processed exactly once.

- Space complexity: $O(h)$

    The space complexity is $O(h)$ due to the stack space used for iterative traversal. Additionally, a constant amount of space is used by the output array.

---

### Approach 3: Iterative Approach with Dummy Heads

#### Intuition

We can further optimize the space by solving it without any stack. The key is to create two [dummy/sentinel heads](https://en.wikipedia.org/wiki/Sentinel_node). This way, we don't have to worry about whether the heads of the two split new trees might be null. This way, we can easily manage the trees without worrying about null values.

We need two pointers, `curSm` and `curLg`, to keep track of our current positions in the trees with values less than or equal to the target and greater than the target, respectively. These pointers help us iterate through the nodes efficiently.

We need two current pointers to iterate the nodes around the split line as follows.

![img](../Figures/776/split_BST.png)

> The grey line is original edge, the colored lines are edges after splitting. With divide and conquer, we need to think about what to do after splitting. Suppose we can get the split result from root.right. Then connect root.right to result[0]. Then root itself becomes result[0].

- **If the root node belongs to the tree with values less than or equal to the target:**
  1. Set the right child of `curSm` to the root node.
  2. Move `curSm` to its right child (which is now the root).
  3. Set the right child of the root to null. This is because the right child might be updated later. If it isn't, it must be null to prevent two parents from pointing to the same node.
  4. Move the root to its original right child (Remember, we always move down along the split line without changing the root node anymore).

We repeat the above steps, iterating around the split line, using the root pointer to traverse through the nodes. 

For a cleaner code, we will introduce a separate current node (`nextNode`) for traversal instead of modifying the root directly.

#### Algorithm
 
- Create two dummy nodes, `dummySm` and `dummyLg`, to hold the parts of the tree with values less than or equal to the `target` and greater than the `target`, respectively. Initialize two pointers, `curSm` and `curLg`, to track the last nodes in these parts.
- Start traversing the tree from the `root`.
- Declare a pointer `nextNode` to temporarily store the next node to be visited.
- While the `current` node is not `null`:
  - If the current node's value is less than or equal to the `target` value:
    - Attach the current node to the tree with values less than or equal to the `target` by updating `curSm->right = current`.
    - Move `curSm` to the current node.
    - Save the right subtree in `nextNode`.
    - Clear the right pointer of the current node by setting it to `null`.
    - Move to the right subtree using `nextNode`.
  - Otherwise:
    - Attach the current node to the tree with values greater than the `target` by updating `curLg->left = current`.
    - Move `curLg` to the current node.
    - Save the left subtree in `nextNode`.
    - Clear the left pointer of the current node by setting it to `null`.
    - Move to the left subtree using `nextNode`.
- Return an array containing the roots of the split tree (`dummySm->right` and `dummyLg->left`).

The algorithm is visualized below:

!?!../Documents/776/approach3.json:976,555!?!

#### Implementation

<iframe src="https://leetcode.com/playground/QkzW8ra6/shared" frameBorder="0" width="100%" height="500" name="QkzW8ra6"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the tree.

- Time complexity: $O(n)$

    The time complexity is $O(n)$ because it involves iterating through all nodes in the tree once.

- Space complexity: $O(1)$

    The space complexity is $O(1)$ since it uses only a few variables that do not increase with the input size.

---