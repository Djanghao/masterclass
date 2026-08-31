# Python Merge Two Sorted Lists

**Author:** WangQiuc
**Votes:** 13
**Link:** [https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/914645/](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/914645/)

---

Similiar as [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
```
class Solution:
    def addPoly(self, poly1: 'PolyNode', poly2: 'PolyNode') -> 'PolyNode':
        head = node = PolyNode()
        while poly1 and poly2:
            if poly1.power > poly2.power:
                node.next = node = poly1
                poly1 = poly1.next
            elif poly1.power < poly2.power:
                node.next = node = poly2
                poly2 = poly2.next
            else:
                if coef := poly1.coefficient+poly2.coefficient:
                    node.next = node = PolyNode(coef, poly1.power)
                poly1, poly2 = poly1.next, poly2.next
        node.next = poly1 or poly2
        return head.next
```
We would messed up `poly1` and `poly2` but we don't really care. No need to waste memory.