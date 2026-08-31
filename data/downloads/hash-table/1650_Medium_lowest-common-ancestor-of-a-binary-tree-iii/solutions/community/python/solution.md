# Python | Find Depth Difference | Explanation + Pictures

**Author:** gri521
**Votes:** 141
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/1233986/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/1233986/)

---

I wanted to pose an easy-to-understand alternative to most answers here. We first find the depth of each pointer, and then move each pointer to the same level in the tree. Then, we move the pointers up level by level until they meet. 

Summary:
1. Find the depth of each pointer
2. Move the deeper pointer up until it is at the same level as the other pointer
3. Move each pointer up level-by-level until they meet

Time Complexity: O(h)
Space Complexity: O(1)

Example 1: 
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 8
Output: 3
<img src="https://assets.leetcode.com/users/images/e73d79a2-b331-4954-a568-85be3e66f14e_1622112889.850149.png" alt="drawing" width="400"/>

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
<img src="https://assets.leetcode.com/users/images/ea867e4d-4da9-4647-9a96-7651112139dd_1622113260.5358028.png" alt="drawing" width="400"/>

```
"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""

class Solution:
    def get_depth(self, p):
		# helper function to find the depth of the pointer in the tree
        depth = 0
        while p:
            p = p.parent
            depth += 1
        return depth
    
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
		# find the depth of each pointer
        p_depth = self.get_depth(p)
        q_depth = self.get_depth(q)
		
		# Move the lower pointer up so that they are each at the same level. 
		# For the smaller depth (p_depth < q_depth or q_depth < p_depth), 
		# the loop will be skipped and the pointer will stay at the same depth.
        for _ in range(p_depth - q_depth):
            p = p.parent
        for _ in range(q_depth - p_depth):
            q = q.parent
        
		# Now that they are at the same depth, move them up the tree in parallel until they meet
        while p != q:
            p=p.parent
            q=q.parent
        return p
```