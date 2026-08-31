# Most optimal solution | O(logn) for all queries

**Author:** f1re
**Votes:** 16
**Link:** [https://leetcode.com/problems/range-module/solutions/1890410/](https://leetcode.com/problems/range-module/solutions/1890410/)

---

Standard segment tree implementation.
Each node contains of a range which is inclusive so that we don't need to handle edge cases.

Drop a note in case of confusion.
```
Time: O(log(range)) ~ 28.9
Space: O(n)
```

Code:
```
class Node:
    def __init__(self, l, r, cover=False,lnode=None, rnode=None):
        self.cover = cover
        self.left = lnode
        self.right = rnode
        self.L = l
        self.R = r
        
class RangeModule:
    
    def updateRange(self, node, val, qs, qe):
        if qe < node.L or node.R < qs:
            return
        if qs <= node.L and node.R <= qe:
            node.cover = val
            node.left = node.right = None # Imp: purge all child if the range of this node is updated.
            return
        
        if not node.left:
            m = (node.L + node.R)//2
            node.left = Node(node.L, m, node.cover)
            node.right = Node(m+1, node.R, node.cover)

        self.updateRange(node.left, val, qs, qe)
        self.updateRange(node.right, val, qs, qe)
        node.cover = node.left.cover and node.right.cover

    def __init__(self):
        self.T = Node(1, 1000000000)
        

    def addRange(self, qs: int, qe: int) -> None:
        self.updateRange(self.T, True, qs, qe-1)

    def removeRange(self, qs: int, qe: int) -> None:
        self.updateRange(self.T, False, qs, qe-1)
    
    def queryRange(self, qs: int, qe: int) -> bool:
        def query(node):
            if qe < node.L or node.R < qs:
                return True
            
            if (qs <= node.L and node.R <= qe) or not node.left: # either node contained by q or cover is same for whole node.
                return node.cover
            
            return query(node.left) and query(node.right)
        
        qe -= 1
        return query(self.T)


```

Please upvote if it helped you.