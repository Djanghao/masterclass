# Short Python recursive solution - O(n)

**Author:** Google
**Votes:** 439
**Link:** [https://leetcode.com/problems/path-sum/solutions/36360/](https://leetcode.com/problems/path-sum/solutions/36360/)

---

    # Definition for a  binary tree node
    # class TreeNode:
    #     def __init__(self, x):
    #         self.val = x
    #         self.left = None
    #         self.right = None
    
    class Solution:
        # @param root, a tree node
        # @param sum, an integer
        # @return a boolean
        # 1:27
        def hasPathSum(self, root, sum):
            if not root:
                return False
    
            if not root.left and not root.right and root.val == sum:
                return True
            
            sum -= root.val
    
            return self.hasPathSum(root.left, sum) or self.hasPathSum(root.right, sum)