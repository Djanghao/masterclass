# Kotlin Simple - Build and combine

**Author:** kumar-27
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-list/solutions/3915710/](https://leetcode.com/problems/partition-list/solutions/3915710/)

---

# Approach
1. Build a linked-list of smaller elements and a separate linkedList of larger elements
2. Combine the above two to give the result

# Code
```
class Solution {
    fun partition(head: ListNode?, x: Int): ListNode? {

        val dummy = ListNode(-2000)
        var unSorted = head
        
        //Insert smaller elements after this
        var smaller = dummy

        // Insert larger elements after this one
        var larger = ListNode(-2000)
        var largerDummy = larger

        while (unSorted != null) {
            if (unSorted.`val` < x) {
                smaller.next = unSorted
                smaller = unSorted
            }else {
                larger.next = unSorted
                larger = unSorted
            }

            unSorted = unSorted.next
        }

        larger.next = null
        smaller.next = largerDummy.next
        
        return dummy.next
    }
}
```