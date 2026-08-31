# Python Easy Solution BFS

**Author:** maydanny
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5949677/](https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5949677/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. calculate the total on each level of the tree
2. if total is smaller than current minimum, update the minimum and also update result with the level of the minimum sum

# Complexity
- Time complexity: $$O(n)$$, visit all nodes
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minimumLevel(self, root: Optional[TreeNode]) -> int:
        q = deque([root])
        mini = root.val
        res = 1
        level = 1

        while q:

            total = 0
            for _ in range(len(q)):
                node = q.popleft()
                total += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            if total < mini:
                res = level
                mini = total
            
            level += 1
        
        return res
```