# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 2
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1913849/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1913849/)

---

```swift
class Solution {
    func swapNodes(_ head: ListNode?, _ k: Int) -> ListNode? {
        var len = 0
        var lhs: ListNode?, rhs: ListNode?
        var node = head
        
        while node != nil {
            len += 1
            if rhs != nil { rhs = rhs?.next }
            if len == k {
                lhs = node
                rhs = head
            }
            node = node?.next
        }
        if let valL = lhs?.val, let valR = rhs?.val {
            lhs?.val = valR
            rhs?.val = valL
        }
        return head
    }
}
```

<hr>

<details>
<summary><b>ListNode</b></summary>

```swift
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}
```

</details>