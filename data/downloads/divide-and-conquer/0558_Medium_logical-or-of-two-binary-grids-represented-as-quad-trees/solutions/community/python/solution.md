# 558: Time  99.4%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 3
**Link:** [https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/3298769/](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/3298769/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Check if either quadTree1 or quadTree2 is a leaf node. If quadTree1 is a leaf node, return quadTree1 if its value is True, else return quadTree2. If quadTree2 is a leaf node, return quadTree2 if its value is True, else return quadTree1.
2. Recursively check the intersection of each child node of quadTree1 and quadTree2 by calling the intersect function on each of them. Store the return values in variables tl (top-left), tr (top-right), bl (bottom-left), and br (bottom-right).
3. Check if all four child nodes (tl, tr, bl, br) are leaves and have the same value. If yes, create a new leaf node with the same value and return it.
4. If any of the child nodes have a different value or are not leaf nodes, create a new internal node with the four child nodes as its children and return it.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def intersect(self, quadTree1: 'Node', quadTree2: 'Node') -> 'Node':
        # If either of the trees is a leaf node, return the appropriate tree
        if quadTree1.isLeaf:
            return quadTree1 if quadTree1.val else quadTree2
        if quadTree2.isLeaf:
            return quadTree2 if quadTree2.val else quadTree1
        
        # Recursively check the intersection of each child node
        tl = self.intersect(quadTree1.topLeft, quadTree2.topLeft)
        tr = self.intersect(quadTree1.topRight, quadTree2.topRight)
        bl = self.intersect(quadTree1.bottomLeft, quadTree2.bottomLeft)
        br = self.intersect(quadTree1.bottomRight, quadTree2.bottomRight)
        
        # If all four child nodes are leaves with the same value, return a new leaf node
        if tl.isLeaf and tr.isLeaf and bl.isLeaf and br.isLeaf and tl.val == tr.val == bl.val == br.val:
            return Node(tl.val, True, None, None, None, None)
        
        # Otherwise, return a new internal node with the four child nodes as children
        return Node(None, False, tl, tr, bl, br)

```