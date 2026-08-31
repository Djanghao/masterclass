# Very intuitive solution beat 80%

**Author:** RUKAWA_
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/4325920/](https://leetcode.com/problems/largest-bst-subtree/solutions/4325920/)

---

# Intuition
<Very intuitive solution beat 80%>

# Approach
<1.Verify if a node is BST>
<2.If it is a BST, we get the count of the tree>
<3.Get the max count>

# Complexity
- Time complexity:
< $$O(n)$$>

- Space complexity:
<O(1)>

# Code
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestBSTSubtree(self, root: Optional[TreeNode]) -> int:
        def bst_verify(root,minval,maxval):
            if root == None:
                return True
            if not minval<root.val < maxval:
                return False
            else:
                return bst_verify(root.left,minval,root.val) and bst_verify(root.right,root.val,maxval)
        def count(node):
            if node == None:
                return 0
            
            return 1 + count(node.left) + count(node.right)

        def find_largest(node):
            if node == None:
                return 0
            if bst_verify(node,float('-inf'),float('inf')):
                return count(node)

            return max(find_largest(node.left),find_largest(node.right))

        largerst = find_largest(root)
      
        return largerst

        
```