# Python Solution (Left DFS, Right DFS, Leaves of Lest and Right)

**Author:** DietCoke777
**Votes:** 20
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/1864370/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/1864370/)

---

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def boundaryOfBinaryTree(self, root: Optional[TreeNode]) -> List[int]:
        
        def leftdfs(node):
            if node:
                if node.left is None and node.right is None:
                    return []
                else:
                    if node.left:
                        return [node.val] + leftdfs(node.left)
                    else:
                        return [node.val] + leftdfs(node.right)
                    
            else:
                return []
        
        def findLeaves(node):
            if node:
                if node.right is None and node.left is None:
                    return [node.val]
                else:
                    return findLeaves(node.left) + findLeaves(node.right)
            else:
                return []
        
        def rightdfs(node):
            if node:
                if node.left is None and node.right is None:
                    return []
                else:
                    if node.right:
                        return rightdfs(node.right) + [node.val]
                    else:
                        return rightdfs(node.left) + [node.val]
            else:
                return []
    
        
        leftandleavesandright = [root.val] + leftdfs(root.left) + findLeaves(root.left) + findLeaves(root.right) + rightdfs(root.right)
        
        return(leftandleavesandright)
