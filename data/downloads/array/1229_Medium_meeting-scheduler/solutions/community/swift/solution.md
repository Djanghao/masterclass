# Swift - Min heap solution

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/6025046/](https://leetcode.com/problems/meeting-scheduler/solutions/6025046/)

---

# Code
```swift []
import HeapModule

struct Pair: Comparable {
    let start: Int
    let end: Int

    static func < (_ lhs: Pair, _ rhs: Pair) -> Bool {
        return lhs.start < rhs.start
    }
}

class Solution {
    func minAvailableDuration(_ slots1: [[Int]], _ slots2: [[Int]], _ duration: Int) -> [Int] {
        var minHeap = Heap<Pair>() //sorted by start time

        for slot in slots1 {
            if(slot[1] - slot[0] >= duration) {
                minHeap.insert(Pair(start: slot[0], end: slot[1]))
            }
        }

        for slot in slots2 {
            if(slot[1] - slot[0] >= duration) {
                minHeap.insert(Pair(start: slot[0], end: slot[1]))
            }
        }

        //we need min 2 elements in the heap to compare two pairs
        while minHeap.count > 1 {
            let pair1 = minHeap.removeMin()
            let pair2 = minHeap.min! 

            //we know that pair1.start <= pair2.start
            //we need to check that pair2.start + duration <= pair1.end, then we can accommodate pair2.start to pair2.start = duration
            if pair2.start + duration <= pair1.end {
                return [pair2.start, pair2.start + duration]
            }
        }

        return []
    }
}
```