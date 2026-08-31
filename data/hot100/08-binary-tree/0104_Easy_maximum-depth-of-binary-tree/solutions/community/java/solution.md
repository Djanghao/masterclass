# Simple solution using Java

**Author:** ray050899
**Votes:** 579
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/34216/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/34216/)

---

if the node does not exist, simply return 0. Otherwise, return the 1+the longer distance of its subtree.

    public int maxDepth(TreeNode root) {
            if(root==null){
                return 0;
            }
            return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
        }