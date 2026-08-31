# Very simple iterative Python solution

**Author:** clue
**Votes:** 278
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/45273/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/45273/)

---

Classical usage of stack's LIFO feature, very easy to grasp:

    
    def preorderTraversal(self, root):
        ret = []
        stack = [root]
        while stack:
            node = stack.pop()
            if node:
                ret.append(node.val)
                stack.append(node.right)
                stack.append(node.left)
        return ret