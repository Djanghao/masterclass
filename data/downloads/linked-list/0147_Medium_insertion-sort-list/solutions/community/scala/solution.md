# easy

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/insertion-sort-list/solutions/5770701/](https://leetcode.com/problems/insertion-sort-list/solutions/5770701/)

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
import scala.collection.mutable.ListBuffer

object Solution {
    def insertionSortList(head: ListNode): ListNode = {
        var l =ListBuffer[Int]()
        var ptr=head
        while(ptr!=null)
        {
            l += ptr.x
            ptr= ptr.next
        }
        l = l.sorted
        if (l.length > 0) {
        var nodes= ListNode(l(0))
        var c =nodes
        var i =1
        while(i<l.length){
            c.next =ListNode(l(i))
            c =c.next
            i+=1
        }
        return nodes
        }
        return null
    }
}
```