# Swift solution using CFBinaryHeap, faster than 100.00%

**Author:** Hak0suka
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/1037392/](https://leetcode.com/problems/find-median-from-data-stream/solutions/1037392/)

---

```
import CoreFoundation

class MedianFinder {
	let lo = CFBinaryHeap.max()
    let hi = CFBinaryHeap.min()
    
    func addNum(_ num: Int) {
        let pointer: UnsafeMutablePointer<Int> = .allocate(capacity: 1)
        pointer.initialize(to: num)
        
        CFBinaryHeapAddValue(lo, pointer)
        CFBinaryHeapAddValue(hi, CFBinaryHeapGetMinimum(lo))
        CFBinaryHeapRemoveMinimumValue(lo)
        
        if CFBinaryHeapGetCount(lo) < CFBinaryHeapGetCount(hi) {
            CFBinaryHeapAddValue(lo, CFBinaryHeapGetMinimum(hi))
            CFBinaryHeapRemoveMinimumValue(hi)
        }
    }
    
    func findMedian() -> Double {
        if CFBinaryHeapGetCount(lo) > CFBinaryHeapGetCount(hi) {
            return Double(CFBinaryHeapGetMinimum(lo).load(as: Int.self))
        } else {
            let loMax = CFBinaryHeapGetMinimum(lo).load(as: Int.self)
            let hiMin = CFBinaryHeapGetMinimum(hi).load(as: Int.self)
            return Double(loMax + hiMin) / 2
        }
    }
}

extension CFBinaryHeap {
    static func min() -> CFBinaryHeap {
        var callbacks = CFBinaryHeapCallBacks()
        callbacks.compare = { lPtr, rPtr, _ in
            let (lhs, rhs) = (lPtr!.load(as: Int.self), rPtr!.load(as: Int.self))
            return lhs == rhs ? 0 : lhs > rhs ? 1 : -1
        }
        return CFBinaryHeapCreate(nil, 0, &callbacks, nil)
    }
    
    static func max() -> CFBinaryHeap {
        var callbacks = CFBinaryHeapCallBacks()
        callbacks.compare = { lPtr, rPtr, _ in
            let (lhs, rhs) = (lPtr!.load(as: Int.self), rPtr!.load(as: Int.self))
            return lhs == rhs ? 0 : lhs > rhs ? -1 : 1
        }
        return CFBinaryHeapCreate(nil, 0, &callbacks, nil)
    }
}
```