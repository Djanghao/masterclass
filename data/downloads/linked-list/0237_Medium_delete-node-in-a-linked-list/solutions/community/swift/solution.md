# ⚡️ 2 lines SWIFT solution

**Author:** ash_asoyan
**Votes:** 5
**Link:** [https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/2035766/](https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/2035766/)

---

```
class Solution {
    func deleteNode(_ node: ListNode?) {
        node?.val = node?.next?.val ?? 0
        node?.next = node?.next?.next   
    }
}