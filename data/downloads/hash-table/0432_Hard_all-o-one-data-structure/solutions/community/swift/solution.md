# Swift dictionary + doubly linkedList

**Author:** banedealer
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-oone-data-structure/solutions/368505/](https://leetcode.com/problems/all-oone-data-structure/solutions/368505/)

---

```
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public var prev: ListNode?
    public var lists: Set<String>
    private var size = 0
    public init(_ val: Int) {
        self.val = val
        self.lists = Set<String>()
    }
}

class AllOne {
    var head: ListNode
    var tail: ListNode
    var map = [String: ListNode]()

    /** Initialize your data structure here. */
    init() {
        head = ListNode(0)
        tail = ListNode(0)
        head.next = tail
        tail.prev = head
    }

    /** Inserts a new key <Key> with value 1. Or increments an existing key by 1. */
    func inc(_ key: String) {
        if let curNode = map[key] {
            attachToNext(curNode, key)
            reset(curNode, key)
        } else {
            attachToNext(head, key)
        }
    }

    /** Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. */
    func dec(_ key: String) {
        guard let curNode = map[key] else { return }
        attachToPrev(curNode, key)
        reset(curNode, key)
    }

    private func attachToNext(_ curNode: ListNode, _ key: String) {
        let nextNode = curNode.next!
        let v = curNode.val + 1
        if nextNode.val == v {
            map[key] = nextNode
            nextNode.lists.insert(key)
        } else {
            let newNode = ListNode(v)
            newNode.lists.insert(key)
            map[key] = newNode
            nextNode.prev = newNode
            newNode.next = nextNode
            curNode.next = newNode
            newNode.prev = curNode
        }
    }

    private func attachToPrev(_ curNode: ListNode, _ key: String) {
        let prevNode = curNode.prev!
        let v = curNode.val - 1
        if prevNode.val == v {
            map[key] = prevNode
            prevNode.lists.insert(key)
        } else {
            if v != 0 {
                let newNode = ListNode(v)
                newNode.lists.insert(key)
                map[key] = newNode
                prevNode.next = newNode
                newNode.prev = prevNode
                curNode.prev = newNode
                newNode.next = curNode
            } else {
                map[key] = nil
            }
        }
    }

    private func reset(_ curNode: ListNode, _ key: String) {
        curNode.lists.remove(key)
        if curNode.lists.count == 0 {
            if let pre = curNode.prev, let nxt = curNode.next {
                pre.next = nxt
                nxt.prev = pre
            }
        }
    }

    /** Returns one of the keys with maximal value. */
    func getMaxKey() -> String {
        guard let strs = tail.prev?.lists else { return "" }
        guard let key = strs.first else { return "" }
        return key
    }

    /** Returns one of the keys with Minimal value. */
    func getMinKey() -> String {
        guard let strs = head.next?.lists else { return "" }
        guard let key = strs.first else { return "" }
        return key
    }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * let obj = AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * let ret_3: String = obj.getMaxKey()
 * let ret_4: String = obj.getMinKey()
 */
 ```