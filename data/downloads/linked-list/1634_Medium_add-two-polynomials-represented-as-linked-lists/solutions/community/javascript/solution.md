# Easy JS Solution

**Author:** hbjORbj
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/1200288/](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/1200288/)

---

```
/*
Solution

1. Iterate through both lists simultaenously
2. Compare a term in list1 with a term in list2
if they have the same power
    add up the coefficients and advance both nodes to the next
else if one list's power is greater
    append the greater node and advance it to the next node

Append the remaining list to tail
*/
var addPoly = function(poly1, poly2) {
    let dummyHead = new PolyNode();
    let cur = dummyHead;
    let cur1 = poly1, cur2 = poly2;
    while (cur1 && cur2) {
        if (cur1.power === cur2.power) {
            cur1.coefficient += cur2.coefficient;
            if (cur1.coefficient !== 0) {
                cur.next = cur1;
                cur = cur.next;
            }
            cur1 = cur1.next;
            cur2 = cur2.next;
        } else if (cur1.power > cur2.power) {
            cur.next = cur1;
            cur = cur.next;
            cur1 = cur1.next;
        } else {
            cur.next = cur2;
            cur = cur.next;
            cur2 = cur2.next;
        }
    }
    // Cut off list at tail
    cur.next = null;
    
    // Append the remaining list
    if (cur1) {
        cur.next = cur1;
    }
    if (cur2) {
        cur.next = cur2;
    }
    return dummyHead.next;
    // T.C: O(min(M, N))
    // S.C: O(1)
};
```