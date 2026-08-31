# Python Simple BFS

**Author:** tysonjain
**Votes:** 31
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516478/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516478/)

---

These are my other solutions related to BFS:

1. Vertical order of Binary Tree:  https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/discuss/2284522/simple-bfs
2. Max Width of Binary Tree: https://leetcode.com/problems/maximum-width-of-binary-tree/discuss/2284988/simple-bfs-python-with-taking-care-of-overflow

class Solution:

	def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        q=deque([root])
        ans =[]
        while q:
            qlen=len(q)
            row =0
            for i in range(qlen):
                node = q.popleft()
                row += node.val
                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
            ans.append(row/qlen)
        return ans


