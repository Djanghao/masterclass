# Python short and clean level order traversal

**Author:** epeeian
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1709161/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1709161/)

---

```
class Solution:
    def findNearestRightNode(self, root: TreeNode, u: TreeNode) -> Optional[TreeNode]:
        level = [root]
        while level:
            for i, cur in enumerate(level):
                if cur == u:
                    if i == len(level) - 1: return None
                    return level[i + 1]
            level = [i for node in level for i in (node.left, node.right) if i]
