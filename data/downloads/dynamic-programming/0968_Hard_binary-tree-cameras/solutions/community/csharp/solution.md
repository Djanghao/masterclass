# 💥C# | Runtime beats 100.00%, Memory beats 63.64% [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/5777919/](https://leetcode.com/problems/binary-tree-cameras/solutions/5777919/)

---

# Intuition
To monitor all nodes in the tree with the minimum number of cameras, I need to place cameras strategically. A camera at a node can cover that node, its parent, and its children. Therefore, to minimize cameras, I should place them where they can cover the maximum number of nodes, ideally at the parent of leaf nodes.

# Approach
Post-order Traversal: I traverse the tree from the leaves up to the root. For each node, I check the states of its children.

State Handling:
If a child needs a camera, I place one at the current node.
If a child has a camera, the current node is covered.
If all children are covered but do not have cameras, the current node needs a camera.

Count Cameras: I increment the camera count whenever I place a camera.

# Complexity
- Time complexity:
O(n) \u2014 Each node is visited exactly once during the DFS traversal.

- Space complexity:
O(h) \u2014 The space is used by the recursion stack, where h is the height of the tree. In a balanced tree, it's O(log n); in a skewed tree, it's O(n).

# Code
```csharp []
public class Solution
{
    private int cameraCount = 0;

    public int MinCameraCover(TreeNode root)
    {
        // If the root itself needs a camera, place it at the root
        if (DFS(root) == 0) cameraCount++;
        return cameraCount;
    }

    // DFS returns the state of the node:
    // 0 -> Needs camera, 1 -> Covered, 2 -> Has camera
    private int DFS(TreeNode node)
    {
        if (node == null) return 1; // Null nodes are considered covered

        int left = DFS(node.left);
        int right = DFS(node.right);

        // If either child needs a camera, place a camera at this node
        if (left == 0 || right == 0)
        {
            cameraCount++;
            return 2;
        }

        // If either child has a camera, this node is covered
        if (left == 2 || right == 2)
        {
            return 1;
        }

        // Otherwise, this node needs a camera
        return 0;
    }
}

```