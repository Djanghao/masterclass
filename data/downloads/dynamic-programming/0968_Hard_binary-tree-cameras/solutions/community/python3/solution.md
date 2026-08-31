# [Python] Making a Hard Problem Easy! Postorder Traversal with Explanation

**Author:** zayne-siew
**Votes:** 67
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/2160386/](https://leetcode.com/problems/binary-tree-cameras/solutions/2160386/)

---

### Introduction

Given a binary tree, we want to place some cameras on some of the nodes in the tree such that all nodes in the tree are monitored by at least one camera.

---

### Intuition

Consider the following binary tree. Where would you place cameras such that the least number of cameras are used to monitor the tree?

```text
  O
 / \\
O   O
```

The answer is obvious: the root node. Placing the camera on either leaf node will result in us not being able to monitor the other leaf node, and since the root (parent) node is adjacent (in a binary tree sense) to both leaf nodes, putting a camera there covers all three nodes.

Ok, time for a more difficult tree. Where would you place cameras in this tree?

```text
     A
   /   \\
  B     C
 / \\   / \\
D   E F   G
```

Ok, maybe that wasn't so difficult after all. It's easy to prove that placing cameras on nodes B and C (i.e., 2 cameras used in total) can monitor the whole tree. Notice however that if we started from the root node and worked our way down, it would be difficult (and get increasingly difficult for more complex trees) to predict whether or not a camera is needed; if we tried placing a camera on A, we'd end up requiring 5 cameras.

The trick here is to **use a bottom-up approach equivalent to a postorder traversal**. This becomes apparent if we consider that **each leaf node has only one of two ways it can be monitored**:

1. Place a camera on the leaf node.
2. Place a camera on the parent node of the leaf node.

Since there are more leaf nodes than there are parents, it is safe to assume that placing cameras on parent nodes would be the best strategy. With the added bonus of its parent node being monitored too, we can then **check to see which remaining unmonitored nodes are in a similar situation; i.e., requiring a camera to be placed on itself or on its parent**. We can then treat these nodes as 'new' leaf nodes and repeat the process.

One final question: how do we keep track of which nodes have been monitored? The answer lies in the way the question has been designed: all nodes have been set to 0. Which means, **we can use different values to assign meaning to the nodes**. We can define a priority list as follows:

- Find unmonitored child nodes (which are left as 0s) -> the current (parent) node has to have a camera.
- Find child nodes with cameras -> the current (parent) node is monitored.
- Otherwise, the current node is unmonitored, treat as leaf node.

From this priority list, I define **0 as unmonitored, 1 as monitored (camera), and 2 as monitored (no camera)**. As I traverse up the binary tree, I can easily obtain the identity of the current node by **obtaining the minimum of the two child nodes** (accounting for leaf nodes as edge cases) and deciding from there based on the list above.

---

### Implementation

Please let me know in the comments if my code is unclear or can be improved, thank you!

```python
class Solution:
    def minCameraCover(self, root: TreeNode) -> int:
        # set the value of camera nodes to 1
        # set the value of monitored parent nodes to 2
        def dfs(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            res = dfs(node.left)+dfs(node.right)
            # find out if current node is a root node / next node in line to be monitored
            curr = min(node.left.val if node.left else float('inf'), node.right.val if node.right else float('inf'))
            if curr == 0:
                # at least one child node requires monitoring, this node must have a camera
                node.val = 1
                res += 1
            elif curr == 1:
                # at least one child node is a camera, this node is already monitored
                node.val = 2
            # if curr == float('inf'), the current node is a leaf node; let the parent node monitor this node
            # if curr == 2, all child nodes are being monitored; treat the current node as a leaf node
            return res
        # ensure that root node is monitored, otherwise, add a camera onto root node
        return dfs(root)+(root.val == 0)
```

**TC: O(n)**, where `n` is the number of nodes in the binary tree; the postorder traversal visits each node once.
**SC: O(h)**, where `h` is the maximum height of the binary tree, used by implicit function stack via recursion.

---

Please upvote if this has helped you! Appreciate any comments as well :)