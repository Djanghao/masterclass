# Swift | Dictionary + LinkedList | O(1)

**Author:** R-Chandru
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/5920469/](https://leetcode.com/problems/first-unique-number/solutions/5920469/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Use a HashMap to store the number as the key and the corresponding Node as the value.
- Each Node will have a value (the number itself) and two pointers, prev and next, to form a doubly linked list.
- When a new number is added, if it\u2019s a new number (i.e., not in the HashMap), insert it at the end of the doubly linked list and add the number to the HashMap, pointing to the new node.
- If the number already exists in the HashMap, use the map to find the corresponding node and delete the node from the linked list.
- To fetch the first unique number, check if head.next is not equal to tail; if true, return head.next.val; otherwise, return -1.
- Return -1 if there are no unique numbers left.

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class ListNode {
    var value: Int
    var next: ListNode?
    var prev: ListNode?

    init(_ value: Int) {
        self.value = value
    }
}

class FirstUnique {

    private let head: ListNode = ListNode(-1)
    private let tail: ListNode = ListNode(-1)
    private var nodeDict: [Int: ListNode] = [:]

    init(_ nums: [Int]) {
        head.next = tail
        tail.prev = head

        for num in nums {
            if nodeDict[num] == nil {
                addValueToList(num)
            } else {
                removeValueFromList(num)
            }
        }
    }
    
    func showFirstUnique() -> Int {
        if head === tail {
            return -1
        }
        return head.next?.value ?? 0
    }
    
    func add(_ value: Int) {
        if nodeDict[value] == nil {
            addValueToList(value)
        } else {
            removeValueFromList(value)
        }
    }

    private func addValueToList(_ value: Int) {
        let node = ListNode(value)
        let prev = tail.prev

        prev?.next = node
        node.prev = prev

        node.next = tail
        tail.prev = node

        nodeDict[value] = node
    }

    private func removeValueFromList(_ value: Int) {
        guard let node = nodeDict[value] else {
            return
        }

        node.prev?.next = node.next
        node.next?.prev = node.prev
        node.prev = nil
        node.next = nil
    }

}
```