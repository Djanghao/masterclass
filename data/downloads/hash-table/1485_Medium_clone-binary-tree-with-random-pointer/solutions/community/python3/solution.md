# [Python] 4-line essence & pure soul-based Preorder DFS solution

**Author:** codedayday
**Votes:** 4
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3314428/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3314428/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Preorder traverse + hashmap between new and old node
Nothing more than must-have logic.
Python is really beautiful.

# Approach
<!-- Describe your approach to solving the problem. -->
DFS

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code

Approach 1: 4-line solution
```
class Solution:    
    def copyRandomBinaryTree(self, root: 'Optional[Node]', memo:'dict[old:new]'={None:None}) -> 'Optional[NodeCopy]':                
        if root not in memo:
            memo[root] = NodeCopy(root.val)
            memo[root].left, memo[root].right, memo[root].random=self.copyRandomBinaryTree(root.left), self.copyRandomBinaryTree(root.right), self.copyRandomBinaryTree(root.random)          
        return memo[root]
```

Approach 2: 5-line solution
```
class Solution:
    def copyRandomBinaryTree(self, root: 'Optional[Node]', memo={None:None}) -> 'Optional[NodeCopy]':                
        if root not in memo:
            memo[root] =new_root = NodeCopy(root.val)        
            for i in ['left', 'right', 'random']:
                exec(f'new_root.{i}=self.copyRandomBinaryTree(root.{i})')                                 
        return memo[root]
```

Approach 3: 6-line solution
```
# Definition for Node.
# class Node:
#     def __init__(self, val=0, left=None, right=None, random=None):
#         self.val = val
#         self.left = left
#         self.right = right
#         self.random = random

class Solution:
    def copyRandomBinaryTree(self, root: 'Optional[Node]') -> 'Optional[NodeCopy]':        
        def dfs(root, memo={None:None}):
            if root not in memo:
                memo[root] = NodeCopy(root.val)
                memo[root].left, memo[root].right, memo[root].random = dfs(root.left), dfs(root.right), dfs(root.random)          
            return memo[root]
        return dfs(root)

```