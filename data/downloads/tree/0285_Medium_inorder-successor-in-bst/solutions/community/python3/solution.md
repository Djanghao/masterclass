# [Python] Simple Inorder traversal

**Author:** 101leetcode
**Votes:** 4
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/696555/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/696555/)

---

```
class Solution:
    def inorderSuccessor(self, root: 'TreeNode', p: 'TreeNode') -> 'TreeNode':
        ## RC ##
        ## APPROACH : RECURSION ##
        ## LOGIC : IN AN INORDER TRAVERSAL, SUCCESOR IS ALWAYS THE VERY NEXT ELEMENT ##
        
		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(N) ##

        def helper(node):
            if not node or self.res: return
            helper(node.left)            
            if node.val > p.val and not self.res:
                self.res = node
                return
            helper(node.right)
        self.res = None
        helper(root)
        return self.res

```