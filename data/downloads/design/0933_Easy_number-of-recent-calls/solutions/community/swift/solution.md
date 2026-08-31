# Swift Queue O(n) time / O(n) space

**Author:** colin6575
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/5450089/](https://leetcode.com/problems/number-of-recent-calls/solutions/5450089/)

---

# Approach
This problem is a good candidate for a queue, since we know that all the calls to `ping` are strictly increasing. This means that over time once we remove an element from the queue, it won't need to be counted again.

Thus for each call to `ping` we check the front of the queue and `pop` all the values that aren't in the range of `[t - 3000, t]`. Since we're keeping track of the size internally, the result is just `queue.size`

# Complexity
- Time complexity:
O(n) - if all elements are out of range, we need to pop all of the queue

- Space complexity:
O(n) - if all elements are in range

# Code
```
class Node<T: Equatable> {
  let value: T
  
  init(_ t: T) {
    self.value = t
  }
  
  var prev: Node<T>?
  var next: Node<T>?
}

extension Node: Equatable {
  static func ==(lhs: Node, rhs: Node) -> Bool {
    /// check if two nodes aren't point to the same value
    return lhs === rhs
  }
}

class Queue {
  
  // sentenial nodes
  private var head: Node<Int> = Node(Int.min)
  private var tail: Node<Int> = Node(Int.max)
  var size: Int = 0
  
  init() {
    head.next = tail
    tail.prev = head
  }
  
  // place a node to the back of the line
  // 1 2 3 4 5 tail add(5)
  func enqueue(_ int: Int) {
    let node = Node<Int>(int)
    let prev = tail.prev
    tail.prev = node
    node.next = tail
    node.prev = prev
    prev?.next = node
    size += 1
  }
  
  // Pop the first node in front of the line
  func dequeue() {
    guard !isEmpty() else { return }
    let pop = head.next
    let keep = pop?.next
    head.next = keep
    keep?.prev = head
    size -= 1
  }
  
  func isEmpty() -> Bool {
    head.next === tail
  }
  
  func peek() -> Node<Int>? {
    if isEmpty() {
      return nil
    } else {
      return head.next
    }
  }
}


class RecentCounter {
    private var queue = Queue()

    // T is strictly increasing, so remove from the front for all values not in the range [t - 3000, t]
    func ping(_ t: Int) -> Int {

        while queue.peek() != nil && queue.peek()!.value < t - 3000 {
            queue.dequeue()
        }
        queue.enqueue(t)

        return queue.size
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * let obj = RecentCounter()
 * let ret_1: Int = obj.ping(t)
 */
```