# Python, a simple DFS traversal. Time: O(N), Space: O(H)

**Author:** blue_sky5
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/893604/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/893604/)

---

```
class Solution:
    def getLonelyNodes(self, root: TreeNode) -> List[int]:
        def dfs(node, is_lonely):
            if not node:
                return
            
            if is_lonely:
                self.lonely.append(node.val)            
            
            dfs(node.left, not node.right)
            dfs(node.right, not node.left)            
            
        self.lonely = []
        dfs(root, False)        
        return self.lonely
```
