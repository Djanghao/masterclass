# [Python] Simple short DFS solution

**Author:** cyshih
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/928461/](https://leetcode.com/problems/binary-tree-tilt/solutions/928461/)

---

Return value: the sum of self value children values
Add tilt value to ans
```
class Solution:
    def findTilt(self, root: TreeNode) -> int:
        def helper(root):
            if not root: return 0
            lv, rv = helper(root.left), helper(root.right)
            self.ans += abs(lv - rv)
            return root.val + lv + rv
        
        self.ans = 0
        helper(root)
        return self.ans
```