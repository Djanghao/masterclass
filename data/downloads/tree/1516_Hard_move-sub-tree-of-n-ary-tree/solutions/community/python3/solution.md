# Python (Simple DFS)

**Author:** rnotappl
**Votes:** 1
**Link:** [https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/3427017/](https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/3427017/)

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
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []
"""

class Solution:
    def moveSubTree(self, root, p, q):
        def find_parent(node,target):
            if target in node.children:
                return node

            for x in node.children:
                ans = find_parent(x,target)
                if ans: return ans

            return None

        if p in q.children: return root

        dummy = Node()
        dummy.children.append(root)

        p_parent = find_parent(dummy,p)
        q_in_p = find_parent(p,q)

        p_index = p_parent.children.index(p)
        p_parent.children.pop(p_index)

        q.children.append(p)

        if q_in_p:
            q_in_p.children.remove(q)
            p_parent.children.insert(p_index,q)

        return dummy.children[0]









        




        

        
```