# [scala] Insertion sort for LinkedList

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-list/solutions/5940385/](https://leetcode.com/problems/sort-list/solutions/5940385/)

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
```scala []
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
    def sortList(head: ListNode): ListNode = {
        def insertIt(node: ListNode, sorted: ListNode): ListNode = {
            (node, sorted) match {
                case (a, null) => a
                case (a, b) if a.x <= b.x => {
                    a.next = b
                    a
                }
                case (a, b) => {
                    b.next = insertIt(a, b.next)
                    b
                }
            }
        }

        def helper(curr: ListNode, sorted: ListNode): ListNode = {
            if (curr == null) sorted.next 
            else {
                val nextNode = curr.next  
                curr.next = null  
                val newSorted = insertIt(curr, sorted)  
                helper(nextNode, newSorted) 
            }
        }
        val dummyNode = ListNode(Int.MinValue)
        helper(head, dummyNode)
    }
}

```