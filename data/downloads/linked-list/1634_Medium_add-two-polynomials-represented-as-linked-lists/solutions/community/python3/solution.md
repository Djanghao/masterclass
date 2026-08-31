# [Python3] merge two linked list

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/1067734/](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/1067734/)

---

**Algo**
Similar to that of [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/discuss/460190/Python3-iterative-and-recursive). 

**Implementation**
```
class Solution:
    def addPoly(self, poly1: 'PolyNode', poly2: 'PolyNode') -> 'PolyNode':
        dummy = node = PolyNode() 
        while poly1 and poly2: 
            if poly1.power > poly2.power: 
                node.next = node = poly1
                poly1 = poly1.next 
            elif poly1.power < poly2.power: 
                node.next = node = poly2
                poly2 = poly2.next 
            else: 
                coef = poly1.coefficient + poly2.coefficient
                if coef: node.next = node = PolyNode(coef, poly1.power)
                poly1 = poly1.next 
                poly2 = poly2.next 
        node.next = poly1 or poly2
        return dummy.next 
```

Alternative implementation 
```
class Solution:
    def addPoly(self, poly1: 'PolyNode', poly2: 'PolyNode') -> 'PolyNode':
        dummy = node = PolyNode()
        while poly1 and poly2: 
            temp = PolyNode(y=max(poly1.power, poly2.power))
            if poly1.power == temp.power: 
                temp.coefficient += poly1.coefficient
                poly1 = poly1.next 
            if poly2.power == temp.power: 
                temp.coefficient += poly2.coefficient 
                poly2 = poly2.next 
            if temp.coefficient: node.next = node = temp 
        node.next = poly1 or poly2
        return dummy.next 
```

**Analysis**
Time complexity `O(M+N)`
Space complexity `O(1)` or `O(M+N)`