# 💡Swift - Optimal Solution

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4818761/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4818761/)

---

# Solution
```swift
class Solution {
    func gameResult(_ head: ListNode?) -> String {
        var score = 0
        var node = head
        while let current = node {
            let next = current.next!
            score += current.val > next.val ? 1 : -1
            node = next.next
        }
        switch score {
        case ..<0: return "Odd"
        case 0: return "Tie"
        default: return "Even"
        }
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$