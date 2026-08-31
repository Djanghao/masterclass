# Heap + Stack + Set & Comparable Node

**Author:** playability
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-stack/solutions/4856115/](https://leetcode.com/problems/max-stack/solutions/4856115/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

**Stack** DS gives us the LIFO semantics, **Heap** DS gives us the max val. semantics. The trick is to connect both with removal of the element from one DS, when the other DS already returned the value to the user. 

# Approach
<!-- Describe your approach to solving the problem. -->

Custom `Node` that conforms to `Comparable` protocol to be used in `MaxHeap`. `removed` variable of type `Set<Int>` to track the unique id `cnt` of every value we add to the stack. 
Lazyly perform removal of the already removed id from respective DSs via helper methods `removeFromStackIfNeeded()` and `removeFromHeapIfNeeded()`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

`push` - $$O(logn)$$ 

`pop` & `popMax` - $$O(logn)$$ amortized: removal from the stack will cause removal from heap later

`top` - $$O(1)$$ - we just need to remove the already used element from the stack. 

`peekMax` - $$O(logn)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$O(n)$$ - the size of the `stack`, `heap` and `removed` is `n`

# Code
```
class MaxStack {

    struct Node: Comparable {
        let val: Int
        let idx: Int

        static func < (lhs: Node, rhs: Node) -> Bool {
            if lhs.val == rhs.val { 
                return lhs.idx < rhs.idx
            }
            return lhs.val < rhs.val
        }
    } 


    var stack: [Node] = []
    var removed: Set<Int> = Set()
    var heap: MaxHeap<Node> = MaxHeap()
    var cnt: Int = 0

    init() {
        
    }
    
    func push(_ x: Int) {
        let n = Node(val:x, idx:cnt)
        cnt += 1
        heap.insert(n)
        stack.append(n)
    }
    
    func pop() -> Int {
        removeFromStackIfNeeded()
        let n = stack.removeLast()
        removed.insert(n.idx)
        return n.val
    }
    
    func top() -> Int {
        removeFromStackIfNeeded()
        let n = stack.last!
        return n.val
    }
    
    func peekMax() -> Int {
        removeFromHeapIfNeeded()
        let n = heap.peek()!
        return n.val
    }
    
    func popMax() -> Int {
        removeFromHeapIfNeeded()
        let n = heap.extractMax()!
        removed.insert(n.idx)
        return n.val
    }

    private func removeFromStackIfNeeded() {
        while !stack.isEmpty && removed.contains(stack.last!.idx) {
            let _ = stack.removeLast()
        }
    }  

    private func removeFromHeapIfNeeded() {
        while !heap.isEmpty && removed.contains(heap.peek()!.idx) {
            let _ = heap.extractMax()!
        }
    }
}
```