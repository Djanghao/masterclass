# Awesome Logic Python3

**Author:** GANJINAVEEN
**Votes:** 71
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3302357/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3302357/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:90%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:80%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None
        root=TreeNode(postorder[-1])
        index=inorder.index(postorder[-1])
        root.left=self.buildTree(inorder[:index],postorder[:index])
        root.right=self.buildTree(inorder[index+1:],postorder[index:-1])
        return root
    #please upvote me it would encourage me alot

```