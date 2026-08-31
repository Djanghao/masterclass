# ✅Beats 100% - Depth First Search

**Author:** Abu_Suraj
**Votes:** 3
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/4533991/](https://leetcode.com/problems/leaf-similar-trees/solutions/4533991/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem, we can use a Depth-First Search (DFS) on both trees. DFS is an algorithm for traversing or searching tree or graph data structures. In the context of a binary tree, it starts at the root and explores as far as possible along each branch before backtracking.

Here's why DFS is suitable for this problem:

1. DFS can be easily implemented using recursion.
2. While traversing the tree using DFS, we have a clear path to the leaf nodes, which are the focus of this problem.
3. We can build the leaf sequence during the DFS by adding the node's value to our sequence only when we hit a leaf node (a node with no children).
The provided solution uses the DFS method dfs to traverse each tree starting from the root and collect the leaves values. The function dfs recursively visits the left and right children of the current node and stores the node's value if and only if the node is a leaf (i.e., it has neither a left nor a right child). This collected sequence of values is then returned as a list for each tree. Finally, the solution compares the two lists of leaf values, and if they are equal, it returns true, indicating the two trees are leaf-similar. If not, it returns false.
# Approach
The solution is implemented in Python, and it focuses on a Depth-First Search (DFS) approach to traverse through the binary trees. The implementation defines a nested function dfs within the leafSimilar method, with the purpose of performing the actual DFS traversal, searching the entire tree for its leaves, and building the leaf sequence.

Here's the step-by-step breakdown of the algorithm:
1. The dfs function is defined, which takes a single argument, root, representing the current node in the tree.
2. Upon each invocation of dfs, the function first checks if the current root node is None. If it is, it returns an empty list as there are no leaves to gather from a None subtree.
3. If the current node is not None, the dfs function first recursively calls itself with root.left and root.right to search through the entire left and right subtrees.
4. The leaves are gathered by this part of the code: ans = dfs(root.left) + dfs(root.right). This code concatenates the left and right subtree leaves into one sequence.
5. Finally, the function checks if the node is a leaf node, that means both root.left and root.right are None. If it is a leaf, it returns a list containing the leaf's value: [root.val]. If the node is not a leaf, it returns the concatenated list of leaf values from both the left and right subtrees.
6. The main function leafSimilar calls the dfs function for both root1 and root2 trees, collecting the sequences of leaf values as lists.
7. The solution concludes by comparing these two lists with dfs(root1) == dfs(root2). If they are identical, it means that the leaf value sequences are the same, and therefore the two trees are considered leaf-similar and True is returned. If the sequences differ in any way, the function returns False.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: The time complexity of the algorithm is determined by the depth-first search (DFS) function, which visits every node in the binary tree exactly once. Therefore, the time complexity is O(N+M), where N is the number of nodes in the first tree and M is the number of nodes in the second tree.
- Space complexity: In the worst case, the depth of the recursion could be O(H1+H2), where H1 is the maximum height of the first tree and H2 is the maximum height of the second tree, if the trees are highly skewed.

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
     const dfs = (root: TreeNode | null): number[] => {
        // If the current node is null, return an empty array
        if (root === null) {
            return [];
        }

        // Recursively explore the left and right children, and accumulate leaf values
        const leaves = dfs(root.left).concat(dfs(root.right));

        // If 'leaves' is empty, it means this is a leaf node, so return its value
        // Otherwise, it means this is an internal node and 'leaves' contains its subtree's leaves
        return leaves.length > 0 ? leaves : [root.val];
    };

    // Compare the leaf value sequences of both trees
    return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
};
```