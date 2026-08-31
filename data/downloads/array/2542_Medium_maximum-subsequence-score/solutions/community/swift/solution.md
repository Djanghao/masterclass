# Swift | CFBinaryHeap (beats 100%)

**Author:** vologirov
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3557301/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3557301/)

---

# Approach
The idea is to use a heap from CoreFoundation (instead of implementing a custom priority queue). The algorithm is the same as in the official solution.

# Complexity
- Time complexity: $$O(n*logN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxScore(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> Int {
        let n = nums1.count
        let heap = MinHeap()
        var pairs = [(Int, Int)]()

        for i in 0..<n {
            pairs.append((nums1[i], nums2[i]))
        }

        pairs.sort() { $0.1 > $1.1 }

        var topKSum = 0
        for i in 0..<k {
            topKSum += pairs[i].0
            heap.append(pairs[i].0)
        }
        
        var answer = topKSum * pairs[k-1].1
        for i in k..<n {
            topKSum += pairs[i].0 - heap.pop()
            heap.append(pairs[i].0)
            answer = max(answer, topKSum * pairs[i].1)
        }
        return answer
    }
}

import CoreFoundation
class MinHeap {
    typealias Element = Int
    var pointer = UnsafeMutablePointer<Element>.allocate(capacity: 1)
    
    deinit {
        pointer.deinitialize(count: 1)
        pointer.deallocate()
    }

    lazy var binaryHeap: CFBinaryHeap = {
        var callbacks = CFBinaryHeapCallBacks()
        callbacks.compare = { lp, rp, _ in
            let (lhs, rhs) = (lp!.load(as: Element.self), rp!.load(as: Element.self))
            return lhs == rhs ? .compareEqualTo : lhs < rhs ? .compareLessThan : .compareGreaterThan
        }
        return CFBinaryHeapCreate(nil, 0, &callbacks, nil)
    }()

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
```

> ***Please upvote if you like it***