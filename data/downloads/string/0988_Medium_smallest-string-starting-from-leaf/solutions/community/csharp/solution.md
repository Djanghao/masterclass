# C# Solution for Smallest String Starting From Leaf Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5034663/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5034663/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the provided solution is to perform a breadth-first search (BFS) traversal of the binary tree. We traverse the tree level by level, keeping track of the suffix associated with each node. At each leaf node encountered, we compare the suffix with the current result to find the lexicographically smallest string.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialize a queue to perform BFS traversal of the binary tree.
2.	Use a dictionary to store the suffix associated with each node visited during the traversal.
3.	Enqueue the root node with its corresponding suffix.
4.	While the queue is not empty, dequeue a node and update its suffix based on its parent\u2019s suffix.
5.	If the dequeued node is a leaf node, compare its suffix with the current result to find the lexicographically smallest string.
6.	Enqueue the left and right children (if present) of the dequeued node with updated suffixes.
7.	Repeat steps 4-6 until all nodes are processed.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(N), where N is the number of nodes in the binary tree. We visit each node exactly once during the BFS traversal.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(N), where N is the number of nodes in the binary tree. This space is used for the queue and the dictionary to store suffixes associated with nodes. In the worst case, where the binary tree is completely unbalanced (skewed), the space complexity can be O(N). However, for a balanced binary tree, the space complexity is typically less than O(N).

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
    public string SmallestFromLeaf(TreeNode root) {
        Queue<TreeNode> queue = new Queue<TreeNode>();
        Dictionary<TreeNode, string> nodeToSuffix = new Dictionary<TreeNode, string>();
        queue.Enqueue(root);
        nodeToSuffix.Add(root, ((char)('a' + root.val)).ToString());

        string result = null;

        while (queue.Count > 0) {
            TreeNode node = queue.Dequeue();
            string suffix = nodeToSuffix[node];

            if (node.left == null && node.right == null) {
                if (result == null || suffix.CompareTo(result) < 0) {
                    result = suffix;
                }
            }

            if (node.left != null) {
                queue.Enqueue(node.left);
                nodeToSuffix[node.left] = ((char)('a' + node.left.val)) + suffix;
            }
            if (node.right != null) {
                queue.Enqueue(node.right);
                nodeToSuffix[node.right] = ((char)('a' + node.right.val)) + suffix;
            }
        }

        return result;
    }
}
```