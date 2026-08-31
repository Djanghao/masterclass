# Python DP. TC:O(V+E) Faster than 100%!

**Author:** amar16
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/2195123/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/2195123/)

---

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minimumFlips(self, root: Optional[TreeNode], result: bool) -> int:
        
        def calc(root):
            
            if root.val==0:return {True:1,False:0}
            if root.val==1:return {True:0,False:1}
            
            left=calc(root.left) if root.left else None
            right=calc(root.right) if root.right else None
            output={}
            
            if root.val==5:
                if not left:output[True],output[False]=right[False],right[True]
                else:output[True],output[False]=left[False],left[True]
                    
            elif root.val==4:
                output[True]=min(left[True]+right[False],left[False]+right[True])
                output[False]=min(left[True]+right[True],left[False]+right[False])
                
            elif root.val==3:
                output[True]=left[True]+right[True]
                output[False]=min(left[True]+right[False],left[False]+right[True],
                                 left[False]+right[False])
            
            elif root.val==2:
                output[True]=min(left[True]+right[False],left[False]+right[True],
                                left[True]+right[True])
                output[False]=left[False]+right[False]
                
            return output
        
        return calc(root)[result]
            
            
		```
		