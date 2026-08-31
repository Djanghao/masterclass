# If you write swift in LeetCode, must prepare one heap template in your side

**Author:** tzef
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2835163/](https://leetcode.com/problems/single-threaded-cpu/solutions/2835163/)

---

# Code
```
import CoreFoundation

typealias TaskInfo = (offset: Int, element: [Int])
class Heap {
    typealias Element = TaskInfo
    var pointer = UnsafeMutablePointer<Element>.allocate(capacity: 1)
    
    deinit {
        pointer.deinitialize(count: 1)
        pointer.deallocate()
    }

    lazy var binaryHeap: CFBinaryHeap = {
        var callbacks = CFBinaryHeapCallBacks()
        callbacks.compare = { (a, b, _) in
             let x: Element = a!.load(as: Element.self), y: Element = b!.load(as: Element.self)
             if x.element[1] == y.element[1] {
                return x.offset < y.offset ? CFComparisonResult.compareLessThan : CFComparisonResult.compareGreaterThan
             } else {
                return x.element[1] < y.element[1] ? CFComparisonResult.compareLessThan : CFComparisonResult.compareGreaterThan
             }
        }
        var heap = CFBinaryHeapCreate(nil, 0, &callbacks, nil)
        return heap!
    }()

    var count: Int {
        CFBinaryHeapGetCount(binaryHeap)
    }

    func append(_ element: Element) {
        pointer = UnsafeMutablePointer<Element>.allocate(capacity: 1)
        pointer.initialize(to: (element))
        CFBinaryHeapAddValue(binaryHeap, pointer)
    }

    func pop() -> Element {
        let popped: Element = CFBinaryHeapGetMinimum(binaryHeap).load(as: Element.self)
        CFBinaryHeapRemoveMinimumValue(binaryHeap)
        return popped
    }
}

class Solution {
    let minProcessHeap = Heap()

    func getOrder(_ tasks: [[Int]]) -> [Int] {
        var queue = tasks.enumerated().sorted { 
            if $0.element[0] == $1.element[0] {
                return $0.element[1] < $1.element[1]
            } else {
                return $0.element[0] < $1.element[0]
            }
        }

        var result = [Int]()
        var idleTime = 0
        var queueIndex = 0
        while queueIndex < queue.count || minProcessHeap.count > 0 {
            while queueIndex < queue.count && queue[queueIndex].element[0] <= idleTime {
                let dequeue = queue[queueIndex]
                queueIndex += 1
                minProcessHeap.append(dequeue)
            } 

            if minProcessHeap.count == 0 {
                idleTime = queue[queueIndex].element[0]
            } else {
                let next = minProcessHeap.pop()
                idleTime += next.element[1]
                result.append(next.offset)
            }
        }
        return result
    }
}
```