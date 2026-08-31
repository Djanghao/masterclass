# Swift👍

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5443552/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5443552/)

---

**Two Pass (accepted answer)**
```
class Solution {
    func deleteDuplicatesUnsorted(_ head: ListNode?) -> ListNode? {
        var freq = [Int:Int]()
        var node = head
        while let val = node?.val {
            freq[val, default:0] += 1
            node = node!.next
        }
        
        let dummy = ListNode(-1, head)
        var prev = dummy
        while let node = prev.next {
            if freq[node.val]! > 1 {
                prev.next = node.next         
            } else {
                prev = node
            }
        }
        return dummy.next
    }
}
```