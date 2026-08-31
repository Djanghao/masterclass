# Swift solution | My favorite homework from university days...

**Author:** olejiksa
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/6141010/](https://leetcode.com/problems/design-skiplist/solutions/6141010/)

---

# Intuition
I tried to optimize the borderline cases through pseudo-nodes with -1 in order to write less code and not get confused in the connections among nodes

# Complexity
- Time complexity: $$O(log n)$$

- Space complexity: $$O(n)$$

# Code
```swift []
class Node {
    
    let value: Int
    var next: Node?
    var below: Node?

    init(_ value: Int, _ next: Node? = nil, _ below: Node? = nil) {
        self.value = value
        self.next = next
        self.below = below
    }
}

class Skiplist {

    private var dummy = Node(-1)

    init() {}
    
    func search(_ target: Int) -> Bool {
        var current: Node? = dummy
        
        while let node = current {
            if node.value == target {
                return true
            } else if let next = current?.next, next.value <= target {
                current = next
            } else if let below = node.below {
                current = below
            } else {
                break
            }
        }

        return false
    }
    
    func add(_ num: Int) {
        var current: Node? = dummy
        var stack: [Node] = []

        while let node = current {
            if let next = current?.next, next.value < num {
                current = next
            } else if let below = node.below {
                stack.append(node)
                current = below
            } else {
                break
            }
        }

        let node = Node(num, current?.next)
        current?.next = node

        var topNode: Node? = node

        while Bool.random() {
            if let last = stack.popLast() {
                last.next = Node(num, nil, topNode)
                topNode = last.next
            } else {
                dummy = Node(-1, Node(num, nil, node), dummy)
                break
            }
        }
    }
    
    func erase(_ num: Int) -> Bool {
        var previous: Node? = nil
        var current: Node? = dummy
        var result = false
        
        while let node = current {
            if node.value == num {
                result = true
                previous?.next = current?.next
                (previous, current) = (nil, previous?.below)
            } else if let next = current?.next, next.value <= num {
                previous = current
                current = next
            } else if let below = node.below {
                current = below
            } else {
                break
            }
        }

        return result
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * let obj = Skiplist()
 * let ret_1: Bool = obj.search(target)
 * obj.add(num)
 * let ret_3: Bool = obj.erase(num)
 */
```