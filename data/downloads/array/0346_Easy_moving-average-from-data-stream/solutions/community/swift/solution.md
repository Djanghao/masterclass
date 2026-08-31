# Swift O(1) next() via linked list.

**Author:** hyperfine
**Votes:** 1
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/4683167/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/4683167/)

---

# Approach
Implement a linked list for O(1) next()

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class MovingAverage {
    var currentSize = 0
    var maxSize: Int
    var total: Int = 0
    var head: List?
    var tail: List?

    init(_ size: Int) { self.maxSize = size }
    
    func next(_ val: Int) -> Double {
        let node = List(val: val, next: nil)
        self.total += val
        self.currentSize += 1
        /// Assign tail
        if let t = tail {
            t.next = node
        }
        tail = node
        /// Assign head 
        if head == nil {
            head = node
        }
        /// Verify size
        if currentSize > maxSize {
            let num = head!.val
            total -= num
            currentSize -= 1
            head = head!.next
        }

        return Double(total)/Double(currentSize)
    }
}

class List {
    init(val: Int, next: List?) {
        self.val = val
        self.next = next
    }
    let val: Int
    var next: List?
}

```