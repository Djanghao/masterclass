# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 69
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/1132854/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/1132854/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        guard let l1 = l1, let l2 = l2 else { return l1 ?? l2 }
        if l1.val <= l2.val {
            l1.next = mergeTwoLists(l1.next, l2)
            return l1
        } else {
            l2.next = mergeTwoLists(l1, l2.next)
            return l2
        }
    }
}
```

---

```swift
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
    
    // An additional initializer that can be used to implement nodes from an array
    public init?(_ array: [Int]) {
        guard !array.isEmpty else { return nil }
        self.val = array[0]
        var prev: ListNode = self
        for i in 1..<array.count {
            let new = ListNode(array[i])
            prev.next = new
            prev = new
        }
    }
}

// Extension for ListNode

extension ListNode: Equatable {
    public static func == (lhs: ListNode, rhs: ListNode) -> Bool {
        return lhs.val == rhs.val && lhs.next == rhs.next
    }
}
```

```swift
class Tests {
    
    private typealias sol = Solution
    private typealias LN = ListNode
    
    static func testExample1() {
        let node = sol().mergeTwoLists(LN([1,2,4]), LN([1,3,4]))
        print(node?.val == LN([1,1,2,3,4,4])?.val)
    }
    
    static func testExample2() {
        let node = sol().mergeTwoLists(LN([]), LN([]))
        print(node?.val == LN([])?.val)
    }
    
    static func testExample3() {
        let node = sol().mergeTwoLists(LN([]), LN([0]))
        print(node?.val == LN([0])?.val)
    }
}

Tests.testExample1()
Tests.testExample2()
Tests.testExample3()
```