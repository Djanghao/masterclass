# Swift, two points, O(N), 44ms

**Author:** relativity5
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/707906/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/707906/)

---

```
    func insert(_ head: Node?, _ insertVal: Int) -> Node? {
        guard let head = head else {
            let node = Node(insertVal)
            node.next = node
            return node
        }
        
        var first = head
        var second: Node! = nil
        
        while (first == head && second == nil) || (first != head) {
            
            second = first
            first = first.next!
            
            if second == nil { continue }
            if (first.val > second.val && first.val >= insertVal && second.val <= insertVal) 
            || (first.val < second.val && (insertVal <= first.val || insertVal >= second.val)) {
               break
            }
        }
        let node = Node(insertVal)
        second.next = node
        node.next = first
        
        return head
    }
```