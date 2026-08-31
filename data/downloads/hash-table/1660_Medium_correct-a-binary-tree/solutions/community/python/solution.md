# Python 3 | Level-order Traversal, deque | Explanation

**Author:** idontknoooo
**Votes:** 3
**Link:** [https://leetcode.com/problems/correct-a-binary-tree/solutions/1120815/](https://leetcode.com/problems/correct-a-binary-tree/solutions/1120815/)

---

### Explanation
- `q`: Deque for level order traversal
- `p`: Hash table to store a tuple indicates the parent of key `{cur_node: (parent_node, is_left_node)}`
- `visited`: Hash set to determine whether node is visited
- Process:
	- Start with level order traversal
	- If same node being visited twice, meaning we meet the child of the wrong node (we call it `cur`)
	- Find the grandparent of `cur`, and let the grandparent node (`grand_p`) de-link its child (the wrong node)
	- Return `root`
### Implementation
```
class Solution:
    def correctBinaryTree(self, root: TreeNode) -> TreeNode:
        q = collections.deque([root])
        p, visited = dict(), set()
        while q:
            cur = q.popleft()
            if cur in visited:
                grand_p, is_left = p[p[cur][0]]
                if is_left: grand_p.left = None
                else: grand_p.right = None    
                return root
            visited.add(cur)
            if cur.left:
                p[cur.left] = (cur, 1)
                q.append(cur.left)
            if cur.right:
                p[cur.right] = (cur, 0)
                q.append(cur.right)
        return root
```