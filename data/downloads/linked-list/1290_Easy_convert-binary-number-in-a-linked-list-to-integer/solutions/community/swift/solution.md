# My Swift solution

**Author:** yamironov
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/522114/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/522114/)

---

My Swift solution
```
class Solution {
    func getDecimalValue(_ head: ListNode?) -> Int {
        var result: Int = 0
        var curNode: ListNode? = head
        while curNode != nil {
            result = (result << 1) | curNode!.val
            curNode = curNode!.next
        }
        return result
    }
}
```