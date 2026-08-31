# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 71
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/1128713/](https://leetcode.com/problems/add-two-numbers/solutions/1128713/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    private var dig = 0
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        if l1 == nil && l2 == nil && dig == 0 { return nil }
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + dig
        dig = sum / 10
        return .init(sum % 10, addTwoNumbers(l1?.next, l2?.next))
    }
}
```

**Playground and test cases: https://leetcode.com/playground/9oaHp7yF**