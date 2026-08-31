# Python O( n ) sol. based on DFS recursion. [ with Explanation ]

**Author:** brianchiang_tw
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/469872/](https://leetcode.com/problems/longest-univalue-path/solutions/469872/)

---

Python O( n ) sol. based on DFS recursion

---


```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    
    def longestUnivaluePath(self, root: TreeNode) -> int:
        
        
        # keep track of longest univalue path
        longest_uni_path = 0
        
        def helper( node):
            if not node:
                return 0

            else:

                path_of_left = helper( node.left )
                path_of_right = helper( node.right )
                
                # if left node has the same value, extend uni path
                left_uni = path_of_left+1 if node.left and node.left.val == node.val else 0
                
                # if right node has the same value, extend uni path
                right_uni = path_of_right+1 if node.right and node.right.val == node.val else 0
        
                nonlocal longest_uni_path
                # use node as bridge to make uni_path as long as possible
                longest_uni_path = max( longest_uni_path, left_uni + right_uni )

                return max(left_uni, right_uni)        
        
		#------------------------------------------------
        
        helper( root )
        
        return longest_uni_path
```

---

Related leetcode challenge:

post-order DFS framework:
[Leetcode #145 Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal)

post-order DFS with optimization
[Leetcode #124 Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum)

---
Reference:

[1] [Python official docs about *non-local* statement](https://docs.python.org/3/reference/simple_stmts.html#nonlocal)