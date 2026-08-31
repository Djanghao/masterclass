# C# Solution for All Nodes Distance K in Binary Tree Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/3747947/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/3747947/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to use a depth-first search (DFS) approach to traverse the binary tree and find all nodes that are at a distance k from the target node.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach consists of two main steps:

Build Parent Map: First, we build a parent map that stores the parent node for each node in the binary tree. This map is used to navigate towards the root during the DFS traversal.

DFS Traversal: Starting from the target node, we perform a DFS to explore its children, parent nodes, and siblings. We keep track of the visited nodes to avoid revisiting them. If the distance k is reached during the traversal, we add the node's value to the result list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(N), where N is the number of nodes in the binary tree. This is because we visit each node once during the DFS traversal. 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also O(N) as we use additional space to store the parent map and the visited set.

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution 
{
    private Dictionary<TreeNode, TreeNode> parentMap;
    public IList<int> DistanceK(TreeNode root, TreeNode target, int k) 
    {
        parentMap = new Dictionary<TreeNode, TreeNode>();
        BuildParentMap(root, null);

        List<int> result = new List<int>();
        HashSet<TreeNode> visited = new HashSet<TreeNode>();

        DFS(target, k, visited, result);

        return result;
    }
    private void BuildParentMap(TreeNode node, TreeNode parent) 
    {
        if (node == null) return;
        parentMap[node] = parent;
        BuildParentMap(node.left, node);
        BuildParentMap(node.right, node);
    }
    private void DFS(TreeNode node, int k, HashSet<TreeNode> visited, List<int> result) 
    {
        if (node == null || visited.Contains(node)) return;

        visited.Add(node);

        if (k == 0) {
            result.Add(node.val);
            return;
        }

        if (node.left != null) DFS(node.left, k - 1, visited, result);
        if (node.right != null) DFS(node.right, k - 1, visited, result);

        TreeNode parent;
        if (parentMap.TryGetValue(node, out parent))
            DFS(parent, k - 1, visited, result);
    }

}
```