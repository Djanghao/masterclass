# [Python3] post-order dfs

**Author:** ye15
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1039431/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1039431/)

---

**Algo**
Traverse the tree in post-order. Return 1) if `p` or `q` is found in the sub-tree, and 2) the distance from `p` or `q` to the current node (if found). 
Btw, I think this problem deserves a "Medium" in difficulty. 

**Implementation**
```
class Solution:
    def findDistance(self, root: TreeNode, p: int, q: int) -> int:
        
        def fn(node):
            """Traverse the tree post-order."""
            nonlocal ans 
            if not node: return False, -inf
            ltf, lv = fn(node.left)
            rtf, rv = fn(node.right)
            
            if node.val in (p, q) or ltf and rtf: 
                if ltf: ans += lv + 1
                if rtf: ans += rv + 1
                return True, 0
            return ltf or rtf, max(lv, rv) + 1
                
        ans = 0
        fn(root)
        return ans 
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(N)`

Edited on 1/28/2021
Adding an alternative implementation via **tri-color encoding**. 
1) return 0 for branches with no `p` or `q`;
2) return a negative distance for branches with a `p` or `q`;
3) return a positive distance for branches with both `p` and `q`. 

```
class Solution:
    def findDistance(self, root: TreeNode, p: int, q: int) -> int:
        if p == q: return 0 # edge case 
        
        def fn(node): 
            """Return distance of p and q."""
            if not node: return 0 # boundary condition 
            left, right = fn(node.left), fn(node.right)
            if left > 0 or right > 0: return max(left, right)
            if left < 0 and right < 0: return -left - right
            if left < 0 or right < 0: return -min(left, right) if node.val in (p, q) else min(left, right)-1
            return -1 if node.val in (p, q) else 0
        
        return fn(root)
```