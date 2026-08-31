# Simple Python solution 100% faster

**Author:** animeshbhadouria
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/338427/](https://leetcode.com/problems/maximum-average-subtree/solutions/338427/)

---


```

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maximumAverageSubtree(self, root: TreeNode) -> float:
        
        
        self.maxAvg = 0
        
        def traverse( node ):
            if node is None:
                return [ 0,0 ]
				
            lsum, lcount = traverse( node.left )
            rsum, rcount = traverse( node.right )
            
            self.maxAvg = max( self.maxAvg,  (lsum+rsum+node.val) / ( lcount+rcount+1 ) )
            
            return [ lsum+rsum+node.val , lcount+rcount+1 ]
        
        traverse(root)
        return self.maxAvg
        



```