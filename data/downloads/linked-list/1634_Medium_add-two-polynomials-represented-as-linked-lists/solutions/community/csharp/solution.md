# C# Simple Solution using dummy head

**Author:** unagiHuman
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/5724568/](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/5724568/)

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
```csharp []
/**
 * Definition for polynomial singly-linked list.
 * public class PolyNode {
 *     public int coefficient, power;
 *     public PolyNode next;
 *
 *     public PolyNode(int x=0, int y=0, PolyNode next=null) {
 *         this.coefficient = x;
 *         this.power = y;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    public PolyNode AddPoly(PolyNode poly1, PolyNode poly2) {
        var cur1 = poly1;
        var cur2 = poly2;

        var newHead = new PolyNode();
        var current = newHead;
        while(cur1!=null && cur2!=null)
        {
            if(cur1.power > cur2.power)
            {
                current.next = cur1;
                current = current.next;
                cur1 = cur1.next;
            }
            else if(cur1.power < cur2.power)
            {
                current.next = cur2;
                current = current.next;
                cur2 = cur2.next;
            }
            else
            {
                var newcoefficient = cur1.coefficient + cur2.coefficient;
                if(newcoefficient!=0)
                {
                    current.next = cur1;
                    cur1.coefficient += cur2.coefficient;
                    current = current.next;
                }
                cur1 = cur1.next;
                cur2 = cur2.next;
            }
        }
        if(cur1!=null)
        {
            current.next = cur1;
        }
        else if(cur2!=null)
        {
            current.next = cur2;
        }
        else
        {
            current.next = null;
        }
        
        return newHead.next;

        void print()
        {
            var cur = newHead;
            while(cur!=null)
            {
                Console.Write("{0}:{1}->",cur.coefficient,cur.power);
                cur = cur.next;
            }
            Console.Write("\
");
        }
    }
}
```