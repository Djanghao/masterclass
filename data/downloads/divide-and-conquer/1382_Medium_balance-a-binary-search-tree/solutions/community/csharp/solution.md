# C# Solution for Balance a Binary Search Tree Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5370237/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5370237/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to balance a Binary Search Tree (BST). A BST is balanced if the depths of the two subtrees of every node never differ by more than one. By leveraging the in-order traversal property of BSTs, which yields a sorted sequence of node values, we can collect all the nodes in a sorted manner and then reconstruct the tree to ensure it is balanced.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Collect Nodes in Sorted Order:
	\u2022	Perform an in-order traversal of the tree to collect all the nodes in a list. This ensures the nodes are in sorted order due to the properties of BSTs.
2.	Build Balanced Tree:
	\u2022	Use the sorted list of nodes to recursively construct a balanced BST. By always choosing the middle element of the current subarray as the root, we ensure the tree is balanced.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Collect Nodes: O(n)
	\u2022	Each node is visited exactly once during the in-order traversal.
\u2022	Build Balanced Tree: O(n)
	\u2022	Each node is processed exactly once to construct the balanced tree.

Thus, the overall time complexity is O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Collect Nodes: O(n)
	\u2022	The list of nodes takes O(n) space.
\u2022	Build Balanced Tree: O(log n) to O(n)
	\u2022	The recursion stack depth is O(log n) in the best case (perfectly balanced tree) and O(n) in the worst case (completely unbalanced tree).

Combining these, the overall space complexity is O(n).

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public TreeNode BalanceBST(TreeNode root) {
        var nodeList = new List<TreeNode>();
        CollectNodes(root, nodeList);
        return BuildBalancedTree(nodeList, 0, nodeList.Count - 1);
    }
    // Collect nodes with an in-order traversal
    private void CollectNodes(TreeNode node, List<TreeNode> nodeList) {
        if (node == null) return;
        CollectNodes(node.left, nodeList);
        nodeList.Add(node);
        CollectNodes(node.right, nodeList);
    }
    // Rebuild tree from sorted nodes
    private TreeNode BuildBalancedTree(List<TreeNode> nodeList, int start, int end) {
        if (start > end) return null;
        int mid = start + (end - start) / 2;
        TreeNode root = nodeList[mid];
        root.left = BuildBalancedTree(nodeList, start, mid - 1);
        root.right = BuildBalancedTree(nodeList, mid + 1, end);
        return root;
    }
}
```