# Python, BFS no sort. Time: O(N), Space: O(N)

**Author:** blue_sky5
**Votes:** 16
**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/967109/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/967109/)

---

```
class Solution:
    def verticalOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        
        columns = defaultdict(list)
        
        q = deque([(root, 0)])
        while q:
            node, x = q.popleft()
            columns[x].append(node.val)
            
            if node.left:
                q.append((node.left, x - 1))
            if node.right:
                q.append((node.right, x + 1))
                
        return [columns[x] for x in range(min(columns), max(columns)+1)]
```