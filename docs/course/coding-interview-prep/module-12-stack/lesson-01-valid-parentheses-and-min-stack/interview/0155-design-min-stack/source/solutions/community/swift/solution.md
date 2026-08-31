# Swift solution with detailed explanation.

**Author:** slowsteady
**Votes:** 11
**Link:** [https://leetcode.com/problems/min-stack/solutions/536177/](https://leetcode.com/problems/min-stack/solutions/536177/)

---

**This implementation uses Linked List data structure approach.**

First of all we need to define linked list node.
We can use generic parameter "Value" to create more flexible data structure. Every instance of "Node" - contains current value, minimum value and a reference to the next instance as well.
```
class Node<Value> {

    var next: Node?
    var value: Value
    var min: Value
    
    init(value: Value, min: Value, next: Node? = .none) {
        self.value = value
        self.min = min
        self.next = next
    }
    
}
```
**Minimum stack data structure implementation is straightforward:**
1.  Private instance of "Node", which is nil by default.
2.  First call of  push(_ x: Int) will init head node with brand new values of current value and min value. By the next calls we will check whether "head" is nill, if "head" is not nil - current "head" become new instance of "Node", where new minimum value will be calculated from current "min" and "x" parameter that was passed in.
3.  To pop the top most element of stack we simply assign the next node after current to "head".
4.  As "head" is the top element in stack, to get its value we simply look to its "value" value.
5.  A "min()" operation works same as the top(), the only difference is that we look for "min" value.
```
class MinStack {
    
    private var head: Node<Int>!
    
    func push(_ x: Int) {
        if head == nil {
            head = Node(value: x, min: x)
        } else {
            head = Node(value: x, min: min(head.min, x), next: head)
        }
    }
    
    func pop() {
        head = head.next
    }
    
    func top() -> Int {
        return head.value
    }
    
    func getMin() -> Int {
        return head.min
    }
    
}
```
**The Big-O notation for common operations is next:**
1. push(_ x: Int) works in constant time complexity O(1).
2. pop() works in constant time complexity O(1).
3. top() works in constant time complexity O(1).
4. getMin() works in constant time complexity O(1) as well.
