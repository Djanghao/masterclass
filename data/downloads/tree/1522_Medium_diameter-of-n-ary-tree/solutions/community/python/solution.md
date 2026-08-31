# Python, DFS. Time: O(N), Space: O(H)

**Author:** blue_sky5
**Votes:** 6
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/907169/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/907169/)

---

```
class Solution:
    def diameter(self, root: 'Node') -> int:
        def dfs(node):
            if not node:
                return 0
        
            max_depth = 0
            for child in node.children:
                depth = 1 + dfs(child)
                self.diameter = max(self.diameter, depth + max_depth)
                max_depth = max(max_depth, depth)
    
            return max_depth
        
        self.diameter = 0
        dfs(root)
        
        return self.diameter
```