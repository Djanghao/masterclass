# [Java] DFS with explanation - Faster than 99%

**Author:** aguibert
**Votes:** 27
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/839174/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/839174/)

---

At each node we want to know 2 things:
 - Is this node the root of a valid BST?
 - What is the sum of the subtree?

If we know these 2 pieces of information about each node, then finding the final solution is trivial.

The main idea of this problem is to start at the bottom (leaf) nodes and work our way up the tree, remembering the "2 things" about each node on the way up. To encapsulate the data nicely, we can define a custom data structure that adds relevant data we need to the given `TreeNode` class:

```
    static class NodeWrapper {
        final TreeNode node;
        int sum;
        int max;
        int min;
        boolean validBST = true;
        public NodeWrapper(TreeNode node) {
            this.node = node;
            this.sum = node.val;
            this.max = node.val;
            this.min = node.val;
        }
    }
```

To obtain the final solution, we perform a post-order DFS and use the `NodeWrapper` for the left and right subtrees of each node to determine the original 2 pieces of information we need: is the current node a BST, and what is the sum of the subtree.

The final solution looks like this:

```
class Solution {
    
    int maxSum = 0;
    
    public int maxSumBST(TreeNode root) {
        findMaxSum(root);
        return maxSum;
    }
    
    private NodeWrapper findMaxSum(TreeNode root) {
        if (root == null) {
            return null;
        }
        
        NodeWrapper leftTree = findMaxSum(root.left);
        NodeWrapper rightTree = findMaxSum(root.right);
        
        NodeWrapper curNode = new NodeWrapper(root);
        if (leftTree != null) {
            curNode.sum += leftTree.sum;
            curNode.max = Math.max(root.val, leftTree.max);
            curNode.min = Math.min(root.val, leftTree.min);
            curNode.validBST = leftTree.validBST && leftTree.max < root.val;
        }
        if (rightTree != null) {
            curNode.sum += rightTree.sum;
            curNode.max = Math.max(curNode.max, rightTree.max);
            curNode.min = Math.min(curNode.min, rightTree.min);
            curNode.validBST &= rightTree.validBST && rightTree.min > root.val;
        }

        if (curNode.validBST) {
            maxSum = Math.max(maxSum, curNode.sum);   
        }
        return curNode;
    }
        
    static class NodeWrapper {
        final TreeNode node;
        int sum;
        int max;
        int min;
        boolean validBST = true;
        public NodeWrapper(TreeNode node) {
            this.node = node;
            this.sum = node.val;
            this.max = node.val;
            this.min = node.val;
        }
    }
}
```