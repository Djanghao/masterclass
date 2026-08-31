# [Python3] post-order dfs

**Author:** ye15
**Votes:** 53
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/496700/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/496700/)

---

Algorithm:
Recursively compute the sum of nodes' values of the subtree rooted at the current node and store it in an array. 

Implementation (316ms, 100%):
```
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        vals = []
        
        def fn(node): 
            """Return sum of sub-tree."""
            if not node: return 0 
            ans = node.val + fn(node.left) + fn(node.right)
            vals.append(ans)
            return ans
        
        total = fn(root)
        return max((total-x)*x for x in vals) % 1_000_000_007
```
Analysis:
Time complexity `O(N)`
Space complexity `O(N)`

Adding an iterative version 
```
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        stack, vals = [], []
        node, prev = root, None
        mp = defaultdict(int)
        while node or stack:
            if node: 
                stack.append(node)
                node = node.left 
            else: 
                node = stack[-1] 
                if node.right and node.right != prev: node = node.right 
                else: 
                    mp[node] = node.val + mp[node.left] + mp[node.right]
                    vals.append(mp[node]) 
                    stack.pop() 
                    prev = node 
                    node = None
        return max(x*(vals[-1] - x) for x in vals) % 1_000_000_007
```