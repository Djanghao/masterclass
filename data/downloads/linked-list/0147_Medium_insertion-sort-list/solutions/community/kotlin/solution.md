# Kotlin: O(n) time and O(1) space

**Author:** kotlinvim
**Votes:** 1
**Link:** [https://leetcode.com/problems/insertion-sort-list/solutions/942997/](https://leetcode.com/problems/insertion-sort-list/solutions/942997/)

---


    fun insertionSortList(head: ListNode?): ListNode? {
        val dummy = ListNode(-1)
        var node = head

        while (node != null) {
            var prev = dummy
            
            while (prev?.next != null && node.`val` > prev.next.`val`) {
                prev = prev.next
            }
            
            val temp = node.next
            node.next = prev.next
            prev.next = node
            node = temp
        }
        
        return dummy.next
    }
