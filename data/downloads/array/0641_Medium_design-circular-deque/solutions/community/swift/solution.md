# Swift💯Minimal

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5841698/](https://leetcode.com/problems/design-circular-deque/solutions/5841698/)

---

**Two Solutions: Circular Array;  Doubly-Linked List (see below)**
Both are compacted to demostrate how minimal the logic is for a complete solution. 
```
class MyCircularDeque {   // Circular Array Solution
    var head = 2000, tail = 2000, arr:[Int]
    init(_ k: Int) { arr = Array(repeating:0, count: k) }
    func insertFront(_ value: Int) -> Bool { insert(value, true) }
    func insertLast(_ value: Int) -> Bool { insert(value, false) }
    func deleteFront() -> Bool { delete(true) }
    func deleteLast() -> Bool { delete(false) }
    func getFront() -> Int { !isEmpty() ? arr[head % arr.count] : -1 }
    func getRear() -> Int { !isEmpty() ? arr[(tail-1) % arr.count] : -1 }
    func isEmpty() -> Bool { head == tail }
    func isFull() -> Bool { tail - head == arr.count }

    private func insert(_ value:Int, _ isHead: Bool) -> Bool {
        guard !isFull() else { return false }
        head -= isHead ? 1:0
        arr[(isHead ? head : tail) % arr.count] = value
        tail += isHead ? 0:1
        return true
    }

    private func delete(_ isHead: Bool) -> Bool {
        guard !isEmpty() else { return false }
        head += isHead ? 1:0 
        tail -= isHead ? 0:1
        return true
    }
}
```

```
class MyCircularDeque {  // Doubly-Linked List solution
    class Node {
        var val: Int, prev, next: Node!
        init(_ v: Int, _ p:Node?, _ n:Node?) {val=v; (prev,next) = (p ?? self,n ?? self)}
    }
    var k = 0, count = 0, front: Node? = nil

    init(_ k: Int) { self.k = k }
    func insertFront(_ value: Int) -> Bool { insert(value, true) }
    func insertLast(_ value: Int) -> Bool { insert(value, false) }
    func deleteFront() -> Bool { delete(front) }
    func deleteLast() -> Bool { delete(front?.prev) }
    func getFront() -> Int { front?.val ?? -1 }
    func getRear() -> Int { front?.prev.val ?? -1 }
    func isEmpty() -> Bool { front == nil }
    func isFull() -> Bool { count == k }

    private func insert(_ value:Int, _ isFront: Bool) -> Bool {
        guard count < k else { return false }
        let node = Node(value, front?.prev, front)
        node.prev.next = node
        front = front ?? node // if empty, initialize front
        front!.prev = node
        front = isFront ? node : front
        count += 1
        return true
    }

    private func delete(_ nodeToDelete: Node?) -> Bool {
        guard count > 0 else { return false }
        count -= 1
        front = count > 0 ? nodeToDelete?.next : nil
        front?.prev = nodeToDelete?.prev
        front?.prev.next = front
        return true
    }
}
```