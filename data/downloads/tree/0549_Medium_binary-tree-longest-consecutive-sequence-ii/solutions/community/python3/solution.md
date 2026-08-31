# Python (Simple DFS)

**Author:** rnotappl
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/4682447/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/4682447/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val  self.left = left  self.right = right

class Solution:
    def longestConsecutive(self, root):
        self.max_val = 0

        def dfs(node):
            if not node:
                return 1, 1

            li, ld = dfs(node.left)
            ri, rd = dfs(node.right)

            if node.left:
                if node.left.val == node.val + 1:
                    li = li + 1 
                else:
                    li = 1 
                
                if node.left.val == node.val - 1:
                    ld = ld + 1 
                else:
                    ld = 1 

            if node.right:
                if node.right.val == node.val + 1:
                    ri = ri + 1 
                else:
                    ri = 1

                if node.right.val == node.val - 1:
                    rd = rd + 1 
                else:
                    rd = 1

            self.max_val = max(self.max_val,max(li,ri),max(ld,rd),ld+ri-1,li+rd-1) 

            return max(li,ri), max(ld,rd)

        dfs(root)

        return self.max_val





        
```