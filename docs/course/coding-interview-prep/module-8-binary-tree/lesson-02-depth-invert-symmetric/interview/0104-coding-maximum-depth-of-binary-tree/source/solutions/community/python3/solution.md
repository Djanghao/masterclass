# ✔️ [Python3] RECURSIVE DFS ( •⌄• ू )✧, Explained

**Author:** artod
**Votes:** 337
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/1769367/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/1769367/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

To calculate the maximum depth we can use the Depth-First Search. We call a helper function recursively and return the maximum depth between left and right branches. 

Time: **O(N)** - for DFS
Space: **O(N)** - for the recursive stack

Runtime: 40 ms, faster than **89.54%** of Python3 online submissions for Maximum Depth of Binary Tree.
Memory Usage: 16.3 MB, less than **18.15%** of Python3 online submissions for Maximum Depth of Binary Tree.

```
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def dfs(root, depth):
            if not root: return depth
            return max(dfs(root.left, depth + 1), dfs(root.right, depth + 1))
                       
        return dfs(root, 0)
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**