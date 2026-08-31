# Python short recursive solution.

**Author:** OldCodingFarmer
**Votes:** 973
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/34579/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/34579/)

---

        
    def buildTree(self, preorder, inorder):
        if inorder:
            ind = inorder.index(preorder.pop(0))
            root = TreeNode(inorder[ind])
            root.left = self.buildTree(preorder, inorder[0:ind])
            root.right = self.buildTree(preorder, inorder[ind+1:])
            return root