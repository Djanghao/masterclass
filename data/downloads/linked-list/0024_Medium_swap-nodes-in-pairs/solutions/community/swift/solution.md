# ✅ [Solution] Swift: Swap Nodes in Pairs (+ test cases)

**Author:** AsahiOcean
**Votes:** 23
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1656816/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1656816/)

---

```swift
class Solution {
    func swapPairs(_ head: ListNode?) -> ListNode? {
        var head = head, node = head, pre: ListNode?
        
        while node != nil, let next = node!.next {
            let cur = next, tmp = cur.next
            pre == nil ? (head = cur) : (pre!.next = cur)
            cur.next = node
            node!.next = tmp
            pre = node
            node = tmp
        }
        return head
    }
}
```

---

<p><details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<p><pre>
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.012 (0.014) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.swapPairs(ListNode([1,2,3,4]))
        XCTAssertEqual(value?.val, ListNode([2,1,4,3])?.val)
    }
    
    func test1() {
        let value = solution.swapPairs(ListNode([]))
        XCTAssertEqual(value?.val, ListNode([])?.val)
    }
    
    func test2() {
        let value = solution.swapPairs(ListNode([1]))
        XCTAssertEqual(value?.val, ListNode([1])?.val)
    }
}

Tests.defaultTestSuite.run()
```

</details></p>

<p><details>
<summary>
<b>ListNode</b>
</summary>

```swift
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }

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
```

</details></p>