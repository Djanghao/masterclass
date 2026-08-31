# Swift🔥TINY

**Author:** OrchidHunter
**Votes:** 6
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/5623963/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/5623963/)

---

**Good Interview Answer (accepted answer)**
The trick is to always keep exactly `k` values in the heap, so `heap.min` will return kth largest.
```
import Collections

class KthLargest {
    var heap: Heap<Int>
    
    init(_ k: Int, _ nums: [Int]) {
        heap = Heap((.min...).prefix(k))
        nums.map(add)
    }
    
    func add(_ val: Int) -> Int {
        heap.insert(max(heap.popMin()!, val))
        return heap.min!
    }
}
```