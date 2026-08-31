# Simple Python O(n) Solution with Explanation

**Author:** csfaze2
**Votes:** 56
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/106134/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/106134/)

---

As you traverse the tree, put each node's value into a set. In order for some value `x` to sum up to `k`, the value `k - x` must have been in the set already. Therefore, assuming we have a set of node values, if we find a complement of a node in that set, we have found two values that sum up to `k`.

```
class Solution(object):
    def findTarget(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: bool
        """
        if not root:
            return False

        return self._findTarget(root, set(), k)
    
    def _findTarget(self, node, nodes, k):
        if not node:
            return False

        complement = k - node.val
        if complement in nodes:
            return True

        nodes.add(node.val)

        return self._findTarget(node.left, nodes, k) or self._findTarget(node.right, nodes, k)
```