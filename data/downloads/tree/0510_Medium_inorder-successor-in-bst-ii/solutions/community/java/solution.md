# [JAVA] beats 100% - recursion

**Author:** yoavs88
**Votes:** 3
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/847741/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/847741/)

---

```
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
};
*/

class Solution {
    public Node inorderSuccessor(Node node) {
        if (node == null) {
            return null;
        }
        if (node.right != null) {
           return getMostLeftChild(node.right);
        }
        return getParentSuccessor(node);
    }
    
    private Node getMostLeftChild(Node node) {
        if (node.left == null) {
            return node;
        }
        return getMostLeftChild(node.left);
    }
    
    private Node getParentSuccessor(Node node) {
        if (node.parent == null) {
            return null;
        }
        if (node == node.parent.right) {
            return getParentSuccessor(node.parent);
        }
        return node.parent;
    }
}
```