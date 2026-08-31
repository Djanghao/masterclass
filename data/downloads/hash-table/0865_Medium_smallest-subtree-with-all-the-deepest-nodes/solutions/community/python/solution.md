# Python Solution | O(n)

**Author:** tolujimoh
**Votes:** 62
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/314137/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/314137/)

---

```
 # Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        
        def deepestDepth(node, depth):
            
            if not node:
                return node, depth
            
			
            left, leftDepth = deepestDepth(node.left, depth + 1)
            right, rightDepth = deepestDepth(node.right, depth + 1)    

			# If the deepest node on the left subtree is deeper than the deepest node 
			# on the right subtree return the left subtree and the left deepest depth 
            if leftDepth > rightDepth:
                return left, leftDepth
            
			# If the deepest node on the right subtree is deeper than the deepest node 
			# on the left subtree return the right subtree and the right deepest depth 
            if rightDepth > leftDepth:
                return right, rightDepth
            
			
			# If the above two conditions isn't met, then leftDepth == rightDepth
			#
			# leftDepth equal rightDepth means that the deepest node
			# in the left subtree has the same depth as the deepest node 
			# in the right subtree, as such, we should return the current node 
			# as it is the root of the current subtree that contains the deepest 
			# nodes on the left and right subtree.
			#
			# return statment can also be `return node, rightDepth`
            return node, leftDepth
            
        return deepestDepth(root, 0)[0]
```