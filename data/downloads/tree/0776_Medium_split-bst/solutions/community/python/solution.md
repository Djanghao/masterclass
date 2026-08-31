# Python Recursion with clear explanation and logics

**Author:** Dark_Exciton
**Votes:** 11
**Link:** [https://leetcode.com/problems/split-bst/solutions/1203966/](https://leetcode.com/problems/split-bst/solutions/1203966/)

---

Please upvote if you find the following solution helpful.
```
class Solution:
    def splitBST(self, root: TreeNode, target: int) -> List[TreeNode]:
		
		######################
		So this is a Tree problem, it is always easier to think about recursion solution 
		as it assumes you already know the parent node of the current node. 
		It will be a bit tricky to use iteration solution as you need to reconstruct a pointer
		that points to the parent node.
		######################
		
		# basic case. If given nothing to split, we will return nothing
        if not root:
            return [None,None]
			
		# basic case. If the target value == the root value, we just need to do a simple split
        if root.val == target:
            right = root.right
            root.right = None
            return [root, right]
			
		# do a BST iteration
        elif root.val > target:
            A, B = self.splitBST(root.left, target)
            root.left = B # this is the benefit of the recursion method, as the root if the parent of the subtree and is known
            return [A, root]
        else:
            A, B = self.splitBST(root.right, target)
            root.right = A
            return [root, B]
```