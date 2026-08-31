# Simple swift solution

**Author:** Ayushi_Tyagi
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/6111094/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/6111094/)

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
```swift []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func nextLargerNodes(_ head: ListNode?) -> [Int] {
        var cur: ListNode? = head
        var arr = [Int]()
        var resArr = [Int]()
        var stack = [Int]()
        while(cur != nil) {
            arr.append(cur!.val)
            cur = cur?.next
        }
        resArr = Array(repeating:0, count:arr.count)
      
        for (i,val) in arr.enumerated() {
           while((!stack.isEmpty) && (arr[stack.last!] < val)) {
             let ind = stack.removeLast()
             resArr[ind] = val
           }
           stack.append(i)
        }

        return resArr
    }
}
```