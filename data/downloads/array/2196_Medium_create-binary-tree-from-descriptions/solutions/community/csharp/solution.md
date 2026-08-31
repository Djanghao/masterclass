# C# Solution for Create Binary Tree From Descriptions Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479089/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479089/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The alternative approach uses a mapping of child nodes to their parents to determine the root node, avoiding the need for a separate set to track child nodes. This makes the root identification step more intuitive and straightforward.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Node Creation and Relationship Establishment:
	\u2022	Use a Dictionary (nodeMap) to store each node, allowing quick access or creation of nodes.
	\u2022	For each description [parent, child, isLeft], ensure both parent and child nodes exist in the dictionary.
	\u2022	Link the child node to the parent node either as a left or right child based on the value of isLeft.
	\u2022	Additionally, use a Dictionary (childToParentMap) to map each child to its parent. This helps track the parent-child relationship and identify the root node later.
2.	Identifying the Root Node:
	\u2022	Iterate through the descriptions to find a parent node that is not a child of any node by checking the childToParentMap. This node is the root since it has no parent.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Node Creation and Relationship Establishment: O(n)
	\u2022	Iterating through the descriptions array to process all relationships takes O(n) time.
	\u2022	Each operation of accessing or inserting into the Dictionary is O(1) on average.
\u2022	Identifying the Root Node: O(n)
	\u2022	Another pass through the descriptions array to determine the root node takes O(n) time.

Overall, the time complexity is O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Dictionary Storage: O(n)
	\u2022	The nodeMap stores all the nodes created, which is at most 2n nodes (each description has a parent and child, but each node is unique).
	\u2022	The childToParentMap stores the parent for each child node, which is at most n nodes.

Overall, the space complexity is O(n).

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
    public TreeNode CreateBinaryTree(int[][] descriptions) {
        Dictionary<int, TreeNode> nodeMap = new Dictionary<int, TreeNode>();
        Dictionary<int, int> childToParentMap = new Dictionary<int, int>();

        // Create all nodes and establish parent-child relationships
        foreach (var description in descriptions) {
            int parent = description[0];
            int child = description[1];
            int isLeft = description[2];

            // Get or create the parent node
            if (!nodeMap.ContainsKey(parent)) {
                nodeMap[parent] = new TreeNode(parent);
            }
            TreeNode parentNode = nodeMap[parent];

            // Get or create the child node
            if (!nodeMap.ContainsKey(child)) {
                nodeMap[child] = new TreeNode(child);
            }
            TreeNode childNode = nodeMap[child];

            // Link the parent and child nodes
            if (isLeft == 1) {
                parentNode.left = childNode;
            } else {
                parentNode.right = childNode;
            }

            // Track the parent of the child node
            childToParentMap[child] = parent;
        }

        // Find the root node (which is not a child of any node)
        foreach (var description in descriptions) {
            int parent = description[0];
            if (!childToParentMap.ContainsKey(parent)) {
                return nodeMap[parent];
            }
        }

        return null; // In case there is no valid tree (should not happen per problem statement)
    }
}
```