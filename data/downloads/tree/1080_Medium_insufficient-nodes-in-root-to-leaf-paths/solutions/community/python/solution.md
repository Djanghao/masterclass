# Python3    ||   9 lines, recursion, w/explanation  ||   T/S: 93%/99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/2753954/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/2753954/)

---

Here's the plan:
    
 1. Traverse the tree, keeping track of the sum of each path by updating n at each level.
            
 1. At each leaf, check whether `n` is greater than the `n`; if so, return True, if not, return `False`.
                    
 1. At each parent node:
       1. determine dfs for `left` and `right` children; 
       1. break the link to either child node that returns `False`; and
       1. return `True` if at least one child is `True`, `False` otherwise.

 4) Return `root` as the answer if `dfs(root) = True`, else return `None` 
```
class Solution:     
        
    def sufficientSubset(self, root: TreeNode, limit: int) -> TreeNode:

        def dfs(node: TreeNode, n: int) -> bool:                    # <-- 1)
            n+= node.val                                                             #
                                                  
            if not node.left and not node.right: return n >= limit  # <-- 2)
            
            l = dfs(node.left , n) if node.left  else False         # <-- 3a)
            r = dfs(node.right, n) if node.right else False         #
            
            if not l: node.left  = None                             # <-- 3b)
            if not r: node.right = None                             #

            return l or r                                           #<-- 3c)

        return root if dfs(root, 0) else None                       # <-- 4)
```
https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/submissions/1273682177/